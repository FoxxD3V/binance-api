const rest = require('./spot/rest');
const stream = require('./spot/stream');

module.exports = {
  rest,
  stream,
  error: (err) => {
    console.error(typeof err.response.data != 'undefined' ? `${err.response.data.code}: ${err.response.data.msg}` : err);
    //return typeof err.response.data != 'undefined' ? `${err.response.data.code}: ${err.response.data.msg}` : err;
  }
};
