


const hiddenElements = document.querySelectorAll(
    ".card, .hero-card, .footer-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});




document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});




const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.boxShadow =
            "0 0 30px rgba(255,0,0,.6)";

    });

    card.addEventListener("mouseleave", () => {

    card.style.boxShadow =
            "0 0 0 rgba(0,0,0,0)";

    });

});




console.log(
`
███████╗███████╗██╗     ██╗██╗  ██╗
██╔════╝██╔════╝██║     ██║╚██╗██╔╝
█████╗  █████╗  ██║     ██║ ╚███╔╝
██╔══╝  ██╔══╝  ██║     ██║ ██╔██╗
██║     ███████╗███████╗██║██╔╝ ██╗
╚═╝     ╚══════╝╚══════╝╚═╝╚═╝  ╚═╝

Frontend Developer
Graphic Designer
`
);



const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
if (burger && navMenu) {

    burger.addEventListener("click", () => {

    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});
    overlay.addEventListener("click", () => {

    burger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

});

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            burger.classList.remove("active");
navMenu.classList.remove("active");
overlay.classList.remove("active");

document.body.classList.remove("menu-open");
        });

    });

}