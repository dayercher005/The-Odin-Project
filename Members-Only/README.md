## Project Structure
```bash
.
├── app.js
├── package-lock.json
├── package.json
├── public
│   └── styles.css
├── README.md
└── src
    ├── config
    │   └── passport.js
    ├── controllers
    │   ├── Error
    │   │   └── error.js
    │   ├── Log-In
    │   │   ├── renderForm.js
    │   │   └── sendForm.js
    │   ├── Log-Out
    │   │   └── log-out.js
    │   ├── MessagesPage
    │   │   └── renderIndex.js
    │   └── Sign-Up
    │       ├── renderForm.js
    │       └── sendForm.js
    ├── db
    │   ├── pool.js
    │   ├── Queries
    │   │   ├── Create.js
    │   │   ├── Delete.js
    │   │   ├── Read.js
    │   │   └── Update.js
    │   └── seed.js
    ├── routes
    │   ├── Error
    │   │   └── error.js
    │   ├── Log-In
    │   │   └── log-in.js
    │   ├── Log-Out
    │   │   └── log-out.js
    │   ├── MessagesPage
    │   │   └── index.js
    │   └── Sign-Up
    │       └── sign-up.js
    └── views
        ├── CreateNewMessage
        │   └── createNewMessage.ejs
        ├── Log-In
        │   └── log-in.ejs
        ├── MessagesPage
        │   └── index.ejs
        ├── partials
        │   ├── error.ejs
        │   └── navbar.ejs
        └── Sign-Up
            └── sign-up.ejs

```
---


## How to Run

1. Clone the repository:
```bash
git clone 
```

2. Install dependencies
```bash
npm install
```

3. Start Development Server:
```bash
node app.js
```

4. Open `http://localHost:8080` in your browser

---

*Part of The Odin Project's [NodeJS Course]
([https://www.theodinproject.com/lessons/node-path-nodejs-members-only])*
