const awsListFiles = require('../aws/listFiles')

/**
 * Returns a list of files from a bucket.
 * @param {AWS.S3}  store       Wasabi/S3 Store instance
 * @param {String}  bucketName  Bucket name
 * @return {Array<Object>}      Array of File Information
 */
module.exports = async function listFiles (store, bucketName) {
  const result = await awsListFiles(store, bucketName)
  return result.Contents
}
