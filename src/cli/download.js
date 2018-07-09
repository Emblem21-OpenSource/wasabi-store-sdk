const getFile = require('../actions/getFile')
const getStore = require('../actions/getStore')

const config = {
  command: 'download [bucket] [path]',
  desc: 'Downloads a file or the contents of a directory.',

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
        describe: 'The file path to download from Wasabi/S3',
        default: undefined
      })
      .option('archive', {
        alias: 'a',
        describe: 'The process output is a .zip file.',
        default: false
      })
      .option('decrypt', {
        alias: 'd',
        describe: 'Decrypts an encrypted file',
        default: false
      })
  },

  /**
   * CLI Handler
   * @param  {Object}  argv  CLI Arguments
   */
  handler: async (argv) => {
    // Setup
    const store = getStore()
    const result = await getFile(store, argv.bucket, argv.path, argv.archive, argv.decrypt)
    process.stdout.write(result.Body.toString('binary', () => process.exit()))
  }
}

module.exports = config
