# 🏨 호텔 예약 시스템

React로 만든 현대적인 호텔 예약 애플리케이션입니다. 사용자가 호텔을 검색하고 예약할 수 있으며, 호텔 오너는 자신의 호텔을 관리할 수 있습니다.

## 🚀 주요 기능

### 게스트 기능
- **호텔 검색** - 이용 가능한 모든 호텔과 객실을 상세 정보와 함께 탐색
- **객실 상세 조회** - 객실 정보, 편의시설, 가격 등 자세히 확인
- **예약 관리** - 내 예약 현황 추적 및 관리
- **인증** - Clerk을 이용한 안전한 로그인

### 호텔 오너 기능
- **대시보드** - 호텔 운영 현황 개요
- **객실 관리** - 호텔 객실 추가, 수정, 관리
- **객실 목록** - 등록된 객실 확인 및 정리
- **객실 등록** - 상세 정보와 함께 새 객실 등록

## 🛠️ 기술 스택

- **프론트엔드 프레임워크**: React 19.2
- **빌드 도구**: Vite 7.0
- **라우팅**: React Router 7.13
- **인증**: Clerk 6.1
- **스타일링**: TailwindCSS 4.2
- **언어**: JavaScript (ES Modules)
- **린팅**: ESLint 9.39

## 📁 프로젝트 구조

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.jsx                 # 홈 페이지
│   │   ├── AllRooms.jsx            # 모든 객실 조회
│   │   ├── RoomDetail.jsx          # 객실 상세 페이지
│   │   ├── MyBookings.jsx          # 내 예약 현황
│   │   └── hotelOwner/
│   │       ├── Layout.jsx          # 오너 레이아웃
│   │       ├── Dashboard.jsx       # 오너 대시보드
│   │       ├── AddRoom.jsx         # 객실 추가
│   │       └── ListRoom.jsx        # 객실 관리
│   ├── components/
│   │   ├── Navbar.jsx              # 네비게이션 바
│   │   ├── Footer.jsx              # 푸터
│   │   ├── HotelCards.jsx          # 호텔 카드 컴포넌트
│   │   ├── RoomList.jsx            # 객실 목록
│   │   ├── HotelReg.jsx            # 호텔 등록
│   │   ├── Hero.jsx                # 히어로 섹션
│   │   ├── FeatureDestination.jsx  # 특색 있는 목적지
│   │   ├── ExclusiveOffers.jsx     # 특별 할인 섹션
│   │   ├── Newsletter.jsx          # 뉴스레터 구독
│   │   ├── Testimonial.jsx         # 고객 후기
│   │   └── HotelOwner/
│   │       ├── Navbar.jsx          # 오너 네비게이션
│   │       └── Sidebar.jsx         # 오너 사이드바
│   ├── assets/
│   │   └── assets.js               # 에셋 임포트
│   ├── App.jsx                     # 메인 앱 컴포넌트
│   ├── main.jsx                    # 진입점
│   └── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── vercel.json                     # 배포 설정
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 방법

```bash
# 의존성 설치
npm install

# 환경 변수 설정
# client 디렉토리에 .env 파일을 만들고 필요한 변수 추가
```

### 개발 시작

```bash
# HMR이 활성화된 Vite 개발 서버 시작
npm run dev
```

애플리케이션은 `http://localhost:5173`에서 실행됩니다.

### 프로덕션 빌드

```bash
# 프로덕션용 빌드
npm run build

# 로컬에서 프로덕션 빌드 미리보기
npm run preview
```

## 🔧 사용 가능한 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 핫 모듈 교체(HMR)가 활성화된 Vite 개발 서버 시작 |
| `npm run build` | 최적화된 프로덕션 빌드 생성 |
| `npm run lint` | ESLint로 코드 품질 점검 |
| `npm run preview` | 로컬에서 프로덕션 빌드 미리보기 |

## 🔐 인증

애플리케이션은 **Clerk**을 사용한 안전한 인증을 제공합니다. 사용자는 다음이 가능합니다:
- 이메일로 회원가입
- 기존 계정으로 로그인
- 인증 상태에 따른 보호된 라우트 접근

## 🎨 스타일링

TailwindCSS가 유틸리티 중심의 스타일링으로 설정되어 있습니다. 프로젝트는 최적의 성능을 위해 TailwindCSS Vite 플러그인을 사용합니다.

## 📱 주요 라우트

| 라우트 | 설명 |
|--------|------|
| `/` | 홈 페이지 |
| `/rooms` | 모든 이용 가능한 객실 |
| `/rooms/:id` | 객실 상세 페이지 |
| `/my-bookings` | 내 예약 목록 |
| `/owner` | 호텔 오너 대시보드 |
| `/owner/add-room` | 새 객실 추가 |
| `/owner/list-room` | 호텔 객실 관리 |

## 🧹 코드 품질

프로젝트는 ESLint를 사용하여 코드 품질을 유지합니다:

```bash
npm run lint
```

## 🌐 배포

프로젝트에는 Vercel로 쉽게 배포할 수 있도록 `vercel.json` 설정이 포함되어 있습니다.

## 📝 참고사항

- HotelReg 컴포넌트는 현재 비활성화 상태입니다 (`App.jsx` 19번 줄 참고)
- 호텔 오너 라우트는 별도의 네임스페이스(`/owner`)에 있습니다
- 오너 라우트에서는 별도의 UI를 유지하기 위해 네비게이션 바가 숨겨집니다

## 🤝 기여

이슈 제출 및 개선 사항 제안은 언제든지 환영합니다!

## 📄 라이선스

이 프로젝트는 교육 및 개발 목적으로 만들어졌습니다.
