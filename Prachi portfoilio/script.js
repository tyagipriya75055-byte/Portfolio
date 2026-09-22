// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
});


const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    form.reset();
});