import {
  FiTarget, FiZap, FiUsers, FiGlobe, FiAward, FiTrendingUp,
  FiHeart, FiShield, FiArrowRight, FiLinkedin, FiTwitter, FiGithub
} from 'react-icons/fi'

const stats = [
  { value: '2M+',   label: 'Happy Customers' },
  { value: '50K+',  label: 'Products Listed' },
  { value: '120+',  label: 'Countries Served' },
  { value: '4.9★',  label: 'Average Rating' },
]

const timeline = [
  { year: '2018', title: 'The Spark', desc: 'Founded in a garage with a single mission: make premium tech accessible to everyone, everywhere.' },
  { year: '2020', title: 'Going Global', desc: 'Expanded to 40+ countries. Crossed 100K customers and launched our mobile platform.' },
  { year: '2022', title: 'Scale & Trust', desc: 'Reached 1 million orders. Introduced our AI-powered recommendation engine and 24/7 support.' },
  { year: '2024', title: 'The Future', desc: 'Over 2 million customers worldwide. Launching same-day delivery in 30 major cities.' },
]

const values = [
  { icon: <FiZap />,      title: 'Innovation First',   desc: 'We chase what\'s next, not what\'s safe. Every product we carry pushes a boundary.' },
  { icon: <FiShield />,   title: 'Radical Honesty',    desc: 'No dark patterns. No fake reviews. No inflated prices. Just straight-up transparency.' },
  { icon: <FiHeart />,    title: 'Customer Obsessed',  desc: 'Every decision starts with one question: does this make our customers\' lives better?' },
  { icon: <FiGlobe />,    title: 'Built for Everyone', desc: 'Premium tech shouldn\'t be a privilege. We fight to keep prices fair and access open.' },
  { icon: <FiUsers />,    title: 'Community Driven',   desc: 'Our customers shape us. Reviews, feedback, wishlists — you tell us what to stock next.' },
  { icon: <FiAward />,    title: 'Uncompromising Quality', desc: 'Every item is vetted. If we wouldn\'t buy it ourselves, it doesn\'t make the shelf.' },
]

const team = [
  { name: 'Aryan Mehta',    role: 'CEO & Co-Founder',      initial: 'A', social: { li: '#', tw: '#' } },
  { name: 'Sofia Reyes',    role: 'CTO & Co-Founder',      initial: 'S', social: { li: '#', tw: '#' } },
  { name: 'James Wu',       role: 'Head of Product',       initial: 'J', social: { li: '#', gh: '#' } },
  { name: 'Priya Nair',     role: 'Head of Operations',    initial: 'P', social: { li: '#', tw: '#' } },
]

