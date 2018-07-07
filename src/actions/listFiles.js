const awsListFiles = require('../aws/listFiles')

module.exports = async function removeFile () {
  await awsListFiles()
}
