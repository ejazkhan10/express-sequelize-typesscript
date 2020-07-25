
import { Table,Model, Column, HasMany } from "sequelize-typescript";
import User from "./user";


@Table({
  tableName:"Teachers"
})
class Teacher extends Model{
  

  @Column({
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  })
  id!:number;


  @Column
  name!:string

  @HasMany(() => User)
  users!:User[]
}


export default Teacher