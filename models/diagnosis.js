module.exports = function (sequelize, DataTypes) {
  const Diagnoses = sequelize.define("Diagnoses", {
    diagnosis: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
  });

  Diagnoses.associate = function (models) {
    Diagnoses.hasOne(models.Treatments);
  };

  return Diagnoses;
};
