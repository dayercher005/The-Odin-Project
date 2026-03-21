import jwt from 'jsonwebtoken';
import "dotenv/config";

export function generateJWT(ID: string, username: string){
    const payload = {
        id: ID,
        username: username
    }
    const secretOrPrivateKey = process.env.SECRET_KEY || '';
    const token = jwt.sign(payload, secretOrPrivateKey, { expiresIn: "10h" });
    return token
}