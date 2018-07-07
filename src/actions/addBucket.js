const awsAddBucket = require('../aws/addBucket')

module.exports = async function removeFile () {
  await awsAddBucket()
}
