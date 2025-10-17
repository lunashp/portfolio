import { Project } from "./ProjectList";
import ExperienceItem from "./ExperienceItem";

type ExperienceListProps = {
  data: Project[];
};

const ExperienceList: React.FC<ExperienceListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
      {data?.map((project) => (
        <ExperienceItem key={project._id} data={project} />
      ))}
    </div>
  );
};

export default ExperienceList;
