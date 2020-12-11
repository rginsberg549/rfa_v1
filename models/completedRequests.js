module.exports = function (sequelize, DataTypes) {
  const CompletedRequests = sequelize.define("CompletedRequests", {
    requestType: {
      type: DataTypes.STRING,
    },
  });

  // CompletedRequests.associate = function (models) {
  //   CompletedRequests.hasOne(models.Employees);
  // };

  // CompletedRequests.associate = function (models) {
  //   CompletedRequests.hasOne(models.Physicians);
  // };

  // CompletedRequests.associate = function (models) {
  //   CompletedRequests.hasOne(models.ClaimAdmins);
  // };

  return CompletedRequests;
};
