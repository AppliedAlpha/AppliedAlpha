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
    awards: [
        {
            id: "award-gm-youth",
            competition: "광명시 청소년의 달 모범청소년 표창",
            prize: "광명시 모범청소년상 (경기도지사상)",
            date: "2025.05"
        },
        {
            id: "award-gm-startup",
            competition: "광명시 청년 생각펼침 공모사업 청년창업분야 우수사례 경진대회",
            prize: "장려상 (광명시장상)",
            date: "2024.11"
        },
        {
            id: "award-sejong-swai-2023",
            competition: "세종대학교 2023 SW·AI 융합코딩경시대회",
            prize: "은상",
            date: "2023.12"
        },
        {
            id: "award-ulsan-dfam",
            competition: "제6회 울산 DfAM 경진대회 생활부문",
            prize: "울산대학교총장상 (은상)",
            date: "2022.11"
        },
        {
            id: "award-gumi-3dp",
            competition: "제7회 구미 3D프린팅BIZCON경진대회 디자인부문",
            prize: "과학기술정보통신부장관상 (대상)",
            date: "2022.10"
        },
        {
            id: "award-sejong-swai-2021",
            competition: "세종대학교 제8회 SW·AI 융합코딩경시대회",
            prize: "소프트웨어융합대학장상 (1등상)",
            date: "2021.11"
        },
        {
            id: "award-makers-10",
            competition: "제10회 창의메이커스필드 SW활용 아이디어톤",
            prize: "3D프린팅협회장상",
            date: "2019.12"
        },
        {
            id: "award-makers-9",
            competition: "제9회 창의메이커스필드 SW활용 아이디어톤",
            prize: "정보통신산업진흥원장상",
            date: "2019.08"
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
            links: [
                { type: "github", url: "#" },
                { type: "blog",   url: "#" },
                { type: "site",   url: "#" }
            ],
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
            links: [
                { type: "github", url: "#" }
            ],
            images: [
                { alt: "날씨 검색 및 추천 결과 (1/2)" },
                { alt: "지역별 날씨 즐겨찾기 (2/2)" }
            ]
        }
    ]
};