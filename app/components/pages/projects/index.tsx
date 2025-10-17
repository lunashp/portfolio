import React from "react";
import { projects } from "../../entities/project/ProjectList";
import ExperienceList from "../../entities/project/ExperienceList";
import DetailSkeleton from "../../features/project-detail/ExperienceSkeletion";

const ProjectsPage: React.FC = () => {
  const data = projects;

  if (!data) {
    return <DetailSkeleton />;
  }

  return (
    <article className="w-full">
      <ExperienceList data={data} />
    </article>
  );
};

export default ProjectsPage;
