document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const navLinks = nav.querySelectorAll("a"); // toate link-urile din meniu

    // Toggle meniu la click pe hamburger
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Închide meniul când dai click pe un link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) { // doar pe mobil
                nav.classList.remove("active");
                menuToggle.classList.remove("active");
            }
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.getElementById("menu-toggle");

        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
        });
    });



    window.addEventListener("load", function () {
        const loader = document.querySelector(".container");

        // arată loader-ul (în caz că e ascuns din CSS)
        loader.style.display = "flex";

        // după 1 secundă dispare
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 0.5s ease";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }, 3000);
    });

    // APLICĂ TEMĂ
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.style.background = '#111';
            document.body.style.color = '#fff';
        } else if (theme === 'light') {
            document.body.style.background = '#f8f3f0';
            document.body.style.color = '#333';
        } else if (theme === 'brown') {
            document.body.style.background = '#6b3e3e';
            document.body.style.color = '#fff';
        } else {
            document.body.style.background = '';
            document.body.style.color = '';
        }
    }

    // HERO SLIDER
    const slides = document.querySelectorAll(".slide");

    let index = 0;

    function changeSlide() {
        slides[index].classList.remove("active");

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        slides[index].classList.add("active");
    }

    if (slides.length > 0) {
        setInterval(changeSlide, 4000);
    }

});


// SELECTEAZĂ BUTTON
const backToTopBtn = document.getElementById("backToTop");

// ARATĂ BUTTON LA SCROLL
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.visibility = "visible";
    } else {
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.visibility = "hidden";
    }
});

// CLICK PE BUTTON = SCROLL SUS
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const stars = document.querySelectorAll('.star');
const result = document.querySelector('.rating-result');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        const value = star.getAttribute('data-value');
        highlightStars(value);
    });

    star.addEventListener('mouseout', () => {
        highlightStars(selectedRating);
    });

    star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value');
        result.textContent = `${selectedRating}/5`;
        highlightStars(selectedRating);
    });
});

// Include EmailJS SDK în HTML: <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
// EmailJS init
emailjs.init("YOUR_USER_ID");

const form = document.getElementById('contact-form');
const messageDiv = document.querySelector('.form-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            messageDiv.textContent = "Mulțumim pentru mesajul tău!";
            form.reset();
        }, (error) => {
            messageDiv.textContent = "A apărut o eroare. Încearcă din nou.";
            console.error(error);
        });
});

function highlightStars(value) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('hovered');
        } else {
            star.classList.remove('hovered');
        }
    });
}


