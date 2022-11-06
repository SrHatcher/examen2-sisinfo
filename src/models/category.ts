import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table({
    tableName: 'categories'
})

export class Category extends Model{

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    })

    public id: number;

    @Column({
       type: DataType.STRING(50),
       allowNull: false,
       unique: true,
    })
    public name: string;

    @Column({
        type: DataType.STRING(250),
     })
    public description: string;

}