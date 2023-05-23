import Image from 'next/image';
import { profileInfo } from '../../data/profileInfo.data';
import styles from './Hero.module.scss';
import profile_pic from '@assets/profile-pic_square.png';
// import resume from '@assets/20230521-Resume.pdf'
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.profile}>
          <div>
            <Image src={profile_pic} alt="profile_pic" className={styles.profile__image} loading="lazy" />
          </div>
          <h3 className={styles.profile__name}>
            {profileInfo.fullName}
          </h3>

          <h6 className={styles.profile__title}>Full Stack Developer</h6>


          <div className={styles.profile__socialbox}>

            <div className={styles.profile__social}>
              <Link href="https://github.com/subburajan-perumal">
                <i title="custicon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 1024 1024"><path d="M512 0C229.1 0 0 229.1 0 512c0 226.6 146.6 417.9 350.1 485.8 25.6 4.5 35.2-10.9 35.2-24.4 0-12.2-0.6-52.5-0.7-95.3-128.6 23.7-161.9-31.4-172.1-60.2-5.8-14.7-30.7-60.2-52.5-72.3-17.9-9.6-43.5-33.3-0.6-33.9 40.3-0.6 69.1 37.1 78.7 52.5 46.1 77.4 119.7 55.7 149.1 42.2 4.5-33.3 17.9-55.7 32.6-68.5-113.9-12.8-233-57-232.9-252.8 0-55.7 19.8-101.8 52.5-137.6-5.1-12.8-23-65.3 5.1-135.7 0 0 42.9-13.4 140.8 52.5 41-11.5 84.5-17.3 128-17.3 43.5 0 87 5.8 128 17.3 97.9-66.6 140.8-52.5 140.8-52.5 28.2 70.4 10.2 122.9 5.1 135.7 32.6 35.8 52.5 81.3 52.5 137.6 0 196.5-119.7 240-233.6 252.8 18.6 16 34.6 46.7 34.5 94.7 0 68.5-0.6 123.5-0.6 140.8 0 13.4 9.6 29.4 35.2 24.4A512.8 512.8 0 0 0 1024 512c0-282.9-229.1-512-512-512z"></path></svg>
                </i>
              </Link>
            </div>


            <div className={styles.profile__social}>
              <Link href={'https://www.linkedin.com/in/subburajan-perumal/'}>

                <i title="custicon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 1024 1024"><path d="M0 73.3C0 32.8 33.7 0 75.2 0h873.6C990.3 0 1024 32.8 1024 73.3v877.4c0 40.5-33.7 73.3-75.2 73.3H75.2C33.7 1024 0 991.2 0 950.7V73.3z m316.4 783.9V394.8H162.7v462.4h153.7z m-76.8-525.6c53.6 0 86.9-35.5 86.9-79.8-1-45.4-33.3-79.9-85.9-79.9-52.6 0-87 34.6-87 79.9 0 44.4 33.3 79.9 84.9 79.8h1.1z m314.1 525.6V599c0-13.8 1-27.6 5.1-37.5 11.1-27.6 36.4-56.2 78.8-56.2 55.6 0 77.8 42.4 77.9 104.6v247.3h153.6V592c0-142.1-75.8-208.1-176.9-208.1-81.5 0-118.1 44.8-138.5 76.3v1.6h-1.1a354.6 354.6 0 0 1 1.1-1.6V394.8h-153.6c1.9 43.4 0 462.4 0 462.4h153.6z"></path></svg>
                </i>
              </Link>
            </div>
            <div className={styles.profile__social}>

              <Link href={'https://wa.me/+918608000190'}>
                <i title="custicon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 1024 1024"><path d="M870.5 148.9A502.7 502.7 0 0 0 511.6 0C232.1 0 4.4 227.7 4.1 507.3c0 89.5 23.4 176.6 67.6 253.7L0 1024l269.1-70.5a507.7 507.7 0 0 0 242.5 61.7h0.3c279.6 0 507.3-227.7 507.5-507.5A505.5 505.5 0 0 0 870.4 148.9zM511.6 929.3a420.7 420.7 0 0 1-214.8-58.8l-15.3-9.3-159.6 41.9 42.6-155.7-10-16.1a419.8 419.8 0 0 1-64.5-224.3c0-232.1 189.2-421.4 421.9-421.4a419.8 419.8 0 0 1 298.2 123.6 419.6 419.6 0 0 1 123.4 298.3c-0.3 232.9-189.5 421.9-421.9 421.8z m231.4-315.7c-12.6-6.3-74.9-37-86.6-41.4-11.6-4.2-20.2-6.3-28.5 6.4-8.5 12.6-32.8 41.3-40.1 49.6-7.3 8.5-14.8 9.5-27.5 3.2-12.6-6.4-53.5-19.7-101.9-63.1-37.8-33.6-63-75.2-70.6-87.8-7.3-12.7-0.7-19.5 5.6-25.8 5.6-5.6 12.6-14.8 19-22.1 6.4-7.3 8.5-12.7 12.6-21.1 4.2-8.6 2.2-15.9-0.9-22.3-3.2-6.3-28.5-68.9-39.2-94-10.2-24.9-20.7-21.4-28.5-21.8-7.3-0.4-15.8-0.4-24.3-0.4a46.7 46.7 0 0 0-33.9 15.8c-11.6 12.7-44.2 43.3-44.2 105.8 0 62.5 45.4 122.6 51.9 131.2 6.3 8.5 89.2 136.4 216.5 191.4 30.1 13.1 53.8 20.9 72.2 26.8 30.4 9.7 57.9 8.3 79.8 5.1 24.3-3.7 74.9-30.7 85.6-60.3 10.5-29.7 10.5-55 7.3-60.4-3.1-5.4-11.6-8.5-24.3-14.8z"></path></svg>
                </i>
              </Link>
            </div>
          </div>
        </div>
        <Link href="20230521-Resume.pdf" className={styles.profile__link} download>Download CV</Link>
      </div>



    </section >
  );
};

export default Hero;
