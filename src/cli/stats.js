const listFiles = require('../actions/listFiles')
const getStore = require('../actions/getStore')

const config = {
  command: 'stats [bucket]',
  desc: 'Gets stats about a bucket',
  builder: (yargs) => {
    yargs
      .positional('bucket', {
        describe: 'bucket name',
        default: undefined
      })
  },
  handler: async (argv) => {
    const store = getStore()
    const result = await listFiles(store, argv.bucket)
    console.log(result)
  }
}

module.exports = config
