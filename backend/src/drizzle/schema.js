import { decimal, int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";


export const categories = mysqlTable("categories",{
    id : int("id").primaryKey().autoincrement(),

    name : varchar("name", {length : 150}).notNull(),

    slug : varchar("slug", {length : 150}).notNull().unique(),

    thumbnail : varchar("thumbnail", {length : 500}),

    createdAt : timestamp("created_at").defaultNow(),
})


export const products = mysqlTable("products", {
  id: int("id").primaryKey().autoincrement(),

  name: varchar("name", { length: 200 }).notNull(),

  slug: varchar("slug", { length: 200 }).notNull().unique(),

  description: varchar("description", { length: 500 }),

  longDescription: text("long_description"),

  thumbnail: varchar("thumbnail", { length: 500 }),

  vendorName: varchar("vendor_name", { length: 150 }),

  stock: int("stock").default(0),

  actualPrice: decimal("actual_price", {
    precision: 10,
    scale: 2,
  }).notNull(),

  discountPrice: decimal("discount_price", {
    precision: 10,
    scale: 2,
  }),

  rating: decimal("rating", {
    precision: 3,
    scale: 2,
  }).default("0"),

  // Foreign Key → categories.id
  categoryId: int("category_id")
    .notNull()
    .references(() => categories.id),

  createdAt: timestamp("created_at").defaultNow(),

  updatedAt: timestamp("updated_at").onUpdateNow(),
});