'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Hospital = sequelize.define('hospital',{
		ID_Hospital: {
			field: 'ID_Hospital',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		Nome_Hospital: {
			field: 'Nome_Hospital',
			type: DataTypes.STRING,
			allowNull: false
		}
		
	},
	{
		tableName: 'hospital', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Hospital;
};
