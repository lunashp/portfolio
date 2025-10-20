"use client";
import PostLayout from "../../../shared/ui/PostLayout";
import { getAllProjects } from "../../../entities/project/ProjectList";
import DetailSkeleton from "./DetailSkeleton";
import { useState, useEffect } from "react";

type ProjectDetailProps = {
  slug: string;
};

/**
 * 프로젝트 상세 페이지 컴포넌트
 * URL slug를 기반으로 특정 프로젝트의 상세 정보를 표시
 * 로딩 상태 관리 및 스켈레톤 UI 제공
 * @param {ProjectDetailProps} props - 컴포넌트 props
 * @param {string} props.slug - 프로젝트 식별자
 * @returns {JSX.Element} 프로젝트 상세 페이지 컴포넌트
 */
const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    // 실제 환경에서는 API 호출 시간을 시뮬레이션
    const timer = setTimeout(() => {
      const projects = getAllProjects();
      const foundProject = projects.find((p) => p._id === slug);
      setProject(foundProject);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return <DetailSkeleton />;
  }

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <PostLayout
      post={{
        _id: project._id,
        slug: project._id,
        title: project.title,
        publishedAt: new Date(project.workEndedAt),
        // publishedAt: project.workEndedAt,
        readingTime: "5 min read",
        project: project,
      }}
    >
      <p className="whitespace-pre-line">{project.summary}</p>
      <h2 className="font-bold">개발환경</h2>
      <hr />

      <pre className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-transparent dark:bg-black">
        <code className="text-gray-900 dark:text-gray-100">
          {/* 회사 프로젝트인 경우에만 회사 정보 표시 */}
          {project.company && project.rank && (
            <>
              <span className="code-line">
                근무처: {`${project.company} · ${project.rank}`}
              </span>
              <br />
            </>
          )}

          {/* 사이드 프로젝트인 경우 프로젝트 타입 표시 */}
          {!project.company && (
            <>
              <span className="code-line">개인 프로젝트</span>
              <br />
            </>
          )}

          <span className="code-line">
            {project.position ? `${project.position} - ` : "개발 기간: "}
            {project.workStartedAt} ~ {project.workEndedAt}
          </span>
        </code>
      </pre>

      <ul>
        <li>{project.mainSkill}</li>
        <li>{project.subSkill}</li>
      </ul>
      <h2>업무</h2>
      <hr />
      <ul>
        {project.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <h2>회고</h2>
      <hr />
      <ul>
        {/* {project.recall.map((rc, index) => ( */}
        {project.recall.map((rc, index) => (
          <li key={index}>{rc}</li>
        ))}
      </ul>
    </PostLayout>
  );
};

export default ProjectDetail;
