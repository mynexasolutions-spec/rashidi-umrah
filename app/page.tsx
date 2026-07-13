import Image from "next/image";
import Link from "next/link";

import Testimonials from "@/components/Testimonials";
import InstagramReels from "@/components/InstagramReels";
import CTABanner from "@/components/CTABanner";
import styles from "./home.module.css";

const galleryPreview = [
  {
    src: "/images/gallery/12.webp",
    alt: "Majestic Kaaba and Clock Tower View",
  },
  {
    src: "/images/gallery/9.jpeg",
    alt: "Masjid Nabawi Night View",
  },
  {
    src: "/images/gallery/6.jpeg",
    alt: "Group outdoor photo",
  },
];

const services = [
  {
    icon: "fa-solid fa-passport",
    title: "Visa Assistance",
    text: "Fast & hassle-free visa processing with full document support.",
  },
  {
    icon: "fa-solid fa-ticket",
    title: "Flight Booking",
    text: "Best flight options with comfort and convenience at affordable prices.",
  },
  {
    icon: "fa-solid fa-bus",
    title: "Full Transport",
    text: "Full transport service with AC buses for all ground transfers.",
  },
  {
    icon: "fa-solid fa-utensils",
    title: "Food Services",
    text: "Hygienic and delicious meals provided throughout your stay.",
  },
  {
    icon: "fa-solid fa-mosque",
    title: "Makkah & Madina Local Ziyarat",
    text: "Makkah & Madina local ziyarat with experienced guides.",
  },
  {
    icon: "fa-solid fa-kaaba",
    title: "Hajj Packages",
    text: "Special Hajj packages with complete guidance and arrangements.",
  },
  {
    icon: "fa-solid fa-earth-americas",
    title: "International Tours",
    text: "Explore beautiful international destinations with us.",
  },
];

const packages = [
  {
    tag: "Best Seller",
    img: "/images/makkah.png",
    alt: "Economy Umrah Group View",
    title: "Economy Umrah Package",
    duration: "14 Days Package",
    features: [
      { icon: "fa-solid fa-hotel", label: "3 Star Hotel" },
      { icon: "fa-solid fa-utensils", label: "Breakfast" },
      { icon: "fa-solid fa-users", label: "Sharing Basis" },
      { icon: "fa-solid fa-bus", label: "Visa & Transport" },
    ],
    oldPrice: "Rs. 95,000",
    price: "Rs. 85,000",
  },
  {
    tag: null,
    img: "/images/madinah.png",
    alt: "Deluxe Prophet Mosque Al Masjid an Nabawi",
    title: "Deluxe Umrah Package",
    duration: "21 Days Package",
    features: [
      { icon: "fa-solid fa-hotel", label: "4 Star Hotel" },
      { icon: "fa-solid fa-utensils", label: "Breakfast & Dinner" },
      { icon: "fa-solid fa-users", label: "Sharing Basis" },
      { icon: "fa-solid fa-bus", label: "Visa & Transport" },
    ],
    oldPrice: "Rs. 1,05,000",
    price: "Rs. 95,000",
  },
  {
    tag: null,
    img: "/images/mosque.png",
    alt: "Prophet's Mosque Umbrellas View",
    title: "Premium Umrah Package",
    duration: "21 Days Package",
    features: [
      { icon: "fa-solid fa-hotel", label: "5 Star Hotel" },
      { icon: "fa-solid fa-utensils", label: "All Meals" },
      { icon: "fa-solid fa-users", label: "Sharing Basis" },
      { icon: "fa-solid fa-bus", label: "Visa & Transport" },
    ],
    oldPrice: "Rs. 1,50,000",
    price: "Rs. 1,20,000",
  },
  {
    tag: "Limited Seats",
    img: "/images/arafah.png",
    alt: "Mount Arafat Pilgrims Gathering",
    title: "Hajj Package",
    duration: "40 Days Package",
    features: [
      { icon: "fa-solid fa-campground", label: "Mina, Arafat Stay" },
      { icon: "fa-solid fa-utensils", label: "All Meals" },
      { icon: "fa-solid fa-users", label: "Sharing Basis" },
      { icon: "fa-solid fa-bus", label: "Visa & Transport" },
    ],
    oldPrice: "Rs. 7,00,000",
    price: "Rs. 6,50,000",
  },
];

