/**
 * LandingCard Component (1. 시작화면 랜딩 히어로 컴포넌트)
 * Based on prd.md (1. 메인 랜딩 화면) and design.md (Modern Startup Tech Theme)
 */
export function renderLandingCard(container, { onStartTest, userCount = "1,480" }) {
    container.innerHTML = `
        <div class="hero-content">
            <div class="badge-pill">
                <i class="fa-solid fa-bolt"></i> 소요시간 단 3분!
            </div>
            <h1 class="main-title">
                나는 창업 팀에서<br>
                <span class="gradient-text">어떤 롤(Role)일까?</span>
            </h1>
            <p class="subtitle">
                세상을 바꾸는 스타트업! 아이디어부터 비즈니스 전략, 개발까지<br>
                내 창업 성향을 확인하고 <strong>최고의 시너지 팀원</strong>을 찾아보세요.
            </p>

            <!-- Feature Highlights Grid -->
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="icon-wrapper"><i class="fa-solid fa-bullseye"></i></div>
                    <h3>8개 실전 상황 질문</h3>
                    <p>해커톤과 창업 캠프에서 겪는 리얼한 상황 진단</p>
                </div>
                <div class="feature-card">
                    <div class="icon-wrapper"><i class="fa-solid fa-user-astronaut"></i></div>
                    <h3>6가지 창업 캐릭터</h3>
                    <p>아이디어·제작·전략·협업·분석·실행 성향</p>
                </div>
                <div class="feature-card">
                    <div class="icon-wrapper"><i class="fa-solid fa-people-group"></i></div>
                    <h3>팀원 환상의 궁합</h3>
                    <p>캠프 내 추천 역할 및 상극/찰떡 짝꿍 추천</p>
                </div>
            </div>

            <!-- Action Box & CTA Button -->
            <div class="action-box">
                <button id="hero-start-btn" class="btn btn-primary btn-large glow-effect">
                    <span>내 창업 성향 알아보러 가기</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
                <div class="user-stats">
                    <i class="fa-solid fa-fire"></i> 현재까지 <strong>${userCount}명</strong>의 예비 창업가가 진단받았어요!
                </div>
            </div>
        </div>
    `;

    const startBtn = container.querySelector('#hero-start-btn');
    if (startBtn && onStartTest) {
        startBtn.addEventListener('click', onStartTest);
    }
}
