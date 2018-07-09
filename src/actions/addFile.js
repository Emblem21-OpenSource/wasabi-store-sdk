const awsAddFile = require('../aws/addFile')
const utils = require('../utils')
const cwd = process.cwd() + '/'
// @TODO Uncomment this section when Wasabi supports S3 tagging
// const querystring = require('querystring')

/**
 * Adds a file or directory to your bucket and returns a list of URLs for the newly uploaded files.
 * @param {AWS.S3}  store                  Wasabi/S3 Store instance
 * @param {String}  bucketName             Bucket name
 * @param {String}  absolutePath           The absolute path of the file to add to the bucket
 * @param {String|Object}  tags            The tags to add to the bucket resource
 * @param {Boolean}  isPublic              Should the resource be publicly downloadable?
 * @param {Boolean}  encryptionPassword    The password used to encrypt the file.  The IV will be generated from this password.
 * @param {Boolean}  alternativeStream     An alternative stream to use (stdin, etc)
 * @return {Object}                        ???
 */
module.exports = async function addFile (store, bucketName, absolutePath, tags, isPublic, encryptionPassword = false, alternativeStream = false) {
  const result = []

  // Assume a single upload is being done
  let paths = [ absolutePath ]
  let tagObject = tags

  if (!alternativeStream) {
    // No alternative pipe is being utilized, check the file path.
    const isDirectory = await utils.isDirectory(absolutePath)

    if (isDirectory) {
      // The file path is a directly, recurisvely get all paths within the directory
      paths = await utils.getChildrenFilePaths(absolutePath)
    }
  }

  /*
  // @TODO Uncomment this section when Wasabi supports S3 tagging
  if (typeof tags !== 'string') {
    tagObject = querystring.stringify(tags)
  }
  */

  // @TODO Comment this section when Wasabi supports S3 tagging
  if (typeof tags === 'string') {
    tagObject = {}
    tags.split('&').map(element => {
      const parts = element.split('=')
      tagObject[parts[0]] = parts[1]
    })
  }

  for (let filePath of paths) {
    const uploadResult = await awsAddFile(
      store,
      bucketName,
      filePath.replace(cwd, ''),
      filePath,
      tagObject,
      isPublic,
      encryptionPassword,
      alternativeStream)

    result.push(uploadResult.Location)
  }

  return result
}
