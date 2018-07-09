/**
 * Removes a file from a bucket.
 * @param  {AWS.S3}  store                Wasabi/S3 Store instance
 * @param  {String}  bucketName           Bucket name
 * @param  {String}  path                 The path of the file or directory in the bucket
 * @return {Object}                       Information about the removal
 */
module.exports = async function removeFile (store, bucketName, path) {
  return store.deleteObject({
    Bucket: bucketName,
    Key: path
  }).promise()
}
