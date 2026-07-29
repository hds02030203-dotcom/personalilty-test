/**
 * 8가지 리얼 창업 캠프 상황 질문 데이터 정의 (Questions Data)
 */
export const QUESTIONS = [
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
