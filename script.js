
// ===== SIMPLE FORM VALIDATION =====
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const service = form.querySelector('select').value;

    if (name === "" || phone === "" || service === "") {
        alert("Please fill all fields before submitting.");
        return;
    }

    alert("Thank you! Your appointment request has been received.");
    form.reset();
});
// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
