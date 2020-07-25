import morgan from "morgan";
import passport from "passport";
import passportLocal from "../../services/auth/passport/local/passport-local";
passportLocal(passport)
export default function middlewares (app:any){
    app.use(morgan("tiny"));
    app.use(passport.initialize())
}