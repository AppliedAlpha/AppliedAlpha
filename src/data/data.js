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
            id: "proj-najr",
            title: "NAJR: [나.인.페] 좌석 예약 서비스",
            period: "2025.02",
            description: `2025년 나름청소년활동센터 청소년어울마당 [나.인.페] 공연 운영을 위해 제작한 Web App 좌석 예매 시스템으로, 별도의 회원가입 없이도 관객이 좌석을 예약·관리할 수 있도록 설계했습니다.`,
            details: [
                "이름·연락처·이메일 인증만으로 좌석 예약, 본인 예약 조회·취소 흐름 구현",
                "실시간 좌석 현황 표시 (잔여석/매진석 시각화)",
                "Gmail SMTP 기반 이메일 인증코드 발송",
                "공지사항·공연 일정 인앱 팝업 안내"
            ],
            stack: ["Python", "Flask", "SQLite", "Jinja2", "Bootstrap"],
            links: [
                { type: "site", url: "https://2025festival.team-cluster.kr/" },
                { type: "github", url: "https://github.com/TeamCluster/2025-Nareum-Festival-Seat" },
            ],
            images: [
                { src: "/proj/najr01.png", alt: "Landing Page" },
                { src: "/proj/najr02.png", alt: "Checking Reservation" }
            ]
        },
        {
            id: "proj-nareum-cuts",
            title: "나름네컷: 네컷 사진 포토부스 어플리케이션",
            period: "2024.11 - 2024.12",
            description: `나름청소년활동센터 행사 부스 운영을 위해 제작한 포토부스 데스크톱 앱으로, 행사장에서 사진 촬영부터 출력까지 한 화면에서 진행할 수 있습니다.`,
            details: [
                "PyQt5 단일 윈도우로 '프레임 선택 → 사진 촬영 → 프레임 합성 및 저장' 흐름 구성",
                "OpenCV로 웹캠 연결·실시간 프리뷰 처리",
                "Pillow로 PNG 프레임 합성, 네컷 이미지 결과물 생성",
                "3D 프린팅·아두이노 자작 리모콘으로 상하좌우 선택·촬영 제어",
                "완성된 사진을 즉시 프린트해 사용자에게 제공"
            ],
            stack: ["Python", "PyQt5", "OpenCV", "Arduino", "3D Printing"],
            images: [
                { src: "/proj/cuts01.png", alt: "Welcome Screen" },
                { src: "/proj/cuts02.png", alt: "Frame Selection" },
                { src: "/proj/cuts03.png", alt: "Capturing Screen" }
            ]
        },
        {
            id: "proj-gmmap",
            title: "GM MAP: AR/VR 콘텐츠 체험형 관광 앱",
            period: "2022.08 - 2022.10",
            description: `광명시 나름청소년활동센터에서 '제7회 구미 3D프린팅BIZCON경진대회'에 출품해 수상한 체험형 관광 상품으로, 3D 프린팅 출력물과 모바일 어플리케이션을 결합해 관광지를 입체적으로 소개합니다.`,
            details: [
                "관광지를 본뜬 3D 프린팅 모델(광명 '오리서원', 구미 '석조여래좌상')을 스캔하면 해당 콘텐츠 제공",
                "VR 모드: 실제 관광지를 360도 거리뷰로 관람",
                "AR 모드: 모델 위에 세부 구현 표시 + 음성 설명 재생",
                "Unity 기반 3D 모델 Object Tracking, AR Session을 활용한 모델 출력 구현"
            ],
            stack: ["Unity", "C#", "AR Foundation"],
            links: [
                { type: "site",    url: "https://gmmap.quv.kr/5" },
                { type: "youtube", url: "https://youtu.be/PfUZdlyOjhc" }
            ],
            images: [
                { src: "/proj/gmmap01.png", alt: "Overview" },
                { src: "/proj/gmmap02.png", alt: "App Screens" },
                { src: "/proj/gmmap03.png", alt: "VR Street View" },
            ]
        },
        {
            id: "proj-usb",
            title: "U.S.B.: 비접촉식 버스 하차벨",
            period: "2022.06 - 2022.09",
            description: `광명시 나름청소년활동센터 Team 나이커에서 '제6회 울산 DfAM(Design for Additive Manufacturing) 경진대회'에 출품해 수상한 IoT 작품으로, 비접촉 & 블루투스 방식 제어를 통해 감염병 전파를 예방하고 이동약자의 접근성을 높이고자 하였습니다.`,
            details: [
                "조도(CDS) 센서 기반 손 감지: 부팅 시 주변 광량 Calibration 후 임계점 이하 시 감지",
                "ESP32 블루투스 시리얼 통신: 모바일 앱에서 원격 트리거 (혼잡 시·이동약자용)",
                "LED·부저 LEDC PWM 제어로 알림 신호 출력",
                "3D 프린팅 디자인으로 파츠별 출력·조립·교체 가능",
                "ESP32 모듈 프로그래밍 담당"
            ],
            stack: ["C", "Arduino", "ESP32", "Bluetooth Serial", "3D Printing"],
            links: [
                { type: "github", url: "https://github.com/TeamCluster/Untouchable_Stop_Bell" }
            ],
            images: [
                { src: "/proj/usb01.png", alt: "Overview" },
            ]
        },
        {
            id: "proj-gretel",
            title: "그레텔과 윈슬로의 별장: 포인트 앤 클릭 방탈출 퍼즐 게임",
            period: "2021.06 - 2022.01",
            description: `세종대학교 게임 동아리 '판도라큐브' 소속 Team E.T.에서 개발한 스토리 기반 2D 포인트 앤 클릭 방탈출 퍼즐 게임으로, 2022년 1월 멀티 플랫폼 ESD 'Steam'에 정식 출시했습니다.`,
            details: [
                "Team E.T.에서 프로그래밍 담당, 게임 기능 구현 및 개발",
                "포인트 & 클릭 인터랙션, 스토리 진행·퍼즐 분기·인벤토리 등 게임 시스템 구현",
                "Steam 출시 이후 버그 수정 및 스토리·퍼즐·도전과제 추가 등 유지보수 진행 중"
            ],
            stack: ["Unity", "C#"],
            links: [
                { type: "steam", url: "https://store.steampowered.com/app/1767320" }
            ],
            images: [
                { src: "/proj/gretel01.png", alt: "Overview" },
            ],
            TODO: "스틸컷 & 인게임 스크린샷으로 사진 수정 필요"
        },
        {
            id: "proj-keyboard-blind",
            title: "손으로 말하는 키보드: 음성 피드백 보조 키보드",
            period: "2019.06 - 2019.08",
            description: `광명시 나름청소년활동센터에서 '제9회 창의메이커스필드 SW활용 아이디어톤'에 출품해 수상한 보조 입력 장치로, 시각장애인이 별도의 소프트웨어 설치 없이 PC에 텍스트를 입력하면서 음성 피드백을 받을 수 있도록 설계했습니다.`,
            details: [
                "Arduino Leonardo(ATmega32U4) 기반, 아날로그 핀(A0~A10)에 물리 스위치 매핑",
                "DFPlayer Mini MP3 모듈로 누른 키마다 한국어/영어 음성 피드백 재생",
                "Fusion 360으로 3D 모델링 + PLA로 케이스 출력",
                "Arduino 프로그래밍 담당, Keyboard.h로 입력 및 동작 구현"
            ],
            stack: ["C", "Arduino", "3D Printing"],
            links: [
                { type: "github", url: "https://github.com/TeamCluster/Keyboard_for_blinds" }
            ],
            images: [
                { src: "/proj/keyboard01.png", alt: "Overview" },
                { src: "/proj/keyboard02.png", alt: "Modeling" }
            ]
        }
    ],
    lab: [
        {
            id: "lab-1",
            title: "날씨 기반 옷차림 추천기",
            period: "2023.11",
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