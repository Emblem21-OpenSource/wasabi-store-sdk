// Full documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property

/**
 * Returns the contents of a bucket file from your Wasabi Store.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @param  path {string}
 * @return {string}
 */
module.exports = async function getFile (store, bucketName, path) {
  var params = {
    Bucket: bucketName,
    Key: path
  }

  store.getObject(params, function (err, data) {
    if (!err) {
      console.log(data) // successful response
      /*
        data = {
        AcceptRanges: "bytes",
        ContentLength: 3191,
        ContentType: "image/jpeg",
        ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
        LastModified: <Date Representation>,
        Metadata: {
        },
        TagCount: 2,
        VersionId: "null"
        }
      */
    } else {
      console.log(err) // an error occurred
    }
  })
}
