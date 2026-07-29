/**
 * Startup Personality Test (대학생 창업 성향 테스트)
 * Unified Production Engine with KakaoTalk SDK & Vercel Env Support
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Data Definitions ---

    const ARCHETYPES = {
        idea: {
            id: "idea",
            title: "새로운 기회의 창조자, 아이디어형",
            subtitle: "The Spark Innovator (CPO)",
            role: "Product Lead / CPO / 아이디어 기획자",
            icon: "fa-lightbulb",
            avatarBg: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
            description: "세상을 바꿀 기발하고 혁신적인 아이디어가 끊임없이 샘솟는 퍼스트 무버(First Mover)입니다. 남들이 보지 못하는 문제의 본질을 파악하고 차별화된 아이템을 제시하는 능력이 탁월합니다.",
            strengths: [
                "독창적이고 혁신적인 사업 아이템 발상 능력",
                "기존 트렌드와 문제를 빠르게 포착하는 트렌드 감각",
                "초기 비전 제시로 팀원들에게 동기를 부여하는 능력"
            ],
            growths: [
                "아이디어가 너무 많아 하나에 집중하기 어려울 때가 있음",
                "구체적인 실행 가능성(Feasibility) 및 데이터 검증 부족"
            ],
            tip: "아이디어를 내는 것에서 멈추지 말고, 팀 내 '제작형' 또는 '분석형' 팀원의 조언을 받아 아이디어를 구체화하고 현실화하는 연습을 해보세요!",
            bestPartner: {
                name: "실행형 (Driver)",
                desc: "자신이 낸 창의적인 아이디어를 미친 속도로 현실화하고 완수해 주는 최고의 러닝메이트입니다."
            },
            challengingPartner: {
                name: "분석형 (Analyst)",
                desc: "아이디어의 현실성과 리스크를 꼼꼼하게 따져서 속도가 늦어지는 느낌을 받을 수 있으나, 아이디어를 다듬는 데 필수적인 존재입니다."
            }
        },
        builder: {
            id: "builder",
            title: "아이디어를 현실로 만드는, 제작형",
            subtitle: "The Tech Builder (CTO)",
            role: "CTO / Tech Lead / 제품 디자이너",
            icon: "fa-code",
            avatarBg: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
            description: "머릿속에만 존재하는 아이디어를 눈으로 보고 손으로 만질 수 있는 프로토타입(MVP)으로 만드는 손끝의 마술사입니다. 말보다 직접 작동하는 제품으로 승부하는 실력파입니다.",
            strengths: [
                "프로토타입(MVP) 구현 및 기술적 문제 해결 능력",
                "제품의 기능적 완성도와 유저 경험(UX) 직관적 파악",
                "몰입력이 뛰어나며 결과물을 신속하게 시각화함"
            ],
            growths: [
                "기술과 제품 자체에 너무 몰입해 시장성/비즈니스 모델을 놓칠 수 있음",
                "팀원들과의 비기술적 소통에서 세심한 설득 필요"
            ],
            tip: "개발/제작에 들어가기 전, '전략형'이나 '협업형' 팀원과 함께 고객이 진짜 원하는 기능인지 먼저 검증하는 과정을 거치면 최고의 제품이 됩니다!",
            bestPartner: {
                name: "아이디어형 (Innovator)",
                desc: "만들고 싶은 흥미진진한 아이디어를 끊임없이 공급해 주며 제작 동기를 북돋아 줍니다."
            },
            challengingPartner: {
                name: "전략형 (Strategist)",
                desc: "비즈니스 모델과 숫자를 강조하며 피벗(Pivot)을 요구할 때 기술적 집착과의 충돌이 생길 수 있습니다."
            }
        },
        strategist: {
            id: "strategist",
            title: "비전과 승리를 설계하는, 전략형",
            subtitle: "The Business Strategist (CEO)",
            role: "CEO / Founder / 사업개발(BD)",
            icon: "fa-chess",
            avatarBg: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            description: "전체적인 비즈니스 모델, 시장 규모, 피칭 전략을 파악하여 팀이 나아갈 명확한 방향을 결정하는 리더입니다. 팀의 승리를 위한 최선의 조각을 맞추는 능력이 뛰어납니다.",
            strengths: [
                "사업성 검증, BM(수익모델) 수립 및 시장 타겟팅 능력",
                "임팩트 있는 스토리텔링과 피칭(발표) 설득력",
                "팀 전체의 비전과 방향성을 정립하는 리더십"
            ],
            growths: [
                "거시적 전략에 치중하여 디테일한 실행 과정을 소홀히 할 위험",
                "결과 중심으로 밀어붙이다 팀원들의 피로도를 놓칠 수 있음"
            ],
            tip: "'실행형'과 '협업형' 팀원들의 의견을 적극 수용하여, 세운 전략이 팀 전체의 일체감 속에서 일사불란하게 실행되도록 이끌어보세요!",
            bestPartner: {
                name: "분석형 (Analyst)",
                desc: "자신이 세운 비즈니스 전략에 객관적인 정량 데이터와 근거 장표를 보완해 주는 든든한 조력자입니다."
            },
            challengingPartner: {
                name: "제작형 (Builder)",
                desc: "속도감 있게 전략을 수정하고 싶은 나와, 완벽한 제품 구현을 원하는 제작형 간의 협업 주기가 다를 수 있습니다."
            }
        },
        collaborator: {
            id: "collaborator",
            title: "팀의 조화와 마케팅을 이끄는, 협업형",
            subtitle: "The People Facilitator (HR·CMO)",
            role: "CMO / HR / 커뮤니티 매니저",
            icon: "fa-users-gear",
            avatarBg: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)",
            description: "팀 내 활력소이자 강력한 커뮤니케이터입니다. 팀원 간의 갈등을 중재하고 분위기를 끌어올리며, 외부 고객 및 심사위원의 마음을 사로잡는 분위기 메이커 겸 마케터입니다.",
            strengths: [
                "팀원 간의 경청, 공감 및 원활한 갈등 중재 능력",
                "고객의 공감을 이끌어내는 센스 있는 마케팅 및 홍보력",
                "팀의 사기를 높이고 열정적인 참여를 유도하는 에너자이저"
            ],
            growths: [
                "모두의 의견을 다 맞추려다 의사결정이 지연될 수 있음",
                "단호한 판단이나 숫자 중심의 정량적 평가에 부담을 느낌"
            ],
            tip: "팀의 화합을 챙기는 장점을 살리되, 때로는 '전략형'이나 '실행형' 팀원의 과감하고 단호한 결정을 믿고 지지해 주는 결단력이 필요합니다!",
            bestPartner: {
                name: "전략형 (Strategist)",
                desc: "전략형이 제시하는 강렬한 비전에 원활한 팀워크와 고객 팬덤을 더해 완성형 스타트업으로 만들어 냅니다."
            },
            challengingPartner: {
                name: "실행형 (Driver)",
                desc: "과정보다 목표 완수를 위해 빠른 속도로 직진하는 실행형의 스타일로 인해 서운함을 느낄 수도 있습니다."
            }
        },
        analyst: {
            id: "analyst",
            title: "팩트와 데이터로 리스크를 막는, 분석형",
            subtitle: "The Data Analyst (CFO)",
            role: "CFO / Data Lead / 리서처",
            icon: "fa-chart-pie",
            avatarBg: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
            description: "감이나 직관이 아닌 객관적인 데이터와 정량적 수치로 가설을 검증하는 냉철한 분석가입니다. 비즈니스의 리스크를 사전에 파악하여 팀이 그릇된 길로 가지 않도록 방어합니다.",
            strengths: [
                "정교한 시장 데이터, 경쟁사 분석 및 타당성 검증 능력",
                "재무 추정, 지표(KPI) 설정 및 객관적 리스크 관리",
                "치밀하고 논리적인 문제 해결 접근 방식"
            ],
            growths: [
                "데이터가 불충분할 때 결정 장애나 과도한 신중함 발생",
                "창의적이고 실험적인 아이디어에 대해 보수적인 태도를 취하기 쉬움"
            ],
            tip: "초기 창업은 완벽한 데이터가 없는 상태에서 시작하는 경우가 많습니다. '아이디어형'의 과감한 시도를 수용하며 데이터 기반의 피드백을 더해보세요!",
            bestPartner: {
                name: "전략형 (Strategist)",
                desc: "전략형의 원대한 방향성에 검증된 데이터와 정량적 지표를 부여하여 신뢰도 100%의 피칭을 만들어냅니다."
            },
            challengingPartner: {
                name: "아이디어형 (Innovator)",
                desc: "근거 없는 아이디어를 끊임없이 꺼내는 아이디어형 때문에 머리가 아플 수 있지만, 가장 혁신적인 기회의 원천이 됩니다."
            }
        },
        execution: {
            id: "execution",
            title: "목표를 향해 거침없이 달리는, 실행형",
            subtitle: "The Operation Driver (COO)",
            role: "COO / PM / 운영 팀장",
            icon: "fa-gauge-high",
            avatarBg: "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
            description: "일단 목표가 정해지면 거침없이 타임라인을 짜고 할 일을 실행해 나가는 압도적 실행력의 소유자입니다. 말보다는 행동으로, 계획보다는 결과물 완수로 보여주는 팀의 엔진입니다.",
            strengths: [
                "타이트한 마감 기한 내에 과업을 완수하는 스케줄 관리 능력",
                "복잡한 일을 작고 실행 가능한 단계로 나누는 일머리",
                "막힘없이 행동에 옮기는 강한 추진력과 강인한 승부욕"
            ],
            growths: [
                "속도를 지향하다 보니 충분한 사전 검토나 품질 체크를 놓칠 수 있음",
                "여유가 부족하여 함께 달리는 팀원들에게 조급함을 전달할 수 있음"
            ],
            tip: "속도감 있는 실행력은 창업 팀 최고의 무기입니다! 여기에 '협업형' 팀원의 멘탈 케어와 '분석형' 팀원의 사전 점검을 결합하면 무적의 실행이 됩니다.",
            bestPartner: {
                name: "아이디어형 (Innovator)",
                desc: "머릿속에만 있던 아이디어형의 기발한 구상을 미친 속도로 현실화하여 최고의 결과물로 만들어냅니다."
            },
            challengingPartner: {
                name: "협업형 (Facilitator)",
                desc: "속도보다는 사기와 화합을 중시하는 협업형과 답답함을 느끼거나 마찰이 발생할 수 있습니다."
            }
        }
    };

    const QUESTIONS = [
        {
            category: "캠프 상황 #1 · 아이디어 발상",
            question: "창업 해커톤 1일 차! 우리 팀이 도전할 창업 아이디어를 정할 때, 나는 주로 어떤 행동을 할까?",
            options: [
                { text: "아무도 생각하지 못했던 혁신적이고 재미있는 아이디어를 계속해서 쏟아낸다.", scores: { idea: 2, strategist: 1 } },
                { text: "어떤 아이템이 진짜 돈이 되고(BM) 시장 규모가 큰지 사업성부터 따져본다.", scores: { strategist: 2, analyst: 1 } },
                { text: "제한된 해커톤 시간 내에 기술적으로 완성 가능한 프로토타입인지 빠르게 파악한다.", scores: { builder: 2, execution: 1 } },
                { text: "팀원들 각자의 관심사와 의견을 들으며 모두가 기분 좋게 동의하는 분위기를 만든다.", scores: { collaborator: 2, idea: 1 } }
            ]
        },
        {
            category: "캠프 상황 #2 · 역할 분담",
            question: "해커톤 발표에 쓸 PPT 및 자료를 준비할 때, 내가 가장 잘 담당할 수 있는 파트는?",
            options: [
                { text: "시장 통계, 경쟁사 비교표, 설문 조사 등 정량 데이터 기반의 객관적 분석 장표", scores: { analyst: 2, strategist: 1 } },
                { text: "사업의 비전과 문제 해결 스토리라인을 임팩트 있게 기획하는 발표 내용 작성", scores: { strategist: 2, idea: 1 } },
                { text: "실제 작동하는 데모(Demo) 화면이나 와이어프레임 UI 시각자료 제작", scores: { builder: 2, execution: 1 } },
                { text: "타임라인 스케줄링, 팀 발표 연습 리딩 및 팀원 피로도 케어", scores: { execution: 1, collaborator: 2 } }
            ]
        },
        {
            category: "캠프 상황 #3 · 멘토링 피드백",
            question: "전문가 멘토님에게 '이 아이템은 시장 리스크가 너무 크다'라는 지적을 받았을 때 나의 반응은?",
            options: [
                { text: "'그렇다면 피벗(Pivot)합시다!' 또 다른 기발한 신규 아이디어 3개를 바로 꺼낸다.", scores: { idea: 2, strategist: 1 } },
                { text: "멘토님의 조언을 반영해 비즈니스 피칭 방향과 타겟 고객을 즉시 수정·보완한다.", scores: { strategist: 2, analyst: 1 } },
                { text: "'어떤 수치 데이터가 부족한 걸까?' 지적된 리스크 관련 수치와 통계를 즉시 탐색한다.", scores: { analyst: 2, builder: 1 } },
                { text: "지적으로 낙담한 팀원들의 사기를 북돋우고 빠르게 다음 조치 할 일을 분배한다.", scores: { collaborator: 2, execution: 1 } }
            ]
        },
        {
            category: "캠프 상황 #4 · MVP(최소요구제품) 제작",
            question: "팀의 결과물 프로토타입(MVP)을 구현하는 단계에서 내가 가장 강조하는 것은?",
            options: [
                { text: "버그 없이 안정적으로 동작하며 유저가 실제 체험할 수 있는 구현 완성도", scores: { builder: 2, execution: 1 } },
                { text: "유저의 시선을 한눈에 사로잡을 차별화된 핵심 기능과 감각적인 콘셉트", scores: { idea: 2, builder: 1 } },
                { text: "실제 유저 데이터 수집 및 반응(클릭률, 가입률)을 측정할 수 있는 장치", scores: { analyst: 2, strategist: 1 } },
                { text: "주어진 마감 시간(Deadline) 내에 지연 없이 완벽하게 준비 완료하는 속도", scores: { execution: 2, collaborator: 1 } }
            ]
        },
        {
            category: "캠프 상황 #5 · 의견 대립",
            question: "팀원 간 의견 차이로 아이디어 방향성에 논쟁이 생겼을 때, 내가 취하는 해결책은?",
            options: [
                { text: "서로 감정이 상하지 않게 경청을 유도하고 중간 지점의 합의점을 찾는다.", scores: { collaborator: 2, idea: 1 } },
                { text: "객관적인 설문 데이터나 시장 데이터 조사 결과를 근거로 결론을 맺는다.", scores: { analyst: 2, strategist: 1 } },
                { text: "우리가 달성하려는 핵심 사업 목표와 비전에 가장 잘 부합하는 방향으로 단호히 정한다.", scores: { strategist: 2, execution: 1 } },
                { text: "긴 토론에 시간을 끌기보다 일단 둘 다 작게 실험해 보고 유저 반응을 보자고 한다.", scores: { execution: 2, builder: 1 } }
            ]
        },
        {
            category: "캠프 상황 #6 · 발표 직전 1시간",
            question: "최종 데모 피칭 발표를 딱 1시간 남겨둔 상황! 나의 행동은?",
            options: [
                { text: "시연할 프로토타입 장비나 서비스 데모 영상이 완벽하게 돌아가는지 점검한다.", scores: { builder: 2, analyst: 1 } },
                { text: "발표자의 피칭 톤, 강조 포인트, 예상 Q&A 질의응답 대응 전략을 최종 점검한다.", scores: { strategist: 2, collaborator: 1 } },
                { text: "제출 서류, USB 세팅, 발표장 마이크 등 모든 체크리스트 항목을 하나씩 마킹한다.", scores: { execution: 2, analyst: 1 } },
                { text: "고생한 팀원들 한 명 한 명에게 감사를 표하고 '우리 꼭 수상하자'며 사기를 최고조로 올린다.", scores: { collaborator: 2, idea: 1 } }
            ]
        },
        {
            category: "캠프 상황 #7 · 보람의 순간",
            question: "창업 캠프가 성공적으로 끝난 후, 나에게 가장 뿌듯하게 남아있는 순간은?",
            options: [
                { text: "'우리가 짧은 시간 안에 머릿속 아이디어를 진짜 눈앞에 구현해냈어!'", scores: { builder: 2, idea: 1 } },
                { text: "'내가 처음 제안한 아이디어가 심사위원들에게 큰 호평을 받았어!'", scores: { idea: 2, strategist: 1 } },
                { text: "'우리 팀이 마찰 없이 서로 배려하며 최고의 팀워크를 발휘했어!'", scores: { collaborator: 2, execution: 1 } },
                { text: "'계획했던 타임라인과 목표 수치를 100% 완벽하게 세우고 완수해 냈어!'", scores: { execution: 2, analyst: 1 } }
            ]
        },
        {
            category: "캠프 상황 #8 · 나의 지향점",
            question: "내가 실제 스타트업을 창업한다면, 꼭 구축하고 싶은 최고의 조직 문화는?",
            options: [
                { text: "실패를 두려워하지 않고 매일 새로운 도전을 던지는 자유롭고 창의적인 문화", scores: { idea: 2, builder: 1 } },
                { text: "서로 존중하고 감사를 나누며 즐겁게 일하는 건강한 소통과 커뮤니티 문화", scores: { collaborator: 2, execution: 1 } },
                { text: "명확한 데이터와 정량적 지표 기반으로 합리적인 결정을 내리는 실용적 문화", scores: { analyst: 2, strategist: 1 } },
                { text: "높은 목표를 빠르게 달성하고 압도적 성과로 증명해 내는 거침없는 실행 문화", scores: { execution: 2, strategist: 1 } }
            ]
        }
    ];

    // --- State Variables ---
    let currentQuestionIndex = 0;
    let scores = { idea: 0, builder: 0, strategist: 0, collaborator: 0, analyst: 0, execution: 0 };
    let userAnswers = [];
    let currentResultData = null;

    // --- DOM Elements ---
    const landingScreen = document.getElementById('landing-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const resultScreen = document.getElementById('result-screen');

    const startBtn = document.getElementById('start-btn');

    // --- KakaoTalk SDK helper (with fallback) ---
    function getKakaoKey() {
        return window.ENV_KAKAO_JS_KEY || '34b296c93aa64e700a33aefae6cba3bf';
    }

    function initKakaoSDK() {
        const key = getKakaoKey();
        if (window.Kakao && key) {
            if (!window.Kakao.isInitialized()) {
                try {
                    window.Kakao.init(key);
                    console.log('[Kakao SDK] Successfully initialized.');
                } catch (e) {
                    console.error('[Kakao SDK Init Exception]', e);
                }
            }
        }
    }

    initKakaoSDK();

    // --- Toast Component ---
    function showToast(msg) {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span id="toast-msg"></span>`;
            document.body.appendChild(toast);
        }
        document.getElementById('toast-msg').textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2800);
    }

    // --- Navigation Logic ---
    function switchScreen(targetScreen) {
        [landingScreen, quizScreen, loadingScreen, resultScreen].forEach(s => {
            if (s) {
                if (s === targetScreen) s.classList.add('active');
                else s.classList.remove('active');
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (startBtn) {
        startBtn.addEventListener('click', startQuiz);
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        userAnswers = [];
        scores = { idea: 0, builder: 0, strategist: 0, collaborator: 0, analyst: 0, execution: 0 };
        switchScreen(quizScreen);
        renderQuizView();
    }

    // 2. Render QuizView Component
    function renderQuizView() {
        const currentQ = QUESTIONS[currentQuestionIndex];
        const totalQ = QUESTIONS.length;
        const progressVal = Math.round(((currentQuestionIndex + 1) / totalQ) * 100);

        quizScreen.innerHTML = `
            <div class="quiz-container">
                <div class="progress-section">
                    <div class="progress-header">
                        <span class="step-indicator">Question ${currentQuestionIndex + 1} / ${totalQ}</span>
                        <span class="percent-indicator">${progressVal}%</span>
                    </div>
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width: ${progressVal}%;"></div>
                    </div>
                </div>

                <div class="question-card glass-panel">
                    <div class="question-badge">
                        <i class="fa-solid fa-lightbulb"></i> <span>${currentQ.category}</span>
                    </div>
                    <h2 class="question-text">${currentQ.question}</h2>
                    <div class="options-container">
                        ${currentQ.options.map((opt, idx) => `
                            <button class="option-btn" data-opt-index="${idx}">
                                <span class="option-num">${String.fromCharCode(65 + idx)}</span>
                                <span>${opt.text}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="quiz-nav">
                    <button id="quiz-prev-btn" class="btn btn-secondary" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
                        <i class="fa-solid fa-chevron-left"></i> 이전 질문
                    </button>
                </div>
            </div>
        `;

        quizScreen.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const optIdx = parseInt(btn.dataset.optIndex, 10);
                const selectedOpt = currentQ.options[optIdx];
                handleSelectOption(selectedOpt.scores);
            });
        });

        const prevBtn = quizScreen.querySelector('#quiz-prev-btn');
        if (prevBtn) {
            prevBtn.addEventListener('click', goToPreviousQuestion);
        }
    }

    function handleSelectOption(optionScores) {
        userAnswers.push(optionScores);
        for (const [type, pt] of Object.entries(optionScores)) {
            scores[type] = (scores[type] || 0) + pt;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < QUESTIONS.length) {
            renderQuizView();
        } else {
            renderLoadingView();
        }
    }

    function goToPreviousQuestion() {
        if (currentQuestionIndex > 0 && userAnswers.length > 0) {
            const lastScores = userAnswers.pop();
            for (const [type, pt] of Object.entries(lastScores)) {
                scores[type] -= pt;
            }
            currentQuestionIndex--;
            renderQuizView();
        }
    }

    // 3. Render LoadingView Component
    function renderLoadingView() {
        switchScreen(loadingScreen);
        loadingScreen.innerHTML = `
            <div class="loading-content">
                <div class="spinner-box">
                    <div class="circle-outer"></div>
                    <div class="circle-inner"></div>
                    <i class="fa-solid fa-atom loading-icon"></i>
                </div>
                <h2 id="loading-title" class="loading-title">당신의 창업 성향 분석 중...</h2>
                <p class="loading-subtext">창업 캠프에서의 행동 패턴과 선택한 답변을 종합 계산하고 있습니다.</p>
                <div class="loading-progress">
                    <div id="loading-bar-fill" class="loading-bar-fill" style="width: 0%;"></div>
                </div>
            </div>
        `;

        const fillBar = loadingScreen.querySelector('#loading-bar-fill');
        const titleText = loadingScreen.querySelector('#loading-title');

        setTimeout(() => { if (fillBar) fillBar.style.width = "45%"; }, 150);

        setTimeout(() => {
            if (titleText) titleText.textContent = "팀원과의 시너지 및 찰떡 궁합을 계산하는 중...";
            if (fillBar) fillBar.style.width = "85%";
        }, 1000);

        setTimeout(() => {
            if (fillBar) fillBar.style.width = "100%";
            renderResultView();
        }, 2200);
    }

    // 4. Render ResultView Component with KakaoTalk Share
    function renderResultView() {
        let highestType = "idea";
        let maxScore = -1;

        for (const [type, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                highestType = type;
            }
        }

        currentResultData = ARCHETYPES[highestType];
        const res = currentResultData;

        resultScreen.innerHTML = `
            <div class="result-container">
                <div class="result-header">
                    <div class="result-tag">MY STARTUP TYPE</div>
                    <h1 class="result-main-title">${res.title}</h1>
                    <p class="result-sub-title">${res.subtitle}</p>
                </div>

                <div class="result-card glass-panel">
                    <div class="card-hero">
                        <div class="avatar-box" style="background: ${res.avatarBg};">
                            <i class="fa-solid ${res.icon}"></i>
                        </div>
                        <div class="role-badge">
                            <i class="fa-solid fa-briefcase"></i> 추천 캠프 역할: <span>${res.role}</span>
                        </div>
                    </div>

                    <div class="card-section">
                        <h3><i class="fa-solid fa-address-card"></i> 성향 종합 분석</h3>
                        <p class="desc-text">${res.description}</p>
                    </div>

                    <div class="card-grid">
                        <div class="sub-card strengths-card">
                            <h4><i class="fa-solid fa-thumbs-up"></i> 대표 강점 (Strengths)</h4>
                            <ul class="badge-list">
                                ${res.strengths.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="sub-card growths-card">
                            <h4><i class="fa-solid fa-seedling"></i> 보완하면 더 좋은 점</h4>
                            <ul class="badge-list">
                                ${res.growths.map(g => `<li>${g}</li>`).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="card-section tips-section">
                        <h3><i class="fa-solid fa-compass"></i> 창업 캠프 200% 활용 팁</h3>
                        <p class="tip-text">${res.tip}</p>
                    </div>
                </div>

                <div class="synergy-section">
                    <h2 class="section-title"><i class="fa-solid fa-handshake"></i> 팀원 궁합 및 시너지 카드</h2>
                    <div class="synergy-grid">
                        <div class="synergy-card best-partner glass-panel">
                            <div class="synergy-header">
                                <span class="synergy-badge best"><i class="fa-solid fa-heart"></i> 환상의 짝꿍</span>
                                <h3>${res.bestPartner.name}</h3>
                            </div>
                            <p class="synergy-desc">${res.bestPartner.desc}</p>
                        </div>
                        <div class="synergy-card challenging-partner glass-panel">
                            <div class="synergy-header">
                                <span class="synergy-badge challenge"><i class="fa-solid fa-bolt"></i> 주의가 필요한 짝꿍</span>
                                <h3>${res.challengingPartner.name}</h3>
                            </div>
                            <p class="synergy-desc">${res.challengingPartner.desc}</p>
                        </div>
                    </div>
                </div>

                <div class="result-actions">
                    <button id="res-kakao-btn" class="btn btn-kakao btn-large">
                        <i class="fa-solid fa-comment"></i> 카카오톡으로 결과 공유하기
                    </button>
                    <button id="res-share-btn" class="btn btn-primary btn-large">
                        <i class="fa-solid fa-share-nodes"></i> URL 링크 복사하기
                    </button>
                    <button id="res-restart-btn" class="btn btn-secondary btn-large">
                        <i class="fa-solid fa-rotate-right"></i> 다시 테스트하기
                    </button>
                </div>
            </div>
        `;

        switchScreen(resultScreen);

        // KakaoTalk Share Handler
        resultScreen.querySelector('#res-kakao-btn').addEventListener('click', shareKakaoTalk);

        // URL Link Share Handler
        resultScreen.querySelector('#res-share-btn').addEventListener('click', () => {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showToast("결과 페이지 링크가 클립보드에 복사되었습니다!");
                }).catch(() => {
                    showToast("링크 복사에 실패했습니다.");
                });
            } else {
                showToast("결과 페이지 링크가 복사되었습니다!");
            }
        });

        // Restart Handler
        resultScreen.querySelector('#res-restart-btn').addEventListener('click', () => {
            startQuiz();
        });
    }

    // KakaoTalk Share Implementation
    function shareKakaoTalk() {
        initKakaoSDK();
        const key = getKakaoKey();

        if (!window.Kakao) {
            showToast("카카오 SDK 모듈을 불러오는 중입니다. 인터넷 연결을 확인해주세요.");
            return;
        }

        if (!window.Kakao.isInitialized()) {
            try {
                window.Kakao.init(key);
            } catch (err) {
                console.error('[Kakao Init Error]', err);
            }
        }

        if (window.Kakao.isInitialized()) {
            const res = currentResultData || ARCHETYPES.idea;
            try {
                window.Kakao.Share.sendDefault({
                    objectType: 'feed',
                    content: {
                        title: `[대학생 창업 성향 테스트] ${res.title}`,
                        description: `나의 캠프 추천 역할: ${res.role}\n${res.description.substring(0, 75)}...`,
                        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                    buttons: [
                        {
                            title: '내 성향 결과 확인하기',
                            link: {
                                mobileWebUrl: window.location.href,
                                webUrl: window.location.href,
                            },
                        },
                        {
                            title: '나도 테스트해보기',
                            link: {
                                mobileWebUrl: window.location.origin,
                                webUrl: window.location.origin,
                            },
                        },
                    ],
                });
            } catch (err) {
                console.error('[Kakao Share Error]', err);
                showToast("카카오 공유 도중 오류가 발생했습니다: " + (err.message || err));
            }
        } else {
            showToast("카카오 SDK 초기화에 실패했습니다. (키: " + key + ")");
        }
    }
});
