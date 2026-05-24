export const portfolioData = {
    experience: [
        {
            id: "exp-sw-ta",
            company: "세종대학교 기초교양코딩",
            role: "C/Python 교양필수과목 총괄조교·수업조교(TA)",
            period: "2023.09 - 현재",
            details: [
                "Python 'SW기초코딩' 총괄조교 (2025.03 - 현재)",
                "Python 기초·고급 4개 과목 수업조교 (2023 - 2024, 총 7분반)",
                "C언어 '프로그래밍활용' 과목 수업조교 (2023, 총 1분반)"
            ]
        },
        {
            id: "exp-tutor",
            company: "세종대학교 창의나눔튜터링",
            role: "신입생SW역량 튜터",
            period: "2024.03 - 2024.06",
            details: [
                "Python 기초교양필수 'SW기초코딩' 과목 수강 학부생 5명 대상 멘토링"
            ]
        },
        {
            id: "exp-nareum",
            company: "나름청소년활동센터",
            role: "청소년 대상 과학프로그램 주강사·보조강사",
            period: "2021 - 2025",
            details: [            
                "재미과학탐구단 '꼼지락', 주강사 (2024)",
                "청소년과학펼침창작활동 '달고나몹', 보조강사 (2022 - 2025)",
                "다함께꿈의학교 'Youth Maker', 보조강사 (2022 - 2023)",
                "경기도 청소년 육성 기금지원 메이커 사업 'QR코드', 보조강사 (2021)",
            ]
        }
    ],
    education: [
        {
            id: "edu-master",
            school: "세종대학교",
            url: "https://www.sejong.ac.kr",
            degree: "소프트웨어학과 석사 재학",
            period: "2025.09 - 현재"
        },
        {
            id: "edu-bachelor",
            school: "세종대학교",
            url: "https://www.sejong.ac.kr",
            degree: "소프트웨어학과 학사 졸업 (GPA 4.01 / 4.5)",
            period: "2021.03 - 2025.08"
        },
        {
            id: "edu-high",
            school: "한국디지털미디어고등학교",
            url: "https://www.dimigo.hs.kr",
            degree: "웹프로그래밍과 졸업",
            period: "2018.03 - 2021.02"
        }
    ],
    projects: [
        {
            id: "proj-1",
            title: "마이 레시피 북 (My Recipe Book)",
            period: "2023.05 - 2023.08",
            summary: "나만의 레시피를 저장하고 공유하는 서비스",
            description: "사용자가 자신만의 레시피를 등록하고 다른 사용자와 공유할 수 있는 웹 서비스입니다. 무한 스크롤 기능을 통해 대량의 데이터를 효율적으로 렌더링하도록 구현했습니다.",
            stack: ["React", "Firebase", "Tailwind"],
            images: [
                { alt: "메인 화면 스크린샷 (1/3)" },
                { alt: "레시피 작성 화면 (2/3)" },
                { alt: "마이페이지 화면 (3/3)" }
            ]
        }
    ],
    lab: [
        {
            id: "lab-1",
            title: "날씨 기반 옷차림 추천기",
            period: "2023.11",
            summary: "OpenWeather API를 활용한 가벼운 유틸리티",
            description: "현재 위치의 기온을 받아와 적절한 옷차림을 일러스트와 함께 추천해주는 간단한 앱입니다. 외부 API 연동과 비동기 처리(Async/Await) 패턴을 연습하기 위해 제작했습니다.",
            stack: ["JavaScript", "REST API"],
            images: [
                { alt: "날씨 검색 및 추천 결과 (1/2)" },
                { alt: "지역별 날씨 즐겨찾기 (2/2)" }
            ]
        }
    ]
};