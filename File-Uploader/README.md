# File-Uploader

![Screenshot of Webpage](./public/images/preview.png)
---

## Project Structure 

```bash
.
├── app.ts
├── generated
├── package-lock.json
├── package.json
├── prisma
│   ├── migrations
│   │   ├── 20260114024502_init
│   │   │   └── migration.sql
│   │   ├── 20260114080238_init
│   │   │   └── migration.sql
│   │   ├── 20260115153739_init
│   │   │   └── migration.sql
│   │   ├── 20260119131317
│   │   │   └── migration.sql
│   │   ├── 20260119144019
│   │   │   └── migration.sql
│   │   ├── 20260120054609_folders_and_files
│   │   │   └── migration.sql
│   │   ├── 20260121063751
│   │   │   └── migration.sql
│   │   ├── 20260123131155_cascade
│   │   │   └── migration.sql
│   │   ├── 20260124033507
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── prisma.config.ts
├── public
│   ├── data
│   │   └── uploads
│   ├── images
│   │   ├── back.svg
│   │   ├── collaborate.svg
│   │   ├── file.png
│   │   ├── folder.svg
│   │   ├── preview.png
│   │   ├── private.svg
│   │   └── upload.svg
│   └── styles.css
├── README.md
├── script.ts
├── src
│   ├── config
│   │   ├── authenticateRoute.ts
│   │   ├── passport.ts
│   │   └── supabase.ts
│   ├── controllers
│   │   ├── CreateFile
│   │   │   ├── renderCreateFileForm.ts
│   │   │   └── sendCreateFileForm.ts
│   │   ├── CreateFolder
│   │   │   ├── renderCreateFolderForm.ts
│   │   │   └── sendCreateFolderForm.ts
│   │   ├── Dashboard
│   │   │   ├── deleteIndividualFile.ts
│   │   │   ├── deleteIndividualFolder.ts
│   │   │   ├── renderDashboardPage.ts
│   │   │   ├── renderIndividualFile.ts
│   │   │   └── renderIndividualFolder.ts
│   │   ├── Homepage
│   │   │   └── homepage.ts
│   │   ├── Log-In
│   │   │   ├── renderLogInForm.ts
│   │   │   └── sendLogInForm.ts
│   │   ├── Log-Out
│   │   │   └── log-out.ts
│   │   └── Sign-Up
│   │       ├── renderSignUpForm.ts
│   │       └── sendSignUpForm.ts
│   ├── lib
│   │   ├── prisma.ts
│   │   └── queries.ts
│   ├── routes
│   │   ├── CreateFolder
│   │   │   └── createFolder.ts
│   │   ├── Dashboard
│   │   │   └── dashboard.ts
│   │   ├── Homepage
│   │   │   └── homepage.ts
│   │   ├── Log-In
│   │   │   └── log-in.ts
│   │   ├── Log-Out
│   │   │   └── log-out.ts
│   │   └── Sign-Up
│   │       └── sign-up.ts
│   └── views
│       ├── CreateFile
│       │   └── createFile.ejs
│       ├── CreateFolder
│       │   └── createFolder.ejs
│       ├── Dashboard
│       │   ├── dashboard.ejs
│       │   ├── file.ejs
│       │   └── folder.ejs
│       ├── Home
│       │   └── home.ejs
│       ├── Log-In
│       │   └── log-in.ejs
│       ├── partials
│       │   ├── authenticatedNavbar.ejs
│       │   ├── dashboardNavbar.ejs
│       │   ├── error.ejs
│       │   └── unauthenticatedNavbar.ejs
│       └── Sign-Up
│           └── sign-up.ejs
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
    Client[Browser Client]
    Server[Express.js Server]
    DB[(PostgreSQL Database)]
    Cloud[Supabase Storage]
    Multer[Multer Middleware]
    Passport[Passport.js Auth]
    Prisma[Prisma ORM]
    
    Client -->|HTTP Requests| Server
    Server -->|Session Management| Passport
    Passport -->|Read/Write Sessions| Prisma
    Server -->|File Upload| Multer
    Multer -->|Store Files| Cloud
    Server -->|Database Queries| Prisma
    Prisma -->|SQL Queries| DB
    Cloud -->|File URLs| Server
    Server -->|HTTP Responses| Client
```

---

## Tech Stack 

![Static Badge](https://img.shields.io/badge/Typescript-_?style=for-the-badge&logo=Typescript&logoColor=%233178C6&labelColor=black&color=%233178C6)     ![Static Badge](https://img.shields.io/badge/EJS-_?style=for-the-badge&logo=EJS&logoColor=%23B4CA65&labelColor=black&color=%23B4CA65)   ![Static Badge](https://img.shields.io/badge/Express-_?style=for-the-badge&logo=Express&labelColor=black&color=%23000000)   ![Static Badge](https://img.shields.io/badge/Passport-_?style=for-the-badge&logo=Passport&logoColor=%2334E27A&labelColor=black&color=%2334E27A)
    ![Static Badge](https://img.shields.io/badge/PostgreSQL-_?style=for-the-badge&logo=PostgreSQL&logoColor=%234169E1&labelColor=black&color=%234169E1)     ![Static Badge](https://img.shields.io/badge/Prisma-_?style=for-the-badge&logo=Prisma&logoColor=%232D3748&labelColor=black&color=%232D3748)     ![Static Badge](https://img.shields.io/badge/Supabase-_?style=for-the-badge&logo=Supabase&logoColor=%233FCF8E&labelColor=black&color=%233FCF8E)


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
node app.ts
```

4. Open `http://localHost:8080` in your browser

---

*Part of The Odin Project's [NodeJS Course]
([https://www.theodinproject.com/lessons/nodejs-file-uploader])*