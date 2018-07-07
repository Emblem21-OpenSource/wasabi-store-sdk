const config = {
  command: 'upload [bucket] [path]',
  desc: 'Uploads a file, archive, or directory to a bucket',
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
  handler: (argv) => {
    // Setup
    if (argv.verbose) {
      console.info(`start server on :${argv.port}`)
    }
  }
}

module.exports = config
