const addBucket = require('../actions/addBucket')
const getStore = require('../actions/getStore')

const config = {
  command: 'new [bucket]',
  desc: 'Adds a new bucket to store data',
  builder: (yargs) => {
    yargs
      .positional('bucket', {
        describe: 'bucket name',
        default: undefined
      })
  },
  handler: async (argv) => {
    const store = getStore()
    const result = await addBucket(store, argv.bucket)
    console.log(result)
  }
}

module.exports = config
