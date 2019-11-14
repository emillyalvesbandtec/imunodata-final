'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('DeviceDHT11',{	
		ID_Dados: {
			field: 'ID_Dados',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		Sensor_temp: {
			field: 'Sensor_temp',
			type: DataTypes.REAL,
			allowNull: false
		},
		Sensor_Data: {
			field: 'Sensor_Data',
			type: DataTypes.DATE,
			allowNull: false
		},
		// fkGeladeira: {
		// 	field: 'fkGeladeira',
		// 	type: DataTypes.INTEGER, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
		// 	allowNull: false
		// },
		momento_grafico: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		}
	}, 
	{
		tableName: 'DeviceDHT11', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
