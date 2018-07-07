// Full documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property

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

s3.upload(params, options, function (err, data) {
  if (!err) {
    console.log(data) // successful response
  } else {
    console.log(err) // an error occurred
  }
})
