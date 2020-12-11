module.exports = function (sequelize, DataTypes) {
  const Requirements = sequelize.define("Requirements", {
    requirementName: {
      type: DataTypes.STRING,
    },

    diagnosisId: {
      type: DataTypes.STRING
    },

    treatmentId: {
      type: DataTypes.STRING
    }  
  });

  return Requirements;
};
