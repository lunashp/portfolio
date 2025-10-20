import React from "react";
import Image from "next/image";

/**
 * Bio 위젯 컴포넌트
 * 개인 소개, 프로필 이미지, 자기소개를 포함한 소개 섹션
 * @returns {JSX.Element} Bio 위젯 컴포넌트
 */
const Bio: React.FC = () => {
  return (
    <article className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">양희진</h1>
        <p className="text-lg font-medium">프론트엔드 개발자</p>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            클라우드 엔지니어와 풀스택 개발 경험을 바탕으로, <br />
            현재는 프론트엔드에 집중하며 안정적이고 확장 가능한 서비스를 <br />
            구현하고 있습니다.
          </p>
          <p>
            풀스택 개발 경험을 살려 UI 성능 최적화와 사용자 경험 향상을 목표로
            합니다.
          </p>
          {/* <p>
            클라우드 보안과 Kubernetes에 대한 기본적인 지식을 바탕으로, <br />
            풀스택 개발 경험을 활용하여 클라우드 인프라 최적화와 서비스 성능
            향상을
            <br />
            목표로 합니다.
          </p> */}
          {/* <p>
            클라우드 네이티브 환경에서 보안성과 확장성을 고려한 안정적인
            플랫폼을 제공합니다.
          </p> */}
        </div>
      </div>
      <div className="w-[120px] sm:w-[120px] relative mb-8 sm:mb-0 mr-auto">
        <Image
          alt="양희진"
          src="/static/images/luna_profile_img.png"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          //   sizes="30vw"
          width={140}
          height={140}
          priority
        />
      </div>
    </article>
  );
};

export default Bio;
