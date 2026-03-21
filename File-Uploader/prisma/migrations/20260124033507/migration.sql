/*
  Warnings:

  - Added the required column `publicURL` to the `Files` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Files" ADD COLUMN     "publicURL" TEXT NOT NULL;
