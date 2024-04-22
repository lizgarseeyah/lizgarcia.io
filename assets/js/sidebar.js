document.addEventListener("DOMContentLoaded", function() {
    const sidebarMenu = document.getElementById("sidebar-menu");

    // Example data for demonstration
    const years = [2024, 2025];
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

    // Function to toggle month dropdown visibility
    function toggleMonthDropdown(event) {
        event.preventDefault();
        const yearItem = event.target.closest("li");
        const monthDropdown = yearItem.querySelector(".months");
        monthDropdown.classList.toggle("show");
    }

    // Function to populate the day dropdown
    function populateDays(year, month, monthItem) {
        const days = Array.from({ length: daysInMonth[month] }, (_, i) => i + 1);
        const daySelect = document.createElement("select");
        daySelect.classList.add("days");
        days.forEach(day => {
            const option = document.createElement("option");
            option.value = day;
            option.textContent = day;
            daySelect.appendChild(option);
        });
        const existingDayDropdown = monthItem.querySelector(".days");
        if (existingDayDropdown) {
            existingDayDropdown.remove();
        }
        monthItem.appendChild(daySelect);
    }

    // Populate the year dropdown
    years.forEach(year => {
        const yearItem = document.createElement("li");
        yearItem.innerHTML = `<a href="#">${year}</a>`;
        yearItem.addEventListener("click", toggleMonthDropdown);
        const monthDropdown = document.createElement("ul");
        monthDropdown.classList.add("months");
        monthDropdown.innerHTML = months[year].map(month => {
            const monthItem = document.createElement("li");
            monthItem.innerHTML = `<a href="#">${month}</a>`;
            monthItem.addEventListener("click", function(event) {
                event.preventDefault();
                const monthName = event.target.innerText; // Get the month name from the clicked element
                populateDays(year, monthName, monthItem); // Pass the month name instead of the month index
            });
            return monthItem.outerHTML;
        }).join('');
        yearItem.appendChild(monthDropdown);
        sidebarMenu.appendChild(yearItem);
    });
});
