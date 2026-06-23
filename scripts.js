function toggleMenu() {
    var menu = document.getElementById("navMenu");

    if (menu.classList.contains("open")) {
        // Si el menú está abierto, aplicamos la animación de replegar
        menu.style.animation = "slideUp 1.5s ease-in-out forwards"; // Velocidad de repliegue
        menu.classList.remove("open");
    } else {
        // Si el menú está cerrado, aplicamos la animación de desplegar
        menu.classList.add("open");
        menu.style.animation = "slideDown 1s ease-in-out forwards"; // Velocidad de despliegue
    }
}

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
