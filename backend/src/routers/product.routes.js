import express from "express";
import { getAllProducts, getProductBySlug } from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:slug", getProductBySlug)

export default router