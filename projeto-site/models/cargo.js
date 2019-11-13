'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('cargo',{
		ID_Cargo: {
			field: 'ID_Cargo',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		Cargo: {
			field: 'Cargo',
			type: DataTypes.STRING,
			allowNull: false
		}
		
	},
	{
		tableName: 'cargo', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
