/**
 * LoadingView Component (3. 분석 로딩 화면 컴포넌트)
 * Based on prd.md (3. 분석 로딩 화면) and design.md (Dual Orbit Spinner & Motion)
 */
export function renderLoadingView(container, { onComplete, duration = 2400 }) {
    container.innerHTML = `
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

    const fillBar = container.querySelector('#loading-bar-fill');
    const titleText = container.querySelector('#loading-title');

    // Step 1: Initial progress pulse
    setTimeout(() => {
        if (fillBar) fillBar.style.width = "45%";
    }, 150);

    // Step 2: Phrase update & progress pulse
    setTimeout(() => {
        if (titleText) titleText.textContent = "팀원과의 시너지 및 찰떡 궁합을 계산하는 중...";
        if (fillBar) fillBar.style.width = "85%";
    }, duration * 0.45);

    // Step 3: Complete progress and trigger callback
    setTimeout(() => {
        if (fillBar) fillBar.style.width = "100%";
        if (onComplete) onComplete();
    }, duration);
}
