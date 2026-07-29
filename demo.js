/**
 * UI Component Storybook / Demo Engine (demo.js)
 */

import { ARCHETYPES } from './data/archetypes.js';
import { QUESTIONS } from './data/questions.js';
import { createHeader } from './components/Header.js';
import { renderLandingCard } from './components/LandingCard.js';
import { renderQuizView } from './components/QuizView.js';
import { renderProgressBar } from './components/ProgressBar.js';
import { renderQuestionCard } from './components/QuestionCard.js';
import { renderLoadingSpinner } from './components/LoadingSpinner.js';
import { renderResultCard } from './components/ResultCard.js';
import { renderSynergyCard } from './components/SynergyCard.js';
import { createToast } from './components/ToastNotification.js';

document.addEventListener('DOMContentLoaded', () => {
    const toast = createToast();

    // 1. Render Header Component Demo
    const headerContainer = document.getElementById('preview-header');
    headerContainer.appendChild(createHeader({}));

    // 2. Render LandingCard Component Demo
    const landingContainer = document.getElementById('preview-landing');
    if (landingContainer) {
        renderLandingCard(landingContainer, {
            onStartTest: () => {
                toast.show("✨ 랜딩 히어로 [내 창업 성향 알아보러 가기] 버튼 클릭! (테스트 화면 진입)");
            },
            userCount: "1,480"
        });
    }

    // 3. Render QuizView Component Demo (2. 테스트 진행 화면)
    const quizViewContainer = document.getElementById('preview-quiz-view');
    if (quizViewContainer) {
        let demoIndex = 2; // Show Q3
        function updateQuizViewDemo() {
            renderQuizView(quizViewContainer, {
                currentQuestionIndex: demoIndex,
                totalQuestions: QUESTIONS.length,
                questionData: QUESTIONS[demoIndex],
                onSelectOption: (scores) => {
                    toast.show(`선택 완료! 점수 반영: ${JSON.stringify(scores)}`);
                    if (demoIndex < QUESTIONS.length - 1) demoIndex++;
                    updateQuizViewDemo();
                },
                onPrevQuestion: () => {
                    if (demoIndex > 0) demoIndex--;
                    updateQuizViewDemo();
                }
            });
        }
        updateQuizViewDemo();
    }

    // 4. Render ProgressBar Component Demo
    const progressContainer = document.getElementById('preview-progress');
    renderProgressBar(progressContainer, { current: 1, total: 8 });

    document.querySelectorAll('[data-step]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const step = parseInt(e.target.dataset.step, 10);
            renderProgressBar(progressContainer, { current: step, total: 8 });
        });
    });

    // 5. Render QuestionCard Component Demo
    const questionContainer = document.getElementById('preview-question');
    renderQuestionCard(questionContainer, {
        questionData: QUESTIONS[0],
        onSelectOption: (scores) => {
            toast.show(`선택한 항목의 성향 점수가 가산되었습니다! (${JSON.stringify(scores)})`);
        }
    });

    // 6. Render LoadingSpinner Component Demo
    const spinnerContainer = document.getElementById('preview-spinner');
    renderLoadingSpinner(spinnerContainer, {
        title: "당신의 창업 성향 분석 중...",
        subtext: "창업 캠프에서의 행동 패턴과 선택한 답변을 종합 계산하고 있습니다."
    });
    setTimeout(() => {
        const fill = spinnerContainer.querySelector('#loading-bar-fill');
        if (fill) fill.style.width = "75%";
    }, 500);

    // 7. Render ResultCard & SynergyCard Component Demo
    const resultContainer = document.getElementById('preview-result');
    const synergyContainer = document.getElementById('preview-synergy');

    function updateResultDemo(typeKey) {
        const archetype = ARCHETYPES[typeKey];
        renderResultCard(resultContainer, { resultData: archetype });
        renderSynergyCard(synergyContainer, {
            bestPartner: archetype.bestPartner,
            challengingPartner: archetype.challengingPartner
        });
    }

    updateResultDemo('idea');

    document.querySelectorAll('#archetype-ctrls .demo-ctrl-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('#archetype-ctrls .demo-ctrl-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            updateResultDemo(e.target.dataset.type);
        });
    });

    // 8. Trigger Toast Demo
    const triggerToastBtn = document.getElementById('trigger-toast-btn');
    triggerToastBtn.addEventListener('click', () => {
        toast.show("✨ 컴포넌트 라이브 알림 토스트가 작동되었습니다!");
    });
});
