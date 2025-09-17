import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Layout from './layouts/Layout';
import './index.css';

const NotFound = lazy(() => import('./pages/NotFound.tsx'));
const Login = lazy(() => import('./pages/Login.tsx'));

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
          <Route element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
