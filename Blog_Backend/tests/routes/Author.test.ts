import request from 'supertest';
import express from 'express';
import { AuthorFrontend } from '../../src/routes/Author-Frontend.ts';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/author", AuthorFrontend);

let token: string;

beforeAll(async () => {
    const res = await request(app)
    .post('/log-in')
    .send({
        username: 'fakeUser',
        password: 'fakePassword',
    });

    token = res.body.token
})

test("Testing Author Frontend Homepage route", done => {
    request(app)
    .get("/")
    .expect("Content-type", /json/)
    .expect(401, done)
});

test("Testing Author Frontend Signup POST route", done => {
    request(app)
    .post("/sign-up")
})

test("Testing User Frontend Login POST route", done => {
    request(app)
    .post("log-in")
    .expect("Content-type", "/json")
})