"use client";
// import IconArrow from "app/components/Icons/IconArrow";
import IconArrow from "../../shared/ui/Icons/IconArrow";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Link from "next/link";
import {
  companies,
  getProfessionalProjects,
  getSideProjects,
} from "../../entities/project/ProjectList";
import { useState, useEffect } from "react";

export const metaData: Metadata = {
  title: "Projects",
  description: "My Projects",
};

// Professional Experience: 회사별로 그룹화된 프로젝트
const professionalProjects = getProfessionalProjects();

// Experience: 사이드 프로젝트
const sideProjects = getSideProjects();

/**
 * 프로젝트 카드 스켈레톤 컴포넌트
 * 로딩 중에 표시되는 프로젝트 카드의 스켈레톤 UI
 * @returns {JSX.Element} 프로젝트 스켈레톤 컴포넌트
 */
const ProjectSkeleton = () => (
  <div className="animate-pulse">
    <div className="flex flex-col w-full [&:not(:last-child)]:border-b-[1px] border-peri-300 py-8">
      <div className="flex items-center justify-between w-full mb-2">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
      </div>
      <div className="flex justify-end w-full gap-4 mb-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
      </div>
      <ul className="ml-4 space-y-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index} className="relative mt-2">
            <div className="absolute left-[-12px] top-2 w-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/**
 * 프로젝트 위젯 메인 컴포넌트
 * 회사 프로젝트와 사이드 프로젝트를 구분하여 표시
 * 로딩 상태 관리 및 스켈레톤 UI 제공
 * @returns {JSX.Element} 프로젝트 위젯 컴포넌트
 */
const Projects: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 실제 환경에서는 API 호출 시간을 시뮬레이션
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <article className="flex flex-col w-full">
        {/* Professional Experience Skeleton */}
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-4 animate-pulse"></div>
        <div className="flex gap-6 flex-col w-full">
          <div className="flex flex-col gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))}
          </div>
        </div>

        {/* Experience Skeleton */}
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-4 mt-8 animate-pulse"></div>
        <div className="flex gap-6 flex-col w-full">
          <div className="flex flex-col gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col w-full">
      {/* Professional Experience */}
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white">
        Professional Experience
      </h3>
      <div className="flex gap-6 flex-col w-full">
        <div className="flex flex-col gap-4">
          {professionalProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-full [&:not(:last-child)]:border-b-[1px] border-peri-300 py-8 transform transition-all hover:scale-[1.01]"
            >
              <Link href={`/projects/${project?._id}`} passHref>
                <div className="flex items-center justify-between w-full">
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
                  {project.description.slice(0, 3).map((desc, index) => (
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

      {/* Experience (Side Projects) */}
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white">
        Experience
      </h3>
      <div className="flex gap-6 flex-col w-full">
        <div className="flex flex-col gap-4">
          {sideProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-full [&:not(:last-child)]:border-b-[1px] border-peri-300 py-8 transform transition-all hover:scale-[1.01]"
            >
              <Link href={`/projects/${project?._id}`} passHref>
                <div className="flex items-center justify-between w-full">
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

                {/* <ul className="ml-4">
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
                </ul> */}

                <ul className="ml-4">
                  {project.description.slice(0, 3).map((desc, index) => (
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

      {/* 프로젝트 상세보기 링크 */}
      <Link
        href="/projects"
        className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
      >
        <p>Read detail projects</p>
        <IconArrow />
      </Link>
    </article>
  );
};

export default Projects;
