const fs = require('fs')
const glob = require('glob')

module.exports = {
  /**
   * async/await-friendly version of fs.readFile
   * @param  {String} path
   * @param  {String} opts
   * @return {Object}
   */
  readFile: (path, opts = 'utf8') =>
    new Promise((resolve, reject) => {
      fs.readFile(path, opts, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    }),

  /**
   * async/await-friendly version of fs.writeFile
   * @param  {String} path
   * @param  {Any} data
   * @param  {String} opts
   * @return {Object}
   */
  writeFile: (path, data, opts = 'utf8') =>
    new Promise((resolve, reject) => {
      fs.writeFile(path, data, opts, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    }),

  /**
   * async/await-friendly version of fs.stat().isDirectory()
   * @param  {String} path
   * @return {boolean}
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
   * @param  {String} path
   * @param  {Regex} exclusionRegex
   * @return {Array<String>}
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
    })
}
