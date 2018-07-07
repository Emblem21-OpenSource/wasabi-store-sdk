const awsRemoveBucket = require('../aws/removeBucket')

module.exports = async function removeFile () {
  await awsRemoveBucket()
}
