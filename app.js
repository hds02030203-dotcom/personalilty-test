/**
 * Application Entry Point (메인 모듈 엔트리)
 * Senior Frontend Architecture with ES Modules
 */

import { ARCHETYPES } from './data/archetypes.js';
import { QUESTIONS } from './data/questions.js';
import { createHeader } from './components/Header.js';
import { renderLandingCard } from './components/LandingCard.js';
import { renderQuizView } from './components/QuizView.js';
import { renderLoadingView } from './components/LoadingView.js';
import { renderResultView } from './components/ResultView.js';
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

    // 1. Mount LandingCard Component (1. 시작화면)
    renderLandingCard(landingScreen, {
        onStartTest: startQuiz,
        userCount: "1,480"
    });

    // --- Core Navigation Logic ---
    function switchScreen(targetScreen) {
        [landingScreen, quizScreen, loadingScreen, resultScreen].forEach(s => {
            if (s === targetScreen) s.classList.add('active');
            else s.classList.remove('active');
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 1. Start Test Functionality
    function startQuiz() {
        currentQuestionIndex = 0;
        userAnswers = [];
        scores = { idea: 0, builder: 0, strategist: 0, collaborator: 0, analyst: 0, execution: 0 };
        switchScreen(quizScreen);
        renderCurrentQuestionView();
    }

    // 2. Render QuizView Component (2. 테스트 진행 화면)
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
            // All questions answered -> Trigger 3. LoadingView Component
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

    // 3. Render LoadingView Component (3. 분석 로딩 화면)
    function processResultAndLoading() {
        switchScreen(loadingScreen);

        renderLoadingView(loadingScreen, {
            duration: 2400,
            onComplete: showFinalResultView
        });
    }

    // 4. Render ResultView Component (4. 최종 결과 화면)
    function showFinalResultView() {
        let highestType = "idea";
        let maxScore = -1;

        for (const [type, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                highestType = type;
            }
        }

        const resultData = ARCHETYPES[highestType];

        renderResultView(resultScreen, {
            resultData,
            onShare: shareResult,
            onRestart: resetQuiz
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
