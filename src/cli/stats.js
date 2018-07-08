const getFile = require('../actions/getFile')
const getBucketStats = require('../actions/getBucketStats')
const getStore = require('../actions/getStore')

const config = {
  command: 'stats [bucket] [path]',
  desc: 'Gets stats about a bucket or a file',
  builder: (yargs) => {
    yargs
      .positional('bucket', {
        describe: 'bucket name',
        default: undefined
      })
      .positional('path', {
        describe: 'file path',
        default: undefined
      })
  },
  handler: async (argv) => {
    const store = getStore()
    let result

    if (argv.path === undefined) {
      result = await getBucketStats(store, argv.bucket)
    } else {
      const file = await getFile(store, argv.bucket, argv.path)
      // @TODO Is there a way to make S3 not download?
      delete file.Body
      result = file
    }

    console.log(JSON.stringify(result))
  }
}

module.exports = config
