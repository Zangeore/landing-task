import ru from './langs/ru.js';

class Text {
    constructor(lang) {
        this.lang = lang;
    }
    get(key) {
        return this[this.lang][key];
    }
    setLang(lang) {
        this.lang = lang;
    }
}

Text.prototype.ru = ru;

export default Text;



