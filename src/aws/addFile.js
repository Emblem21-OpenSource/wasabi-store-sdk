const fs = require('fs')
const crypto = require('crypto')

/**
 * Adds a file or directory to your Wasabi Store and returns the URL for the newly uploaded files.
 * @param store {AWS.S3}
 * @param bucketName {string}
 * @param path {string}
 * @returm {string}
 */
module.exports = async function addFile (store, bucketName, key, filePath, tags = {}, isPublic = false, encryptionPassword = false) {
  const filestream = fs.createReadStream(filePath)

  if (encryptionPassword) {
    filestream.pipe(crypto.createCipher('aes-256-ctr', encryptionPassword)) // @TODO This is returning empty strings and this should have IVs anyways :/
  }
  console.log('--', encryptionPassword)
  return store.upload({
    ACL: isPublic ? 'public-read' : 'bucket-owner-full-control',
    Bucket: bucketName,
    Key: key,
    Body: filestream,
    Tagging: tags // @TODO: Tagging is not yet implemented in Wasabi, but it does exist in S3
  }, {
    partSize: 10 * 1024 * 1024, // 10 MB
    queueSize: 10
  }).promise()
}
