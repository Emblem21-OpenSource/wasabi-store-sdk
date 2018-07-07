/**
 * Returns a WasabiStore instance
 * @param  accessKeyId {string}
 * @param  secretAccessKey {string}
 * @return {object}
 */
module.exports = async function removeBucket (store, bucketName) {
  store.deleteBucket({ Bucket: bucketName }, function (err, data) {
    if (!err) {
      console.log(data) // successful response
    } else {
      console.log(err) // an error ocurred
    }
  })
}
