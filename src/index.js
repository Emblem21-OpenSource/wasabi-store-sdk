const AddBucket = require('./actions/addBucket')
const AddFile = require('./actions/addFile')
const GetStats = require('./actions/getStats')
const GetFile = require('./actions/getFile')
const GetStore = require('./actions/getStore')
const ListFiles = require('./actions/listFiles')
const RemoveBucket = require('./actions/removeBucket')
const RemoveFile = require('./actions/removeFile')

/**
 * Returns a WasabiStore instance
 * @param  {String}  accessKeyId.     AWS Access Key ID for the wasabiStore profile
 * @param  {String}  secretAccessKey  AWS Secret Access Key ID for the wasabiStore profile
 * @return {Object}                   WasabiStore instance
 */
module.exports = function WasabiStore (accessKeyId, secretAccessKey) {
  const store = GetStore(accessKeyId, secretAccessKey)

  return {
    addBucket: async (bucketName) => AddBucket(store, bucketName),
    addFile: async (bucketName, absolutePath, tags, isPublic, encryptionPassword) => AddFile(store, bucketName, absolutePath, tags, isPublic, encryptionPassword),
    getFile: async (bucketName, path, asArchive, decryptionPassword) => GetFile(store, bucketName, path, asArchive, decryptionPassword),
    getStats: async (bucketName, path) => GetStats(store, bucketName, path),
    listFiles: async (bucketName) => ListFiles(store, bucketName),
    removeBucket: async (bucketName) => RemoveBucket(store, bucketName),
    removeFile: async (bucketName, path) => RemoveFile(store, bucketName, path)
  }
}
