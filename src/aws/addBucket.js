/**
 * Adds a Bucket to your Wasabi Store and returns the URL for that bucket
 * @param {AWS.S3}  store       Wasabi/S3 Store instance
 * @param {String}  bucketName  Bucket name
 * @return {Object}             Information about the added bucket
 */
module.exports = async function addBucket (store, bucketName) {
  return store.createBucket({
    Bucket: bucketName
  }).promise()
}
