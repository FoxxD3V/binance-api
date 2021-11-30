const rest = require('./spot/rest');
const rest = require('./spot/stream');
const rest = require('./spot/userStream');

module.exports = {
  rest,
  stream,
  userStream,
  error: (err) => {
    return typeof err.response.data != 'undefined' ? `${err.response.data.code}: ${err.response.data.msg}` : err;
  }
};
