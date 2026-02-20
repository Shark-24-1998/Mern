import {db} from "../config/db.js"
import {categories} from "../drizzle/schema.js"

const categoriesData = [
    {
        name : "Mobiles",
        slug : "mobiles",
        thumbnail : "mobiles.jpg"
    },
    {
        name : "Laptops",
        slug : "laptops",
        thumbnail : "laptops.jpg"
    },
    {
        name : "Headphones",
        slug : "headphones",
        thumbnail : "headphones.jpg"
    }
]
 
const seedCategories = async() =>{
    try{
      console.log("Seeding Categories")
        
      await db.insert(categories).values(categoriesData) 

      console.log("Categories seeded successfully")

    }catch(error){

        console.log("Seeding Failed", error)

        process.exit(1)

    }finally{

        process.exit(0)

    }
}

seedCategories();