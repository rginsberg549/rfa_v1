module.exports = function (sequelize, DataTypes) {
  const Treatments = sequelize.define("Treatments", {
    treatment: {
      type: DataTypes.STRING,
    },
    diagnosisCode: {
      type: DataTypes.STRING,
    },
  });

  
  return Treatments;
};
