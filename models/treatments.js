module.exports = function (sequelize, DataTypes) {
  const Treatments = sequelize.define("Treatments", {
    treatmentName: {
      type: DataTypes.STRING,
    },
    diagnosisId: {
      type: DataTypes.STRING,
    },
  });

  
  return Treatments;
};
