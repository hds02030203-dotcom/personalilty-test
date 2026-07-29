/**
 * LoadingSpinner Component (분석 로딩 오비탈 스피너 컴포넌트)
 */
export function renderLoadingSpinner(container, { title = "당신의 창업 성향 분석 중...", subtext = "창업 캠프에서의 행동 패턴과 선택한 답변을 종합 계산하고 있습니다." }) {
    container.innerHTML = `
        <div class="loading-content">
            <div class="spinner-box">
                <div class="circle-outer"></div>
                <div class="circle-inner"></div>
                <i class="fa-solid fa-atom loading-icon"></i>
            </div>
            <h2 id="loading-title" class="loading-title">${title}</h2>
            <p class="loading-subtext">${subtext}</p>
            <div class="loading-progress">
                <div id="loading-bar-fill" class="loading-bar-fill"></div>
            </div>
        </div>
    `;
}
