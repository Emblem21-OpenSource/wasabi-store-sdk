const addFile = require('../actions/addFile')
const getStore = require('../actions/getStore')
const path = require('path')

const config = {
  command: 'upload [bucket] [path]',
  desc: 'Uploads a file or directory to a bucket',
  builder: (yargs) => {
    yargs
      .positional('bucket', {
        describe: 'bucket name',
        default: undefined
      })
      .positional('path', {
        describe: 'path to a file, archive, or directory',
        default: undefined
      })
  },
  handler: async (argv) => {
    const store = getStore()
    const result = await addFile(store, argv.bucket, path.resolve(argv.path))
    console.log(result)
  }
}

module.exports = config
