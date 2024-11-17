// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Portfolio Item Hover Animation (Optional)
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Skills Section Animation on Scroll
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsTop < windowHeight - 100) {
        document.querySelectorAll('.progress-bar div').forEach(bar => {
            bar.style.transition = 'width 1s ease-in-out';
        });
    }
});
