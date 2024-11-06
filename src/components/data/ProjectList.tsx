export interface Project {
  title: string;
  subtitle?: string;
  company: string;
  description: string[];
  url?: string;
  startedAt: string;
  endedAt: string;
  position: string;
  _id: string;
  slug: string;
  workStartedAt: string;
  workEndedAt: string;
  mainImage: string;
  summary: string;
  mainSkill: string;
  subSkill: string;
  rank: string;
}

export const projects: Project[] = [
  {
    title: "휴버텍",
    subtitle: "",
    company: "휴버택",
    startedAt: "2023.05.",
    endedAt: "2024.05.",
    description: [
      "MSW를 도입하여 Frontend 선도개발 프로세스 확립 및 선행 개발 진행으로 개발 시간 단축",
      "Go API를 활용한 카탈로그 데이터 수집",
      "프로젝트를 위한 Go 기반 CRUD 템플릿 생성",
      "FE & BE 기술 온보딩 세션을 도입하여 다양한 기술을 학습하고 공유하며 개발 품질을 향상",
      "개발자 간 k8s 관련 기술 공유",
    ],
    // url: "https://example.com/",
    position: "Full Stack",
    _id: "1",
    slug: "project-1",
    workStartedAt: "2023-05",
    workEndedAt: "2024-05-02",
    summary:
      "기업들이 쿠버네티스 클러스터를 신속하게 배포하고 관리할 수 있는 KaaS 서비스 플랫폼입니다.",
    mainImage: "/static/images/project/huevertech.webp",
    mainSkill:
      " Next.js / Typescript / React-query / Zustand / styled-components / Material-UI",
    subSkill: "Git / Gitlab / Kubernates / Docker / Jenkins",
    rank: "정직원 주임",
  },
  {
    title: "개방형 클라우드 플랫폼",
    subtitle: "(PaaS-Ta / K-PaaS)",
    company: "레빗",
    startedAt: "2022.05.",
    endedAt: "2023.04.",
    description: [
      "AWS, Azure, GCP, OpenStack, NCP 등 다양한 IaaS 환경에서 플랫폼 오픈소스의 정기적 보안 점검 수행",
      "보안 점검 자동화 스크립트 작성 및 관리 (Shell)",
      "보안 점검 결과 자동화: Shell 스크립트를 활용하여 기존 txt 출력을 Excel 보고서로 변환",
      "플랫폼 호환성 및 확장성 검사 리드 (다양한 서비스 UI 경험 및 타사와의 협업 미팅 주도)",
      "협력사 네트워크 환경 구축 지원",
    ],
    // url: "https://example.com/",
    position: "Cloud Engineer",
    _id: "2",
    slug: "project-2",
    workStartedAt: "2022-05",
    workEndedAt: "2023-04-30",
    summary:
      "국내 IT 서비스 경쟁력 강화를 목표로, 한국지능정보사회진흥원(NIA)의 지원 아래\n다양한 국내 업체와 협력해 만든 오픈 클라우드 플랫폼입니다.",
    mainImage: "/static/images/project/k-paas.webp",
    mainSkill: "ShellScript / Aws / Azure / Gcp / Openstack",
    subSkill: "Git / Kubernates / Python",
    rank: "정직원 전임",
  },
  // {
  //   title: "Project Three",
  //   startedAt: 2023,
  //   endedAt: 2023,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
  //   url: "https://example.com/",
  //   position: "Full Stack",
  // },
];
