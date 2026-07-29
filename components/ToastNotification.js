/**
 * ToastNotification Component (토스트 알림 컴포넌트)
 */
export function createToast() {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.id = 'app-toast';
    toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> <span id="toast-msg">알림 메시지</span>`;
    document.body.appendChild(toast);

    return {
        show(message, duration = 2500) {
            const toastMsg = toast.querySelector('#toast-msg');
            toastMsg.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, duration);
        }
    };
}
