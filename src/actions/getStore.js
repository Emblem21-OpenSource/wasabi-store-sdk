const AWS = require('aws-sdk')

/**
 * @param  accessKeyId {[type]}
 * @param  secretAccessKey {[type]}
 * @return {[type]}
 */
module.exports = function getStore (accessKeyId, secretAccessKey) {
  const credentials = new AWS.SharedIniFileCredentials({profile: 'wasabiStore'})

  return new AWS.S3({
    endpoint: new AWS.Endpoint('s3.wasabisys.com'),
    accessKeyId: accessKeyId || process.env.AWS_ACCESS_KEY_ID || credentials.accessKeyId,
    secretAccessKey: secretAccessKey || process.env.AWS_SECRET_ACCESS_KEY || credentials.secretAccessKey
  })
}
