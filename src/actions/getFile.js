const awsGetFile = require('../aws/getFile')
const awsGetArchive = require('../aws/getArchive')
const awsGetTags = require('../aws/getTags')

/**
 * Returns the contents of a file from a Wasabi/S3 bucket.
 * @param  {AWS.S3}  store                Wasabi/S3 Store instance
 * @param  {String}  bucketName           Bucket name
 * @param  {String}  path                 The path of the file or directory in the bucket
 * @param  {Boolean}  asArchive           Get the file(s) as a Zip file
 * @param  {Boolean}  decryptionPassword  The password used to decrypt the file.
 * @return {Object}                       Information about the resource
 */
module.exports = async function getFile (store, bucketName, path, asArchive, decryptionPassword = false) {
  if (asArchive) {
    // Download everything in the bucket
    return awsGetArchive(store, bucketName, path, decryptionPassword)
  } else {
    // Download a specific file from a bucket
    const result = await awsGetFile(store, bucketName, path, decryptionPassword)
    let tags
    try {
      tags = await awsGetTags(store, bucketName, path)
      result.Tags = tags.TagSet
    } catch (e) {
      if (e.code !== 'NoSuchTagSetError') {
        throw e
      } else {
        result.Tags = []
      }
    }

    return result
  }
}
