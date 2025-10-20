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
          "마이크로프론트엔드(MFE)는 만능이 아니었습니다. 모듈 경계를 먼저 정하지 않으면 ‘독립 배포’가 말뿐이 된다 는 걸 배웠고, 도메인·디자인 토큰·라우팅 책임을 초기에 분리하는 게 가장 중요했습니다.",
          "CI는 빠르게 돌리는 것보다 신뢰도를 높이는 것이 더 가치 있었습니다. 캐시 최적화보다 불안정한 테스트를 격리하고 도입하는 것이 롤백을 줄였습니다.",
          "승인 기반 배포 자동화는 도구만으로 되는 것이 아니라 사람과 프로세스가 함께 맞아야 했고, Redmine 흐름을 기술적 제약으로 기록해 예외 상황까지 합의했습니다.",
          "라우팅 교체는 한 번에 갈아엎기보다 ‘천천히, 안전하게’가 답이었습니다. 병행 운영 기간을 두고 화면 단위로 옮기니 리스크를 많이 줄일 수 있었습니다.",
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
          "부하 테스트는 수치보다 ‘재현성’이 중요했습니다. 테스트 데이터가 실제 분포를 반영하지 않으면 결과가 왜곡되므로 샘플링 전략을 먼저 고도화했습니다.",
          "APM 지표만으로 원인을 단정하지 않기로 했습니다. SkyWalking 지표를 트레이스-로그 상관분석으로 교차검증하며 과잉 최적화를 피했습니다.",
          "데이터베이스 튜닝은 ‘느린 쿼리’보다 ‘빈번한 쿼리’를 먼저 잡는 것이 체감 성능에 더 유의미했습니다. 인덱스 최적화보다 캐싱 정책 정비가 더 큰 효과를 냈습니다.",
          "성능 목표를 SLO(백분위·오류율)로 재정의하고, 실패 시 롤백 기준을 명확히 하니 논의가 ‘감각’에서 ‘협업’으로 바뀌었습니다.",
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
          "프론트엔드 전향의 분기점이었습니다. 서버 관점에서 ‘옳다’고 만든 API도 UI 흐름에선 불친절할 수 있음을 배웠고, 사용자 작업 여정을 먼저 그린 뒤 API 계약을 되돌리는 습관을 들였습니다.",
          "MSW를 도입하고 나서야 선행 개발의 진짜 가치를 알았습니다. 백엔드 일정과 무관하게 UI·상태 모델을 실험하며 요구사항을 앞당겨 확정할 수 있었습니다.",
          "상태 관리는 ‘데이터 신뢰 경계’를 정의하는 일이라는 걸 배웠습니다. 서버 상태는 Query, 파생·세션 상태는 Store로 분리하고, 캐시 무효화 규칙을 문서로 남겼습니다.",
          "디자인 시스템은 컴포넌트보다 ‘토큰’부터였습니다. MUI·styled-components를 섞되 색·간격·타이포 토큰을 단일 소스로 관리하며 일관성을 확보했습니다.",
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
          "자동화의 가치는 ‘반복 제거’가 아니라 ‘신뢰 가능한 반복’에 있었습니다. 실패 모드를 먼저 정의하고 리트라이·알림·중단 기준을 넣자 야간 작업이 사라졌습니다.",
          "다양한 IaaS 환경에서 보안 점검 자동화 및 플랫폼 확장성 검사를 진행하며 클라우드 서비스의 보안 중요성을 실무에서 체득할 수 있었습니다.",
          "다양한 협력사와의 네트워크 환경 구축 및 협업을 통해 커뮤니케이션 능력을 강화할 수 있었습니다.",
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
      position: "Frontend Developer",
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
        "리뷰 문화는 규칙보다 ‘공감대’가 먼저였습니다. PR 템플릿에 의도·대안·리스크를 적도록 하자 논쟁이 짧아지고 결정이 빨라졌습니다.",
        "지표 없는 개선은 반복됐습니다. Lighthouse CI를 ‘게이트’가 아닌 ‘지표 대시보드’로 운영하고, 회고 때 리그레션의 원인을 팀이 함께 봤습니다.",
        "자동 배포는 속도보다 가시성이 중요했습니다. 배포 노트 자동 생성과 체인지로그 구독을 도입해 장애 대응 시간을 줄였습니다.",
      ],
    },
    {
      title: "Secret Talk",
      subtitle: "",
      startedAt: "2024.05.",
      endedAt: "2024.08.",
      position: "Full Stack Developer",
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
        "초기 스코프를 줄였어야 했습니다. 익명성·매칭·알림을 한 번에 붙이기보다 핵심 루프를 먼저 검증했다면 피벗이 쉬웠을 겁니다.",
        "프라이버시는 기능이 아니라 기본값이었습니다. 로그 마스킹·민감 정보 분리 보관을 초기에 적용하며 운영 비용을 낮췄습니다.",
        "다음 단계는 유지율을 지표로 보는 것입니다. ‘답장을 못 받지 않게 한다’는 문제를 매칭 품질·리드타임·알림 성공률로 수치화할 계획입니다.",
      ],
    },
  ];
};

// 기존 코드와의 호환성을 위해 projects export 유지
export const projects = getAllProjects();
