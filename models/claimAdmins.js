module.exports = function (sequelize, DataTypes) {
  const ClaimsAdmins = sequelize.define("ClaimsAdmins", {
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
  });

  ClaimsAdmins.associate = function (models) {
    ClaimsAdmins.hasOne(models.Form);
  };
  return ClaimsAdmins;
};
