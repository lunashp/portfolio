import React from "react";

import IconAws from "app/components/Icons/logo/IconAws";
import IconAzure from "app/components/Icons/logo/IconAzure";
import IconGcp from "app/components/Icons/logo/IconGcp";
import IconJava from "app/components/Icons/logo/IconJava";
import IconJavascript from "app/components/Icons/logo/IconJavascript";
import IconKubernetes from "app/components/Icons/logo/IconKubernetes";
import IconMongo from "app/components/Icons/logo/IconMongo";
import IconMui from "app/components/Icons/logo/IconMui";
import IconMysql from "app/components/Icons/logo/IconMysql";
import IconNextjs from "app/components/Icons/logo/IconNextjs";
import IconOpenStack from "app/components/Icons/logo/IconOpenstack";
import IconPython from "app/components/Icons/logo/IconPython";
import IconReact from "app/components/Icons/logo/IconReact";
import IconReactQuery from "app/components/Icons/logo/IconReactQuery";
import IconStyled from "app/components/Icons/logo/IconStyled";
import IconTailwind from "app/components/Icons/logo/IconTailwind";
import IconTypescript from "app/components/Icons/logo/IconTypescript";
import SkillIcon from "src/components/main/Skills/SkillIcon";
import IconGolang from "app/components/Icons/logo/IconGolang";

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
            <SkillIcon icon={<IconNextjs />} text="Next JS" />
            <SkillIcon icon={<IconReact />} text="React" />
            <SkillIcon icon={<IconTypescript />} text="Typescript" />
            <SkillIcon icon={<IconJavascript />} text="Javascript" />
            <SkillIcon icon={<IconReactQuery />} text="React Query" />
            <SkillIcon icon={<IconStyled />} text="Styled Component" />
            <SkillIcon icon={<IconMui />} text="Material UI" />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-bold text-md tracking-tight mb-2 text-black dark:text-white border-b-[1px] border-grey-300 pb-2">
            Previously Used Technologies
          </h3>
          <div className="flex gap-4 flex-wrap mt-4">
            <SkillIcon icon={<IconTailwind />} text="Tailwind CSS" />
            <SkillIcon icon={<IconAws />} text="Aws" />
            <SkillIcon icon={<IconAzure />} text="Azure" />
            <SkillIcon icon={<IconGcp />} text="GCP" />
            <SkillIcon icon={<IconOpenStack />} text="Openstack" />
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
