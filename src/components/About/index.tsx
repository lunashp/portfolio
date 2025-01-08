import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        About Me
      </h1>
      <div className="mb-8 prose dark:prose-dark leading-6">
        <h2>Job Title</h2>
        <p>양희진, 2+years FrontEnd Developer</p>
        {/* <ul>
          <li>양희진, 2+years FrontEnd Developer</li>
        </ul> */}

        <h2>Bio</h2>
        <ul>
          <li>Age: 28세</li>
          <li>
            Eamil: <a href="mailto:hijnshp@gmail.com">hijnshp@gmail.com</a>
          </li>
        </ul>

        <h2>Links</h2>
        <ul>
          <li>
            GitHub: <a href="https://github.com/lunashp">@lunashp</a>
          </li>
          <li>
            Website:{" "}
            <Link href="https://lunapor.vercel.app">
              https://lunapor.vercel.app
            </Link>
          </li>
          <li>
            Blog:{" "}
            <Link href="https://velog.io/@lunashp">
              https://velog.io/@lunashp
            </Link>
          </li>
          {/* <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/asher-kim/">
              https://www.linkedin.com/in/asher-kim
            </a>
          </li> */}
        </ul>

        <h2>Education</h2>
        <ul>
          <li>푸딩캠프 2차 프로젝트 참여 (24.10. - 25. 01.)</li>
          <li>항해플러스 프론트엔드 코스 (24.09. - 24. 11.)</li>
          <li>한국방송통신대학교 컴퓨터과학과 졸업 (24.08.)</li>
          <li>
            AI 활용 빅데이터 분석 및 응용 소프트웨어 개발자 교육 (21.10. -
            22.04.)
          </li>
        </ul>
      </div>
    </div>
  );
};
export default About;
