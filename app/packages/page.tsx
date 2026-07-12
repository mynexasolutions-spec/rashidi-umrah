import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./packages.module.css";

type Metric = { icon: string; label: string; value: string };
type PackageCard = {
  variant?: "featured" | "vip";
  name: string;
  tagline: string;
  oldPrice: string;
  price: string;
  metrics: Metric[];
  cta: string;
};

const economyPackages: PackageCard[] = [
  {
    name: "Economy 14 Days",
    tagline: "Standard Shared Group",
    oldPrice: "Rs. 90,000",
    price: "Rs. 85,000",
    metrics: [
      {
        icon: "fa-solid fa-hotel",
        label: "Hotel Distance",
        value: "Makkah: 950m (Free Shuttle) | Madinah: 600m",
      },
      {
        icon: "fa-solid fa-bell-concierge",
        label: "Hospitality & Catering",
        value: "3 Meals Buffet (Authentic Indian Cuisine)",
      },
      {
        icon: "fa-solid fa-users-gear",
        label: "Management Support",
        value: "Group Tour Guide & 24/7 Local Desk Assistance",
      },
    ],
    cta: "Package Details",
  },
  {
    name: "Economy 21 Days",
    tagline: "Extended Shared Group",
    oldPrice: "Rs. 1,05,000",
    price: "Rs. 95,000",
    metrics: [
      {
        icon: "fa-solid fa-location-dot",
        label: "Hotel Distance",
        value: "Makkah: 950m (Free Shuttle) | Madinah: 650m",
      },
      {
        icon: "fa-solid fa-bowl-food",
        label: "Hospitality & Catering",
        value: "Full Board Catering + Complimentary Tea Kits",
      },
      {
        icon: "fa-solid fa-user-shield",
        label: "Management Support",
        value: "Standard Visa Processing + Group Baggage Handler",
      },
    ],
    cta: "Package Details",
  },
  {
    name: "Economy Ramzan Special",
    tagline: "Sacred Fasting Bracket",
    oldPrice: "Rs. 1,15,000",
    price: "Rs. 1,05,000",
    metrics: [
      {
        icon: "fa-solid fa-road",
        label: "Hotel Distance",
        value: "Makkah: 1.1km (Regular Shuttle) | Madinah: 700m",
      },
      {
        icon: "fa-solid fa-moon",
        label: "Hospitality & Catering",
        value: "Special Sehri & Iftar Buffets included daily",
      },
      {
        icon: "fa-solid fa-book-quran",
        label: "Management Support",
        value: "Experienced Maulana companion for Umrah rites",
      },
    ],
    cta: "Package Details",
  },
];

const deluxePackages: PackageCard[] = [
  {
    variant: "featured",
    name: "Deluxe 21 Days",
    tagline: "Most Popular Package",
    oldPrice: "Rs. 1,05,000",
    price: "Rs. 95,000",
    metrics: [
      {
        icon: "fa-solid fa-hotel",
        label: "Hotel Distance",
        value: "Makkah: 350m (Walking Distance) | Madinah: 200m",
      },
      {
        icon: "fa-solid fa-utensils",
        label: "Hospitality & Catering",
        value: "4-Star Accommodations + Premium Multi-Cuisine Dining",
      },
      {
        icon: "fa-solid fa-bus",
        label: "Management Support",
        value:
          "Air-Conditioned Private Coached Ziyarats + Dynamic Ground Assistance",
      },
    ],
    cta: "Book Deluxe",
  },
  {
    variant: "featured",
    name: "Deluxe Family Suite",
    tagline: "Quad Bed Luxury Setup",
    oldPrice: "Rs. 1,50,000",
    price: "Rs. 1,38,000",
    metrics: [
      {
        icon: "fa-solid fa-location-crosshairs",
        label: "Hotel Distance",
        value: "Makkah: 400m | Madinah: 150m (Front Row Courtyards)",
      },
      {
        icon: "fa-solid fa-baby-carriage",
        label: "Hospitality & Catering",
        value: "Family Suites + Kids Catering Options Available",
      },
      {
        icon: "fa-solid fa-passport",
        label: "Management Support",
        value: "Express Visa Clearance + Guaranteed Direct Flights",
      },
    ],
    cta: "Book Deluxe",
  },
  {
    variant: "featured",
    name: "Premium Hajj Tier",
    tagline: "Complete Spiritual Pathway",
    oldPrice: "Rs. 7,00,000",
    price: "Rs. 6,50,000",
    metrics: [
      {
        icon: "fa-solid fa-tent",
        label: "Mina Camp Proximity",
        value: "Category-A Upgraded Tents near Jamarat locations",
      },
      {
        icon: "fa-solid fa-bed",
        label: "Hospitality Structure",
        value:
          "Premium Azizia Apartment stays + 5-Star Central Medinah Hotels",
      },
      {
        icon: "fa-solid fa-kit-medical",
        label: "Management & Safety",
        value:
          "On-site Dedicated Doctors, Dedicated Coordinators, Scheduled Lectures",
      },
    ],
    cta: "Book Premium",
  },
];

