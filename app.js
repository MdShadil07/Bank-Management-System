document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const dropdownButtons = document.querySelectorAll(".drop-btn");

    // Toggle sidebar visibility
    toggleBtn.addEventListener("click", function() {
        sidebar.classList.toggle("hidden");
    });


    // adjust the position of toggle btn upon clicking 
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("closed");
    
        
        if (sidebar.classList.contains("closed")) {
            toggleBtn.style.left= "15px"; // Moves to far right
        } else {
            toggleBtn.style.left = "260px"; // Adjusted position when sidebar is open
        }
    });


    // rotate the toggle buttom for better animation

    
    // Toggle dropdown menus
    dropdownButtons.forEach(button => {
        button.addEventListener("click", function() {
            const dropdownMenu = button.nextElementSibling;
            if (dropdownMenu.classList.contains("open")) {
                dropdownMenu.classList.remove("open");
            } else {
                document.querySelectorAll(".dropdown-profile, .dropdown-Accounts, .dropdown-Services, .dropdown-Setting").forEach(menu => menu.classList.remove("open"));
                dropdownMenu.classList.add("open");z
            }
        });
    });
});
