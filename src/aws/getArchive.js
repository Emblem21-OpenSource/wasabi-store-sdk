const s3Zip = require('s3-zip')
const XmlStream = require('xml-stream')
const stream = require('stream')

/**
 * Returns a Zip file of a buckets directory
 * @param  {AWS.S3}  store                Wasabi/S3 Store instance
 * @param  {String}  bucketName           Bucket name
 * @param  {String}  path                 The path of the file or directory in the bucket
 * @return {Buffer}                       Buffer of the Zip file
 */
module.exports = function getArchive (store, bucketName, path) {
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
        .setFormat('tar')
        .setArchiverOptions({ gzip: true })
        .archive({
          s3: store,
          bucket: bucketName,
          preserveFolderStructure: true
        }, path, filesArray)
        .on('error', reject)
        .on('end', () => resolve({
          // @TODO This result is not a valid zip file
          Body: result
        }))
        .pipe(new stream.Writable({
          write: (chunk, encoding, next) => {
            result = Buffer.concat([result, chunk])
            next()
          }
        }))
    })
  })
}
