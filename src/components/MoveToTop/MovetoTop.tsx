'use client';
import { useEffect, useState } from 'react';
import styles from './MoveToTop.module.scss';

const MoveToTop = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
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
    <div className="move-to-top">
      {show && (
        <a
          onClick={handleScrollToTop}
          className={`button__move-to-top`}
          aria-label="Back to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      )}
    </div>
  );
};

export default MoveToTop;
