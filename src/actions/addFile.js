const awsAddFile = require('../aws/addFile')

module.exports = async function removeFile () {
  await awsAddFile()
}
