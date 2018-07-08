const awsListFiles = require('../aws/listFiles')
const awsGetFile = require('../aws/getFile')

const quoteRegex = /"/g

/**
 * Returns statistics about a Wasabi Store bucket or file.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @return {object}
 */
module.exports = async function getStats (store, bucketName, path) {
  if (path !== undefined) {
    // Get the stats from a single file
    const file = await awsGetFile(store, bucketName, path)
    // @TODO Is there a way to make S3 not download?
    delete file.Body
    return file
  }

  // Get stats for an entire bucket
  const result = await awsListFiles(store, bucketName)
  let totalSize = 0
  let biggestFile = -Infinity
  let smallestFile = Infinity
  let oldestFile = new Date(8640000000000000)
  let newestFile = new Date(-8640000000000000)
  let remainingFileSlots = result.MaxKeys - result.KeyCount

  result.Contents.map((element) => {
    totalSize += element.Size

    if (element.Size > biggestFile) {
      biggestFile = element.Size
    }

    if (element.Size < smallestFile) {
      smallestFile = element.Size
    }

    const date = new Date(element.LastModified)
    if (date > newestFile) {
      newestFile = date
    }

    if (date < oldestFile) {
      oldestFile = date
    }

    if (date > newestFile) {
      newestFile = date
    }

    element.ETag = element.ETag.replace(quoteRegex, '')

    return element
  })

  return {
    totalSize,
    biggestFile,
    smallestFile,
    oldestFile,
    newestFile,
    remainingFileSlots
  }
}
