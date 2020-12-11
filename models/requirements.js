module.exports = function (sequelize, DataTypes) {
  const Requirements = sequelize.define("Requirements", {
    requirementDescription: {
      type: DataTypes.STRING,
    },
    treatmentId: {
      type: DataTypes.STRING
    }  
  });

  return Requirements;
};
