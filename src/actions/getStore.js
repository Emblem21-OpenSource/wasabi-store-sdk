const AWS = require('aws-sdk')

/**
 * Returns a Wasabi/S3 Store
 * @param  {String}  accessKeyId.     AWS Access Key ID for the wasabiStore profile
 * @param  {String}  secretAccessKey  AWS Secret Access Key ID for the wasabiStore profile
 * @return {AWS.S3}                   AWS S3 Instance
 */
module.exports = function getStore (accessKeyId, secretAccessKey) {
  const credentials = new AWS.SharedIniFileCredentials({profile: 'wasabiStore'})

  return new AWS.S3({
    endpoint: new AWS.Endpoint('s3.wasabisys.com'),
    accessKeyId: accessKeyId || process.env.AWS_ACCESS_KEY_ID || credentials.accessKeyId,
    secretAccessKey: secretAccessKey || process.env.AWS_SECRET_ACCESS_KEY || credentials.secretAccessKey
  })
}
