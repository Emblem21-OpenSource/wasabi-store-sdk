const fs = require('fs')
const glob = require('glob')
const stream = require('stream')

module.exports = {

  /**
   * async/await-friendly version of fs.readFile
   * @param  {String}  path     Path of the file
   * @param  {String}  opts     Encoding
   * @return {Promise<Boolean>}
   */
  readFile: (path, opts = 'utf8') =>
    new Promise((resolve, reject) => {
      fs.readFile(path, opts, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    }),

  /**
   * async/await-friendly version of fs.writeFile
   * @param  {String}  path      Path of the file
   * @param  {Any}  data         Data to be saved to the file
   * @param  {String}  opts      Encoding
   * @return {Promise<Boolean>}
   */
  writeFile: (path, data, opts = 'utf8') =>
    new Promise((resolve, reject) => {
      fs.writeFile(path, data, opts, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    }),

  /**
   * async/await-friendly version of fs.stat().isDirectory()
   * @param  {String}  path  Path of the file
   * @return {Promise<Boolean>}
   */
  isDirectory: (path) =>
    new Promise((resolve, reject) => {
      fs.lstat(path, (err, stats) => {
        if (err) {
          reject(err)
        } else {
          resolve(stats.isDirectory())
        }
      })
    }),

  /**
   * async/await-friendly version of glob with a few opinions on how to traverse a directory tree
   * @param  {String}  path           Path of the file
   * @param  {Regex}  exclusionRegex  Regular expression to ignore file paths
   * @return {Promise<Array<String>>}
   */
  getChildrenFilePaths: (path, exclusionRegex) =>
    new Promise((resolve, reject) => {
      glob('**/*', {
        cwd: path,
        nosort: false,
        nodir: true,
        ignore: exclusionRegex,
        follow: true
      }, (err, files) => {
        if (err) {
          reject(err)
        } else {
          resolve(files.map(element => path + '/' + element))
        }
      })
    }),

  /**
   * Returns if the process has data being piped into it
   * @return {Boolean}
   */
  hasPipedInput: () => process.stdin._handle.constructor.name === 'Pipe'
}
