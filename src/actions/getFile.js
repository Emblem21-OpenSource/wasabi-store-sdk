const awsGetFile = require('../aws/getFile')

module.exports = async function removeFile () {
  await awsGetFile()
}
