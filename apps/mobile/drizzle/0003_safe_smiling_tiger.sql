CREATE TABLE `exercise_translations` (
	`id` text PRIMARY KEY NOT NULL,
	`exercise_id` text NOT NULL,
	`locale` text NOT NULL,
	`name` text NOT NULL
);
