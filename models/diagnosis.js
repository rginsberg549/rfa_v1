module.exports = function (sequelize, DataTypes) {
  const Diagnoses = sequelize.define("Diagnoses", {
    diagnosis: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
  });

  return Diagnoses;
};
