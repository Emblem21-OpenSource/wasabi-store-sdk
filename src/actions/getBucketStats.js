const awsGetBucketStats = require('../aws/getBucketStats')

module.exports = async function removeFile () {
  await awsGetBucketStats()
}
