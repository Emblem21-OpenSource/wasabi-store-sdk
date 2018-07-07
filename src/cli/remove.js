const config = {
  command: 'Remove [bucket] [file]',
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
  handler: (argv) => {
    // Setup
    if (argv.verbose) {
      console.info(`start server on :${argv.port}`)
    }
  }
}

module.exports = config
