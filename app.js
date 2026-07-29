/**
 * Application Entry Point (메인 모듈 엔트리)
 * Senior Frontend Architecture with ES Modules
 */

import { ARCHETYPES } from './data/archetypes.js';
import { QUESTIONS } from './data/questions.js';
import { createHeader } from './components/Header.js';
import { renderLandingCard } from './components/LandingCard.js';
import { renderQuizView } from './components/QuizView.js';
import { renderLoadingSpinner } from './components/LoadingSpinner.js';
import { renderResultCard } from './components/ResultCard.js';
import { renderSynergyCard } from './components/SynergyCard.js';
import { createToast } from './components/ToastNotification.js';

document.addEventListener('DOMContentLoaded', () => {
    // --- Application State ---
    let currentQuestionIndex = 0;
    let scores = { idea: 0, builder: 0, strategist: 0, collaborator: 0, analyst: 0, execution: 0 };
    let userAnswers = [];

    // --- DOM Mounting ---
    const appContainer = document.querySelector('.app-container');
    const toast = createToast();

    // Mount Header at top
    const headerNode = createHeader({});
    appContainer.insertBefore(headerNode, appContainer.firstChild);

    // DOM Screen Elements
    const landingScreen = document.getElementById('landing-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const resultScreen = document.getElementById('result-screen');

    // DOM Slots
    const loadingSlot = document.getElementById('loading-slot');
    const resultSlot = document.getElementById('result-slot');
    const synergySlot = document.getElementById('synergy-slot');

    // 1. Mount LandingCard Component (1. 시작화면)
    renderLandingCard(landingScreen, {
        onStartTest: startQuiz,
        userCount: "1,480"
    });

    const shareBtn = document.getElementById('share-btn');
    const restartBtn = document.getElementById('restart-btn');

    // --- Event Listeners ---
    restartBtn.addEventListener('click', resetQuiz);
    shareBtn.addEventListener('click', shareResult);

    // --- Core Navigation Logic ---
    function switchScreen(targetScreen) {
        [landingScreen, quizScreen, loadingScreen, resultScreen].forEach(s => {
            if (s === targetScreen) s.classList.add('active');
            else s.classList.remove('active');
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 2. Start Test Functionality
    function startQuiz() {
        currentQuestionIndex = 0;
        userAnswers = [];
        scores = { idea: 0, builder: 0, strategist: 0, collaborator: 0, analyst: 0, execution: 0 };
        switchScreen(quizScreen);
        renderCurrentQuestionView();
    }

    // Render QuizView Component (2. 테스트 진행 화면)
    function renderCurrentQuestionView() {
        const currentQ = QUESTIONS[currentQuestionIndex];

        renderQuizView(quizScreen, {
            currentQuestionIndex,
            totalQuestions: QUESTIONS.length,
            questionData: currentQ,
            onSelectOption: handleSelectOption,
            onPrevQuestion: goToPreviousQuestion
        });
    }

    function handleSelectOption(optionScores) {
        userAnswers.push(optionScores);
        for (const [type, pt] of Object.entries(optionScores)) {
            scores[type] = (scores[type] || 0) + pt;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < QUESTIONS.length) {
            renderCurrentQuestionView();
        } else {
            processResultAndLoading();
        }
    }

    function goToPreviousQuestion() {
        if (currentQuestionIndex > 0 && userAnswers.length > 0) {
            const lastScores = userAnswers.pop();
            for (const [type, pt] of Object.entries(lastScores)) {
                scores[type] -= pt;
            }
            currentQuestionIndex--;
            renderCurrentQuestionView();
        }
    }

    function processResultAndLoading() {
        switchScreen(loadingScreen);

        renderLoadingSpinner(loadingSlot, {
            title: "당신의 창업 성향 분석 중...",
            subtext: "창업 캠프에서의 행동 패턴과 선택한 답변을 종합 계산하고 있습니다."
        });

        const loadingBarFill = loadingSlot.querySelector('#loading-bar-fill');
        const loadingTitle = loadingSlot.querySelector('#loading-title');

        setTimeout(() => { if (loadingBarFill) loadingBarFill.style.width = "45%"; }, 100);

        setTimeout(() => {
            if (loadingTitle) loadingTitle.textContent = "팀원과의 시너지 및 찰떡 궁합을 계산하는 중...";
            if (loadingBarFill) loadingBarFill.style.width = "85%";
        }, 900);

        setTimeout(() => {
            showFinalResult();
        }, 1800);
    }

    function showFinalResult() {
        let highestType = "idea";
        let maxScore = -1;

        for (const [type, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                highestType = type;
            }
        }

        const resultData = ARCHETYPES[highestType];

        document.getElementById('result-main-title').textContent = resultData.title;
        document.getElementById('result-sub-title').textContent = resultData.subtitle;

        renderResultCard(resultSlot, { resultData });
        renderSynergyCard(synergySlot, {
            bestPartner: resultData.bestPartner,
            challengingPartner: resultData.challengingPartner
        });

        switchScreen(resultScreen);
    }

    function resetQuiz() {
        startQuiz();
    }

    function shareResult() {
        const url = window.location.href;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                toast.show("결과 페이지 링크가 클립보드에 복사되었습니다!");
            }).catch(() => {
                toast.show("링크 복사에 실패했습니다.");
            });
        } else {
            toast.show("결과 페이지 링크가 복사되었습니다!");
        }
    }
});
