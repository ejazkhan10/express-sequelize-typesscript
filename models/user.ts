import { Table, Column,DataType,Model, BelongsToMany, BeforeCreate, BeforeUpdate, BelongsTo, ForeignKey } from "sequelize-typescript";
import Entity from "./entity";
import UserEntity from "./UserEntity";
import bcrypt from "bcryptjs"
import Teacher from "./teacher";
@Table({
    tableName:"Users"
})
class User extends Model{
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
    password!:string;

    @BelongsToMany(() => Entity, () => UserEntity)
    entities!:Entity[]
    
    @ForeignKey(() => Teacher)
    @Column
    teacher_id!:number;

    @BelongsTo(() => Teacher)
    teacher!:Teacher


    @BeforeCreate
    @BeforeUpdate
    static hashPassword(instance: User){
        let hash = bcrypt.genSaltSync(10)
       instance.password = bcrypt.hashSync(instance.password, hash);
    }
}

export default User;