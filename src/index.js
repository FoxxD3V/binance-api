const rest = require('./spot/rest');

module.exports = {
  rest,
  error: (err) => {
    return typeof err.response.data != 'undefined' ? `${err.response.data.code}: ${err.response.data.msg}` : err;
  }
};
