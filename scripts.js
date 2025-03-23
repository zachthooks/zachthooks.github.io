let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Downscroll - hide the header
        header.style.top = "-100px";
    } else {
        // Upscroll - show the header
        header.style.top = "0";
    }
    
    lastScrollTop = scrollTop;
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
