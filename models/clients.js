'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define('Clients', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    timestamps: false
  });
  Clients.associate = function(models) {
    // associations can be defined here
  };
  return Clients;
};