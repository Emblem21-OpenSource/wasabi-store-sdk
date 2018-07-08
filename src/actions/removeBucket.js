const awsRemoveBucket = require('../aws/removeBucket')

/**
 * Removes a bucket from your Wasabi store.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @return {boolean}
 */
module.exports = async function removeBucket (store, bucketName) {
  await awsRemoveBucket(store, bucketName)
  return true
}
