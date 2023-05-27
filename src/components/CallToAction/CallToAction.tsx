import styles from './CallToAction.module.scss';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section id="contact" className={styles.ctaContainer}>
      <div >
        <h2 className={styles.ctaTitle}>
          Ready to start your project?
        </h2>
        <p className={styles.ctaDescription}>
          Im a full-stack developer with expertise in creating modern web applications. Lets collaborate and bring your ideas to life.
        </p>
        <div className={styles.ctaButtons}>
          {/* <Link href="#" className={styles.ctaButton}>View Projects
          </Link> */}
          <input className={styles.ctaEmail} />
          <Link href="#" className={styles.ctaButton}>Hire Me
          </Link>
        </div>
      </div>

    </section >
  );
};

export default CallToAction;
