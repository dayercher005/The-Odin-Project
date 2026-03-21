/*
  Warnings:

  - A unique constraint covering the columns `[id,username]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorUsername` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorID_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "authorUsername" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Author_id_username_key" ON "Author"("id", "username");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorID_authorUsername_fkey" FOREIGN KEY ("authorID", "authorUsername") REFERENCES "Author"("id", "username") ON DELETE RESTRICT ON UPDATE CASCADE;
