// Progressive enhancement: HTML stays visible until the observer is ready.
(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = [...document.querySelectorAll('[data-reveal]')];
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

    let observer;
    const reveal = (element) => {
        element.classList.remove('reveal-pending');
        observer?.unobserve(element);
    };
    const showAll = () => {
        elements.forEach(reveal);
        observer?.disconnect();
    };

    try {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) reveal(entry.target);
            });
        }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });

        elements.forEach((element) => {
            // Keep initial/deep-linked content visible; animate upcoming content only.
            if (element.getBoundingClientRect().top < window.innerHeight) return;
            element.classList.add('reveal-pending');
            observer.observe(element);
        });

        // Keyboard users must never land on an invisible link or its container.
        document.addEventListener('focusin', (event) => {
            const element = event.target.closest('[data-reveal]');
            if (element) reveal(element);
        });
        reducedMotion.addEventListener('change', (event) => {
            if (event.matches) showAll();
        });
    } catch {
        // Failed observer initialization must not leave any content hidden.
        showAll();
    }
})();
