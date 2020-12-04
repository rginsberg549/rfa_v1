module.exports = function (sequelize, DataTypes) {
  const Diagnosis = sequelize.define("Diagnosis", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    diagnosis: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
  });

  Diagnosis.associate = function (models) {
    Diagnosis.hasOne(models.Treatments, {
      onDelete: "cascade",
    });
  };

  Diagnosis.associate = function (models) {
    Diagnosis.belongsTo(models.Requirements, {
      foreignKey: {
        allowNull: false,
      },
    });
  }
  
  Diagnosis.associate = function (models) {
      Diagnosis.belongsTo(models.TreatmentGroup, {
        foreignKey: {
          allowNull: false,
        },
      }
    );
  }
  return Diagnosis;
};
