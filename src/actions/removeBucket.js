const awsRemoveBucket = require('../aws/removeBucket')

/**
 * Removes a bucket from your Wasabi/S3 store.
 * @param {AWS.S3}  store       Wasabi/S3 Store instance
 * @param {String}  bucketName  Bucket name
 * @return {Boolean}
 */
module.exports = async function removeBucket (store, bucketName) {
  await awsRemoveBucket(store, bucketName)
  return true
}
