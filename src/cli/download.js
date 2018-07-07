const config = {
  command: 'download [bucket] [file]',
  desc: 'Downloads a file or every file from a bucket',
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
  handler: (argv) => {
    // Setup
    if (argv.verbose) {
      console.info(`start server on :${argv.port}`)
    }
  }
}

module.exports = config
