CREATE TABLE `programs` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`program_id` text,
	`name` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
DROP INDEX "users_email_unique";--> statement-breakpoint
ALTER TABLE `exercises` ALTER COLUMN "primary_muscle" TO "primary_muscle" text;--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
ALTER TABLE `exercises` ALTER COLUMN "category" TO "category" text;--> statement-breakpoint
ALTER TABLE `exercises` ALTER COLUMN "level" TO "level" text;