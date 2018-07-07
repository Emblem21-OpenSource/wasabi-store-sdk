const awsRemoveFile = require('../aws/removeFile')

/**
 * Removes a file or directory from a Wasabi Store bucket.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @param  path {string}
 * @return {boolean}
 */
module.exports = async function removeFile (store, bucketName, path) {
  const result = await awsRemoveFile(store, bucketName, path)
  // @TODO: Examine the removal results for validation
  return result
}
