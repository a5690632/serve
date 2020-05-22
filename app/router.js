'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;


  router.post('/api/user/list', controller.user.list);
  router.post('/api/user/login', controller.user.login);
};
