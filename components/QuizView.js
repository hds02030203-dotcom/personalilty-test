/**
 * QuizView Component (2. 테스트 진행 화면 컴포넌트)
 * Based on prd.md (4.2 질문 진행 화면) and design.md (Glassmorphism & Progress UI)
 */
import { renderProgressBar } from './ProgressBar.js';
import { renderQuestionCard } from './QuestionCard.js';

export function renderQuizView(container, { currentQuestionIndex, totalQuestions, questionData, onSelectOption, onPrevQuestion }) {
    container.innerHTML = `
        <div class="quiz-container">
            <!-- Progress Section Slot -->
            <div id="quiz-progress-slot"></div>

            <!-- Question Card Slot -->
            <div id="quiz-card-slot"></div>

            <!-- Navigation Buttons -->
            <div class="quiz-nav">
                <button id="quiz-prev-btn" class="btn btn-secondary" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
                    <i class="fa-solid fa-chevron-left"></i> 이전 질문
                </button>
            </div>
        </div>
    `;

    // Render Progress Bar Sub-component
    const progressSlot = container.querySelector('#quiz-progress-slot');
    renderProgressBar(progressSlot, {
        current: currentQuestionIndex + 1,
        total: totalQuestions
    });

    // Render Question Card Sub-component
    const cardSlot = container.querySelector('#quiz-card-slot');
    renderQuestionCard(cardSlot, {
        questionData,
        onSelectOption
    });

    // Prev Button Event
    const prevBtn = container.querySelector('#quiz-prev-btn');
    if (prevBtn && onPrevQuestion) {
        prevBtn.addEventListener('click', onPrevQuestion);
    }
}
