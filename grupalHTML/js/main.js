document.addEventListener('DOMContentLoaded', function() {
    // el año actual siempre en el footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // js para el estilo de los botones que cuando estas en su pagina se queden en activ
    try {
        const currentPagePath = window.location.pathname;
        const navLinks = document.querySelectorAll('.site-nav__link');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (currentPagePath.endsWith(linkPath)) {
                link.classList.add('site-nav__link--active');
            } else {
                link.classList.remove('site-nav__link--active');
            }
        });

        // Specifically activate the link for the exact current page (e.g. index_es.html)
        // This handles the case if multiple links might partially match (e.g. /blog/ and /blog/post-1)
        // and ensures the language specific index page is highlighted.
        const activeLink = document.querySelector(`.site-nav__link[href$="${currentPagePath.substring(currentPagePath.lastIndexOf('/') + 1)}"]`);
        if (activeLink && !activeLink.classList.contains('site-nav__link--active')) {
            // Remove active from others first if a more specific match is found
            navLinks.forEach(l => l.classList.remove('site-nav__link--active'));
            activeLink.classList.add('site-nav__link--active');
        }


    } catch (e) {
        console.error("Error setting active navigation link:", e);
    }

});