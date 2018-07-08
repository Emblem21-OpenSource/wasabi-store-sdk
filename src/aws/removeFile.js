/**
 * Removes a file or directory from a Wasabi Store bucket.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @param  path {string}
 * @return {boolean}
 */
module.exports = async function removeFile (store, bucketName, path) {
  return store.deleteObject({
    Bucket: bucketName,
    Key: path
  }).promise()
}
