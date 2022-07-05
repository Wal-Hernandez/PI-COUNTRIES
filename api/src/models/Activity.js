const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficultly:{
      type: DataTypes.INTEGER,
      allowNull: false,
   /*    validate: {
      isEven(value) {
        if (value > 5) {
          throw new Error('Only numbers minor that 6 are allowed!');
          }
        }
      } */
    },
 
    duration:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    season:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{ timestamps: false });
};
