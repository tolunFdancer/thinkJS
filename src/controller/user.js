const Base = require('./base.js');

module.exports = class extends Base {
    tolunAction() {
        this.body = 'Hi, Fdancer!';
        this.ctx.res.write("yes, you got me!")
    }
}