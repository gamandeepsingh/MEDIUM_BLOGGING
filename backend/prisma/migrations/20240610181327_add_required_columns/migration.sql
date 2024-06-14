
-- Add default values for the existing rows
ALTER TABLE "Post"
ADD COLUMN "category" VARCHAR(255) DEFAULT 'user';

ALTER TABLE "Post"
ADD COLUMN "updatedAt" TIMESTAMPTZ DEFAULT now();

-- Update existing rows with NULL name in User table
UPDATE "User" SET "name" = 'user' WHERE "name" IS NULL;

-- Change the schema
ALTER TABLE "Post"
ALTER COLUMN "category" SET NOT NULL;

ALTER TABLE "Post"
ALTER COLUMN "updatedAt" SET NOT NULL;

ALTER TABLE "User"
ALTER COLUMN "name" SET NOT NULL;
