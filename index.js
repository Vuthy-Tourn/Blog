const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleThumb = document.getElementById("theme-toggle-thumb");
const themeToggleSunIcon = document.getElementById("theme-toggle-sun-icon");
const themeToggleMoonIcon = document.getElementById("theme-toggle-moon-icon");

// Check for saved theme in localStorage
if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeToggleThumb.classList.add("translate-x-8");
  themeToggleSunIcon.classList.add("hidden");
  themeToggleMoonIcon.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
  themeToggleThumb.classList.remove("translate-x-8");
  themeToggleSunIcon.classList.remove("hidden");
  themeToggleMoonIcon.classList.add("hidden");
}

// Toggle theme on button click
themeToggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggleThumb.classList.add("translate-x-8");
    themeToggleSunIcon.classList.add("hidden");
    themeToggleMoonIcon.classList.remove("hidden");
  } else {
    localStorage.setItem("theme", "light");
    themeToggleThumb.classList.remove("translate-x-8");
    themeToggleSunIcon.classList.remove("hidden");
    themeToggleMoonIcon.classList.add("hidden");
  }
});

// Close the mobile menu when a link is clicked (optional)
const mobileLinks = document.querySelectorAll("#mobileMenu a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.add("hidden");
  });
});
// Toggle mobile menu visibility
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}