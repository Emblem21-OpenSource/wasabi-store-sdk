const addFile = require('../actions/addFile')
const getStore = require('../actions/getStore')
const path = require('path')
const utils = require('../utils')

const config = {
  command: 'upload [bucket] [path] [tagQuery]',
  desc: 'Uploads a file or the contents of a directory.  Any data piped into this process will be uploaded instead.',

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
        describe: 'The file path to upload to the Wasabi/S3 bucket',
        default: undefined
      })
      .positional('tagQuery', {
        describe: 'An HTTP querystring of tags to attach to the file.  This should be wrapped in double-quotes.  (S3 tagging isn\'t supported on Wasabi, so this information will be attached to the resources Metadata instead.)',
        default: undefined
      })
      .option('public', {
        alias: 'p',
        describe: 'Makes the file pubicly accessible',
        default: false
      })
      .option('encrypt', {
        alias: 'e',
        describe: 'Encrypts the file before it is uploaded to minimize Terms of Service concerns.',
        default: false
      })
  },

  /**
   * CLI Handler
   * @param  {Object}  argv  CLI Arguments
   */
  handler: async (argv) => {
    const store = getStore()
    const result = await addFile(
      store,
      argv.bucket,
      path.resolve(argv.path),
      argv.tagQuery,
      argv.public,
      argv.encrypt,
      utils.hasPipedInput() ? process.stdin : false) // @TODO utils.getStdinPipe() isn't working.
    console.log(JSON.stringify(result))
  }
}

module.exports = config
