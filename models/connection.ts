import {Sequelize} from "sequelize-typescript"
import { models } from "./all";

let sequelize = new Sequelize({
    dialect:"sqlite",
    storage:"database.sqlite",
    logging:true,
    models:models
})


export default sequelize;

