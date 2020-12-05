module.exports = function (sequelize, DataTypes) {
  const Physician = sequelize.define("Physician", {
    name: {
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
      type: DataTypes.INTEGER,
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
  });

  Physician.associate = function (models) {
    Physician.belongsTo(models.CompletedRequests, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Physician;
};
