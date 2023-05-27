import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';
// import resume from '@assets/resume.pdf';

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navItem}>
        <Link href="#about" className={styles.navLink}>
          About
        </Link>
        {/* <Link href="#projects" className={styles.navLink}>
          Projects
        </Link> */}
        <Link href="#contact" className={styles.navLink}>
          Contact
        </Link>

      </div>
    </nav>
  );
};

export default Navigation;
