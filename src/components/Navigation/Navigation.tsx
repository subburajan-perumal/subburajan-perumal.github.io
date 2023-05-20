import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';
// import resume from '@assets/resume.pdf';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          My Portfolio
        </Link>
      </div>
      {/* <div className={styles.navLinks}>
        <Link href="#about">
          About
        </Link>
        <Link href="#projects">
          Projects
        </Link>
        <Link href="#contact">
          Contact
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
