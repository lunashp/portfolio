import { projects } from "src/components/main/Projects/ProjectList";
import ExperienceList from "src/components/Project/ExperienceList";
import ExperienceSkeletion from "src/components/Project/ExperienceSkeletion";

const Experience = () => {
  const data = projects; // 하드 코딩된 데이터를 사용

  if (!data) {
    return <ExperienceSkeletion />;
  }

  return (
    <article className="w-full">
      <ExperienceList data={data} />
    </article>
  );
};

export default Experience;
