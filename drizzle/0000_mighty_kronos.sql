CREATE TYPE "public"."guest_status" AS ENUM('pending', 'accepted', 'declined');--> statement-breakpoint
CREATE TABLE "guests" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"status" "guest_status" NOT NULL,
	"phone" varchar NOT NULL,
	"observation" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
