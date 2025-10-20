import { Project } from "./ProjectList";
import ExperienceItem from "./ExperienceItem";

type ExperienceListProps = {
  data: Project[];
};

/**
 * 프로젝트 목록을 그리드 형태로 렌더링하는 컴포넌트
 * @param {ExperienceListProps} props - 컴포넌트 props
 * @param {Project[]} props.data - 표시할 프로젝트 배열
 * @returns {JSX.Element} 프로젝트 그리드 컴포넌트
 */
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
