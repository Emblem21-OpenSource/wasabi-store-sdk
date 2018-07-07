const awsRemoveFile = require('../aws/removeFile')

module.exports = async function removeFile () {
  await awsRemoveFile()
}
