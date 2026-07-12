import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";

const infoCards = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Our Office Address",
    body: (
      <p>
        123, Travel Street, Connaught Place,
        <br />
        New Delhi, India - 110001
      </p>
    ),
  },
  {
    icon: "fa-solid fa-phone-volume",
    title: "Phone Numbers",
    body: (
      <>
        <p>
          Mobile: <a href="tel:+918094771024">+91 80947 71024</a>
        </p>
        <p>
          Office: <a href="tel:+918094771024">+91 80947 71024</a>
        </p>
      </>
    ),
  },
  {
    icon: "fa-solid fa-envelope-open-text",
    title: "Email Support",
    body: (
      <>
        <p>
          <a href="mailto:info@rashidiumrah.com">info@rashidiumrah.com</a>
        </p>
        <p>
          <a href="mailto:bookings@rashidiumrah.com">
            bookings@rashidiumrah.com
          </a>
        </p>
      </>
    ),
  },
  {
    icon: "fa-solid fa-clock",
    title: "Office Timings",
    body: (
      <>
        <p>Monday - Saturday: 09:30 AM to 06:30 PM</p>
        <p style={{ color: "#c62828", fontWeight: 600 }}>Sunday: Closed</p>
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Header active="Contact Us" />

      {/* INNER PAGE BANNER */}
      <section className="page-banner">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &nbsp; / &nbsp; Contact Us
          </div>
        </div>
      </section>

      {/* CONTACT BLOCK & FORM SECTION */}
      <section className={styles["contact-section"]}>
        <div className="container">
          <div className={styles["contact-grid"]}>
            {/* Information Cards Stack */}
            <div className={styles["info-sidebar"]}>
              {infoCards.map((card) => (
                <div key={card.title} className={styles["info-card"]}>
                  <div className={styles["info-icon"]}>
                    <i className={card.icon}></i>
                  </div>
                  <div className={styles["info-details"]}>
                    <h3>{card.title}</h3>
                    {card.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Modern Input Form */}
            <div className={styles["form-wrapper"]}>
              <h2>Send Us A Message</h2>
              <p>
                Have questions regarding custom packages or document
                handling? Fill up the form below and our team will get back
                to you within 24 business hours.
              </p>

              <form action="#" method="POST">
                <div className={styles["form-grid"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className={styles["form-control"]}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className={styles["form-control"]}
                      placeholder="Enter your email ID"
                      required
                    />
                  </div>
                </div>

                <div className={styles["form-grid"]}>
                  <div className={styles["form-group"]}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className={styles["form-control"]}
                      placeholder="Enter contact number"
                      required
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="subject">Purpose / Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className={styles["form-control"]}
                      placeholder="e.g. Economy Package Enquire"
                      required
                    />
                  </div>
                </div>

                <div
                  className={`${styles["form-group"]} ${styles["full-width"]}`}
                >
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    className={styles["form-control"]}
                    placeholder="Write details about your travel query here..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message &nbsp;<i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS EMBED SECTION */}
      <section className={styles["map-section"]}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d3501.9936814980756!2d77.2167232!3d28.6314512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b7419401%3A0x5e20ef0d27c9ec9b!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rashidi Umrah Office Location"
        ></iframe>
      </section>

      <Footer />
    </>
  );
}
