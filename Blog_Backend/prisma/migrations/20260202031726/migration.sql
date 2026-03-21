/*
  Warnings:

  - A unique constraint covering the columns `[id,username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userUsername` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userID_fkey";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "userUsername" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_id_username_key" ON "User"("id", "username");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userID_userUsername_fkey" FOREIGN KEY ("userID", "userUsername") REFERENCES "User"("id", "username") ON DELETE RESTRICT ON UPDATE CASCADE;
