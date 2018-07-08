const awsGetFile = require('../aws/getFile')
const awsGetArchive = require('../aws/getArchive')
const awsGetTags = require('../aws/getTags')

/**
 * Returns the contents of a bucket file from your Wasabi Store.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @param  path {string}
 * @return {string}
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
