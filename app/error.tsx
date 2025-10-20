"use client";

import { useEffect } from "react";

/**
 * 에러 페이지 컴포넌트
 * 애플리케이션에서 에러가 발생했을 때 표시되는 페이지
 * @param {Object} props - 컴포넌트 props
 * @param {Error} props.error - 발생한 에러 객체
 * @param {Function} props.reset - 에러 상태를 리셋하는 함수
 * @returns {JSX.Element} 에러 페이지 컴포넌트
 */
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Oops! Something went wrong... maybe try refreshing?</p>
    </div>
  );
}
