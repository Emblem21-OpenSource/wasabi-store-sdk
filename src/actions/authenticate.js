const awsAuthenticate = require('../aws/authenticate')

module.exports = async function removeFile () {
  await awsAuthenticate()
}
