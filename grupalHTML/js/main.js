//para el año actual en el footer
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // js para el estilo de los botones que cuando estas en su pagina se queden en activ. (cuando vas a la primera entrada del blog se quita el activa)
    try {
        const currentPagePath = window.location.pathname;
        const navLinks = document.querySelectorAll('.site-nav__link');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            // Ensure linkPath is not null or empty before proceeding
            if (linkPath && currentPagePath.endsWith(linkPath)) {
                link.classList.add('site-nav__link--active');
            } else {
                link.classList.remove('site-nav__link--active');
            }
        });

        const currentFileName = currentPagePath.substring(currentPagePath.lastIndexOf('/') + 1);
        if (currentFileName) { // Ensure currentFileName is not empty
            const activeLink = document.querySelector(`.site-nav__link[href$="${currentFileName}"]`);
            if (activeLink && !activeLink.classList.contains('site-nav__link--active')) {
                navLinks.forEach(l => l.classList.remove('site-nav__link--active'));
                activeLink.classList.add('site-nav__link--active');
            }
        }

    } catch (e) {
        console.error("Error setting active navigation link:", e);
    }

    const hamburger = document.querySelector('.hamburger-menu');
    const siteNav = document.querySelector('.site-nav');

    if (hamburger && siteNav) {
        hamburger.addEventListener('click', function () {
            siteNav.classList.toggle('site-nav--open');
            const isExpanded = siteNav.classList.contains('site-nav--open');
            hamburger.setAttribute('aria-expanded', isExpanded.toString());
            hamburger.classList.toggle('hamburger-menu--open');
        });
    }

});