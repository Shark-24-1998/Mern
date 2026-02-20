import { FiGithub, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-line"></div>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-mark">N</span>
            <span className="logo-text">NEXUS</span>
          </div>
          <p className="footer-tagline">The future of commerce, delivered today.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter" className="social-link"><FiTwitter /></a>
            <a href="#" aria-label="Instagram" className="social-link"><FiInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="social-link"><FiLinkedin /></a>
            <a href="#" aria-label="YouTube" className="social-link"><FiYoutube /></a>
            <a href="#" aria-label="GitHub" className="social-link"><FiGithub /></a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-line"></div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Nexus Store. All rights reserved.</p>
        <p className="footer-credit">Built for the future.</p>
      </div>
    </footer>
  )
}

export default Footer