'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    active: DataTypes.STRING
  }, {});
  company.associate = function(models) {
    // associations can be defined here
  };
  return company;
};