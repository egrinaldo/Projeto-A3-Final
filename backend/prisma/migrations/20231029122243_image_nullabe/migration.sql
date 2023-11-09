/*
  Warnings:

  - Made the column `name` on table `Game` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "plataformId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "image" TEXT,
    "name" TEXT NOT NULL,
    "rated" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Jogando',
    CONSTRAINT "Game_plataformId_fkey" FOREIGN KEY ("plataformId") REFERENCES "Platform" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Game_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Game_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Game" ("categoryId", "id", "image", "name", "plataformId", "rated", "status", "userId") SELECT "categoryId", "id", "image", "name", "plataformId", "rated", "status", "userId" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
