"use client";

import { useState } from "react";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import styles from "./gallery.module.css";

type Category = "all" | "makkah" | "madinah" | "ziyarat";

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "All Media" },
  { key: "makkah", label: "Makkah Holy Sites" },
  { key: "madinah", label: "Madinah Holy Sites" },
  { key: "ziyarat", label: "Local Ziyarats" },
];

const galleryItems: {
  category: Exclude<Category, "all">;
  src: string;
  alt: string;
  label: string;
  title: string;
}[] = [
  {
    category: "makkah",
    src: "/images/gallery/12.webp",
    alt: "Majestic Kaaba and Clock Tower View",
    label: "Makkah Holy Sites",
    title: "The Majestic Kaaba & Clock Tower",
  },
  {
    category: "makkah",
    src: "/images/gallery/13.webp",
    alt: "Peaceful Prayers at the Holy Kaaba",
    label: "Makkah Holy Sites",
    title: "Serene Moments of Devotion",
  },
  {
    category: "makkah",
    src: "/images/gallery/10.webp",
    alt: "Makkah Holy Kaaba Crowd",
    label: "Makkah Holy Sites",
    title: "The Holy Kaaba Tawaaf Gathering",
  },
  {
    category: "makkah",
    src: "/images/gallery/11.webp",
    alt: "Panoramic View of Mina Pilgrimage Valley",
    label: "Makkah Holy Sites",
    title: "Mina Valley & Pilgrimage Path",
  },
  {
    category: "makkah",
    src: "/images/gallery/5.jpeg",
    alt: "Pilgrims in Ihram Makkah",
    label: "Makkah Holy Sites",
    title: "Pilgrims in Ihram at Haram",
  },
  {
    category: "makkah",
    src: "/images/gallery/7.jpeg",
    alt: "Haram Complex Photo",
    label: "Makkah Holy Sites",
    title: "Haram Courtyard Group Moment",
  },
  {
    category: "madinah",
    src: "/images/gallery/9.jpeg",
    alt: "Masjid Nabawi Night View",
    label: "Madinah Holy Sites",
    title: "Al-Masjid an-Nabawi Night Devotion",
  },
  {
    category: "ziyarat",
    src: "/images/gallery/1.jpeg",
    alt: "Pilgrims at Quba Mosque",
    label: "Local Ziyarats",
    title: "Group Gathering at Quba Plain",
  },
  {
    category: "ziyarat",
    src: "/images/gallery/2.jpeg",
    alt: "Pilgrims gathering local transit",
    label: "Local Ziyarats",
    title: "Ziyarat Group Transit Halt",
  },
  {
    category: "ziyarat",
    src: "/images/gallery/3.jpeg",
    alt: "Historical Sites Visitation",
    label: "Local Ziyarats",
    title: "Historical Site Tour Group",
  },
  {
    category: "ziyarat",
    src: "/images/gallery/4.jpeg",
    alt: "Pilgrims Group Photo",
    label: "Local Ziyarats",
    title: "Sacred Landscape Assembly",
  },
  {
    category: "ziyarat",
    src: "/images/gallery/6.jpeg",
    alt: "Group outdoor photo",
    label: "Local Ziyarats",
    title: "Our Valued Pilgrims Assembly",
  },
  {
    category: "ziyarat",
    src: "/images/gallery/8.jpeg",
    alt: "Group at landmark destination",
    label: "Local Ziyarats",
    title: "Historical Landmark Gathering",
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const visibleItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* INNER PAGE BANNER */}
      <section className="page-banner">
        <div className="container">
          <h2>Our Journey Gallery</h2>
          <p>
            Real glimpses from our premium group travels, holy sites, and our
            family of blessed pilgrims.
          </p>
        </div>
      </section>

      {/* FILTERABLE GALLERY SECTION */}
      <section className={styles["gallery-section"]}>
        <div className="container">
          <div className={styles["gallery-filters"]}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`${styles["filter-btn"]} ${
                  activeFilter === filter.key ? styles.active : ""
                }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className={styles["gallery-grid"]}>
            {visibleItems.map((item) => (
              <div key={item.src} className={styles["gallery-item"]}>
                <div className={styles["image-wrapper"]}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                  />
                  <div className={styles["image-overlay"]}></div>
                </div>
                <div className={styles["item-details"]}>
                  <span>{item.label}</span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
