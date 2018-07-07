var AWS = require('aws-sdk')

var accessKeyId = 'accessKeyId'
var secretAccessKey = 'secretAccessKey'

var wasabiEndpoint = new AWS.Endpoint('s3.wasabisys.com')
var s3 = new AWS.S3({
  endpoint: wasabiEndpoint,
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey
})
