import express from "express";
import { routes } from "./api/routes";
import "./models/connection"
import middlewares from "./api/middlewares";
import dotenv from "dotenv"
dotenv.config()
class Server {
    private App:any;
    constructor(){
       this.App = express();
       middlewares(this.App)
       routes(this.App)
    }
    public start(port:number){
        this.App.listen(port, () => console.log("Server Established") )
    }
}


const myServer = new Server();
myServer.start(9999)