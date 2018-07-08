const awsAddFile = require('../aws/addFile')
const utils = require('../utils')
const cwd = process.cwd() + '/'
const querystring = require('querystring')

/**
 * Adds a file or directory to your Wasabi Store and returns the URL for the newly uploaded files.
 * @param store {AWS.S3}
 * @param bucketName {string}
 * @param absolutePath {string}
 * @returm {string}
 */
module.exports = async function addFile (store, bucketName, absolutePath, tags, isPublic, encryptionPassword = false) {
  const isDirectory = await utils.isDirectory(absolutePath)
  const result = []
  let paths

  if (isDirectory) {
    paths = await utils.getChildrenFilePaths(absolutePath)
  } else {
    paths = [ absolutePath ]
  }

  if (typeof tags !== 'string') {
    tags = querystring.stringify(tags)
  }

  for (let filePath of paths) {
    const uploadResult = await awsAddFile(store, bucketName, filePath.replace(cwd, ''), filePath, tags, isPublic, encryptionPassword)
    result.push(uploadResult.Location)
  }

  return result
}
