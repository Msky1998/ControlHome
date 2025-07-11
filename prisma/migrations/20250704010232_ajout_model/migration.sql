-- CreateTable
CREATE TABLE "CapteurData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "device" TEXT NOT NULL DEFAULT 'espSalon',
    "temperature" REAL NOT NULL,
    "smoke" INTEGER NOT NULL,
    "flame" BOOLEAN NOT NULL,
    "alert" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
