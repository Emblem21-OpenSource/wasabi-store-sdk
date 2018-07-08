const crypto = require('crypto')

/**
 * Returns the contents of a bucket file from your Wasabi Store.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @param  path {string}
 * @return {string}
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
