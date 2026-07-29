/**
 * ResultCard Component (최종 창업 성향 결과 카드 컴포넌트)
 */
export function renderResultCard(container, { resultData }) {
    container.innerHTML = `
        <div class="result-card glass-panel">
            <div class="card-hero">
                <div class="avatar-box" style="background: ${resultData.avatarBg};">
                    <i class="fa-solid ${resultData.icon}"></i>
                </div>
                <div class="role-badge">
                    <i class="fa-solid fa-briefcase"></i> 추천 캠프 역할: <span>${resultData.role}</span>
                </div>
            </div>

            <div class="card-section">
                <h3><i class="fa-solid fa-address-card"></i> 성향 종합 분석</h3>
                <p class="desc-text">${resultData.description}</p>
            </div>

            <div class="card-grid">
                <div class="sub-card strengths-card">
                    <h4><i class="fa-solid fa-thumbs-up"></i> 대표 강점 (Strengths)</h4>
                    <ul class="badge-list">
                        ${resultData.strengths.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
                <div class="sub-card growths-card">
                    <h4><i class="fa-solid fa-seedling"></i> 보완하면 더 좋은 점</h4>
                    <ul class="badge-list">
                        ${resultData.growths.map(g => `<li>${g}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="card-section tips-section">
                <h3><i class="fa-solid fa-compass"></i> 창업 캠프 200% 활용 팁</h3>
                <p class="tip-text">${resultData.tip}</p>
            </div>
        </div>
    `;
}
