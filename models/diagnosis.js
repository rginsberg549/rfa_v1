module.exports = function (sequelize, DataTypes) {
  const Diagnoses = sequelize.define("Diagnoses", {
    diagnosisName: {
      type: DataTypes.STRING,
    },
    diagnosisCode: {
      type: DataTypes.STRING,
    },
  });

  return Diagnoses;
};
