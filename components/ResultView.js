/**
 * ResultView Component (4. 최종 결과 화면 컴포넌트)
 * Based on prd.md (4. 최종 결과 화면) and design.md (Result Card & Synergy Section)
 */
import { renderResultCard } from './ResultCard.js';
import { renderSynergyCard } from './SynergyCard.js';

export function renderResultView(container, { resultData, onShare, onRestart }) {
    container.innerHTML = `
        <div class="result-container">
            <div class="result-header">
                <div class="result-tag">MY STARTUP TYPE</div>
                <h1 class="result-main-title">${resultData.title}</h1>
                <p class="result-sub-title">${resultData.subtitle}</p>
            </div>

            <!-- Result Card Slot -->
            <div id="result-card-slot"></div>

            <!-- Synergy Card Slot -->
            <div id="result-synergy-slot"></div>

            <!-- Action Buttons -->
            <div class="result-actions">
                <button id="result-share-btn" class="btn btn-primary btn-large">
                    <i class="fa-solid fa-share-nodes"></i> 내 결과 공유하기
                </button>
                <button id="result-restart-btn" class="btn btn-secondary btn-large">
                    <i class="fa-solid fa-rotate-right"></i> 다시 테스트하기
                </button>
            </div>
        </div>
    `;

    // Render ResultCard Sub-component
    const cardSlot = container.querySelector('#result-card-slot');
    renderResultCard(cardSlot, { resultData });

    // Render SynergyCard Sub-component
    const synergySlot = container.querySelector('#result-synergy-slot');
    renderSynergyCard(synergySlot, {
        bestPartner: resultData.bestPartner,
        challengingPartner: resultData.challengingPartner
    });

    // Event Bindings
    const shareBtn = container.querySelector('#result-share-btn');
    if (shareBtn && onShare) {
        shareBtn.addEventListener('click', onShare);
    }

    const restartBtn = container.querySelector('#result-restart-btn');
    if (restartBtn && onRestart) {
        restartBtn.addEventListener('click', onRestart);
    }
}
