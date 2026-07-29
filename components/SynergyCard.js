/**
 * SynergyCard Component (팀원 궁합 및 시너지 카드 컴포넌트)
 */
export function renderSynergyCard(container, { bestPartner, challengingPartner }) {
    container.innerHTML = `
        <div class="synergy-section">
            <h2 class="section-title"><i class="fa-solid fa-handshake"></i> 팀원 궁합 및 시너지 카드</h2>
            <div class="synergy-grid">
                <div class="synergy-card best-partner glass-panel">
                    <div class="synergy-header">
                        <span class="synergy-badge best"><i class="fa-solid fa-heart"></i> 환상의 짝꿍</span>
                        <h3>${bestPartner.name}</h3>
                    </div>
                    <p class="synergy-desc">${bestPartner.desc}</p>
                </div>
                <div class="synergy-card challenging-partner glass-panel">
                    <div class="synergy-header">
                        <span class="synergy-badge challenge"><i class="fa-solid fa-bolt"></i> 주의가 필요한 짝꿍</span>
                        <h3>${challengingPartner.name}</h3>
                    </div>
                    <p class="synergy-desc">${challengingPartner.desc}</p>
                </div>
            </div>
        </div>
    `;
}
