import { Request, Response } from "express"
import User from "../../models/user"
import jwt from "jsonwebtoken"
import Entity from "../../models/entity";
import Teacher from "../../models/teacher";

class UserController {
    async getAll(req:Request,res:Response):Promise<any>{
        const user = await User.findOne({where : {id:12}})
        const entities = await user?.$get("entities");
        console.log(entities)
        let token = await jwt.sign({user:user}, "123", {expiresIn:3600});
        return res.status(200).json(user);
    }

    async create(req:Request, res:Response):Promise<any>{

        // let entity = new Entity();
        // entity.name = "Hijack";
        // entity.country = "Pakistan"
        // let entity2 = new Entity();
        // entity2.name = "Hijack2";
        // entity2.country = "Pakistan";
        // await entity.save();
        // await entity2.save();
        let user = new User();
        user.name = "polo"
        user.password = "1234567"
        await user.save();
        // await user.$set("entities", [entity,entity2])
        

        return res.status(200).json(user)
    }

    async create2(req:Request, res:Response):Promise<any>{
        let teacher = new Teacher();
        teacher.name = "Asfand";
        await teacher.save();
        const user = await User.findOne({where : {id:12}})
        if(user){
           await teacher.$set("users", [user]);
        }
        return res.status(200).json(teacher);


    }
}


export default new UserController