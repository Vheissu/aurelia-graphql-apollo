import bcrypt from 'bcrypt';
import models from '../../database/models';

const User = models.user;

export const Query = {
    user: async (_, { id }) => {
        const user = await User.findOne({ where: { id } });

        return user;
    },
    login: async (_, { email, password }) => {
        const user = await User.findOne({ where: { email } });
        const valid = await bcrypt.compare(password, user.password);

        return jwt.sign({
            id: user.id,
            email: user.email
        }, 'myencryptionkey', { expiresIn: '24h' });
    }
};
