import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { ReadIndividualUser, ReadIndividualAuthor } from '../lib/queries.ts';
import "dotenv/config";


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY || ''
}

interface JwtPayload {
  id: string;
  username: string;
}

interface DoneCallback {
  (error: Error | null, user?: any | false): void;
}


passport.use("UserJwtStrategy", new JwtStrategy(opts, async (payload: JwtPayload, done: DoneCallback) => {
  try{
    const user = await ReadIndividualUser(payload.username);
    if (!user) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  } catch (error){
      return done(error as Error, false)
  }
}))

passport.use("AuthorJwtStrategy", new JwtStrategy(opts, async (payload: JwtPayload, done: DoneCallback) => {
  try{
    const author = await ReadIndividualAuthor(payload.username);
    if(!author) {
      return done(null, false);
    } else {
      return done(null, author);
    }
  } catch (error){
    return done(error as Error, false);
  }
}))