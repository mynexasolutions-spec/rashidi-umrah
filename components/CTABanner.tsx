import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <div className={`container ${styles["cta-banner"]}`}>
      <div className={styles["cta-box"]}>
        <div className={styles["cta-left"]}>
          <div className={styles["cta-phone-circle"]}>
            <i className="fa-solid fa-phone-volume"></i>
          </div>
          <div className={styles["cta-text"]}>
            <h3>Ready to Start Your Blessed Journey?</h3>
            <p>
              Book your Umrah or Hajj package today and let us take care of
              the rest. Your satisfaction is our responsibility.
            </p>
          </div>
        </div>
        <a
          href="/contact"
          className="btn btn-accent"
          style={{ color: "var(--primary)", background: "white" }}
        >
          Enquire Now <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
