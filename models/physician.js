module.exports = function (sequelize, DataTypes) {
  const Physician = sequelize.define("Physicians", {
    physicianName: {
      type: DataTypes.STRING,
    },
    practiceName: {
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
    },
    specialty: {
      type:DataTypes.STRING
    },
    npiNumber: {
      type: DataTypes.STRING
    }
  });

  // Physician.associate = function (models) {
  //   Physician.belongsTo(models.CompletedRequests, {
  //     foreignKey: {
  //       allowNull: true,
  //     },
  //   });
  // };
  return Physician;
};
