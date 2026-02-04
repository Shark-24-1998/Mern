CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(200) NOT NULL,
	`slug` varchar(200) NOT NULL,
	`description` varchar(500),
	`long_description` text,
	`thumbnail` varchar(500),
	`vendor_name` varchar(150),
	`stock` int DEFAULT 0,
	`actual_price` decimal(10,2) NOT NULL,
	`discount_price` decimal(10,2),
	`rating` decimal(3,2) DEFAULT '0',
	`category_id` int NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `products_id` PRIMARY KEY(`id`),
	CONSTRAINT `products_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_categories_id_fk` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE no action ON UPDATE no action;