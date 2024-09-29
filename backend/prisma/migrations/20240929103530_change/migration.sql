/*
  Warnings:

  - Made the column `userAgent` on table `Hits` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userIp` on table `Hits` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Hits" ALTER COLUMN "userAgent" SET NOT NULL,
ALTER COLUMN "userIp" SET NOT NULL;
