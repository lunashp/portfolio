import React from "react";
import Bio from "../../widgets/bio/Bio";
import Projects from "../../widgets/projects/index";
import Skills from "../../widgets/skills/index";

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
