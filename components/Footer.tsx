import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <div className="logo" style={{ marginBottom: "20px" }}>
              <div
                className="logo-icon"
                style={{ background: "white", color: "var(--primary)" }}
              >
                <i className="fa-solid fa-kaaba"></i>
              </div>
              <div className="logo-text">
                <h1 style={{ color: "white" }}>RASHIDI</h1>
                <span style={{ color: "var(--accent)" }}>Umrah & Hajj</span>
              </div>
            </div>
            <p>Your trusted partner for Umrah, Hajj and Spiritual journeys.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/packages">Packages</Link>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Packages</h4>
            <ul className="footer-links">
              <li>
                <Link href="/packages">Economy Umrah</Link>
              </li>
              <li>
                <Link href="/packages">Deluxe Umrah</Link>
              </li>
              <li>
                <Link href="/packages">Premium Umrah</Link>
              </li>
              <li>
                <Link href="/packages">Hajj Package</Link>
              </li>
              <li>
                <Link href="/packages">Group Departures</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Visa Assistance</a>
              </li>
              <li>
                <a href="#">Flight Booking</a>
              </li>
              <li>
                <a href="#">Transport</a>
              </li>
              <li>
                <a href="#">Food Services</a>
              </li>
              <li>
                <a href="#">Local Ziyarat</a>
              </li>
              <li>
                <a href="#">International Tours</a>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i> +91 80947 71024
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i> info@rashidiumrah.com
              </li>
              <li>
                <i className="fa-solid fa-globe"></i> www.rashidiumrah.com
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i> 123, Travel
                Street, Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Rashidi Umrah Tours & Travels. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
