/**
 * ProgressBar Component (진행률 및 스텝 표시 컴포넌트)
 */
export function renderProgressBar(container, { current, total }) {
    const percent = Math.round((current / total) * 100);
    container.innerHTML = `
        <div class="progress-section">
            <div class="progress-header">
                <span class="step-indicator">Question ${current} / ${total}</span>
                <span class="percent-indicator">${percent}%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${percent}%;"></div>
            </div>
        </div>
    `;
}
