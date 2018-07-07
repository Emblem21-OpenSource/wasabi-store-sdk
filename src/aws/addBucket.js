// Full documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#createBucket-property

const bucketName = 'myBucket'

s3.createBucket({ Bucket: bucketName }, function (err, data) {
  if (!err) {
    console.log(data) // successfull response
    // data: {
    //      Location: "http://examplebucket.s3.amazonaws.com/"
    // }
  } else {
    console.log(err) // an error occurred
  }
})
