import {
 FiStar, FiShield, FiTruck, FiHeadphones, FiZap,
  FiMail, FiArrowRight, FiChevronRight
} from 'react-icons/fi'
import { Categories } from '../components/categories'

import earpods from "../assets/earpods.png"


const testimonials = [
  { id: 1, name: 'Alex Chen', role: 'Tech Enthusiast', text: 'The fastest delivery I\'ve ever experienced. Products are exactly as described — top-tier quality.', rating: 5 },
  { id: 2, name: 'Mia Torres', role: 'Gamer', text: 'Nexus completely changed how I shop for tech. Clean UI, great deals, zero hassle.', rating: 5 },
  { id: 3, name: 'Jordan Blake', role: 'Developer', text: 'The product range is insane. Found items I couldn\'t find anywhere else, at better prices.', rating: 4 },
]

const features = [
  { icon: <FiTruck />, title: 'Free Fast Shipping', desc: 'Orders above $99 get complimentary express delivery, anywhere worldwide.' },
  { icon: <FiShield />, title: 'Secure Payments', desc: 'Military-grade encryption protects every transaction you make with us.' },
  { icon: <FiHeadphones />, title: '24/7 Support', desc: 'Our team is always online — real humans, real answers, any time.' },
  { icon: <FiZap />, title: 'Flash Deals Daily', desc: 'New lightning deals every 24 hours. Subscribe to never miss a drop.' },
]

const Home = () => {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-inner">
          <div className="hero-content">
        
            <h1 className="hero-title">
              Shop The <span className="hero-accent">Future</span><br />Today
            </h1>
            <p className="hero-sub">
              Cutting-edge products curated for those who refuse to settle. Premium tech, elite gear, delivered tomorrow.
            </p>
            <div className="hero-cta-row">
              <a href="#" className="btn-primary">
                Explore Now <FiArrowRight />
              </a>
              <a href="#" className="btn-ghost">View Deals</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>50K+</strong><span>Products</span></div>
              <div className="hero-stat-div"></div>
              <div className="hero-stat"><strong>2M+</strong><span>Customers</span></div>
              <div className="hero-stat-div"></div>
              <div className="hero-stat"><strong>4.9★</strong><span>Rating</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow-ring"></div>
            <div className="hero-glow-ring hero-glow-ring-2"></div>
            <div className="hero-product-display">
              <div className="hero-orb">
                 <img src={earpods} />
              </div>
              <div className="hero-product-card floating">
                
                <div className="hero-product-icon"><FiZap /></div>
                <div>
                 
                  <div className="hero-product-name">Quantum X Pro</div>
                  <div className="hero-product-price">$50</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="section categories-section">
        <div className="section-header">
          <h2 className="section-title">Shop By <span className="accent">Category</span></h2>
          <a href="#" className="section-link">All Categories <FiChevronRight /></a>
        </div>
        
          <Categories />
    
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section why-section">
        <div className="section-header centered">
          <h2 className="section-title">Why Choose <span className="accent">Nexus</span></h2>
          <p className="section-sub">We don't just sell products — we deliver an experience.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon-wrap">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRENDING DEALS BANNER ── */}
      <section className="deals-banner">
        <div className="deals-shine"></div>
        <div className="deals-content">
          <div className="deals-tag">⚡ Limited Time</div>
          <h2 className="deals-title">Up to <span>60% OFF</span> on Trending Gear</h2>
          <p className="deals-sub">Deals reset every 24 hours. Don't blink.</p>
          <a href="#" className="btn-primary deals-btn">Grab The Deal <FiArrowRight /></a>
        </div>
        <div className="deals-timer">
          <div className="timer-block"><span className="timer-num">08</span><span className="timer-label">HRS</span></div>
          <div className="timer-sep">:</div>
          <div className="timer-block"><span className="timer-num">34</span><span className="timer-label">MIN</span></div>
          <div className="timer-sep">:</div>
          <div className="timer-block"><span className="timer-num">12</span><span className="timer-label">SEC</span></div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section">
        <div className="section-header centered">
          <h2 className="section-title">What Customers <span className="accent">Say</span></h2>
          <p className="section-sub">Real people. Real reviews. Real results.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar key={i} className="filled-star" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name[0]}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="newsletter-section">
        <div className="newsletter-glow"></div>
        <div className="newsletter-inner">
          <div className="newsletter-icon-wrap"><FiMail /></div>
          <h2 className="newsletter-title">Stay Ahead of the <span className="accent">Curve</span></h2>
          <p className="newsletter-sub">Get exclusive deals, drop alerts and tech news — zero spam, ever.</p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <div className="newsletter-input-wrap">
              <FiMail className="newsletter-input-icon" />
              <input type="email" placeholder="Enter your email address" className="newsletter-input" />
            </div>
            <button type="submit" className="btn-primary newsletter-btn">
              Subscribe <FiArrowRight />
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}

export default Home