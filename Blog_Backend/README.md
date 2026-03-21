# Blog-API (Backend)


## Project Structure

```bash
.
├── app.ts
├── generated
├── LICENSE
├── package-lock.json
├── package.json
├── prisma
│   └── schema.prisma
├── prisma.config.ts
├── README.md
├── script.ts
├── src
│   ├── config
│   │   ├── jwtGenerator.ts
│   │   └── jwtStrategy.ts
│   ├── controllers
│   │   ├── Author
│   │   │   ├── CreateBlog.ts
│   │   │   ├── Dashboard.ts
│   │   │   ├── Login.ts
│   │   │   ├── Logout.ts
│   │   │   └── SignUp.ts
│   │   └── User
│   │       ├── CreateComment.ts
│   │       ├── Homepage.ts
│   │       ├── Login.ts
│   │       ├── Logout.ts
│   │       └── SignUp.ts
│   ├── lib
│   │   ├── prisma.ts
│   │   └── queries.ts
│   └── routes
│       ├── Author-Frontend.ts
│       └── User-Frontend.ts
└── tsconfig.json

```

---

## System Architecture

```mermaid
---
config: 
    theme: 'dark'
---

graph TB
    AuthorClient[Author Blog Website]
    UserClient[User Blog Website]
    API[Blog API]
    Database[(PostgreSQL Database)]
    Passport[Passport.js Authenticator]
    Prisma[Prisma ORM]
    
    AuthorClient --> |HTTP Requests| API
    UserClient -->|HTTP Requests| API
    API -->|JWT Authentication| Passport
    API -->|Database Queries| Prisma
    Prisma -->|SQL Queries| Database
    API -->|HTTP Responses| AuthorClient
    API -->|HTTP Responses| UserClient

```

---

##  🛠️ Languages and Tools

### Backend: 
![Typescript](https://img.shields.io/badge/Typescript-_?style=for-the-badge&logo=Typescript&logoColor=%233178C6&labelColor=black&color=%233178C6) ![Node.js](https://img.shields.io/badge/Node.js-_?style=for-the-badge&logo=Node.js&logoColor=%235FA04E&labelColor=black&color=%235FA04E) ![Express](https://img.shields.io/badge/Express-_?style=for-the-badge&logo=Express&labelColor=black&color=%23000000)

### Authentication:  
![Passport](https://img.shields.io/badge/Passport-_?style=for-the-badge&logo=Passport&logoColor=%2334E27A&labelColor=black&color=%2334E27A) ![JSONWebTokens](https://img.shields.io/badge/JSON%20Web%20Tokens-_?style=for-the-badge&logo=JSON%20Web%20Tokens&logoColor=white&labelColor=black&color=white)

### Database: 
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-_?style=for-the-badge&logo=PostgreSQL&logoColor=%234169E1&labelColor=black&color=%234169E1) ![Prisma](https://img.shields.io/badge/Prisma-_?style=for-the-badge&logo=Prisma&logoColor=%232D3748&labelColor=black&color=%232D3748)

### Testing: 
![Static Badge](https://img.shields.io/badge/Jest-_?style=for-the-badge&logo=Jest&logoColor=%23C21325&labelColor=black&color=%23C21325)![Static Badge](https://img.shields.io/badge/Docker-_?style=for-the-badge&logo=Docker&logoColor=%232496ED&labelColor=black&color=%232496ED)


---

## How to Run

1. Clone the repository
```bash
git clone
```

2. Install dependencies
```bash
npm install
```

3. Run Development Server
```bash
node app.ts
```

4. Open `http://localhost:8080` in your browser
