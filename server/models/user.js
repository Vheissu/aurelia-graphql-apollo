import bcrypt from 'bcrypt';
import jsonwebtoken from'jsonwebtoken';

export default (sequelize, DataTypes) => {
    const SchemaOptions = {
        freezeTableName: true
    };

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
    }, SchemaOptions);

    User.associate = (models) => {
        User.hasMany(models.post);
    };

    User.beforeSave(async (user) => {
        if (user.changed('password')) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(user.password, salt);

            user.password = hash;
        }
    });

    return User;

};