const vipPackages: PackageCard[] = [
  {
    variant: "vip",
    name: "VIP Royal Signature",
    tagline: "Haram Facing Rooms",
    oldPrice: "Rs. 2,50,000",
    price: "Rs. 2,25,000",
    metrics: [
      {
        icon: "fa-solid fa-eye",
        label: "Hotel Proximity",
        value: "Makkah: FairMont Clock Tower (0m) | Madinah: Oberoi (0m)",
      },
      {
        icon: "fa-solid fa-crown",
        label: "Hospitality Standards",
        value: "5-Star Luxury Buffets, Private Suites, Premium Amenities",
      },
      {
        icon: "fa-solid fa-car-rear",
        label: "Management Support",
        value: "Private GMC Bullet Transits for airport & local transfers",
      },
    ],
    cta: "Book VIP Executive Package",
  },
];

function PackageGrid({
  packages,
  gridClassName,
}: {
  packages: PackageCard[];
  gridClassName: string;
}) {
  return (
    <div className={gridClassName}>
      {packages.map((pkg) => (
        <div key={pkg.name} className={styles["package-card"]}>
          <div
            className={`${styles["card-header-badge"]} ${
              pkg.variant ? styles[pkg.variant] : ""
            }`}
          >
            <h4>{pkg.name}</h4>
            <p>{pkg.tagline}</p>
          </div>
          <div className={styles["price-container"]}>
            <del className={styles["old-price"]}>{pkg.oldPrice}</del>
            <span className={styles["current-price"]}>{pkg.price}</span>
          </div>
          <div className={styles["metrics-stack"]}>
            {pkg.metrics.map((metric) => (
              <div key={metric.label} className={styles["metric-row"]}>
                <i className={metric.icon}></i>
                <div>
                  <span className={styles["metric-label"]}>
                    {metric.label}
                  </span>
                  <span className={styles["metric-val"]}>{metric.value}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles["card-action"]}>
            <button
              className={`btn ${
                pkg.variant === "vip" ? "btn-outline" : "btn-primary"
              } ${pkg.variant === "vip" ? styles["btn-outline-vip"] : ""}`}
            >
              {pkg.cta}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PackagesPage() {
  return (
    <>
      <Header active="Packages" showPhone={false} />

      {/* BANNER */}
      <section className="page-banner">
        <div className="container">
          <h2>Our Pilgrimage Packages</h2>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &nbsp; / &nbsp; Packages
          </div>
        </div>
      </section>

      {/* SECTION 1: ECONOMY */}
      <section className={styles["package-category-section"]}>
        <div className="container">
          <div className={styles["section-intro"]}>
            <span>Budget-Friendly & Comfortable</span>
            <h3>Economy Umrah Packages</h3>
          </div>
          <PackageGrid
            packages={economyPackages}
            gridClassName={styles["packages-grid"]}
          />
        </div>
      </section>

      {/* SECTION 2: DELUXE / PREMIUM */}
      <section className={styles["package-category-section"]}>
        <div className="container">
          <div className={styles["section-intro"]}>
            <span>Optimal Comfort & Near Proximity</span>
            <h3>Deluxe Umrah Packages</h3>
          </div>
          <PackageGrid
            packages={deluxePackages}
            gridClassName={styles["packages-grid"]}
          />
        </div>
      </section>

      {/* SECTION 3: VIP */}
      <section className={styles["package-category-section"]}>
        <div className="container">
          <div className={styles["section-intro"]}>
            <span>Elite 5-Star Luxury Stays</span>
            <h3>VIP Executive Packages</h3>
          </div>
          <PackageGrid
            packages={vipPackages}
            gridClassName={styles["packages-grid-vip"]}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
