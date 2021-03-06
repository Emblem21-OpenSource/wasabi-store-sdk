const removeBucket = require('../actions/removeBucket')
const removeFile = require('../actions/removeFile')
const getStore = require('../actions/getStore')

const config = {
  command: 'remove [bucket] [path]',
  desc: 'Removes a file from a Wasabi/S3 bucket.  If the path argument isn\'t present, the bucket will be removed instead.',

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
        describe: 'The file path to remove on Wasabi/S3',
        default: undefined
      })
  },

  /**
   * CLI Handler
   * @param  {Object}  argv  CLI Arguments
   */
  handler: async (argv) => {
    const store = getStore()
    let result

    if (argv.path === undefined) {
      result = await removeBucket(store, argv.bucket)
    } else {
      result = await removeFile(store, argv.bucket, argv.path)
    }

    console.log(JSON.stringify(result))
  }
}

module.exports = config
