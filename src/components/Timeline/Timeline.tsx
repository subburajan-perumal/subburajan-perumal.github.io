import React from 'react';
import styles from './Timeline.module.scss';

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <div className={styles.timeline__item}>
        <div className={styles.timeline__content}>
          <h3>Event 1</h3>
          <p>Event 1 description</p>
        </div>
      </div>
      <div className={styles.timeline__item}>
        <div className={styles.timeline__content}>
          <h3>Event 2</h3>
          <p>Event 2 description</p>
        </div>
      </div>
      {/* Add more timeline items as needed */}
    </div>
  );
};

export default Timeline;
