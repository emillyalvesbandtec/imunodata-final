'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Acessa = sequelize.define('acessa',{
		fkUsuario: {
			field: 'fkUsuario',
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
		tableName: 'acessa', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Acessa;
};
