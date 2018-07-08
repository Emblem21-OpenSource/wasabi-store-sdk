const removeBucket = require('../actions/removeBucket')
const removeFile = require('../actions/removeFile')
const getStore = require('../actions/getStore')

const config = {
  command: 'remove [bucket] [path]',
  desc: 'Removes a file or an entire bucket',
  builder: (yargs) => {
    yargs
      .positional('bucket', {
        describe: 'bucket name',
        default: undefined
      })
      .positional('path', {
        describe: 'path name',
        default: undefined
      })
  },
  handler: async (argv) => {
    const store = getStore()

    if (argv.path === undefined) {
      console.log(await removeBucket(store, argv.bucket))
    } else {
      console.log(await removeFile(store, argv.bucket, argv.path))
    }
  }
}

module.exports = config
