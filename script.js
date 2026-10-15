
const themeButton = document.getElementById("themeButton");

// Apply the saved theme when the page opens
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

updateThemeButton();

function changeTheme() {
    document.body.classList.toggle("dark");

    const currentTheme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("portfolioTheme", currentTheme);
    updateThemeButton();
}

function updateThemeButton() {
    if (!themeButton) return;

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Light";
    } else {
        themeButton.textContent = "🌙 Dark";
    }
}
