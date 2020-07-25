import { Table, Column,Model,DataType, BelongsToMany } from "sequelize-typescript";
import User from "./user";
import UserEntity from "./UserEntity";
@Table({
    tableName:"Entities"
})
class Entity extends Model{
    @Column({
        allowNull:false,
        autoIncrement:true,
        type:DataType.INTEGER,
        primaryKey:true
    })
    id!:number;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    name!:string;

    @Column({
        allowNull:false,
        type:DataType.STRING
    })
    country!:string;

    @BelongsToMany(() => User, () => UserEntity)
    users!:User[]
}

export default Entity;