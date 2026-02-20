import { count, eq } from "drizzle-orm"
import { db } from "../config/db.js"
import {categories} from "../drizzle/schema.js"

export const getAllCategories = async(req, res) =>{
    try{
        const data = await db.select().from(categories)

        return res.status(200).json({
            success : true,
            count : data.length,
            data
        })
 
    }catch(error){
        console.error("Error Fetching categories", error)

        return res.status(500).json({
            success: false,
            message : "Internal Server Error"
        })
    }
}

export const getCategoryBySlug = async(req, res) => {
    try{
        const { slug } = req.params;

        if(!slug){
            res.status(400).json({
                success : false,
                message : "Slug is required"
            })
        }

        const data = await db
        .select()
        .from(categories).
        where(eq(categories.slug , slug));

        if(data.length === 0){
            res.status(404).json({
                success : false,
                message : "Category not found"
            })
        }

        return res.status(200).json({
            success : true,
            data : data[0]
        });

    }catch(error){
        console.error("Error fetching category", error)

        res.status(500).json({
            success : false,
            message : "Internal Server Error"
        })
    }
}