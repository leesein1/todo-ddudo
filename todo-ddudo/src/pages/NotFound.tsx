import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">페이지를 찾을 수 없습니다.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
