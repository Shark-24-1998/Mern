import { useEffect, useState, useMemo } from 'react'
import {
  FiSearch, FiSliders, FiX, FiChevronDown, FiChevronUp,
  FiGrid, FiList, FiPackage
} from 'react-icons/fi'
import ProductCard from './productCard'

/* ══════════════════════════════════════════════════
   1. CONSTANTS
══════════════════════════════════════════════════ */
const BRANDS = ['Apple', 'Samsung', 'Sony', 'Dell', 'LG', 'Bose']
const CATEGORIES = ['Mobiles', 'Laptops', 'Headphones', 'Accessories']
const SORT_OPTIONS = [
  { label: 'Newest First',      value: 'newest' },
  { label: 'Price: Low → High', value: 'price_asc' },
  { label: 'Price: High → Low', value: 'price_desc' },
  { label: 'Top Rated',         value: 'rating' },
  { label: 'Best Discount',     value: 'discount' },
]

/* ══════════════════════════════════════════════════
   2. FILTER SECTION
══════════════════════════════════════════════════ */
const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="filter-section">
      <button className="filter-section-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {open && <div className="filter-section-body">{children}</div>}
    </div>
  )
}

/* ══════════════════════════════════════════════════
   3. SIDEBAR  (defined outside Products — no re-mount on state change)
══════════════════════════════════════════════════ */
const Sidebar = ({
  sidebarOpen, setSidebarOpen,
  hasActiveFilters, clearFilters,
  search, setSearch,
  selectedCategories, toggleCategory,
  selectedBrands, toggleBrand,
  priceRange, setPriceRange,
  sortBy, setSortBy,
}) => (
  <aside className={`products-sidebar ${sidebarOpen ? 'open' : ''}`}>
    <div className="sidebar-header">
      <span className="sidebar-title"><FiSliders /> Filters</span>
      {hasActiveFilters && (
        <button className="sidebar-clear" onClick={clearFilters}>Clear All</button>
      )}
      <button className="sidebar-close-mobile" onClick={() => setSidebarOpen(false)}>
        <FiX />
      </button>
    </div>

    {/* Search */}
    <FilterSection title="Search">
      <div className="sidebar-search-wrap">
        <FiSearch className="sidebar-search-icon" />
        <input
          type="text"
          className="sidebar-search"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button className="sidebar-search-clear" onClick={() => setSearch('')}>
            <FiX />
          </button>
        )}
      </div>
    </FilterSection>

    {/* Categories */}
    <FilterSection title="Categories">
      <div className="filter-chips">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filter-chip ${selectedCategories.includes(cat) ? 'active' : ''}`}
            onClick={() => toggleCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </FilterSection>

    {/* Brands */}
    <FilterSection title="Brands">
      <div className="filter-checkboxes">
        {BRANDS.map(brand => (
          <label key={brand} className="filter-checkbox-label">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
              className="filter-checkbox-input"
            />
            <span className="filter-checkbox-custom"></span>
            <span className="filter-checkbox-text">{brand}</span>
          </label>
        ))}
      </div>
    </FilterSection>

    {/* Price Range */}
    <FilterSection title="Price Range">
      <div className="filter-price">
        <div className="filter-price-labels">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min={0}
          max={5000}
          step={50}
          value={priceRange[1]}
          onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="filter-range"
        />
        <div className="filter-price-presets">
          {[[0, 500], [500, 1000], [1000, 2000], [2000, 5000]].map(([min, max]) => (
            <button
              key={`${min}-${max}`}
              className={`filter-price-preset ${priceRange[0] === min && priceRange[1] === max ? 'active' : ''}`}
              onClick={() => setPriceRange([min, max])}
            >
              ${min}–${max}
            </button>
          ))}
        </div>
      </div>
    </FilterSection>

    {/* Sort By */}
    <FilterSection title="Sort By">
      <div className="filter-sort-list">
        {SORT_OPTIONS.map(opt => (
          <button
            key={opt.value}
            className={`filter-sort-item ${sortBy === opt.value ? 'active' : ''}`}
            onClick={() => setSortBy(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </FilterSection>
  </aside>
)

/* ══════════════════════════════════════════════════
   4. PRODUCTS (main component)
══════════════════════════════════════════════════ */
const Products = () => {
  const [productList, setProductList]               = useState([])
  const [loading, setLoading]                       = useState(true)
  const [search, setSearch]                         = useState('')
  const [selectedBrands, setSelectedBrands]         = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceRange, setPriceRange]                 = useState([0, 5000])
  const [sortBy, setSortBy]                         = useState('newest')
  const [viewMode, setViewMode]                     = useState('grid')
  const [sidebarOpen, setSidebarOpen]               = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res    = await fetch('http://localhost:8000/api/products')
        const result = await res.json()
        setProductList(result.data)
      } catch (error) {
        console.log('Error fetching Products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const toggleBrand = b => setSelectedBrands(prev =>
    prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b])

  const toggleCategory = c => setSelectedCategories(prev =>
    prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])

  const clearFilters = () => {
    setSearch('')
    setSelectedBrands([])
    setSelectedCategories([])
    setPriceRange([0, 5000])
    setSortBy('newest')
  }

  const filtered = useMemo(() => {
    let list = [...productList]

    if (search)
      list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

    if (selectedBrands.length)
      list = list.filter(p => selectedBrands.includes(p.vendorName))

    if (selectedCategories.length)
      list = list.filter(p => selectedCategories.includes(p.categoryName))

    list = list.filter(p =>
      parseFloat(p.discountPrice) >= priceRange[0] &&
      parseFloat(p.discountPrice) <= priceRange[1]
    )

    switch (sortBy) {
      case 'price_asc':  list.sort((a, b) => a.discountPrice - b.discountPrice); break
      case 'price_desc': list.sort((a, b) => b.discountPrice - a.discountPrice); break
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break
      case 'discount':   list.sort((a, b) =>
        (b.actualPrice - b.discountPrice) - (a.actualPrice - a.discountPrice)); break
      default:           list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }

    return list
  }, [productList, search, selectedBrands, selectedCategories, priceRange, sortBy])

  const hasActiveFilters = !!(
    selectedBrands.length ||
    selectedCategories.length ||
    priceRange[0] > 0 ||
    priceRange[1] < 5000 ||
    search
  )

  return (
    <div className="products-page">

      {/* ── Page Header ── */}
      <div className="products-page-header">
        <div className="products-page-header-inner">
          <div>
            <h1 className="products-page-title">
              All <span className="accent">Products</span>
            </h1>
            <p className="products-page-sub">
              {loading ? 'Loading...' : `${filtered.length} products found`}
            </p>
          </div>

          <div className="products-toolbar">
            {/* Sort dropdown — desktop only */}
            <div className="toolbar-sort">
              <FiSliders className="toolbar-sort-icon" />
              <select
                className="toolbar-sort-select"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Grid / List toggle */}
            <div className="toolbar-view-toggle">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <FiGrid />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <FiList />
              </button>
            </div>

            {/* Mobile filter button */}
            <button className="toolbar-filter-btn" onClick={() => setSidebarOpen(true)}>
              <FiSliders /> Filters
              {hasActiveFilters && <span className="filter-active-dot"></span>}
            </button>
          </div>
        </div>

        {/* Active filter pills */}
        {hasActiveFilters && (
          <div className="active-filters">
            {selectedBrands.map(b => (
              <span key={b} className="active-filter-pill">
                {b}
                <button onClick={() => toggleBrand(b)}><FiX /></button>
              </span>
            ))}
            {selectedCategories.map(c => (
              <span key={c} className="active-filter-pill">
                {c}
                <button onClick={() => toggleCategory(c)}><FiX /></button>
              </span>
            ))}
            {(priceRange[0] > 0 || priceRange[1] < 5000) && (
              <span className="active-filter-pill">
                ${priceRange[0]}–${priceRange[1]}
                <button onClick={() => setPriceRange([0, 5000])}><FiX /></button>
              </span>
            )}
            <button className="active-filter-clear-all" onClick={clearFilters}>
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* ── Main Layout ── */}
      <div className="products-layout">

        {/* Sidebar — single render, inside layout */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          hasActiveFilters={hasActiveFilters}
          clearFilters={clearFilters}
          search={search}
          setSearch={setSearch}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          selectedBrands={selectedBrands}
          toggleBrand={toggleBrand}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
        )}

        {/* Products area */}
        <main className="products-main">
          {loading ? (
            <div className="products-loading">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="pcard-skeleton"></div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="products-empty">
              <FiPackage className="products-empty-icon" />
              <h3>No products found</h3>
              <p>Try adjusting your filters or search term.</p>
              <button className="btn-primary" onClick={clearFilters}>Clear Filters</button>
            </div>
          ) : (
            <div className={`products-grid-inner ${viewMode === 'list' ? 'list-view' : ''}`}>
              {filtered.map(prod => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          )}
        </main>

      </div>
    </div>
  )
}

export default Products