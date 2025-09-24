import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 간단한 유효성 체크 (예시)
    if (!name || !handle || !email || !password) {
      setError("모든 필드를 입력해주세요.");
      return;
    }
    if (!handle.startsWith("@")) {
      setError("별명은 반드시 '@'로 시작해야 합니다.");
      return;
    }

    // TODO: Firebase Auth or API 연동
    console.log("회원가입 시도:", { name, handle, email, password });
    setError(""); // 성공 시 에러 초기화
    alert("회원가입 시도! (나중에 API 연동 예정)");
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8"
      >
        {/* 제목 */}
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
          회원가입
        </h1>

        {/* 에러 메시지 */}
        {error && (
          <p className="mb-4 text-sm text-red-500 font-semibold text-center">
            {error}
          </p>
        )}

        {/* 이름 */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            이름
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="홍길동"
            required
          />
        </div>

        {/* 별명 */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            별명
          </label>
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="@nickname"
            required
          />
        </div>

        {/* 아이디 / 이메일 */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            아이디 (이메일)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="example@email.com"
            required
          />
        </div>

        {/* 비밀번호 */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            비밀번호
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="••••••••"
            required
          />
        </div>

        {/* 회원가입 버튼 */}
        <button
          type="submit"
          className="w-full py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition"
        >
          회원가입
        </button>

        {/* 로그인 링크 */}
        <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
          이미 계정이 있으신가요?{" "}
          <Link to="/" className="text-sky-500 hover:underline font-semibold">
            로그인하기
          </Link>
        </p>
      </form>
    </div>
  );
}
