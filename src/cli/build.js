const config = {
  command: 'build',
  desc: 'Builds a standalone binary of WasabiStore. (Not working)',

  /**
   * CLI Arguments
   * @param  {Object}  yargs  Yargs instance
   */
  builder: (yargs) => {},

  /**
   * CLI Handler
   * @param  {Object}  argv  CLI Arguments
   */
  handler: async (argv) => {
    // @TODO Build the things
  }
}

module.exports = config
