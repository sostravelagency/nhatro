'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Image, { foreignKey: 'imageId', targetKey: 'id', as: 'images' })
      Post.belongsTo(models.Attribute, { foreignKey: 'attributeId', targetKey: 'id', as: 'attributes' })
      Post.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id', as: 'users' })
      Post.belongsTo(models.Overview, { foreignKey: 'overviewId', targetKey: 'id', as: 'overviews' })
      Post.hasMany(models.Feedback, { foreignKey: 'postId', as: 'feedbacks' });

    }
  }
  Post.init({
    title: DataTypes.STRING,
    star: DataTypes.STRING,
    labelCode: DataTypes.STRING,
    address: DataTypes.STRING,
    attributeId: DataTypes.STRING,
    categoryCode: DataTypes.STRING,
    priceCode: DataTypes.STRING,
    areaCode: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    userId: DataTypes.STRING,
    overviewId: DataTypes.STRING,
    imageId: DataTypes.STRING,
    provinceCode: DataTypes.STRING,
    priceNumber: DataTypes.FLOAT,
    areaNumber: DataTypes.FLOAT,
    utilities: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};