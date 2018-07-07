// Full documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property

var params = {
  Bucket: 'myBucket',
  Key: 'myRemoteFile.txt'
}

s3.getObject(params, function (err, data) {
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
