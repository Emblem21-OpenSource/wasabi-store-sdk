const awsGetFile = require('../aws/getFile')

/**
 * Returns the contents of a bucket file from your Wasabi Store.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @param  path {string}
 * @return {string}
 */
module.exports = async function getFile (store, bucketName, path) {
  if (path === undefined) {
    // Download everything in the bucket
  } else {
    // Download a specific file from a bucket
    const contents = await awsGetFile(store, bucketName, path)
    // @TODO: Return the file contents
    return contents
  }
}
