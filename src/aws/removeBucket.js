/**
 * Removes a bucket from your Wasabi/S3 store.
 * @param {AWS.S3}  store       Wasabi/S3 Store instance
 * @param {String}  bucketName  Bucket name
 * @return {Object}             Information about the removal
 */
module.exports = async function removeBucket (store, bucketName) {
  return store.deleteBucket({
    Bucket: bucketName
  }).promise()
}
