module.exports = function (sequelize, DataTypes) {
  const Employee = sequelize.define("Employee", {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    dateOfInjury: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
    },
    claimNumber: {
      type: DataTypes.STRING,
    },
    employer: {
      type: DataTypes.STRING,
    },
  });

 Employee.associate = function (models) {
    Employee.belongsTo(models.Form);
  };

  return Employee;
};
