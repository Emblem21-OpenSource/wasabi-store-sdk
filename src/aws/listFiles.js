// Full documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property

var params = {
  Bucket: 'myBucket'
}

s3.listObjectsV2(params, function (err, data) {
  if (!err) {
    var files = []
    data.Contents.forEach(function (element) {
      files.push({
        filename: element.Key
      })
    })
    /*
       data = {
        Contents: [
         {
          ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
          Key: "happyface.jpg",
          LastModified: <Date Representation>,
          Size: 11,
          StorageClass: "STANDARD"
         },
           {
          ETag: "\"becf17f89c30367a9a44495d62ed521a-1\"",
          Key: "test.jpg",
          LastModified: <Date Representation>,
          Size: 4192256,
          StorageClass: "STANDARD"
         }
        ],
        IsTruncated: true,
        KeyCount: 2,
        MaxKeys: 2,
        Name: "examplebucket",
        NextContinuationToken: "1w41l63U0xa8q7smH50vCxyTQqdxo69O3EmK28Bi5PcROI4wI/EyIJg==",
        Prefix: ""
       }
    */
  } else {
    console.log(err) // an error ocurred
  }
})
