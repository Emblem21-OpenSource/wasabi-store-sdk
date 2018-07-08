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
