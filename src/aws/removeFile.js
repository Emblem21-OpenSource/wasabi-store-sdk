// Full documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property

/**
 * Removes a file or directory from a Wasabi Store bucket.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @param  path {string}
 * @return {boolean}
 */
module.exports = async function removeFile (store, bucketName, path) {
  var params = {
    Bucket: bucketName,
    Key: path
  }

  store.deleteObject(params, function (err, data) {
    if (!err) {
      console.log(data) // sucessfull response
      /*
      data = {}
      */
    } else {
      console.log(err) // an error ocurred
    }
  })
}
