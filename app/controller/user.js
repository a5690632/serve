'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {

    const { ctx } = this;
    ctx.body = 'hi';
  }
  async list() {

    const list = await this.ctx.model.User.findAll();
    this.ctx.helper.$success(list);
  }
}

module.exports = UserController;
