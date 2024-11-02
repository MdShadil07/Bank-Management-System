document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const dropdownButtons = document.querySelectorAll(".drop-btn");

    // Toggle sidebar visibility
    toggleBtn.addEventListener("click", function() {
        sidebar.classList.toggle("hidden");
    });

    // Toggle dropdown menus
    dropdownButtons.forEach(button => {
        button.addEventListener("click", function() {
            const dropdownMenu = button.nextElementSibling;
            if (dropdownMenu.classList.contains("open")) {
                dropdownMenu.classList.remove("open");
            } else {
                document.querySelectorAll(".dropdown-profile, .dropdown-Accounts, .dropdown-Services, .dropdown-Setting").forEach(menu => menu.classList.remove("open"));
                dropdownMenu.classList.add("open");
            }
        });
    });
});
