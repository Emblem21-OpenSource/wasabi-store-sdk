// Full documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property

var params = {
  Bucket: 'myBucket',
  Key: 'myRemoteFile.txt'
}

s3.deleteObject(params, function (err, data) {
  if (!err) {
    console.log(data) // sucessfull response
    /*
    data = {}
    */
  } else {
    console.log(err) // an error ocurred
  }
})
