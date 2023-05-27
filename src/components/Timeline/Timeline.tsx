import React from 'react';
import styles from './Timeline.module.scss';

const projects: ProjectProps[] = [
  {
    name: 'HRMS',
    link: 'https://ghostengines.com/'
  },
  {
    name: 'IXL CAREER ACADEMY',
    link: 'https://ghostengines.com/'
  },
  {
    name: 'Testlify Algolia Integration',
    link: 'https://testlify.com'
  },
  {
    name: 'Homekonnect lead Automation',
    link: 'https://ghostengines.com/'
  },
  {
    name: 'Mavericks 2022(MCE)',
    link: "https://symposium-orpin.vercel.app"

  }
]

const TimelineInfo: TimelineProps[] = [
  {
    title: 'MAGIC BUS ',
    description: 'AWS re/Start Trainee',
    date: 'Febraury 2023'
  },
  {
    title: 'GhostEngines',
    description: 'Full Stack Developer',
    date: 'December 2021',
  }
]


interface ProjectProps {
  name: string;
  link?: string;
}

interface TimelineProps {
  title: string;
  description: string;
  date: string;

}


const TimelineItem: React.FC<TimelineProps> = ({ title, description, date }) => {
  return (<div className={styles.timelineItem}>
    <div className={styles.timelineItemHeader}>
      <div className={styles.timelineItemHeader}>
        <h3 className={styles.timelineItemTitle}>{title}</h3>
        <p className={styles.timelineItemDate}>{date} </p> </div>
      <p className={styles.timelineItemDescription}>{description}</p>
    </div>
  </div>)
    ;
}

const Timeline = () => {
  return (<section>

    <ul className={styles.timeline}>
      {TimelineInfo.map((item: TimelineProps, index: number) => (
        <li className={styles.timelineItem} key={index}>
          <TimelineItem {...item} />
        </li>
      ))}
    </ul>
    {projects && (<ul className={styles.timelineItemProjects}><div className={styles.timelineItemProjects}>
      {projects.map((project: ProjectProps, index: number) => (
        <a
          className={styles.timelineItemProject}
          href={project.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.name} </a>
      ))}
    </div></ul>)}
  </section>

  );
};


export default Timeline;
