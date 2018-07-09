const addBucket = require('../actions/addBucket')
const getStore = require('../actions/getStore')

const config = {
  command: 'new [bucket]',
  desc: 'Creates a new Wasabi/S3 bucket to store files.',

  /**
   * CLI Arguments
   * @param  {Object}  yargs  Yargs instance
   */
  builder: (yargs) => {
    yargs
      .positional('bucket', {
        describe: 'The name of the Wasabi/S3 bucket',
        default: undefined
      })
  },

  /**
   * CLI Handler
   * @param  {Object}  argv  CLI Arguments
   */
  handler: async (argv) => {
    const store = getStore()
    const result = await addBucket(store, argv.bucket)
    console.log(JSON.stringify(result))
  }
}

module.exports = config
