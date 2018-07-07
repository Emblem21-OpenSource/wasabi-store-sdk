const AWS = require('aws-sdk')
const fs = require('fs')

/**
 * @param  accessKeyId {[type]}
 * @param  secretAccessKey {[type]}
 * @return {[type]}
 */
module.exports = function getStore (accessKeyId, secretAccessKey) {
  // @TODO: Get AWS creds via fs
  return new AWS.S3({
    endpoint: new AWS.Endpoint('s3.wasabisys.com'),
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
  })
}
