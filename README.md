# 🌙 Luna's Portfolio

양희진의 개인 포트폴리오 웹사이트입니다. 프론트엔드 개발자로서의 경력과 프로젝트를 소개하는 Next.js 기반의 모던한 포트폴리오 사이트입니다.

## ✨ 주요 기능

- **📱 반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 사용자 경험
- **🌙 다크모드 지원**: 시스템 설정에 따른 자동 테마 전환 및 수동 테마 변경
- **⚡ 빠른 로딩**: Next.js 14 App Router와 최적화된 이미지 로딩
- **🎨 모던 UI/UX**: Tailwind CSS와 커스텀 디자인 시스템
- **📊 스켈레톤 UI**: 로딩 중 사용자 경험을 향상시키는 스켈레톤 애니메이션
- **🔍 SEO 최적화**: 메타데이터와 구조화된 데이터로 검색 엔진 최적화

## 🛠️ 기술 스택

### Frontend

- **Next.js 14** - React 기반 풀스택 프레임워크
- **TypeScript** - 타입 안정성과 개발 생산성 향상
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **React 18** - 최신 React 기능과 동시성 렌더링

### UI/UX

- **Custom Design System** - 일관된 디자인을 위한 커스텀 컴포넌트
- **Responsive Design** - 모든 화면 크기에 대응하는 반응형 레이아웃
- **Dark Mode** - next-themes를 활용한 다크모드 구현
- **Skeleton Loading** - 로딩 상태를 시각적으로 표현하는 스켈레톤 UI

### 개발 도구

- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **PostCSS** - CSS 후처리
- **Autoprefixer** - 브라우저 호환성

### 배포 및 분석

- **Vercel** - 클라우드 플랫폼 배포
- **Vercel Analytics** - 사용자 분석
- **Vercel Speed Insights** - 성능 모니터링

## 🏗️ 프로젝트 구조

이 프로젝트는 **Feature-Sliced Design (FSD)** 아키텍처 패턴을 따릅니다.

```
app/
├── components/
│   ├── shared/           # 공통 컴포넌트
│   │   ├── ui/          # UI 컴포넌트 (버튼, 아이콘, 레이아웃)
│   │   ├── lib/         # 유틸리티 함수
│   │   └── config/      # 설정 파일
│   ├── entities/        # 비즈니스 엔티티
│   │   └── project/     # 프로젝트 관련 데이터 및 컴포넌트
│   ├── features/        # 비즈니스 기능
│   │   └── project-detail/  # 프로젝트 상세 기능
│   ├── widgets/         # 복합 UI 블록
│   │   ├── bio/         # 소개 섹션
│   │   ├── skills/      # 스킬 섹션
│   │   └── projects/    # 프로젝트 섹션
│   └── pages/           # 페이지 컴포넌트
│       ├── home/        # 홈페이지
│       ├── about/       # About 페이지
│       └── projects/    # 프로젝트 페이지
├── public/              # 정적 파일
└── content/             # 콘텐츠 파일
```

## 📱 페이지 구성

### 🏠 홈페이지 (`/`)

- **Bio 섹션**: 개인 소개 및 프로필 이미지
- **Projects 섹션**: 주요 프로젝트 미리보기
- **Skills 섹션**: 기술 스택 및 도구

### 👨‍💻 About 페이지 (`/about`)

- 개인 정보 및 연락처
- 교육 이력
- 소셜 링크

### 🚀 Projects 페이지 (`/projects`)

- 모든 프로젝트 목록
- 회사 프로젝트와 사이드 프로젝트 구분
- 프로젝트 상세 정보

### 📄 프로젝트 상세 페이지 (`/projects/[slug]`)

- 프로젝트별 상세 정보
- 기술 스택 및 업무 내용
- 프로젝트 회고 및 성과

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: Peri (청록색 계열)
- **Secondary**: Secondary Peri (청록색 변형)
- **Tertiary**: Tertiary Peri (연한 청록색)
- **Gray Scale**: 0-900 단계의 그레이 스케일

### 타이포그래피

- **Font Family**: Inter (기본), Geist Sans (제목)
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### 컴포넌트

- **재사용 가능한 UI 컴포넌트**
- **일관된 스타일링**
- **접근성 고려**

## 🔧 주요 기능 구현

### 스켈레톤 UI

- 로딩 상태를 시각적으로 표현
- 사용자 경험 향상
- 실제 콘텐츠와 유사한 레이아웃

### 반응형 디자인

- 모바일 퍼스트 접근법
- 브레이크포인트별 최적화
- 유연한 그리드 시스템

### 성능 최적화

- Next.js Image 컴포넌트 활용
- 코드 스플리팅
- 지연 로딩

## 📊 프로젝트 데이터

프로젝트 정보는 `app/components/entities/project/ProjectList.tsx`에서 관리됩니다:

- **회사 프로젝트**: 아콘소프트, 휴버텍, 레빗
- **사이드 프로젝트**: Keep In Touch, Secret Talk
- **프로젝트 상세 정보**: 기술 스택, 업무 내용, 회고

## 🌐 배포

이 프로젝트는 Vercel을 통해 배포됩니다:

- **자동 배포**: GitHub 푸시 시 자동 배포
- **도메인**: [lunashp.vercel.app](https://portfolio-lunashp.vercel.app)
- **CDN**: 글로벌 CDN을 통한 빠른 로딩

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 연락처

- **이메일**: hijnshp@gmail.com
- **GitHub**: [@lunashp](https://github.com/lunashp)
- **블로그**: [velog.io/@lunashp](https://velog.io/@lunashp)
- **웹사이트**: [lunashp.vercel.app](https://portfolio-lunashp.vercel.app)

---
