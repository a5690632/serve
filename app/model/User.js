'use strict';

module.exports = app => {

  const { STRING, INTEGER, DATEONLY } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER, primaryKey: true, autoIncrement: true,
    },
    phone: {
      type: STRING,
    },
    type: {
      type: INTEGER,
    },
    name: {
      type: STRING,
    },
    address: {
      type: STRING,
    },
    password: {
      type: STRING,
    },
    create_time: {
      type: DATEONLY,
    },
  },
  {


  }
  );

  return User;
};
