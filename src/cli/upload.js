const addFile = require('../actions/addFile')
const getStore = require('../actions/getStore')
const path = require('path')

const config = {
  command: 'upload [bucket] [path] [tagQuery]',
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
      .positional('tagQuery', {
        describe: 'HTTP querystring of tags to attach to the file',
        default: undefined
      })
      .option('public', {
        alias: 'p',
        describe: 'Makes the file pubicly accessible',
        default: false
      })
      .option('encrypt', {
        alias: 'e',
        describe: 'Encrypts the file before it is uploaded',
        default: false
      })
  },
  handler: async (argv) => {
    const store = getStore()
    const result = await addFile(store, argv.bucket, path.resolve(argv.path), argv.tagQuery, argv.public, argv.encrypt)
    console.log(JSON.stringify(result))
  }
}

module.exports = config
