import { db } from "../config/db.js";
import { products } from "../drizzle/schema.js";

const productsData = [
  {
    name: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    description: "Apple flagship smartphone with A17 chip.",
    longDescription:
      "The iPhone 15 Pro features a titanium body, A17 Bionic chip, advanced camera system, and ultra-smooth performance.",
    thumbnail: "iphone15pro.jpg",
    vendorName: "Apple",
    stock: 50,
    actualPrice: "1299.00",
    discountPrice: "1199.00",
    rating: "4.80",
    categoryId: 1,
  },
  {
    name: "Samsung Galaxy S24",
    slug: "samsung-galaxy-s24",
    description: "Powerful Android flagship phone.",
    longDescription:
      "Galaxy S24 delivers top-tier performance, AMOLED display, and long battery life with premium design.",
    thumbnail: "s24.jpg",
    vendorName: "Samsung",
    stock: 70,
    actualPrice: "999.00",
    discountPrice: "899.00",
    rating: "4.60",
    categoryId: 1,
  },
  {
    name: "MacBook Air M3",
    slug: "macbook-air-m3",
    description: "Ultra-light laptop with Apple M3 chip.",
    longDescription:
      "MacBook Air M3 offers blazing speed, long battery life, and fanless silent design perfect for developers.",
    thumbnail: "macbookm3.jpg",
    vendorName: "Apple",
    stock: 30,
    actualPrice: "1499.00",
    discountPrice: "1399.00",
    rating: "4.90",
    categoryId: 2,
  },
  {
    name: "Dell XPS 15",
    slug: "dell-xps-15",
    description: "Premium Windows laptop.",
    longDescription:
      "Dell XPS 15 comes with stunning OLED display, Intel i9 processor, and sleek aluminum build.",
    thumbnail: "xps15.jpg",
    vendorName: "Dell",
    stock: 25,
    actualPrice: "1799.00",
    discountPrice: "1650.00",
    rating: "4.70",
    categoryId: 2,
  },
  {
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    description: "Industry-leading noise cancelling headphones.",
    longDescription:
      "Sony XM5 provides crystal clear sound, premium comfort, and world-class ANC technology.",
    thumbnail: "sonyxm5.jpg",
    vendorName: "Sony",
    stock: 100,
    actualPrice: "399.00",
    discountPrice: "349.00",
    rating: "4.85",
    categoryId: 3,
  },
  {
    name: "JBL Tune 760NC",
    slug: "jbl-tune-760nc",
    description: "Affordable wireless ANC headphones.",
    longDescription:
      "JBL Tune 760NC gives balanced sound, long battery life, and lightweight comfort.",
    thumbnail: "jbl760.jpg",
    vendorName: "JBL",
    stock: 120,
    actualPrice: "129.00",
    discountPrice: "99.00",
    rating: "4.30",
    categoryId: 3,
  },
  {
    name: "iPad Air 6",
    slug: "ipad-air-6",
    description: "Lightweight powerful tablet.",
    longDescription:
      "iPad Air 6 features M2 chip, vibrant display, and Apple Pencil support.",
    thumbnail: "ipadair6.jpg",
    vendorName: "Apple",
    stock: 60,
    actualPrice: "699.00",
    discountPrice: "649.00",
    rating: "4.75",
    categoryId: 1,
  },
  {
    name: "HP Spectre x360",
    slug: "hp-spectre-x360",
    description: "Convertible premium laptop.",
    longDescription:
      "HP Spectre x360 combines performance and elegance with 2-in-1 flexibility.",
    thumbnail: "spectre360.jpg",
    vendorName: "HP",
    stock: 20,
    actualPrice: "1599.00",
    discountPrice: "1450.00",
    rating: "4.65",
    categoryId: 2,
  },
  {
    name: "Boat Rockerz 550",
    slug: "boat-rockerz-550",
    description: "Budget friendly headphones.",
    longDescription:
      "Boat Rockerz 550 offers punchy bass, stylish design, and long battery life.",
    thumbnail: "rockerz550.jpg",
    vendorName: "Boat",
    stock: 200,
    actualPrice: "59.00",
    discountPrice: "45.00",
    rating: "4.10",
    categoryId: 3,
  },
  {
    name: "Google Pixel 8",
    slug: "google-pixel-8",
    description: "Clean Android experience smartphone.",
    longDescription:
      "Pixel 8 features Tensor chip, best-in-class camera AI, and pure Android updates.",
    thumbnail: "pixel8.jpg",
    vendorName: "Google",
    stock: 40,
    actualPrice: "899.00",
    discountPrice: "829.00",
    rating: "4.55",
    categoryId: 1,
  },
];

const seedProducts = async () => {
  try {
    await db.insert(products).values(productsData);

    console.log("✅ Products seeded successfully");
  } catch (error) {
    console.error("❌ Product seeding failed:", error);
  } finally {
    process.exit(0);
  }
};

seedProducts();