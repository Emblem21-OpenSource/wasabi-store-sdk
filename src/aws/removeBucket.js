const bucketName = 'myBucket'

s3.deleteBucket({ Bucket: bucketName }, function (err, data) {
  if (!err) {
    console.log(data) // successful response
  } else {
    console.log(err) // an error ocurred
  }
})
