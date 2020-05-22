'use strict';

const Controller = require('egg').Controller;
const rule = {
  userName: {
    type: 'string',
    required: true,
  },
  code: {
    type: 'string',
    required: true,
    min: 6,
    max: 6,
  },
  password: {
    type: 'password',
    required: true,
    min: 6,
    max: 20,
  },
  ticket: {
    type: 'string',
    required: true,
  },
};
class UserController extends Controller {

  async list() {
    const list = await this.ctx.model.User.findAll();
    this.ctx.helper.$success(list);
  }
  async login() {
    const { ctx, app } = this;
    ctx.validate(
      {
        userName: rule.userName,
        password: rule.password,
      },
      ctx.request.body
    );
    const { userName, password } = this.ctx.request.body;


    const user = await this.ctx.model.User.findAll({
      Where: {
        userName,
      },
      row: true,
    });
    this.ctx.logger.info(user);
  }
}

module.exports = UserController;
