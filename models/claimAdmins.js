module.exports = function (sequelize, DataTypes) {
  const ClaimAdmins = sequelize.define("ClaimAdmins", {
    companyName: {
      type: DataTypes.STRING,
    },
    contactName: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    zipCode: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    faxNumber: {
      type: DataTypes.STRING,
    },
    emailAddress: {
      type: DataTypes.STRING,
    }
  }, {
    freezeTableName: true
  })

  ClaimAdmins.associate = function (models) {
    ClaimAdmins.belongsTo(models.CompletedRequests, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return ClaimAdmins;
};
