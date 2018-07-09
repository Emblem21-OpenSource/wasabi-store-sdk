const awsRemoveFile = require('../aws/removeFile')

/**
 * Removes a file from a bucket.
 * @param  {AWS.S3}  store                Wasabi/S3 Store instance
 * @param  {String}  bucketName           Bucket name
 * @param  {String}  path                 The path of the file or directory in the bucket
 * @return {boolean}
 */
module.exports = async function removeFile (store, bucketName, path) {
  await awsRemoveFile(store, bucketName, path)
  return true
}
