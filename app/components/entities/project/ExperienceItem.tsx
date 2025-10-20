import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { Project } from "./ProjectList";

type ExperienceItemProps = {
  data: Project;
};

/**
 * 개별 프로젝트 아이템을 카드 형태로 렌더링하는 컴포넌트
 * @param {ExperienceItemProps} props - 컴포넌트 props
 * @param {Project} props.data - 표시할 프로젝트 데이터
 * @returns {JSX.Element} 프로젝트 카드 컴포넌트
 */
const ExperienceItem: React.FC<ExperienceItemProps> = ({ data }) => {
  // 프로젝트 시작일을 YYYY. MM. 형식으로 포맷팅
  const startedAt = dayjs(data?.workStartedAt).format("YYYY. MM.");

  // 프로젝트 종료일 처리 (9로 시작하면 "now"로 표시, 아니면 YYYY. MM. 형식)
  const endedAt = data?.workEndedAt.startsWith("9")
    ? "now"
    : dayjs(data?.workEndedAt).format("YYYY. MM.");

  return (
    <Link href={`/projects/${data._id}`} passHref>
      <div className="flex flex-col justify-center items-center">
        {data.mainImage && (
          <div className="row-center border-[1px] border-peri-200 rounded-md h-64 sm:h-48 w-full">
            <Image
              src={data.mainImage}
              width={328}
              height={192}
              alt={data.title}
              className="w-[100%] h-[100%] object-cover rounded-md"
            />
          </div>
        )}
        <div className="flex flex-col w-full py-2">
          <div className="flex justify-start items-start w-full">
            <p className="text-lg font-semibold text-black dark:text-white">
              {data.title}
            </p>
          </div>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm text-gray-600 dark:text-gray-300 tracking-tight">
              {data.position}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 tracking-tight">{`${startedAt} - ${endedAt}`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceItem;
