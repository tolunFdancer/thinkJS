const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    this.assign("title", "Fuck");
    return this.display();
  }
};
