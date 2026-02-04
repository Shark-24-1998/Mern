import { count, eq } from "drizzle-orm"
import { db } from "../config/db.js"
import { products } from "../drizzle/schema.js"


export const getAllProducts = async(req , res) =>{
    try{
        const data = await db.select().from(products)

        return res.status(200).json({
            success:true,
            count : data.length,
            data
        })
    }catch(error){
            console.log("Error Fetching Products", error)

            return res.status(500).json({
                success : false,
                message : "Interval Server Error"
            })
        }
}

export const getProductBySlug = async(req , res) =>{
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
        .from(products)
        .where(eq(products.slug , slug))

        if(data.length === 0 ){
            res.status(404).json({
                success : false,
                message : "Product not found"
            })
        }

        return res.status(200).json({
            success : true,
            data : data[0]
        })

    }catch(error){
        console.error("Error Fetching Product", error)

        res.status(500).json({
            success : false,
            message : "Interval server Error"
        })
    }
}