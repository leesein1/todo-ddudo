import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("로그인 시도:", { email, password });
        alert("로그인 시도! (나중에 API 연동 예정)");
    };

    return (
        <div className="flex items-center justify-center min-h-[80vh] px-4">
            <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8"
            >
            {/* 제목 */}
            <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
                로그인
            </h1>

            {/* 이메일 입력 */}
            <div className="mb-5">
                <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    이메일
                </label>
                <input
                type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="이메일을 입력하세요"
                    required
                />
            </div>

            {/* 비밀번호 입력 */}
            <div className="mb-6">
                <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    비밀번호
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="비밀번호를 입력하세요"
                    required
                />
            </div>

            {/* 로그인 버튼 */}
            <button
                type="submit"
                className="w-full py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition"
                >
                로그인
            </button>

            {/* 추가 링크 */}
                <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
                    계정이 없으신가요?{" "}
                    <a href="/signup" className="text-sky-500 hover:underline font-semibold" >회원가입</a>
                </p>
            </form>
        </div>
    );
}
