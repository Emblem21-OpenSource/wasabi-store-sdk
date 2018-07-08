const getFile = require('../actions/getFile')
const getStore = require('../actions/getStore')

const config = {
  command: 'download [bucket] [path]',
  desc: 'Downloads a file or the contents of a directory as an archive',
  builder: (yargs) => {
    yargs
      .positional('bucket', {
        describe: 'bucket name',
        default: undefined
      })
      .positional('path', {
        describe: 'file name',
        default: undefined
      })
      .option('archive', {
        alias: 'a',
        default: false
      })
      .option('decrypt', {
        alias: 'd',
        describe: 'Decrypts an encrypted file',
        default: false
      })
  },
  handler: async (argv) => {
    // Setup
    const store = getStore()
    const result = await getFile(store, argv.bucket, argv.path, argv.archive, argv.decrypt)
    process.stdout.write(result.Body.toString('binary', () => process.exit()))
  }
}

module.exports = config
