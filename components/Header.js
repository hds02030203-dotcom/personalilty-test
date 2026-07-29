/**
 * Header Component (앱 상단 헤더 컴포넌트)
 */
export function createHeader({ title = "STARTUP", highlight = "TYPE", tagText = "대학생 창업 캠프 공식 진단" }) {
    const header = document.createElement('header');
    header.className = 'app-header';
    header.innerHTML = `
        <div class="logo">
            <i class="fa-solid fa-rocket logo-icon"></i>
            <span class="logo-text">${title}<span class="highlight">${highlight}</span></span>
        </div>
        <div class="tag-badge">
            <i class="fa-solid fa-graduation-cap"></i> ${tagText}
        </div>
    `;
    return header;
}
