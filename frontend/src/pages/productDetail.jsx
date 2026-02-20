import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import {
  FiArrowLeft, FiShoppingCart, FiHeart, FiShare2,
  FiStar, FiShield, FiTruck, FiRefreshCw, FiZap,
  FiPackage, FiCheckCircle, FiMinus, FiPlus
} from 'react-icons/fi'

const ProductDetail = () => {
  const { slug }       = useParams()
  const navigate       = useNavigate()
  const [product, setProduct]   = useState(null)
  const [loading, setLoading]   = useState(true)
  const [qty, setQty]           = useState(1)
  const [wishlisted, setWishlisted] = useState(false)
  const [activeTab, setActiveTab]   = useState('description')
  const [added, setAdded]           = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res    = await fetch(`http://localhost:8000/api/products/${slug}`)
        const result = await res.json()
        setProduct(result.data)
      } catch (error) {
        console.log('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [slug])

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const discount = product
    ? Math.round(((product.actualPrice - product.discountPrice) / product.actualPrice) * 100)
    : 0

  const stars = product ? parseFloat(product.rating) : 0

  /* ── Loading skeleton ── */
  if (loading) return (
    <div className="pd-page">
      <div className="pd-skeleton-wrap">
        <div className="pd-skeleton pd-skeleton-img"></div>
        <div className="pd-skeleton-info">
          <div className="pd-skeleton pd-skeleton-title"></div>
          <div className="pd-skeleton pd-skeleton-line"></div>
          <div className="pd-skeleton pd-skeleton-line short"></div>
          <div className="pd-skeleton pd-skeleton-price"></div>
          <div className="pd-skeleton pd-skeleton-btn"></div>
        </div>
      </div>
    </div>
  )

  /* ── Not found ── */
  if (!product) return (
    <div className="pd-page pd-not-found">
      <FiPackage />
      <h2>Product not found</h2>
      <button className="btn-primary" onClick={() => navigate('/product')}>
        <FiArrowLeft /> Back to Products
      </button>
    </div>
  )

  return (
    <div className="pd-page">

      {/* ── Breadcrumb ── */}
      <div className="pd-breadcrumb">
        <button onClick={() => navigate('/')} className="pd-breadcrumb-link">Home</button>
        <span className="pd-breadcrumb-sep">/</span>
        <button onClick={() => navigate('/product')} className="pd-breadcrumb-link">Products</button>
        <span className="pd-breadcrumb-sep">/</span>
        <span className="pd-breadcrumb-current">{product.name}</span>
      </div>

      {/* ── Main detail grid ── */}
      <div className="pd-grid">

        {/* ── Left: Image panel ── */}
        <div className="pd-image-panel">
          <div className="pd-image-wrap">
            {/* Glow behind image */}
            <div className="pd-image-glow"></div>
            {product.thumbnail ? (
              <img
                src={`http://localhost:8000/uploads/${product.thumbnail}`}
                alt={product.name}
                className="pd-image"
                onError={e => { e.target.onError = null; e.target.style.display = 'none' }}
              />
            ) : (
              <div className="pd-image-placeholder">
                <FiPackage />
                <span>No Image</span>
              </div>
            )}

            {/* Badges on image */}
            <div className="pd-image-badges">
              {discount > 0 && (
                <span className="pd-badge pd-badge-sale">-{discount}% OFF</span>
              )}
              {product.stock < 10 && product.stock > 0 && (
                <span className="pd-badge pd-badge-low">Only {product.stock} left</span>
              )}
              {product.stock === 0 && (
                <span className="pd-badge pd-badge-out">Out of Stock</span>
              )}
            </div>
          </div>

          {/* Trust signals below image */}
          <div className="pd-trust-row">
            <div className="pd-trust-item">
              <FiShield />
              <span>2 Year Warranty</span>
            </div>
            <div className="pd-trust-item">
              <FiTruck />
              <span>Free Shipping</span>
            </div>
            <div className="pd-trust-item">
              <FiRefreshCw />
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>

        {/* ── Right: Info panel ── */}
        <div className="pd-info-panel">

          {/* Vendor + rating */}
          <div className="pd-meta-row">
            <span className="pd-vendor">{product.vendorName}</span>
            <div className="pd-rating-wrap">
              <div className="pd-stars">
                {[1,2,3,4,5].map(i => (
                  <FiStar
                    key={i}
                    className={`pd-star ${i <= Math.round(stars) ? 'filled' : ''}`}
                  />
                ))}
              </div>
              <span className="pd-rating-num">{stars.toFixed(1)}</span>
            </div>
          </div>

          {/* Name */}
          <h1 className="pd-name">{product.name}</h1>

          {/* Short description */}
          <p className="pd-short-desc">{product.description}</p>

          {/* Price block */}
          <div className="pd-price-block">
            <span className="pd-price">${parseFloat(product.discountPrice).toFixed(2)}</span>
            {discount > 0 && (
              <>
                <span className="pd-actual-price">${parseFloat(product.actualPrice).toFixed(2)}</span>
                <span className="pd-saving">
                  <FiZap /> You save ${(product.actualPrice - product.discountPrice).toFixed(2)}
                </span>
              </>
            )}
          </div>

          {/* Stock indicator */}
          <div className="pd-stock-row">
            <div className={`pd-stock-dot ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}></div>
            <span className="pd-stock-text">
              {product.stock > 0 ? `In Stock — ${product.stock} units available` : 'Out of Stock'}
            </span>
          </div>

          <div className="pd-divider"></div>

          {/* Quantity selector */}
          <div className="pd-qty-row">
            <span className="pd-qty-label">Quantity</span>
            <div className="pd-qty-control">
              <button
                className="pd-qty-btn"
                onClick={() => setQty(q => Math.max(1, q - 1))}
                disabled={qty <= 1}
              >
                <FiMinus />
              </button>
              <span className="pd-qty-value">{qty}</span>
              <button
                className="pd-qty-btn"
                onClick={() => setQty(q => Math.min(product.stock, q + 1))}
                disabled={qty >= product.stock}
              >
                <FiPlus />
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pd-actions">
            <button
              className={`pd-add-btn ${added ? 'added' : ''}`}
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {added ? (
                <><FiCheckCircle /> Added to Cart</>
              ) : (
                <><FiShoppingCart /> Add to Cart</>
              )}
            </button>
            <button
              className={`pd-wishlist-btn ${wishlisted ? 'active' : ''}`}
              onClick={() => setWishlisted(w => !w)}
              aria-label="Wishlist"
            >
              <FiHeart />
            </button>
            <button className="pd-share-btn" aria-label="Share">
              <FiShare2 />
            </button>
          </div>

          {/* Buy now */}
          {product.stock > 0 && (
            <button className="pd-buynow-btn">
              <FiZap /> Buy Now
            </button>
          )}

          <div className="pd-divider"></div>

          {/* Specs quick list */}
          <div className="pd-specs-quick">
            <div className="pd-spec-row">
              <span className="pd-spec-key">Brand</span>
              <span className="pd-spec-val">{product.vendorName}</span>
            </div>
            <div className="pd-spec-row">
              <span className="pd-spec-key">Category</span>
              <span className="pd-spec-val">{product.categoryId}</span>
            </div>
            <div className="pd-spec-row">
              <span className="pd-spec-key">SKU</span>
              <span className="pd-spec-val">{product.slug}</span>
            </div>
            <div className="pd-spec-row">
              <span className="pd-spec-key">Availability</span>
              <span className={`pd-spec-val ${product.stock > 0 ? 'green' : 'red'}`}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs: Description / Specs ── */}
      <div className="pd-tabs-section">
        <div className="pd-tabs-header">
          {['description', 'specifications', 'reviews'].map(tab => (
            <button
              key={tab}
              className={`pd-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="pd-tabs-body">
          {activeTab === 'description' && (
            <div className="pd-tab-content">
              <p className="pd-long-desc">
                {product.longDescription || product.description}
              </p>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="pd-tab-content">
              <div className="pd-specs-table">
                <div className="pd-specs-row">
                  <span>Brand</span><span>{product.vendorName}</span>
                </div>
                <div className="pd-specs-row">
                  <span>Model</span><span>{product.name}</span>
                </div>
                <div className="pd-specs-row">
                  <span>Rating</span><span>{stars.toFixed(1)} / 5</span>
                </div>
                <div className="pd-specs-row">
                  <span>Stock</span><span>{product.stock} units</span>
                </div>
                <div className="pd-specs-row">
                  <span>Listed</span>
                  <span>{new Date(product.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="pd-tab-content pd-reviews-placeholder">
              <FiStar className="pd-reviews-icon" />
              <h3>No reviews yet</h3>
              <p>Be the first to review this product.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default ProductDetail