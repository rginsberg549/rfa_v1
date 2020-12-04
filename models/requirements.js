module.exports = function (sequelize, DataTypes) {
  const Requirements = sequelize.define("Requirements", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
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
    Requirements.hasOne(models.Treatments, {
      onDelete: "cascade",
    });
  };

  return Requirements;
};
