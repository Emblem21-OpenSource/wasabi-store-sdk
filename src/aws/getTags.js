/**
 * Returns the tags of a bucket file from your Wasabi Store.  (Currently vestigal)
 * @param  {AWS.S3}  store                Wasabi/S3 Store instance
 * @param  {String}  bucketName           Bucket name
 * @param  {String}  path                 The path of the file or directory in the bucket
 * @return {Object}                       Tag information
 */
module.exports = async function getTags (store, bucketName, path) {
  return store.getObjectTagging({
    Bucket: bucketName,
    Key: path
  }).promise()
}
