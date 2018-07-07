// Full documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#createBucket-property

/**
 * Adds a Bucket to your Wasabi Store and returns the URL for that bucket
 * @param store {AWS.S3}
 * @param bucketName {string}
 * @returm {string}
 */
module.exports = async function addBucket (store, bucketName) {
  return store.createBucket({
    Bucket: bucketName
  }).promise()
}
