import { useEffect, useState } from "react"
import CategoryCard from "./categoryCard"

export const Categories = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/categories")
                const result = await res.json()
                setCategories(result.data)
            } catch (error) {
                console.log("Error Fetching Categories : ", error)
            } finally {
                setLoading(false)
            }
        }
        fetchCategories()
    }, [])

    if (loading) return <p>Loading Categories....</p>

    return (
        <div className="categories-grid">  {/* ✅ correct class name */}
            {categories.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
            ))}
        </div>
    )
}