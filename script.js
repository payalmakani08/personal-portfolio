
function changeTheme() {
    document.body.classList.toggle("dark");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark")) {
        button.textContent = "☀️ Light";
    } else {
        button.textContent = "🌙 Dark";
    }
}
