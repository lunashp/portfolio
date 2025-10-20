/**
 * 프로젝트 상세 페이지 스켈레톤 컴포넌트
 * 프로젝트 상세 정보 로딩 중에 표시되는 스켈레톤 UI
 * @returns {JSX.Element} 프로젝트 상세 스켈레톤 컴포넌트
 */
const DetailSkeleton: React.FC = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="space-y-8">
        {/* 프로젝트 제목 스켈레톤 */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>

        {/* 프로젝트 요약 스켈레톤 */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
        </div>

        {/* 개발환경 섹션 스켈레톤 */}
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-transparent dark:bg-black">
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>

        {/* 업무 섹션 스켈레톤 */}
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"
              ></div>
            ))}
          </div>
        </div>

        {/* 회고 섹션 스켈레톤 */}
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
