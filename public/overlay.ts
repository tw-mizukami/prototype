document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[data-hs-overlay]').forEach((trigger) => {
        const targetSelector = trigger.getAttribute('data-hs-overlay');
        if (targetSelector != null) {
            const target = document.querySelector(targetSelector);

            if (!target) return;

            // トグルボタンのクリックイベント
            trigger.addEventListener('click', () => {
                target.classList.toggle('hidden');
                target.classList.toggle('translate-x-full');
                target.classList.toggle('hs-overlay-open:translate-x-0');
            });

            // 閉じるボタンのクリックイベント
            const closeButton = target.querySelector('[aria-label="Close"]');
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    target.classList.add('hidden');
                    target.classList.add('translate-x-full');
                    target.classList.remove('hs-overlay-open:translate-x-0');
                });
            }
        }
    });
});
