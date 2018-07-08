var s3Zip = require('s3-zip')
var XmlStream = require('xml-stream')

/**
 * Returns the contents of a bucket file from your Wasabi Store.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @param  path {string}
 * @return {string}
 */
module.exports = function getFile (store, bucketName, path) {
  return new Promise((resolve, reject) => {
    const filesArray = []

    const files = store.listObjects({
      Bucket: bucketName,
      Prefix: path
    }).createReadStream()

    const xml = new XmlStream(files)

    xml.collect('Key')

    xml.on('endElement: Key', function (item) {
      filesArray.push(item['$text'].substr(path.length))
    })

    xml.on('end', () => {
      let result = Buffer.alloc(0)

      s3Zip
        .archive({
          s3: store,
          gzip: true,
          bucket: bucketName,
          preserveFolderStructure: true
        }, path, filesArray)
        .on('data', (data) => {
          result = Buffer.concat([result, data])
        })
        .on('error', reject)
        .on('end', () => resolve({
          Body: result
        }))
    })
  })
}
