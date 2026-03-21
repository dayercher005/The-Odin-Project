-- DropForeignKey
ALTER TABLE "Files" DROP CONSTRAINT "Files_folderId_fkey";

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
