const removeBucket = require('../actions/removeBucket')
const removeFile = require('../actions/removeFile')
const getStore = require('../actions/getStore')

const config = {
  command: 'remove [bucket] [file]',
  desc: 'Removes a file or an entire bucket',
  builder: (yargs) => {
    yargs
      .positional('bucket', {
        describe: 'bucket name',
        default: undefined
      })
      .positional('file', {
        describe: 'file name',
        default: undefined
      })
  },
  handler: async (argv) => {
    const store = getStore()

    if (argv.file === undefined) {
      console.log(await removeBucket(store, argv.bucket))
    } else {
      console.log(await removeFile(store, argv.bucket, argv.file))
    }
  }
}

module.exports = config
