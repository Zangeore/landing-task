import ru from './langs/ru.js';

/**
 * @class Text
 * @property {string} lang
 * @property {object} ru
 * @method get
 * @method setLang
 * @example
 * const text = new Text('ru');
 * text.get('hello');
 * text.setLang('en');
 * text.get('hello');
 */
class Text {
  /**
   * @param {string} lang
   * @example
   * const text = new Text('ru');
   */
  constructor(lang) {
    this.lang = lang;
  }
  /**
   * @param {string} key
   * @return {string}
   * @example
   * const text = new Text('ru');
   * text.get('hello');
   */
  get(key) {
    return this[this.lang][key] || key;
  }
  /**
   * @param {string} lang
   * @example
   * const text = new Text('ru');
   * text.setLang('en');
   * text.get('hello');
   */
  setLang(lang) {
    this.lang = lang;
  }
}

Text.prototype.ru = ru;

export default Text;


