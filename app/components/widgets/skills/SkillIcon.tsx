import React from "react";

type SkillIconProps = {
  icon: React.ReactNode;
  text: string;
};

/**
 * 개별 스킬 아이콘 컴포넌트
 * 아이콘과 텍스트를 함께 표시하는 스킬 아이템
 * @param {SkillIconProps} props - 컴포넌트 props
 * @param {React.ReactNode} props.icon - 표시할 아이콘
 * @param {string} props.text - 표시할 텍스트
 * @returns {JSX.Element} 스킬 아이콘 컴포넌트
 */
const SkillIcon: React.FC<SkillIconProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center gap-2 p-2">
      {icon}
      <p className="text-gray-600 dark:text-gray-400">{text}</p>
    </div>
  );
};

export default SkillIcon;
