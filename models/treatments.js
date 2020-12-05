module.exports = function (sequelize, DataTypes) {
  const Treatments = sequelize.define("Treatments", {
    treatment: {
      type: DataTypes.STRING,
    },
    cptHCPCS: {
      type: DataTypes.STRING,
    },
  });
  Treatments.associate = function (models) {
    Treatments.belongsTo(models.Diagnosis, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  Treatments.associate = function (models) {
    Treatments.belongsTo(models.Requirements, {
      foreignKey: {
        allowNull: false,
      },
    });
  }

  Treatments.associate = function (models) {
    Treatments.belongsTo(models.TreatmentGroup, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Treatments;
};
