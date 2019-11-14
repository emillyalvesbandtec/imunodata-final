'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		ID_Hash: {
			field: 'ID_Hash',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		Nome_Usuario: {
			field: 'Nome_Usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		Telefone: {
			field: 'Telefone',
			type: DataTypes.STRING,
			allowNull: false
		},
		Email: {
			field: 'Email',
			type: DataTypes.STRING,
			allowNull: false
		},
		Senha: {
			field: 'Senha',
			type: DataTypes.STRING,
			allowNull: false
		}, 
		fkCargo: {
			field: 'fkCargo',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		tableName: 'Usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
