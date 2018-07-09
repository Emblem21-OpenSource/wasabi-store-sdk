const crypto = require('crypto')

/**
 * Returns the contents of a file from a Wasabi/S3 bucket.
 * @param  {AWS.S3}  store                Wasabi/S3 Store instance
 * @param  {String}  bucketName           Bucket name
 * @param  {String}  path                 The path of the file or directory in the bucket
 * @param  {Boolean}  decryptionPassword  The password used to decrypt the file.
 * @return {Object}                       Information about the resource
 */
module.exports = async function getFile (store, bucketName, path, decryptionPassword = false) {
  const result = store.getObject({
    Bucket: bucketName,
    Key: path
  }).promise()

  if (decryptionPassword) {
    const decipher = crypto.createDecipher('aes-256-ctr', decryptionPassword)
    result.Body = Buffer.concat([
      decipher.update(result.Body),
      decipher.final()
    ])
  }

  return result
}
