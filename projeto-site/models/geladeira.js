'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('geladeira',{
		ID_Geladeira: {
			field: 'ID_Geladeira',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		fkHospital: {
			field: 'fkHospital',
			type: DataTypes.INTEGER,
			allowNull: false
		}
		
	},
	{
		tableName: 'geladeira', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
