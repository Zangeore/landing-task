const init = () => {
  const path = require('path');
  const glob = require('glob');
  const fs = require('fs');
  // eslint-disable-next-line no-undef
  let jsPath = path.join(__dirname, 'js', '**', '*.vue');
  let files = glob.sync(jsPath);

  let textArray = [];
  files.forEach((file) => {
    const text = fs.readFileSync(file, 'utf8');
    const regex = /\$t\((.*?)\)/g;
    const matches = text.match(regex);
    if (matches) {
      matches.forEach((match) => {
        match = match.replace('$t(\'', '');
        match = match.replace('\')', '');
        textArray.push(match);
      });
    }
  });
  textArray = [...new Set(textArray)];

  // eslint-disable-next-line no-undef
  jsPath = path.join(__dirname, 'js', 'langs', '*.js');
  files = glob.sync(jsPath);
  files.forEach((file) => {
    rewriteTranslationFile(file, textArray).then((r) => console.log(
        'lang file updated'));
  });

  /**
   * @param {string} file
   * @param {*[]} textArray
   */
  async function rewriteTranslationFile(file, textArray) {
    let exist = fs.readFileSync(file, 'utf8');
    exist = exist.replace('export default ', '');
    exist = JSON.parse(exist);
    const newTranslation = {};
    textArray.forEach((text) => {
      if (!exist[text]) {
        newTranslation[text] = text;
      } else {
        newTranslation[text] = exist[text];
      }
    });
    let newTranslationString = JSON.stringify(newTranslation, null, 2);
    newTranslationString = `export default ${newTranslationString}`;
    fs.writeFile(file, newTranslationString, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};
module.exports = {init};
