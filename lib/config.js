const fs   = require('fs');
const yaml = require('js-yaml');

class Config {
  constructor(filePath) {
    try {
      this.conf = yaml.load(fs.readFileSync(filePath, 'utf8'))[0];
      console.log(this.conf)
    } catch(e) {
      console.error(e)
      throw 'error'
    }
  }

  getSheetId() {
    const sheetId = this.conf['sheet-id']
    if (!sheetId) {
      throw 'sheet id not exists!!'
    }

    return sheetId
  }

  getSheetName() {
    const sheetName = this.conf['sheet-name']

    if (!sheetName) {
      throw 'sheet name not exists!!'
    }

    return sheetName
  }

  getSheetRange() {
    const sheetRange = this.conf['sheet-range']

    if (!sheetRange) {
      throw 'sheet range not exists!!'
    }

    return sheetRange
  }

}

module.exports = Config
