// Full documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#createBucket-property

/**
 * Adds a Bucket to your Wasabi Store and returns the URL for that bucket
 * @param store {AWS.S3}
 * @param bucketName {string}
 * @returm {string}
 */
module.exports = async function addBucket (store, bucketName) {
  store.createBucket({ Bucket: bucketName }, function (err, data) {
    if (!err) {
      console.log(data) // successfull response
      // data: {
      //      Location: "http://examplebucket.s3.amazonaws.com/"
      // }
    } else {
      console.log(err) // an error occurred
    }
  })
}
