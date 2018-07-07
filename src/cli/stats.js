const config = {
  command: 'stats [bucket]',
  desc: 'Gets stats about a bucket',
  builder: (yargs) => {
    yargs
      .positional('bucket', {
        describe: 'bucket name',
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
