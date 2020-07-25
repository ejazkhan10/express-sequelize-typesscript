import dotenv from "dotenv";
import {Strategy,ExtractJwt} from "passport-jwt"


dotenv.config()

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "123"
}

export default function passportLocal(passport: any) {
    passport.use('user',
    new Strategy(opts, ((payload:any, done:any) => {
        done(true, {})
    })))
}