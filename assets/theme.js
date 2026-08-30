/* MyWireGuard theme — shared UI behaviour (dependency-free) */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        // Mobile navigation toggle
        var header = document.querySelector('.site-header');
        var toggle = document.querySelector('.nav-toggle');
        if (header && toggle) {
            toggle.addEventListener('click', function () {
                header.classList.toggle('nav-open');
                var open = header.classList.contains('nav-open');
                toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            });
            // Close the menu after tapping a link (mobile)
            header.querySelectorAll('.main-nav a').forEach(function (link) {
                link.addEventListener('click', function () {
                    header.classList.remove('nav-open');
                    toggle.setAttribute('aria-expanded', 'false');
                });
            });
        }

        // Highlight the current page in the nav
        var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
        document.querySelectorAll('.main-nav > ul > li > a').forEach(function (link) {
            var href = (link.getAttribute('href') || '').split('/').pop().toLowerCase();
            if (href === path || (path === '' && href === 'index.html')) {
                link.parentElement.classList.add('active');
            }
        });
    });
})();
