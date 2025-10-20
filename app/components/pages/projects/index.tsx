"use client";
import React, { useState, useEffect } from "react";
import { getAllProjects } from "../../entities/project/ProjectList";
import ExperienceList from "../../entities/project/ExperienceList";
import DetailSkeleton from "../../features/project-detail/ExperienceSkeletion";

/**
 * 프로젝트 목록 페이지 컴포넌트
 * 모든 프로젝트를 로딩하여 그리드 형태로 표시
 * 로딩 중에는 스켈레톤 UI를 표시
 * @returns {JSX.Element} 프로젝트 목록 페이지 컴포넌트
 */
const ProjectsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // 실제 환경에서는 API 호출 시간을 시뮬레이션
    const timer = setTimeout(() => {
      const projects = getAllProjects();
      setData(projects);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <DetailSkeleton />;
  }

  if (!data || data.length === 0) {
    return <DetailSkeleton />;
  }

  return (
    <article className="w-full">
      <ExperienceList data={data} />
    </article>
  );
};

export default ProjectsPage;
