document.addEventListener("DOMContentLoaded", function() {
    const sidebarMenu = document.getElementById("sidebar-menu");
    const yearDropdown = document.getElementById("year-dropdown");

    // Example data for demonstration
    const months = {
        2024: ["April", "May", "June", "July", "August", "September", "October", "November", "December"],
        2025: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    };
    const daysInMonth = {
        "January": 31,
        "February": 28, // Assuming not a leap year
        "March": 31,
        "April": 30,
        "May": 31,
        "June": 30,
        "July": 31,
        "August": 31,
        "September": 30,
        "October": 31,
        "November": 30,
        "December": 31
    };

    // Function to populate months dropdown based on selected year
    function populateMonths() {
        const selectedYear = yearDropdown.value;
        const monthDropdown = document.createElement("select");
        monthDropdown.classList.add("months");
        monthDropdown.addEventListener("change", populateDays);
        const monthsOfYear = months[selectedYear];
        monthsOfYear.forEach(month => {
            const option = document.createElement("option");
            option.value = month;
            option.textContent = month;
            monthDropdown.appendChild(option);
        });
        const existingMonthDropdown = sidebarMenu.querySelector(".months");
        if (existingMonthDropdown) {
            existingMonthDropdown.remove();
        }
        sidebarMenu.appendChild(monthDropdown);
    }

    // Function to populate days dropdown based on selected month
    function populateDays(event) {
        const selectedYear = yearDropdown.value;
        const selectedMonth = event.target.value;
        const days = Array.from({ length: daysInMonth[selectedMonth] }, (_, i) => i + 1);
        const daySelect = document.createElement("select");
        daySelect.classList.add("days");
        days.forEach(day => {
            const option = document.createElement("option");
            option.value = day;
            option.textContent = day;
            daySelect.appendChild(option);
        });
        const existingDayDropdown = sidebarMenu.querySelector(".days");
        if (existingDayDropdown) {
            existingDayDropdown.remove();
        }
        sidebarMenu.appendChild(daySelect);
    }

    // Populate months dropdown when a year is selected
    yearDropdown.addEventListener("change", populateMonths);

    // Get sidebar element
    const sidebar = document.querySelector('.sidebar');

    // Add event listener for mouseenter event
    sidebar.addEventListener('mouseenter', () => {
        sidebar.style.width = '300px'; // Adjust width as needed
    });

    // Add event listener for mouseleave event
    sidebar.addEventListener('mouseleave', () => {
        sidebar.style.width = '200px'; // Adjust width to its original value
    });
});
