const getBucketStats = require('../actions/getBucketStats')
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
    const result = await getBucketStats(store, argv.bucket)
    console.log(result)
  }
}

module.exports = config
