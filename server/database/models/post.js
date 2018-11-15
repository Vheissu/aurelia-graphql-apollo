import SequelizeSlugify from 'sequelize-slugify';

export default (sequelize, DataTypes) => {

    const Post = sequelize.define('post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        slug: {
            type: DataTypes.STRING,
            unique: true
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: DataTypes.STRING,
        type: DataTypes.STRING,
        commentsEnabled: DataTypes.BOOLEAN
    },
        {
            freezeTableName: true,
        }
    );

    Post.associate = (models) => {
        Post.belongsTo(models.user);
    };

    SequelizeSlugify.slugifyModel(Post, {
        source: ['title']
    });

    return Post;
};
