'use client';
import projectInfo, { ProjectInfoProps } from '../../../data/projectInfo.data';

interface ProjectProps {
  params: { projectId: string };
}

const Project = (props: ProjectProps) => {
  console.log(JSON.stringify(props));
  return (
    <section>
      {props.params.projectId === '1' ? (
        <h1>Project 1</h1>
      ) : (
        <div>Project Not found </div>
      )}
      {projectInfo.map((project: ProjectInfoProps) => (
        <div key={project.id}>{project.client}</div>
      ))}
      <h1>Project: {props.params.projectId}</h1>
    </section>
  );
};

export default Project;
