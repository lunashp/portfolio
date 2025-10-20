import React from "react";
import Bio from "../../widgets/bio/Bio";
import Projects from "../../widgets/projects/index";
import Skills from "../../widgets/skills/index";

/**
 * 홈페이지 메인 컴포넌트
 * Bio, Projects, Skills 섹션을 포함한 전체 홈페이지 레이아웃
 * @returns {JSX.Element} 홈페이지 컴포넌트
 */
const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-16 max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      <Bio />
      <Projects />
      <Skills />
    </div>
  );
};

export default HomePage;
