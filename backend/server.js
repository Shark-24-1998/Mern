import express from "express";
import { db } from "./src/config/db.js";
import categoryRoutes from "./src/routers/category.routes.js"
import productRoutes from "./src/routers/product.routes.js"
import cors from "cors"

const app = express();
const PORT = process.env.PORT;

app.use(cors())

// app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}))
 
app.use("/api/categories", categoryRoutes)

app.use("/api/products", productRoutes)

app.get("/api/ecom", async(req, res)=>{
   try{
    await db.execute("SELECT 1");

    res.json({
        success : true,
        message : "Server & Database are Healthy" 
    })

   }catch(error){
    res.status(500).json({
        success : false,
        message : "Database Connection Failed"
    })
   }
})

app.listen(PORT, () => {
    console.log(`Server is runnnig at port : ${PORT}`)
})