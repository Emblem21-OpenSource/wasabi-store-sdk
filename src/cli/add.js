const config = {
  command: 'add [bucket]',
  desc: 'Adds a new bucket to store data',
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
