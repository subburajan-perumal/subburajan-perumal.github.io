'use client';
import { useEffect, useState } from 'react';
import styles from './MoveToTop.module.scss';

const MoveToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 160) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {show && (
        <a
          onClick={handleScrollToTop}
          className={styles.movetotopButton}
          aria-label="Back to top"
        >

          <i title="Back to top" >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentcolor" viewBox="0 0 1024 1024"><path d="M868 545.5L536.1 163a32 32 0 0 0-48.3 0L156 545.5a8 8 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg>
          </i>

        </a>
      )}
    </>
  );
};

export default MoveToTop;
