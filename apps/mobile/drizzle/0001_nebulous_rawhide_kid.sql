ALTER TABLE `exercises` ADD `primary_muscle` text NOT NULL;--> statement-breakpoint
ALTER TABLE `exercises` ADD `category` text NOT NULL;--> statement-breakpoint
ALTER TABLE `exercises` ADD `level` text NOT NULL;--> statement-breakpoint
ALTER TABLE `exercises` ADD `force` text;--> statement-breakpoint
ALTER TABLE `exercises` ADD `mechanic` text;--> statement-breakpoint
ALTER TABLE `exercises` DROP COLUMN `type`;