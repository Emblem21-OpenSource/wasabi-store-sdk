const awsListFiles = require('../aws/listFiles')

/**
 * Returns a list of files from a Wasabi Store bucket.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @return {object}
 */
module.exports = async function listFiles (store, bucketName) {
  const result = await awsListFiles(store, bucketName)
  return result.Contents
}
