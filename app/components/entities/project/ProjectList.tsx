export type Project = {
  title: string;
  subtitle?: string;
  description: string[];
  url?: string;
  startedAt: string;
  endedAt: string;
  _id: string;
  slug: string;
  workStartedAt: string;
  workEndedAt: string;
  mainImage: string;
  summary: string;
  mainSkill: string;
  subSkill: string;
  recall: string[];
  // UI 호환성을 위한 필드들
  position?: string;
  company?: string;
  rank?: string;
};

export type Company = {
  name: string;
  period: string;
  position: string;
  rank?: string;
  projects: Project[];
};

export const companies: Company[] = [
  {
    name: "아콘소프트",
    period: "2025.02. - 2025.07.",
    position: "FrontEnd, DevOps",
    rank: "정규직",
    projects: [
      {
        title: "JT친애저축은행",
        subtitle: "",
        startedAt: "2025.03.",
        endedAt: "2025.06.",
        description: [
          "Vite Federation 기반 FE 모듈화 구조 설계 및 목업 구현",
          "tanstack-router 도입을 통한 SPA 라우팅 및 화면 분리 구조 개선",
          "GitLab CI/CD, Jenkins, Docker 기반 자동화 설계",
          "Redmine REST API를 활용한 결재 승인 기반 배포 자동화 설계",
          "마이크로프론트엔드 아키텍처 설계를 통한 독립적 배포 및 개발 환경 구축",
          "TypeScript 기반 타입 안정성 확보 및 코드 품질 향상",
          "컴포넌트 기반 모듈화를 통한 재사용성 및 유지보수성 개선",
          "성능 최적화를 위한 코드 스플리팅 및 번들 최적화 적용",
        ],
        _id: "5",
        slug: "project-5",
        workStartedAt: "2025-03",
        workEndedAt: "2025-07",
        summary:
          "JT친애저축은행의 genie 채권 서비스를 위한 MSA 아키텍처 컨설팅 프로젝트입니다.",
        mainImage: "/static/images/project/jt_logo.webp",
        mainSkill:
          "Vite / Federation / tanstack-router / TypeScript / React / GitLab CI/CD / Jenkins / Docker",
        subSkill:
          "Redmine REST API / 배포 자동화 / MSA 아키텍처 / 코드 스플리팅 / 번들 최적화",
        recall: [
          "Vite Federation을 활용한 모듈화 구조 설계를 통해 마이크로프론트엔드 아키텍처의 실무 적용 경험을 쌓을 수 있었습니다.",
          "tanstack-router 도입을 통한 SPA 라우팅 구조 개선으로 사용자 경험 향상에 기여했습니다.",
          "GitLab CI/CD, Jenkins, Docker를 활용한 자동화 설계를 통해 DevOps 역량을 강화할 수 있었습니다.",
          "Redmine REST API를 활용한 결재 승인 기반 배포 자동화 설계를 통해 기업 환경에 맞는 배포 프로세스를 구축했습니다.",
          "TypeScript를 활용한 타입 안정성 확보로 런타임 에러를 사전에 방지하고 코드 품질을 크게 향상시켰습니다.",
          "마이크로프론트엔드 아키텍처를 통해 팀 간 독립적인 개발과 배포가 가능한 환경을 구축하여 개발 생산성을 높였습니다.",
        ],
      },
      {
        title: "스타키움",
        subtitle: "(자재로)",
        startedAt: "2025.02.",
        endedAt: "2025.03.",
        description: [
          "JMeter를 활용한 웹 애플리케이션 성능 테스트 시나리오 설계 및 실행",
          "Apache SkyWalking을 통한 애플리케이션 성능 모니터링 및 분석",
          "Jenkins 배포 로그 분석을 통한 트러블슈팅 및 성능 병목 지점 파악",
          "성능 테스트 결과 분석 및 개선 방안 제시",
          "대용량 트래픽 상황에서의 시스템 안정성 검증",
          "부하 테스트 시나리오 설계 및 동시 사용자 수 증가에 따른 성능 측정",
          "메모리 누수 및 CPU 사용률 모니터링을 통한 시스템 최적화",
          "데이터베이스 쿼리 성능 분석 및 인덱스 최적화 방안 제시",
          "API 응답 시간 개선을 위한 캐싱 전략 수립",
        ],
        _id: "6",
        slug: "project-6",
        workStartedAt: "2025-02",
        workEndedAt: "2025-03",
        summary:
          "스타키움 플랫폼의 성능 최적화를 위한 종합적인 성능 테스트 및 모니터링 프로젝트입니다.",
        mainImage: "/static/images/project/starchium-logo.webp",
        mainSkill:
          "JMeter / Apache SkyWalking / Jenkins / 성능 테스트 / 부하 테스트",
        subSkill:
          "로그 분석 / 트러블슈팅 / 시스템 모니터링 / 데이터베이스 최적화 / 캐싱 전략",
        recall: [
          "JMeter를 활용한 체계적인 성능 테스트 시나리오 설계 및 실행을 통해 대용량 트래픽 환경에서의 시스템 안정성을 검증할 수 있었습니다.",
          "Apache SkyWalking을 통한 실시간 애플리케이션 성능 모니터링으로 시스템의 병목 지점을 정확히 파악하고 개선 방안을 제시했습니다.",
          "Jenkins 배포 로그 분석을 통한 트러블슈팅 경험을 통해 운영 환경에서의 문제 해결 역량을 강화할 수 있었습니다.",
          "성능 테스트 결과를 바탕으로 시스템 최적화 방안을 제시하며, 사용자 경험 향상에 기여할 수 있었습니다.",
          "데이터베이스 쿼리 성능 분석을 통해 인덱스 최적화 방안을 제시하여 응답 시간을 30% 단축시켰습니다.",
          "메모리 누수 및 CPU 사용률 모니터링을 통해 시스템 리소스 효율성을 크게 개선할 수 있었습니다.",
        ],
      },
    ],
  },
  {
    name: "휴버텍",
    period: "2023.05. - 2024.05.",
    position: "Full Stack",
    rank: "정직원 주임",
    projects: [
      {
        title: "휴버텍",
        subtitle: "",
        startedAt: "2023.05.",
        endedAt: "2024.05.",
        description: [
          "MSW를 도입하여 Frontend 선도개발 프로세스 확립 및 선행 개발 진행으로 프로젝트 일정 관리에 기여",
          "Go API를 활용한 카탈로그 데이터 수집",
          "프로젝트를 위한 Go 기반 CRUD 템플릿 생성",
          "FE & BE 기술 온보딩 세션을 도입하여 다양한 기술을 학습하고 공유하며 팀 기술 역량 강화",
          "React Query를 활용한 서버 상태 관리 및 캐싱 전략 구현",
          "Zustand를 통한 클라이언트 상태 관리 및 전역 상태 최적화",
          "Material-UI 컴포넌트 라이브러리를 활용한 일관된 UI/UX 디자인 시스템 구축",
          "styled-components를 활용한 CSS-in-JS 스타일링 및 테마 시스템 구현",
          "Kubernetes 클러스터 관리 및 컨테이너 오케스트레이션 경험",
        ],
        _id: "2",
        slug: "project-2",
        workStartedAt: "2023-05",
        workEndedAt: "2024-05-02",
        summary:
          "기업들이 쿠버네티스 클러스터를 신속하게 배포하고 관리할 수 있는 KaaS 서비스 플랫폼입니다.",
        mainImage: "/static/images/project/huevertech.webp",
        mainSkill:
          "Next.js / TypeScript / React-query / Zustand / styled-components / Material-UI / MSW",
        subSkill:
          "Git / GitLab / Kubernetes / Docker / Jenkins / Go / 클러스터 관리",
        recall: [
          "다양한 IaaS 환경과 Go 기반 백엔드 시스템을 경험하며, DevOps와 클라우드 환경에 대한 이해를 심화할 수 있었습니다.",
          "MSW 도입을 통해 선행 개발 프로세스를 개선하고 프로젝트 일정 관리에 기여한 점이 기억에 남습니다.",
          "팀원들과의 온보딩 세션을 통해 기술 공유 문화를 형성하고 협업 역량을 강화할 수 있었습니다.",
          "프론트엔드 개발을 처음 접하면서 사용자 인터페이스(UI)와 사용자 경험(UX) 디자인의 중요성을 실감하게 되었고, 복잡한 백엔드 시스템을 사용자가 직관적으로 이용할 수 있도록 만드는 작업에 큰 흥미를 느꼈습니다. 그로 인해 프론트엔드 개발로의 전향을 결심하게 되었으며, 기술적 측면뿐만 아니라 사용자의 경험을 개선하는 과정에서 얻은 성취감이 저에게 깊은 인상을 남겼습니다.",
          "React Query와 Zustand를 활용한 상태 관리 최적화를 통해 애플리케이션 성능을 크게 향상시켰습니다.",
          "Material-UI와 styled-components를 조합하여 확장 가능하고 일관된 디자인 시스템을 구축했습니다.",
          "Kubernetes 클러스터 관리 경험을 통해 컨테이너 오케스트레이션과 마이크로서비스 아키텍처에 대한 실무 지식을 쌓을 수 있었습니다.",
        ],
      },
    ],
  },
  {
    name: "레빗",
    period: "2022.05. - 2023.04.",
    position: "Cloud Engineer",
    rank: "정직원 전임",
    projects: [
      {
        title: "개방형 클라우드 플랫폼",
        subtitle: "(PaaS-Ta / K-PaaS)",
        startedAt: "2022.05.",
        endedAt: "2023.04.",
        description: [
          "AWS, Azure, GCP, OpenStack, NCP 등 다양한 IaaS 환경에서 플랫폼 오픈소스의 정기적 보안 점검 수행",
          "보안 점검 자동화 스크립트 작성 및 관리 (Shell)",
          "보안 점검 결과 자동화: Shell 스크립트를 활용하여 기존 txt 출력을 Excel 보고서로 변환",
          "플랫폼 호환성 및 확장성 검사 리드 (다양한 서비스 UI 경험 및 타사와의 협업 미팅 주도)",
          "협력사 네트워크 환경 구축 지원",
          "Python을 활용한 보안 취약점 스캔 도구 개발 및 자동화",
          "Kubernetes 클러스터 보안 정책 수립 및 모니터링 시스템 구축",
          "다중 클라우드 환경에서의 통합 보안 관리 솔루션 설계",
          "보안 점검 결과 시각화 대시보드 개발 및 보고서 자동 생성",
        ],
        _id: "1",
        slug: "project-1",
        workStartedAt: "2022-05",
        workEndedAt: "2023-04-30",
        summary:
          "국내 IT 서비스 경쟁력 강화를 목표로, 한국지능정보사회진흥원(NIA)의 지원 아래\n다양한 국내 업체와 협력해 만든 오픈 클라우드 플랫폼입니다.",
        mainImage: "/static/images/project/k-paas.webp",
        mainSkill: "ShellScript / AWS / Azure / GCP / OpenStack / Kubernetes",
        subSkill: "Git / Python / 보안 스캔 / 자동화 / 대시보드 개발",
        recall: [
          "다양한 IaaS 환경에서 보안 점검 자동화 및 플랫폼 확장성 검사를 진행하며 클라우드 서비스의 보안 중요성을 실무에서 체득할 수 있었습니다.",
          "ShellScript를 활용한 자동화 스크립트 작성 경험을 통해 효율적인 관리 프로세스를 구축한 점이 인상 깊었습니다.",
          "다양한 협력사와의 네트워크 환경 구축 및 협업을 통해 커뮤니케이션 능력을 강화할 수 있었습니다.",
          "Python을 활용한 보안 취약점 스캔 도구 개발을 통해 자동화된 보안 관리 시스템을 구축했습니다.",
          "Kubernetes 클러스터 보안 정책 수립 경험을 통해 컨테이너 보안의 중요성을 실무에서 학습할 수 있었습니다.",
          "보안 점검 결과 시각화 대시보드 개발을 통해 복잡한 보안 데이터를 직관적으로 표현하는 방법을 익혔습니다.",
        ],
      },
    ],
  },
];

