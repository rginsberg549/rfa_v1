module.exports = function(sequelize, DataTypes) {
    const claimsAdmin = sequelize.define("ClaimsAdmin", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    companyName: {
        type: DataTypes.STRING
    },
    contactName: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.INTEGER
    },
    zipCode: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    faxNumber: {
        type: DataTypes.STRING
    },
    emailAddress: {
        type: DataTypes.STRING
    }
})
    return claimsAdmin;
}