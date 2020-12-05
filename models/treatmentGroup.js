module.exports = function (sequelize, DataTypes) {
  const TreatmentGroup = sequelize.define("TreatmentGroup", {
    notes: {
      type: DataTypes.STRING,
    },
  });

  TreatmentGroup.associate = function (models) {
    TreatmentGroup.hasOne(models.Diagnosis);
  };

  TreatmentGroup.associate = function (models) {
    TreatmentGroup.hasOne(models.Treatments);
  };

  TreatmentGroup.associate = function (models) {
    TreatmentGroup.belongsTo(models.CompletedRequests, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return TreatmentGroup;
};
