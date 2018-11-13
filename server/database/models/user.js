import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default (sequelize, DataTypes) => {
    const SchemaOptions = {
        freezeTableName: true,
        instanceMethods: {
            async comparePassword(pw) {
                if (!this.password) {
                    throw new Error('No password');
                }

                const pass = await bcrypt.compare(pw, this.password);

                if (!pass) {
                    throw 'Invalid password';
                }

                return this;
            },
            getJwt() {
                return 'Bearer ' + jwt.sign({ id: this.id }, 'myencryptionkey', { expiresIn: '24h' });
            }
        }
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
