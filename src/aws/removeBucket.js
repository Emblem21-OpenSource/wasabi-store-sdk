/**
 * Returns a WasabiStore instance
 * @param  accessKeyId {string}
 * @param  secretAccessKey {string}
 * @return {object}
 */
module.exports = async function removeBucket (store, bucketName) {
  return store.deleteBucket({
    Bucket: bucketName
  }).promise()
}
