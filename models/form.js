module.exports = function (sequelize, DataTypes) {
  const Form = sequelize.define("Form", {
    requestType: {
      type: DataTypes.STRING,
    },
    treatmentRowData: {
      type: DataTypes.JSON
    },
    status: {
      type: DataTypes.STRING
    },
    pdfURL: {
      type: DataTypes.STRING(2048)
    }
  });

  Form.associate = function (models) {
    Form.belongsTo(models.Employee);
    Form.belongsTo(models.ClaimsAdmins);
    Form.belongsTo(models.Physician);

  };

  // Form.associate = function (models) {
  //   Form.belongsTo(models.ClaimsAdmins);
  // };

  return Form;
};
