import { Strategy as LocalStrategy } from 'passport-local';
import "dotenv/config";
import { prisma } from '../lib/prisma.ts';
import passport from 'passport';
import bcrypt from 'bcryptjs';


passport.use(
    new LocalStrategy(({usernameField: 'email'}), async (email:string, password:string, done: any) => {
        try{
            const user = await prisma.user.findUnique({
                where: {
                    email: email,
                }
            })

            if (!user){
                return done(null, false, {message: "Incorrect Username"})
            }

            const match = await bcrypt.compare(password, user.password);
            if (!match){
                return done(null, false, {message: "Incorrect password"})
            }
            return done(null, user);

        } catch(error){
            return done(error)
        }
    })
)

passport.serializeUser((member: any, done: any) => {
    done(null, member.id);
})

passport.deserializeUser( async (id: string, done: any) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            }
        })
        done(null, user);
    } catch(error){
        done(error)
    }
})

