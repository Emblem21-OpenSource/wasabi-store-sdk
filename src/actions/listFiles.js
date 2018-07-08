const awsListFiles = require('../aws/listFiles')

const quoteRegex = /"/g

/**
 * Returns a list of files from a Wasabi Store bucket.
 * @param  store {AWS.S3}
 * @param  bucketName {string}
 * @return {object}
 */
module.exports = async function listFiles (store, bucketName) {
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
    remainingFileSlots,
    files: result.Contents
  }
}
