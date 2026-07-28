CREATE TABLE `programs` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`last_uploaded_at` integer
);
--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_exercises` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`primary_muscle` text,
	`equipment` text,
	`category` text,
	`level` text,
	`force` text,
	`mechanic` text,
	`is_custom` integer DEFAULT false NOT NULL,
	`owner_id` text,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_exercises`("id", "name", "primary_muscle", "equipment", "category", "level", "force", "mechanic", "is_custom", "owner_id", "updated_at") SELECT "id", "name", "primary_muscle", "equipment", "category", "level", "force", "mechanic", "is_custom", "owner_id", "updated_at" FROM `exercises`;--> statement-breakpoint
DROP TABLE `exercises`;--> statement-breakpoint
ALTER TABLE `__new_exercises` RENAME TO `exercises`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
ALTER TABLE `routines` ADD `program_id` text;