# 📝 뚜두뚜두 (TuduTudu)

> 리듬감 있게 정리하는 반복 할 일 관리 도우미  
> **뚜두뚜두~♬ 알림이 오기 전에 일을 끝내보자!**

---

## 🎯 프로젝트 개요

**뚜두뚜두**는 매일 반복되는 일들을 간편하게 정리하고,  
**디스코드로 5분, 10분 전에 알림**까지 받아볼 수 있는  
**개인용 투두리스트 웹앱**입니다.

- 반복 업무 등록 (주간 / 월간)
- 오늘, 주간, 월간 뷰 제공
- 태그/카테고리 기반 분류
- 디스코드 알림 전송 (Webhook 기반)
- JWT 로그인 기반 API 인증

---

## 💡 주요 기능

| 기능 | 설명 |
|------|------|
| ✅ 오늘의 할 일 | 하루 단위 체크리스트 표시 및 완료 처리 |
| 🔁 반복 등록 | 주간 / 월간 반복 일정 등록 가능 |
| 🗓 뷰 전환 | 오늘 / 주간 / 월간 탭 전환 UI |
| 🔖 태그 기능 | 할 일을 주제별로 정리 가능 |
| 📣 디스코드 알림 | 할 일 시작 5~10분 전에 Webhook으로 알림 전송 |
| 🔐 JWT 로그인 | 사용자 인증 및 개인화 데이터 관리 |

---

## 🛠️ 사용 기술

### 프론트엔드
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Firebase Hosting** (정적 사이트 배포)

### 백엔드
- **Spring Boot**
- **JWT 기반 인증**
- **스케줄링 (Spring Scheduler / Quartz)**
- **디스코드 Webhook 알림 처리**

### 데이터베이스
- **MySQL** (JPA or MyBatis 활용 예정)

---

## 🗂 디렉토리 구조 (예정)

```
📁 frontend/
  ├── pages/
  ├── components/
  ├── hooks/
  └── styles/

📁 backend/
  ├── controller/
  ├── service/
  ├── domain/
  ├── repository/
  └── scheduler/

📁 docs/
  └── README.md (기획서)
```

---

## 🚀 개발 목표

| 단계 | 목표 |
|------|------|
| ✅ Step 1 | 기능 정의 및 MVP 구성 |
| 🔧 Step 2 | UI/UX 와이어프레임 / 컴포넌트 구성 |
| 🔒 Step 3 | 로그인/회원가입 및 JWT 인증 처리 |
| 🔁 Step 4 | 반복 일정 등록/관리 기능 구현 |
| 🛎️ Step 5 | 디스코드 알림 및 스케줄링 설정 |
| 📦 Step 6 | Firebase 정적 배포 및 테스트 |

---

## 👤 개발자

| 이름 | 링크 |
|------|------|
| 이세인 (Sein Lee) | [GitHub](https://github.com/sein-lee) _(링크 변경 가능)_ |

---

## 📌 향후 확장 아이디어

- 모바일 홈화면 설치 (PWA)
- 다크모드 지원
- 일정 공유 / 협업 기능
- 소셜 로그인 추가
- 통계 및 루틴 분석


# 프로젝트 구성 정보

## 📦 적용 npm 라이브러리
- **프로젝트 생성**
  - `npm create vite@latest`
  - `npm i`

- **라우팅**
  - `react-router-dom@6.14.2`

- **스타일링**
  - `styled-components@6.0.7`
  - `styled-reset`

- **타입 지원**
  - `@types/styled-components -D`

- **유틸리티 CSS**
  - `tailwindcss`
  - `postcss`
  - `autoprefixer`
  - (`npx tailwindcss init -p` 실행하여 설정 파일 생성)

---

## ⚙️ 프로젝트 구성
- **빌드/번들링**: Vite  
- **언어**: TypeScript  
- **프레임워크**: React (18.x 기반)  
- **라우팅**: React Router v6  
- **스타일링**: styled-components v6 + styled-reset + TailwindCSS  
- **타입 지원**: @types/styled-components