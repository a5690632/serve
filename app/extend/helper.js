'use strict';
module.exports = {
  $success(data, code = 1, msg = 'success') {
    this.ctx.body = {
      data,
      msg,
      code,
    };
  },
  $fail(msg = '', code = 0) {
    this.ctx.body = {
      msg,
      code,
    };
  },
};
