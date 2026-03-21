import request from 'supertest';
import express from 'express';
import { UserFrontend } from '../../src/routes/User-Frontend.ts';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/user", UserFrontend);

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

test("Testing User Frontend Homepage GET route", async () => {
    await request(app)
    .get("/")
    .expect("Authorization", `Bearer ${token}`)
    .expect(200)
});

test("Testing User Frontend Dashboard GET route", done => {
    request(app)
    .get("/dashboard")
    .expect("Content-Type", /json/)
    .expect("Authorization", `Bearer ${token}`)
    .expect(200)
})

test("Testing User Frontend Create Comment GET route", done => {
    request(app)
    .get("/comment")
    .expect("Content-type", /json/)
    .expect("Authorization", `Bearer ${token}`)
    .expect(200)
})

test("Testing User Frontend Create Comment POST route", done => {
    request(app)
    .post("/create-blog")
    .expect("Authorization", `Bearer ${token}`)
    .type('json')
    .send({content: "Mock Content"})
    .then(() => {
        request("/")
    })
    
})
