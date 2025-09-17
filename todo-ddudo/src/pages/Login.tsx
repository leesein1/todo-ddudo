import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: 나중에 Firebase Auth 또는 API 연동
        console.log("로그인 시도:", { email, password });
        alert("로그인 시도! (나중에 API 연동 예정)");
    };

    return (
        <div className="flex items-center justify-center min-h-[80vh]">
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6"
        >
            <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
            <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">이메일</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700"
                required
            />
            </div>
            <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">비밀번호</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700"
                required
            />
            </div>
            <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
            로그인
            </button>
        </form>
        </div>
    );
}
