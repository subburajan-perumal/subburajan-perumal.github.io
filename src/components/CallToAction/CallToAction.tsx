import styles from './CallToAction.module.scss';
import Image from 'next/image';
import profile_pic from '@assets/profile-pic.jpg';

const CallToAction = () => {
  return (
    <section id="cta">
      <h1>CTA</h1>
      <div className={styles.card}>
        <div className={styles.card__content}></div>
      </div>
    </section>
  );
};

export default CallToAction;
