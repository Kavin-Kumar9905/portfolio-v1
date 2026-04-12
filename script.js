const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, observerOptions);

// Target all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal-hidden');
    observer.observe(section);
});