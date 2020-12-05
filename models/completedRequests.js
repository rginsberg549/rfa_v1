module.exports = function (sequelize, DataTypes) {
  const CompletedRequests = sequelize.define("CompletedRequests", {
    requestType: {
      type: DataTypes.STRING,
    },
  });

  CompletedRequests.associate = function (models) {
    CompletedRequests.hasOne(models.Employee);
  };

  CompletedRequests.associate = function (models) {
    CompletedRequests.hasOne(models.Physician);
  };

  CompletedRequests.associate = function (models) {
    CompletedRequests.hasOne(models.ClaimsAdmin);
  };

  CompletedRequests.associate = function (models) {
    CompletedRequests.hasMany(models.TreatmentGroup);
  };

  return CompletedRequests;
};
