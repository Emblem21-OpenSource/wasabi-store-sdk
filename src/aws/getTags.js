/**
 * Returns the tags of a bucket file from your Wasabi Store.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @param  path {string}
 * @return {string}
 */
module.exports = async function getFile (store, bucketName, path) {
  return store.getObjectTagging({
    Bucket: bucketName,
    Key: path
  }).promise()
}
