const fs = require('fs')

/**
 * Adds a file or directory to your Wasabi Store and returns the URL for the newly uploaded files.
 * @param store {AWS.S3}
 * @param bucketName {string}
 * @param path {string}
 * @returm {string}
 */
module.exports = async function addFile (store, bucketName, key, filePath) {
  return store.upload({
    Bucket: bucketName,
    Key: key,
    Body: fs.createReadStream(filePath)
  }, {
    partSize: 10 * 1024 * 1024, // 10 MB
    queueSize: 10
  }).promise()
}
