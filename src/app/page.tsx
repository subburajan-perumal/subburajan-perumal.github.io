import Image from 'next/image';
import styles from './page.module.css';
import CallToAction from '@components/CallToAction/CallToAction';
import About from '@components/About/About';
import Project from '@components/Projects/Project';
import Hero from '@components/Hero/Hero';
import MoveToTop from '@components/MoveToTop/MovetoTop';
import TimeLine from '@components/Timeline/Timeline'
import Navigation from '@components/Navigation/Navigation';

export default function Main() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero />
      {/* <About /> */}
      {/* <Project /> */}
      {/* <TimeLine /> */}
      <CallToAction />
    </main>
  );
}
