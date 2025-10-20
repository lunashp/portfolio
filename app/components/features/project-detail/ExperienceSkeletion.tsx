/**
 * 프로젝트 목록 스켈레톤 컴포넌트
 * 프로젝트 목록 로딩 중에 표시되는 스켈레톤 UI
 * @returns {JSX.Element} 프로젝트 목록 스켈레톤 컴포넌트
 */
const ExperienceSkeletion = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="space-y-8">
        {/* 프로젝트 카드 스켈레톤 */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
          >
            <div className="flex items-start space-x-4">
              {/* 이미지 스켈레톤 */}
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>

              <div className="flex-1 space-y-3">
                {/* 제목 스켈레톤 */}
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>

                {/* 부제목 스켈레톤 */}
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>

                {/* 설명 스켈레톤 */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
                </div>

                {/* 기술 스택 스켈레톤 */}
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"
                    ></div>
                  ))}
                </div>

                {/* 기간 스켈레톤 */}
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSkeletion;
