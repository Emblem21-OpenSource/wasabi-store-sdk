const awsGetBucketStats = require('../aws/getBucketStats')

/**
 * Returns statistics about a Wasabi Store bucket.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @return {object}
 */
module.exports = async function getBucketStats (store, bucketName) {
  const result = await awsGetBucketStats(store, bucketName)
  // @TODO: Examine results
  return result
}
