const awsAddFile = require('../aws/addFile')
const fs = require('fs')

/**
 * Adds a file or directory to your Wasabi Store and returns the URL for the newly uploaded files.
 * @param store {AWS.S3}
 * @param bucketName {string}
 * @param path {string}
 * @returm {string}
 */
module.exports = async function addFile (store, bucketName, path) {
  // @TODO: If path is a directory, create the directory and move each file over
  // @TODO: If path is a file, upload just that file
  const result = awsAddFile(store, bucketName, path)
  // @TODO: Return the file URL
  return result
}
