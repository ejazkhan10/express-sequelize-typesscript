import userController from "./controllers/user.controller"
import { Request,Response } from "express"

export function routes(app:any){
    app.get("/hello", (req:Request,res:Response) => {
        userController.getAll(req,res)
    })
    app.post("/create", (req:Request,res:Response) => {
        userController.create(req,res)
    })

    app.post("/create2", (req:Request, res:Response) => {
        userController.create2(req,res)
    })
}