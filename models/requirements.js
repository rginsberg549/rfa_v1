module.exports = function (sequelize, DataTypes) {
  const Requirements = sequelize.define("Requirements", {
    requirement: {
      type: DataTypes.STRING,
    },
  });

  Requirements.associate = function (models) {
    Requirements.hasOne(models.Diagnosis, {
      onDelete: "cascade",
    });
  };

  Requirements.associate = function (models) {
    Requirements.hasOne(models.Treatments);
  };

  return Requirements;
};
