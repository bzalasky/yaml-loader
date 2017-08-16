var yaml = require('js-yaml');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  try {
    var res = yaml.safeLoad(source);
    console.log(res);
    return JSON.stringify(res, undefined, '\t');
  }
  catch (err) {
    console.log(err);
    this.emitError(err);
    return null;
  }
};
