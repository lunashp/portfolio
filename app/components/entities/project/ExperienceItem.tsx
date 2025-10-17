import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { Project } from "./ProjectList";

type ExperienceItemProps = {
  data: Project;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ data }) => {
  const startedAt = dayjs(data?.workStartedAt).format("YYYY. MM.");
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
