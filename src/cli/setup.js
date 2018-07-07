const config = {
  command: 'setup',
  desc: 'Sets up the Wasabi Store SDK for usage',
  builder: (yargs) => {},
  handler: (argv) => {
    // Setup
    if (argv.verbose) {
      console.info(`start server on :${argv.port}`)
    }
  }
}

module.exports = config
