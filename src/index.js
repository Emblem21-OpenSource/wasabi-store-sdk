const AddBucket = require('./actions/addBucket')
const AddFile = require('./actions/addFile')
const GetBucketStats = require('./actions/getBucketStats')
const GetFile = require('./actions/getFile')
const GetStore = require('./actions/getStore')
const ListFiles = require('./actions/listFiles')
const RemoveBucket = require('./actions/removeBucket')
const RemoveFile = require('./actions/removeFile')

/**
 * Returns a WasabiStore instance
 * @param  accessKeyId {string}
 * @param  secretAccessKey {string}
 * @return {object}
 */
module.exports = function WasabiStore (accessKeyId, secretAccessKey) {
  const store = GetStore(accessKeyId, secretAccessKey)

  return {
    addBucket: async (bucketName) => AddBucket(store, bucketName),
    addFile: async (bucketName, path) => AddFile(store, bucketName, path),
    getBucketStats: async (bucketName) => GetBucketStats(store, bucketName),
    getFile: async (bucketName, path) => GetFile(store, bucketName, path),
    listFiles: async (bucketName) => ListFiles(store, bucketName),
    removeBucket: async (bucketName) => RemoveBucket(store, bucketName),
    removeFile: async (bucketName, path) => RemoveFile(store, bucketName, path)
  }
}
