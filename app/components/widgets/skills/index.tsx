import React from "react";
import IconAws from "../../shared/ui/Icons/logo/IconAws";
import IconAzure from "../../shared/ui/Icons/logo/IconAzure";
import IconGcp from "../../shared/ui/Icons/logo/IconGcp";
import IconJava from "../../shared/ui/Icons/logo/IconJava";
import IconJavascript from "../../shared/ui/Icons/logo/IconJavascript";
import IconKubernetes from "../../shared/ui/Icons/logo/IconKubernetes";
import IconMongo from "../../shared/ui/Icons/logo/IconMongo";
import IconMui from "../../shared/ui/Icons/logo/IconMui";
import IconMysql from "../../shared/ui/Icons/logo/IconMysql";
import IconNextjs from "../../shared/ui/Icons/logo/IconNextjs";
import IconOpenstack from "../../shared/ui/Icons/logo/IconOpenstack";
import IconPython from "../../shared/ui/Icons/logo/IconPython";
import IconReact from "../../shared/ui/Icons/logo/IconReact";
import IconReactQuery from "../../shared/ui/Icons/logo/IconReactQuery";
import IconStyled from "../../shared/ui/Icons/logo/IconStyled";
import IconTailwind from "../../shared/ui/Icons/logo/IconTailwind";
import IconTypescript from "../../shared/ui/Icons/logo/IconTypescript";
import IconGolang from "../../shared/ui/Icons/logo/IconGolang";
import IconDocker from "../../shared/ui/Icons/logo/IconDocker";
import IconJenkins from "../../shared/ui/Icons/logo/IconJenkins";
import SkillIcon from "./SkillIcon";

const Skills: React.FC = () => {
  return (
    <article className="flex flex-col w-full">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white">
        Skills
      </h3>

      <div className="flex flex-col gap-12">
        <div className="w-full">
          <h3 className="font-bold text-md tracking-tight mb-2 text-black dark:text-white border-b-[1px] border-grey-300 pb-2">
            Recently Used Technologies
          </h3>
          <div className="flex gap-4 flex-wrap mt-4">
            <SkillIcon icon={<IconReact />} text="React" />
            <SkillIcon icon={<IconNextjs />} text="Next JS" />
            <SkillIcon icon={<IconTypescript />} text="Typescript" />
            <SkillIcon icon={<IconJavascript />} text="Javascript" />
            <SkillIcon icon={<IconReactQuery />} text="Tanstack(React) Query" />
            <SkillIcon icon={<IconStyled />} text="Styled Component" />
            <SkillIcon icon={<IconTailwind />} text="Tailwind CSS" />
            <SkillIcon icon={<IconMui />} text="Material UI" />
            <SkillIcon icon={<IconDocker />} text="Docker" />
            <SkillIcon icon={<IconJenkins />} text="Jenkins" />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-bold text-md tracking-tight mb-2 text-black dark:text-white border-b-[1px] border-grey-300 pb-2">
            Previously Used Technologies
          </h3>
          <div className="flex gap-4 flex-wrap mt-4">
            <SkillIcon icon={<IconAws />} text="Aws" />
            <SkillIcon icon={<IconAzure />} text="Azure" />
            <SkillIcon icon={<IconGcp />} text="GCP" />
            <SkillIcon icon={<IconOpenstack />} text="Openstack" />
            <SkillIcon icon={<IconKubernetes />} text="Kubernetes" />

            <SkillIcon icon={<IconGolang />} text="Go" />
            {/* <SkillIcon icon={<IconPython />} text="Python" /> */}

            <SkillIcon icon={<IconJava />} text="Java" />
            <SkillIcon icon={<IconMysql />} text="Mysql" />
            <SkillIcon icon={<IconMongo />} text="Mongo DB" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Skills;
