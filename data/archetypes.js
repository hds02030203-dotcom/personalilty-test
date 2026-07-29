/**
 * 6가지 창업 성향 유형 데이터 정의 (Archetypes Data)
 */
export const ARCHETYPES = {
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
