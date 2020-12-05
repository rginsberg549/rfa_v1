module.exports = function (sequelize, DataTypes) {
    const TreatmentGroup = sequelize.define("TreatmentGroup", {
      notes: {
        type: DataTypes.STRING,
      },
    });
  
    TreatmentGroup.associate = function (models) {
        TreatmentGroup.hasOne(models.Diagnosis, {
          onDelete: "cascade",
        });
      };
    
    TreatmentGroup.associate = function (models) {
        TreatmentGroup.hasOne(models.Treatments, {
            onDelete: "cascade",
        });
      };
    
    return TreatmentGroup;
  };