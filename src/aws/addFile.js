// Full documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property

/**
 * Adds a file or directory to your Wasabi Store and returns the URL for the newly uploaded files.
 * @param store {AWS.S3}
 * @param bucketName {string}
 * @param path {string}
 * @returm {string}
 */
module.exports = async function addFile (store, bucketName, path) {
  var filePath = '/tmp/myFile.txt'

  var params = {
    Bucket: bucketName,
    Key: path.basename(filePath),
    Body: fs.createReadStream(filePath)
  }

  var options = {
    partSize: 10 * 1024 * 1024, // 10 MB
    queueSize: 10
  }

  store.upload(params, options, function (err, data) {
    if (!err) {
      console.log(data) // successful response
    } else {
      console.log(err) // an error occurred
    }
  })
}
