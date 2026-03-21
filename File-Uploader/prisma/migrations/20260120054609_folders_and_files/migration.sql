-- CreateTable
CREATE TABLE "Folders" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Folders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Files" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "folderId" TEXT NOT NULL,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Folders" ADD CONSTRAINT "Folders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
