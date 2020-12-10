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
    Treatments.belongsTo(models.Diagnoses, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  
  return Treatments;
};
