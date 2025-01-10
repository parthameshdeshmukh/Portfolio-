// Typed.js initialization
var typeData = new Typed(".role", {
    strings: [
        "Plumber",
        "Astronaut",
        "Daddy",
        "Full Stack Developer",
        "Web Developer",
        "Backend Developer",
        "Coder"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// Load the user's theme preference from localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = "thank-you.html"; // Redirect to Thank You page
});