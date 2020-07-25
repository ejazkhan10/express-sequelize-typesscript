import { Table, Column,DataType, ForeignKey, Model } from "sequelize-typescript";
import User from "./user";
import Entity from "./entity";
@Table({
    tableName:"user_entity"
})
class UserEntity extends Model{

    @ForeignKey(() => User)
    @Column
    user_id!:number

    @ForeignKey(() => Entity)
    @Column
    entity_id!:number

}

export default UserEntity;