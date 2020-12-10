module.exports = function (sequelize, DataTypes) {
  const Requirements = sequelize.define("Requirements", {
    requirement: {
      type: DataTypes.STRING,
    },
  });

  // Requirements.associate = function (models) {
  //   Requirements.hasOne(models.Diagnosis);
  // };

  // Requirements.associate = function (models) {
  //   Requirements.hasOne(models.Treatments);
  // };

  return Requirements;
};
