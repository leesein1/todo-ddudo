import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";
import "./index.css";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));
const Signup = lazy(() => import("./pages/Signup.tsx"));
const Main = lazy(() => import("./pages/Main.tsx"));

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <Routes>
          {/* 기본 / → AuthLayout + Login */}
          <Route element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* 로그인 후 메인 레이아웃 */}
          <Route element={<Layout />}>
            <Route path="/main" element={<Main />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
