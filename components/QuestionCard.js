/**
 * QuestionCard Component (상황 질문 및 4지선다 선택지 컴포넌트)
 */
export function renderQuestionCard(container, { questionData, onSelectOption }) {
    container.innerHTML = `
        <div class="question-card glass-panel">
            <div class="question-badge">
                <i class="fa-solid fa-lightbulb"></i> <span>${questionData.category}</span>
            </div>
            <h2 class="question-text">${questionData.question}</h2>
            <div class="options-container"></div>
        </div>
    `;

    const optionsContainer = container.querySelector('.options-container');

    questionData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="option-num">${String.fromCharCode(65 + idx)}</span>
            <span>${opt.text}</span>
        `;
        btn.addEventListener('click', () => onSelectOption(opt.scores));
        optionsContainer.appendChild(btn);
    });
}
