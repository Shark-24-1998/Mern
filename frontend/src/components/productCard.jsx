import { useState } from 'react'
import { FiShoppingCart, FiStar, FiEye, FiHeart, FiZap } from 'react-icons/fi'

const ProductCard = ({ product }) => {
    const [wishlisted, setWishlisted] = useState(false)

    const discount = Math.round(
        ((product.actualPrice - product.discountPrice) / product.actualPrice) * 100
    )

    return (
        <div className="pcard">
            {/* Badges */}
            <div className="pcard-badges">
                {discount > 0 && <span className="pcard-badge pcard-badge-sale">-{discount}%</span>}
                {product.stock < 10 && <span className="pcard-badge pcard-badge-low">Low Stock</span>}
            </div>

            {/* Wishlist */}
            <button
                className={`pcard-wishlist ${wishlisted ? 'active' : ''}`}
                onClick={() => setWishlisted(!wishlisted)}
                aria-label="Wishlist"
            >
                <FiHeart />
            </button>

            {/* Image */}
            <div className="pcard-img-wrap">
                <div className="pcard-img-wrap">
                    {product.thumbnail ? (
                        <img
                            src={`http://localhost:8000/products/${product.thumbnail}`}
                            alt={product.name}
                            onError={e => {
                                e.target.onError = null
                                e.target.style.display = 'none'
                            }}
                        />
                    ) : null}
                </div>
                <div className="pcard-overlay">
                    <a href={`/products/${product.slug}`} className="pcard-view-btn">
                        <FiEye /> Quick View
                    </a>
                </div>
            </div>

            {/* Info */}
            <div className="pcard-info">
                <div className="pcard-meta">
                    <span className="pcard-vendor">{product.vendorName}</span>
                    <div className="pcard-rating">
                        <FiStar className="pcard-star" />
                        <span>{parseFloat(product.rating).toFixed(1)}</span>
                    </div>
                </div>

                <h3 className="pcard-name">{product.name}</h3>
                <p className="pcard-desc">{product.description}</p>

                <div className="pcard-footer">
                    <div className="pcard-prices">
                        <span className="pcard-price">${parseFloat(product.discountPrice).toFixed(2)}</span>
                        {discount > 0 && (
                            <span className="pcard-actual">${parseFloat(product.actualPrice).toFixed(2)}</span>
                        )}
                    </div>
                    <button className="pcard-cart-btn" aria-label="Add to cart">
                        <FiShoppingCart />
                    </button>
                </div>

                <a href={`/products/${product.slug}`} className="pcard-detail-btn">
                    <FiZap /> View Full Details
                </a>
            </div>
        </div>
    )
}

export default ProductCard