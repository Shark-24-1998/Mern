import './CategoryCard.css'

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <div className="category-card-img-wrap">
        <img
          src={`/images/${category.thumbnail}`}
          alt={category.name}
          width="52"
          height="52"
        />
      </div>
      <h3>{category.name}</h3>
    </div>
  )
}

export default CategoryCard