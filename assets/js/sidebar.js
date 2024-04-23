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

    // Function to handle sidebar width adjustment
    function adjustSidebarWidth(width) {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.width = width;
    }

    // Add event listeners for sidebar width adjustment
    sidebarMenu.addEventListener('touchstart', () => {
        adjustSidebarWidth('300px');
    });

    sidebarMenu.addEventListener('touchend', () => {
        adjustSidebarWidth('200px');
    });

    sidebarMenu.addEventListener('mouseenter', () => {
        adjustSidebarWidth('300px');
    });

    sidebarMenu.addEventListener('mouseleave', () => {
        adjustSidebarWidth('200px');
    });
});
