import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/packages", label: "Packages" },
  { href: "#", label: "Services" },
  { href: "#", label: "Destinations" },
  { href: "#", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header({
  active,
  showPhone = true,
}: {
  active: string;
  showPhone?: boolean;
}) {
  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <div className="logo-icon">
            <i className="fa-solid fa-kaaba"></i>
          </div>
          <div className="logo-text">
            <h1>RASHIDI</h1>
            <span>Umrah & Hajj</span>
          </div>
        </div>

        <nav className="nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link ${active === item.label ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-right">
          {showPhone && (
            <div className="contact-widget">
              <div className="icon-box">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-details">
                <span>Call Us Anytime</span>
                <a href="tel:+918094771024">+91 80947 71024</a>
              </div>
            </div>
          )}
          <button className="btn btn-primary" style={{ width: "auto" }}>
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  );
}
