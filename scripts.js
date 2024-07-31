// JavaScript for interactive features

// Example function to highlight sections on scroll
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header a');

    function changeNav() {
        const current = window.scrollY + 50; // Adjust the offset for your site
        sections.forEach((section, index) => {
            if (section.offsetTop <= current && section.offsetTop + section.offsetHeight > current) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', changeNav);

    // Example function to smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust the offset for your site
                behavior: 'smooth'
            });
        });
    });
});
