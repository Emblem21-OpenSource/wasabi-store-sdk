const awsAddBucket = require('../aws/addBucket')

/**
 * Adds a Bucket to your Wasabi Store and returns the URL for that bucket
 * @param store {AWS.S3}
 * @param bucketName {string}
 * @returm {string}
 */
module.exports = async function addBucket (store, bucketName) {
  const result = await awsAddBucket(store, bucketName)
  // @TODO: Return only the URL for the bucket
  return result
}
