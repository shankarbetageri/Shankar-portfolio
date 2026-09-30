/* ========================================
   MOBILE NAVIGATION
======================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const navLinks =
    document.getElementById("navLinks");


if (mobileMenu && navLinks) {

    mobileMenu.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        mobileMenu.classList.toggle("active");

    });

}


/* ========================================
   CLOSE MOBILE MENU
======================================== */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (mobileMenu) {
            mobileMenu.classList.remove("active");
        }

    });

});


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .service-card, .timeline-item"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach(function (element) {

        element.classList.add(
            "reveal-hidden"
        );

        observer.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add(
            "reveal-visible"
        );

    });

}


/* ========================================
   CURRENT YEAR
======================================== */

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    const year =
        new Date().getFullYear();

    copyright.textContent =
        `© ${year} Shankar. All rights reserved.`;

}


/* ========================================
   LIGHT / DARK MODE
======================================== */

const themeToggle =
    document.getElementById("themeToggle");


if (themeToggle) {

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

        themeToggle.textContent = "🌙";

    } else {

        themeToggle.textContent = "☀";

    }


    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light-mode"
            );


            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );


            if (isLight) {

                themeToggle.textContent = "🌙";

                localStorage.setItem(
                    "theme",
                    "light"
                );

            } else {

                themeToggle.textContent = "☀";

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            }

        }
    );

}


/* ========================================
   SMOOTH SCROLL
======================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});
