"use client";

import { useState } from "react";
import styles from "@/app/home.module.css";

const testimonials = [
  {
    name: "Ahmed Khan",
    quote:
      "Alhamdulillah! Everything was perfectly organized. Hotels, food, transport - all excellent. Highly recommended!",
  },
  {
    name: "Safeena Begum",
    quote:
      "Great experience with Rashidi Umrah. The guides were very helpful and the entire journey was smooth.",
  },
  {
    name: "Imran Patel",
    quote:
      "Best Umrah service we ever had. They took care of everything with professionalism and care.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className={styles["testimonials-grid"]}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles["testimonial-card"]}>
            <i className={`fa-solid fa-quote-left ${styles["quote-icon"]}`}></i>
            <p>{t.quote}</p>
            <div className={styles["author-box"]}>
              <div className={styles["author-info"]}>
                <h4>{t.name}</h4>
              </div>
              <div className={styles.stars}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles["carousel-dots"]}>
        {testimonials.map((t, index) => (
          <div
            key={t.name}
            className={`${styles.dot} ${index === active ? styles.active : ""}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </>
  );
}
