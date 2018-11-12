export default (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: DataTypes.STRING
    },
        {
            freezeTableName: true,
        }
    );

    User.associate = (models) => {
        User.hasMany(models.post);
    };

    return User;

};