// 기존 호환성을 위한 헬퍼 함수들

/**
 * 모든 프로젝트를 가져오는 함수
 * 회사 프로젝트와 사이드 프로젝트를 합쳐서 반환
 * @returns {Project[]} 모든 프로젝트 배열
 */
export const getAllProjects = (): Project[] => {
  const professionalProjects = companies.flatMap((company) =>
    company.projects.map((project) => ({
      ...project,
      position: company.position,
      company: company.name,
      rank: company.rank,
    }))
  );

  const sideProjects = getSideProjects();

  return [...professionalProjects, ...sideProjects];
};

/**
 * 회사 프로젝트만 가져오는 함수
 * 회사에서 진행한 프로젝트들만 필터링하여 반환
 * @returns {Project[]} 회사 프로젝트 배열
 */
export const getProfessionalProjects = (): Project[] => {
  return companies.flatMap((company) =>
    company.projects.map((project) => ({
      ...project,
      position: company.position,
      company: company.name,
      rank: company.rank,
    }))
  );
};

/**
 * 사이드 프로젝트만 가져오는 함수
 * 개인적으로 진행한 프로젝트들만 반환
 * @returns {Project[]} 사이드 프로젝트 배열
 */
export const getSideProjects = (): Project[] => {
  return [
    {
      title: "Keep In Touch",
      subtitle: "",
      startedAt: "2024.11.",
      endedAt: "2025.01.",
      description: [
        "2차 리팩토링 단계에서 프론트엔드 개발자로 프로젝트에 합류하여 UI/UX 개선 및 주요 기능 개발 주도",
        "프론트엔드 팀 리드로서 코드 리뷰 프로세스 정립, 개발 가이드라인 수립 및 협업 주도",
        "TanStack Query를 활용한 상태 관리 최적화 및 비동기 데이터 페칭 로직 개선",
        "React와 Next.js 기반으로 컴포넌트 재사용성을 고려한 코드 리팩토링 진행",
        "Vitest와 React Testing Library를 사용하여 테스트 코드 작성 주도 및 테스트 커버리지 향상",
        "메인 브랜치에 푸시 시 자동으로 배포되도록 GitHub Actions 설정 및 CI/CD 파이프라인 구성",
        "Lighthouse CI를 위한 GitHub Actions 설정",
        "검색 기능 개선을 위해 커스텀 스크립트 삽입",
        "Tailwind CSS를 활용한 반응형 디자인 적용 및 사용자 경험 향상",
      ],
      _id: "3",
      slug: "project-3",
      workStartedAt: "2024-11",
      workEndedAt: "2025-01",
      summary:
        "사람들이 서로의 감정과 생각을 편안하게 공유할 수 있는 플랫폼을 제공하여 관계의 질을 향상시키는 것을 목표로 합니다.",
      mainImage: "/static/images/project/keep_in_touch_image.webp",
      mainSkill:
        "Next.js / Typescript / React-query / tailwindcss / Vitest / React Testing Library",
      subSkill: "ShellScript / Git / GitHub Actions",
      recall: [
        "2차 리팩토링 단계에서 프론트엔드 팀 리드로 참여하며, 프로젝트의 코드 품질 향상과 협업 프로세스 개선에 기여할 수 있었습니다.",
        "TanStack Query, Vitest, Lighthouse CI 등 최신 기술을 도입하여 상태 관리 최적화, 테스트 코드 작성, 성능 개선을 경험했습니다.",
        "메인 브랜치 자동 배포 및 검색 기능 스크립트 삽입을 통해 DevOps와 자동화 프로세스에 대한 실무 경험을 쌓을 수 있었습니다.",
      ],
    },
    {
      title: "Secret Talk",
      subtitle: "",
      startedAt: "2024.05.",
      endedAt: "2024.08.",
      description: [
        "사용자가 작성한 고민을 랜덤한 3명의 사용자에게 익명으로 전달하고, 답변을 받을 수 있는 서비스 기획 및 개발",
        "프로젝트 전반 기획 및 요구사항 정의, UI/UX 설계, 주요 기능 흐름 정의",
        "프론트엔드와 백엔드 풀스택 개발: 사용자 작성 고민 저장, 랜덤 매칭 로직 구현, 답변 알림 기능 개발",
        "회원가입, 로그인, GitHub OAuth 로그인 기능 구현 및 사용자 인증 시스템 개발",
        "React와 Next.js를 활용한 프론트엔드 개발: 고민 작성 및 답변 인터페이스 최적화, 반응형 UI 구현",
        "Node.js와 MongoDB를 활용한 백엔드 API 개발: 사용자 데이터 관리, 고민 데이터 저장 및 매칭 로직 처리",
        "JWT(JSON Web Token) 기반 사용자 인증 및 보안 강화",
        "알림 시스템 개발: 사용자 답변 수신 시 실시간 알림 처리",
      ],
      _id: "4",
      slug: "project-4",
      workStartedAt: "2024-05",
      workEndedAt: "2024-08",
      summary:
        "익명의 상대에게 이야기를 전하고 위로를 전하는 창구가 되도록 하는 것이 시크릿 톡의 목표입니다.",
      mainImage: "/static/images/project/st_logo.webp",
      mainSkill:
        "Next.js / Typescript / React-query / next-auth / Material-UI / MongoDB",
      subSkill: "Git",
      recall: [
        "프로젝트의 기획부터 풀스택 개발까지 참여하며, 사용자 중심의 고민 공유 서비스를 개발한 점이 큰 의미가 있었습니다.",
        "React와 Next.js를 활용한 프론트엔드 개발과 Node.js, MongoDB를 활용한 백엔드 개발을 통해 풀스택 역량을 강화할 수 있었습니다.",
        "회원가입, 로그인, GitHub OAuth 인증 시스템을 구현하며 사용자 인증 및 보안 강화를 실무에서 적용할 수 있었습니다.",
        "추후 리팩토링을 통해 배포 자동화 파이프라인 구축하고 AI 를 도입하여 답장을 받지 못하는 사용자가 없도록 개선하려는 목표가 있습니다.",
      ],
    },
  ];
};

// 기존 코드와의 호환성을 위해 projects export 유지
export const projects = getAllProjects();
