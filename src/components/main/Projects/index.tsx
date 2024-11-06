import IconArrow from "app/components/Icons/IconArrow";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Link from "next/link";
import { projects } from "src/components/data/ProjectList";

export const metaData: Metadata = {
  title: "Projects",
  description: "My Projects",
};

const Projects: React.FC = () => {
  return (
    <article className="flex flex-col w-full">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white ">
        Professional Experience
      </h3>

      <div className="flex gap-6 flex-col w-full">
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <div className="flex flex-col w-full [&:not(:last-child)]:border-b-[1px] border-peri-300 py-8 transform transition-all hover:scale-[1.01]">
              <Link
                href={`/projects/${project?._id}`}
                key={index}
                // target="_blank"
                passHref
              >
                <div className="flex  items-center justify-between w-full ">
                  <div className="flex gap-4 dark:border-gray-700">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                      {`${project?.title} ${project.subtitle}`}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {`${project?.startedAt} - ${project?.endedAt}`}
                  </p>
                </div>
                <div className="flex justify-end w-full gap-4">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-300">
                    {project?.position}
                  </p>
                </div>

                <ul className="ml-4">
                  {project.description.map((desc, index) => (
                    <li key={index} className="relative mt-2">
                      <div className="absolute left-[-12px] top-2 w-1 h-1 bg-black dark:bg-white rounded-full" />
                      <div
                        className={`description-item description-item-${index}`}
                      >
                        <p className="text-gray-500 dark:text-gray-300">
                          {desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Link
        href="/projects"
        className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
      >
        <p>Read all projects</p>
        <IconArrow />
      </Link>
    </article>
  );
};

export default Projects;