const About = () => {
  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="about-hero-grid"></div>
          <div className="about-hero-glow"></div>
        </div>
        <div className="about-hero-inner">
          <div className="about-hero-tag">
            <FiTarget /> Our Story
          </div>
          <h1 className="about-hero-title">
            We're Building the<br />
            <span className="about-accent">Commerce of Tomorrow</span>
          </h1>
          <p className="about-hero-sub">
            Nexus was born from a simple frustration — great tech was too hard to find, too expensive to afford, and too complicated to trust. We're here to fix all three.
          </p>
          <div className="about-hero-cta">
            <a href="#our-story" className="btn-primary">Read Our Story <FiArrowRight /></a>
            <a href="#team" className="btn-ghost">Meet The Team</a>
          </div>
        </div>
        <div className="about-hero-visual">
          <div className="about-orb-outer"></div>
          <div className="about-orb-inner"></div>
          <div className="about-orb-core"></div>
          <div className="about-floating-pill pill-1"><FiTrendingUp /> 2M+ Customers</div>
          <div className="about-floating-pill pill-2"><FiAward /> Est. 2018</div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="about-stats-bar">
        <div className="about-stats-inner">
          {stats.map((s, i) => (
            <div key={i} className="about-stat-item">
              <strong className="about-stat-value">{s.value}</strong>
              <span className="about-stat-label">{s.label}</span>
              {i < stats.length - 1 && <div className="about-stat-sep"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="about-section about-mission" id="our-story">
        <div className="about-mission-left">
          <div className="about-section-tag"><FiTarget /> Mission</div>
          <h2 className="about-section-title">
            Tech For The <span className="about-accent">Many,</span><br />Not The Few
          </h2>
          <p className="about-body-text">
            We started with a belief that the best technology should be within reach of anyone who wants it — not gatekept by geography, income, or brand loyalty. Every category we build, every deal we negotiate, every product we list is filtered through that lens.
          </p>
          <p className="about-body-text">
            Nexus isn't just a store. It's an infrastructure for curiosity — a place where you can discover what's cutting-edge, understand it, trust it, and own it. We obsess over the details so you don't have to.
          </p>
          <a href="#" className="about-mission-link">
            See Our Manifesto <FiArrowRight />
          </a>
        </div>
        <div className="about-mission-right">
          <div className="about-mission-card main-card">
            <div className="mission-card-icon"><FiZap /></div>
            <h4>Speed of Trust</h4>
            <p>From browsing to delivery — every step engineered for confidence and speed.</p>
          </div>
          <div className="about-mission-card secondary-card">
            <div className="mission-card-icon"><FiGlobe /></div>
            <h4>Global Reach</h4>
            <p>120+ countries. One seamless experience, wherever you are.</p>
          </div>
          <div className="about-mission-dots"></div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="about-section about-timeline-section">
        <div className="about-section-header-centered">
          <div className="about-section-tag"><FiTrendingUp /> Our Journey</div>
          <h2 className="about-section-title">From Garage to <span className="about-accent">Global</span></h2>
        </div>
        <div className="about-timeline">
          {timeline.map((item, i) => (
            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
              <div className="timeline-node">
                <div className="timeline-node-inner"></div>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="about-section about-values-section">
        <div className="about-section-header-centered">
          <div className="about-section-tag"><FiHeart /> What We Stand For</div>
          <h2 className="about-section-title">Our <span className="about-accent">Core Values</span></h2>
          <p className="about-values-sub">Six principles that guide every decision we make — from product curation to customer support.</p>
        </div>
        <div className="about-values-grid">
          {values.map((v, i) => (
            <div key={i} className="about-value-card">
              <div className="about-value-icon">{v.icon}</div>
              <h3 className="about-value-title">{v.title}</h3>
              <p className="about-value-desc">{v.desc}</p>
              <div className="about-value-number">0{i + 1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="about-section about-team-section" id="team">
        <div className="about-section-header-centered">
          <div className="about-section-tag"><FiUsers /> The People</div>
          <h2 className="about-section-title">Meet The <span className="about-accent">Builders</span></h2>
          <p className="about-values-sub">A small, obsessed team building something much bigger than themselves.</p>
        </div>
        <div className="about-team-grid">
          {team.map((member, i) => (
            <div key={i} className="about-team-card">
              <div className="team-avatar-wrap">
                <div className="team-avatar">{member.initial}</div>
                <div className="team-avatar-ring"></div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
              <div className="team-socials">
                {member.social.li  && <a href={member.social.li}  className="team-social-link" aria-label="LinkedIn"><FiLinkedin /></a>}
                {member.social.tw  && <a href={member.social.tw}  className="team-social-link" aria-label="Twitter"><FiTwitter /></a>}
                {member.social.gh  && <a href={member.social.gh}  className="team-social-link" aria-label="GitHub"><FiGithub /></a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="about-cta-banner">
        <div className="about-cta-glow"></div>
        <div className="about-cta-inner">
          <h2 className="about-cta-title">Ready to Experience <span className="about-accent">Nexus?</span></h2>
          <p className="about-cta-sub">Join 2 million customers who've already made the switch to smarter shopping.</p>
          <div className="about-cta-btns">
            <a href="/" className="btn-primary">Start Shopping <FiArrowRight /></a>
            <a href="#" className="btn-ghost">Contact Us</a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About