const whyChoose = [
  {
    icon: "fa-solid fa-star",
    title: "Experienced & Trusted",
    text: "10+ years of experience in Umrah & Hajj services.",
  },
  {
    icon: "fa-solid fa-tags",
    title: "Best Price Guarantee",
    text: "Competitive prices with no hidden charges.",
  },
  {
    icon: "fa-solid fa-bed",
    title: "Comfort & Convenience",
    text: "Quality hotels, transport & meal services.",
  },
  {
    icon: "fa-solid fa-clock",
    title: "24/7 Support",
    text: "We are with you at every step of your journey.",
  },
  {
    icon: "fa-solid fa-book-quran",
    title: "Guidance & Support",
    text: "Religious guidance and support throughout.",
  },
];

export default function Home() {
  return (
    <>


      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles["hero-grid"]}>
            <div className={styles["hero-content"]}>
              <div className={styles.badge}>
                <i className="fa-solid fa-circle-check"></i> Trusted by
                Thousands of Pilgrims
              </div>
              <h2>
                Your Journey
                <br />
                Towards Allah
                <br />
                <span>Starts Here</span>
              </h2>
              <p>
                We provide reliable and comfortable Umrah & Hajj services with
                complete support for a spiritual and peaceful journey.
              </p>

              <div className={styles["hero-actions"]}>
                <button className="btn btn-primary">
                  Explore Packages
                </button>
              </div>

              <div className={styles["hero-stats"]}>
                <div className={styles["stat-item"]}>
                  <i className="fa-solid fa-award"></i>
                  <div className={styles["stat-info"]}>
                    <h4>10+</h4>
                    <p>Years of Experience</p>
                  </div>
                </div>
                <div className={styles["stat-item"]}>
                  <i className="fa-solid fa-users"></i>
                  <div className={styles["stat-info"]}>
                    <h4>25,000+</h4>
                    <p>Happy Pilgrims</p>
                  </div>
                </div>
                <div className={styles["stat-item"]}>
                  <i className="fa-solid fa-plane-departure"></i>
                  <div className={styles["stat-info"]}>
                    <h4>100+</h4>
                    <p>Group Departures</p>
                  </div>
                </div>
                <div className={styles["stat-item"]}>
                  <i className="fa-solid fa-headset"></i>
                  <div className={styles["stat-info"]}>
                    <h4>24/7</h4>
                    <p>Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["hero-image-wrapper"]}>
              <div className={styles["hero-frame"]}>
                <Image
                  src="/images/Gemini_Generated_Image_tu0rvitu0rvitu0r1.png"
                  alt="Makkah Holy Kaaba Grand Mosque"
                  width={460}
                  height={520}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR POPULAR PACKAGES SECTION */}
      <section className={styles.packages}>
        <div className="container">
          <div className={styles["packages-top"]}>
            <div className="section-header">
              <h2>Our Popular Packages</h2>
            </div>
          </div>

          <div className={styles["packages-grid"]}>
            {packages.map((pkg) => (
              <div key={pkg.title} className={styles["package-card"]}>
                <div className={styles["package-img-container"]}>
                  {pkg.tag && (
                    <span className={styles["package-tag"]}>{pkg.tag}</span>
                  )}
                  <Image src={pkg.img} alt={pkg.alt} fill sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                <div className={styles["package-body"]}>
                  <h3>{pkg.title}</h3>
                  <div className={styles.duration}>
                    <i className="fa-regular fa-clock"></i> {pkg.duration}
                  </div>
                  <div className={styles["package-features"]}>
                    {pkg.features.map((f) => (
                      <div key={f.label} className={styles["feature-lbl"]}>
                        <i className={f.icon}></i> {f.label}
                      </div>
                    ))}
                  </div>
                  <div className={styles["package-footer"]}>
                    <div className={styles["price-box"]}>
                      <del className={styles["old-price"]}>{pkg.oldPrice}</del>
                      <span>From</span>
                      <span className={styles["current-price"]}>{pkg.price}</span>
                    </div>
                    <button className={`btn ${styles["btn-view-details"]}`}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="/packages" className="btn btn-primary">
              View All Packages
            </a>
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section className={styles.services}>
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Everything you need for a blessed and hassle-free journey</p>
          </div>

          <div className={styles["services-grid"]}>
            {services.map((service) => (
              <div key={service.title} className={styles["service-card"]}>
                <div className={styles["service-icon"]}>
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW SECTION */}
      <section className={styles["gallery-preview"]}>
        <div className="container">
          <div className="section-header">
            <h2>Our Gallery</h2>
            <p>Glimpses from our pilgrims&apos; sacred journeys</p>
          </div>

          <div className={styles["gallery-preview-grid"]}>
            {galleryPreview.map((item) => (
              <div key={item.src} className={styles["gallery-preview-item"]}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          <div className={styles["gallery-preview-cta"]}>
            <Link href="/gallery" className="btn btn-primary">
              View More <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className={styles["about-us"]}>
        <div className="container">
          <div className={styles["about-grid"]}>
            <div className={styles["about-text"]}>
              <h4>About Us</h4>
              <h2>A Trusted Partner for Your Umrah & Hajj Journey</h2>
              <p>
                Rashidi Umrah Tours & Travels is a trusted name in the travel
                industry, dedicated to serving the pilgrims with sincerity and
                professionalism.
              </p>
              <p>
                Our mission is to make your spiritual journey comfortable,
                meaningful, and memorable.
              </p>

              <ul className={styles["about-bullets"]}>
                <li>
                  <i className="fa-solid fa-check"></i> IATA Approved Travel
                  Agency
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Expert Guidance &
                  Group Leaders
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Personalized Service &
                  Support
                </li>
                <li>
                  <i className="fa-solid fa-check"></i> Thousands of Happy
                  Pilgrims
                </li>
              </ul>

              <a href="/about" className="btn btn-accent">
                Know More About Us <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className={styles["about-images"]}>
              <div className={styles["main-arch-frame"]}>
                <Image
                  src="/images/Gemini_Generated_Image_tu0rvitu0rvitu0r2.png"
                  alt="Pilgrims at Inner Prayer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className={styles["side-frames"]}>
                <div className={styles["side-img-box"]}>
                  <Image
                    src="/images/jabalenoor.png"
                    alt="Jabal-E-Noor Cave Mountain"
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className={styles["side-img-box"]}>
                  <Image
                    src="/images/madinahstreets.png"
                    alt="Madinah Traditional Streets Historic Architecture"
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
              </div>
            </div>

            <div className={styles["about-stats-panel"]}>
              <div className={styles["about-stat-row"]}>
                <div className={styles["about-stat-icon"]}>
                  <i className="fa-solid fa-passport"></i>
                </div>
                <div className={styles["about-stat-val"]}>
                  <h3>10+</h3>
                  <p>Years of Experience</p>
                </div>
              </div>
              <div className={styles["about-stat-row"]}>
                <div className={styles["about-stat-icon"]}>
                  <i className="fa-solid fa-face-smile"></i>
                </div>
                <div className={styles["about-stat-val"]}>
                  <h3>25,000+</h3>
                  <p>Happy Customers</p>
                </div>
              </div>
              <div className={styles["about-stat-row"]}>
                <div className={styles["about-stat-icon"]}>
                  <i className="fa-solid fa-plane"></i>
                </div>
                <div className={styles["about-stat-val"]}>
                  <h3>100+</h3>
                  <p>Group Departures</p>
                </div>
              </div>
              <div className={styles["about-stat-row"]}>
                <div className={styles["about-stat-icon"]}>
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className={styles["about-stat-val"]}>
                  <h3>15+</h3>
                  <p>Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles["why-choose"]}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Rashidi Umrah?</h2>
          </div>

          <div className={styles["why-grid"]}>
            {whyChoose.map((item) => (
              <div key={item.title} className={styles["why-item"]}>
                <div className={styles["why-icon-circle"]}>
                  <i className={item.icon}></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATIONWIDE PILGRIMS SECTION */}
      <section className={styles["nationwide-section"]}>
        <div className="container">
          <div className={styles["nationwide-grid"]}>
            <div className={styles["nationwide-text"]}>
              <h2>Serving Pilgrims From Every Corner of India</h2>
              <ul className={styles["nationwide-features"]}>
                <li><i className="fa-solid fa-plane-departure"></i> Departures from all major Indian airports</li>
                <li><i className="fa-solid fa-passport"></i> Nationwide doorstep visa & passport assistance</li>
                <li><i className="fa-solid fa-headset"></i> Dedicated 24/7 Pan-India customer support</li>
              </ul>

              <div className={styles["nationwide-cities"]}>
                {[
                  "Delhi", "Mumbai", "Hyderabad", "Bangalore", "Chennai",
                  "Kolkata", "Ahmedabad", "Pune", "Lucknow", "Jaipur", "& More",
                ].map((city) => (
                  <span key={city} className={styles["city-badge"]}>
                    <i className="fa-solid fa-location-dot"></i> {city}
                  </span>
                ))}
              </div>

              {/* Off-page SEO Block for Localities */}
              <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                We provide Umrah and Hajj packages and services for pilgrims from all major cities and states in India, including: Delhi, Mumbai, Hyderabad, Bangalore (Bengaluru), Chennai, Kolkata, Ahmedabad, Pune, Surat, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Bhopal, Patna, Vadodara, Agra, Varanasi, Srinagar, Amritsar, Chandigarh, Guwahati, Kochi (Cochin), Thiruvananthapuram, Kozhikode, Malappuram, Mangalore, Coimbatore, Madurai, Vijayawada, Visakhapatnam, Raipur, Ranchi, Bhubaneswar, Dehradun, Ludhiana, Jalandhar, Allahabad, Aligarh, Meerut, Moradabad, Bareilly, Gorakhpur, Jodhpur, Udaipur, Ajmer, Bikaner, Surat, Rajkot, Bhavnagar, Jamnagar, Nashik, Aurangabad, Solapur, Amravati, Kolhapur, Hubli, Belgaum, Mysore, Gulbarga, Guntur, Nellore, Kurnool, Warangal, Nizamabad, Karimnagar, Dhanbad, Jamshedpur, Bokaro, Asansol, Siliguri, Durgapur, Howrah, Cuttack, Rourkela, Shillong, Agartala, Imphal, Aizawl, Jammu, Anantnag, Baramulla, Kargil, Leh, Andaman, Lakshadweep, Goa, Panaji, and everywhere else across the length and breadth of India.
              </div>
            </div>
            <div className={styles["nationwide-images"]}>
              <div className={styles["n-img"]}>
                <img src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80" alt="Pilgrims Gathering in Makkah" />
              </div>
              <div className={styles["n-img"]}>
                <img src="https://images.unsplash.com/photo-1763618769707-3e318c25325f?auto=format&fit=crop&w=800&q=80" alt="Family Traveling for Umrah" />
              </div>
              <div className={styles["n-img"]}>
                <img src="https://images.unsplash.com/photo-1545595271-908483fa6e50?auto=format&fit=crop&w=800&q=80" alt="Pilgrim Ready for Departure" />
              </div>
              <div className={styles["n-img"]}>
                <img src="https://images.unsplash.com/photo-1532968899863-5b52ef155913?auto=format&fit=crop&w=800&q=80" alt="Pilgrims Arriving at the Airport" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className="section-header">
            <h2>What Our Pilgrims Say</h2>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* INSTAGRAM REELS SECTION */}
      <section className={styles["reels-section"]}>
        <div className="container">
          <div className="section-header">
            <h2>Follow Our Journey</h2>
            <p>Real moments from our pilgrims, straight from Instagram</p>
          </div>
        </div>
        <div className={styles["reels-scroll-outer"]}>
          <InstagramReels />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
