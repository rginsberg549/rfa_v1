module.exports = function (sequelize, DataTypes) {
  const Diagnosis = sequelize.define("Diagnosis", {
    diagnosis: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
  });

  Diagnosis.associate = function (models) {
    Diagnosis.hasOne(models.Treatments);
  };

  Diagnosis.associate = function (models) {
    Diagnosis.belongsTo(models.Requirements, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  Diagnosis.associate = function (models) {
    Diagnosis.belongsTo(models.TreatmentGroup, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Diagnosis;
};
