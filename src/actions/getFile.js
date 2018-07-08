const awsGetFile = require('../aws/getFile')
const awsGetArchive = require('../aws/getArchive')

/**
 * Returns the contents of a bucket file from your Wasabi Store.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @param  path {string}
 * @return {string}
 */
module.exports = async function getFile (store, bucketName, path, asArchive) {
  if (asArchive) {
    // Download everything in the bucket
    return awsGetArchive(store, bucketName, path)
  } else {
    // Download a specific file from a bucket
    return awsGetFile(store, bucketName, path)
  }
}
