const awsAddBucket = require('../aws/addBucket')

/**
 * Adds a Bucket to your Wasabi Store and returns the URL for that bucket
 * @param {AWS.S3}  store       Wasabi/S3 Store instance
 * @param {String}  bucketName  Bucket name
 * @return {String}             URL of the bucket
 */
module.exports = async function addBucket (store, bucketName) {
  const result = await awsAddBucket(store, bucketName)
  return result.Location
}
