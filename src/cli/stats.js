const getStats = require('../actions/getStats')
const getStore = require('../actions/getStore')

const config = {
  command: 'stats [bucket] [path]',
  desc: 'Gets stats about a bucket or a file',
  builder: (yargs) => {
    yargs
      .positional('bucket', {
        describe: 'bucket name',
        default: undefined
      })
      .positional('path', {
        describe: 'file path',
        default: undefined
      })
  },
  handler: async (argv) => {
    const store = getStore()
    const result = getStats(store, argv.bucket, argv.path)
    console.log(JSON.stringify(result))
  }
}

module.exports = config
