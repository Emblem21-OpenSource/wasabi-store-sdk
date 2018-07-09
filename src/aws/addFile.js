const fs = require('fs')
const crypto = require('crypto')

/**
 * Adds a file or directory to your bucket and returns a list of URLs for the newly uploaded files.
 * @param {AWS.S3}  store                  Wasabi/S3 Store instance
 * @param {String}  bucketName             Bucket name
 * @param {String}  key                    The key the file will be saved as in the bucket.
 * @param {String}  filePath               The absolute path of the file to add to the bucket
 * @param {String|Object}  tags            The tags to add to the bucket resource
 * @param {Boolean}  isPublic              Should the resource be publicly downloadable?
 * @param {Boolean}  encryptionPassword    The password used to encrypt the file.  The IV will be generated from this password.
 * @param {Boolean}  alternativeStream     An alternative stream to use instead of the file stream for the filePath (stdin, etc)
 * @return {Object}                        ???
 */
module.exports = async function addFile (store, bucketName, key, filePath, tags = {}, isPublic = false, encryptionPassword = false, alternativeStream) {
  // Determine the data stream to utilize
  const dataStream = alternativeStream || fs.createReadStream(filePath)

  if (encryptionPassword) {
    // Encrypt the stream
    // @TODO This is returning empty strings and this should have IVs anyways :/
    dataStream.pipe(crypto.createCipher('aes-256-ctr', encryptionPassword))
  }

  return store.upload({
    ACL: isPublic ? 'public-read' : 'bucket-owner-full-control',
    Bucket: bucketName,
    Key: key,
    Body: dataStream,
    // Tagging: tags, // @TODO: Tagging is not yet implemented in Wasabi, but it does exist in S3
    Metadata: tags // @TODO: Tags will be attached to a resources Metadata until Wasabi supports proper S3 tagging
  }, {
    partSize: 10 * 1024 * 1024, // 10 MB
    queueSize: 10
  }).promise()
}
