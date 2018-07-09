const getInfo = require('../actions/getInfo')
const getStore = require('../actions/getStore')

const config = {
  command: 'info [bucket] [path]',
  desc: 'Returns information about a file from a Wasabi/S3 bucket.  If the path argument isn\'t present, information about the bucket will be returned instead.',

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
      .positional('path', {
        describe: 'The file path on Wasabi/S3 to get information about.',
        default: undefined
      })
  },

  /**
   * CLI Handler
   * @param  {Object}  argv  CLI Arguments
   */
  handler: async (argv) => {
    const store = getStore()
    const result = getInfo(store, argv.bucket, argv.path)
    console.log(JSON.stringify(result))
  }
}

module.exports = config
