/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Author_username_key" ON "Author"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
