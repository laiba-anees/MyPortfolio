const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (e) {

    // Stop the page from refreshing
    e.preventDefault();

    // Read the input values
    const username = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Check whether both fields are filled
    if (username !== "" && email !== "") {

        formMessage.textContent =
            "Thank you for visiting, " + username +
            "! We will contact you at " + email + ".";

        formMessage.style.color = "green";

    } else {

        formMessage.textContent =
            "Please enter your name and email.";

        formMessage.style.color = "red";
    }

});




const projectRows = document.querySelectorAll("#projects-table tbody tr");

projectRows.forEach(function (row) {

    // When the mouse enters a row
    row.addEventListener("mouseover", function () {
        row.style.backgroundColor = "lightpink";
    });

    // When the mouse leaves a row
    row.addEventListener("mouseout", function () {
        row.style.backgroundColor = "";
    });

});




const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});




const projectCheckboxes = document.querySelectorAll(".project-checkbox");
const totalDisplay = document.getElementById("total");

function calculateTotal() {

    let total = 0;

    // Check every project checkbox
    projectCheckboxes.forEach(function (checkbox) {

        // Add its value only if selected
        if (checkbox.checked) {
            total = total + Number(checkbox.value);
        }

    });

    // Display the calculated total
    totalDisplay.textContent = "Total: " + total + " points";

}

// Update the total whenever a checkbox changes
projectCheckboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", calculateTotal);

});




const verifyAgeButton = document.getElementById("verify-age-btn");
const birthYearInput = document.getElementById("birth-year");
const ageMessage = document.getElementById("age-message");

verifyAgeButton.addEventListener("click", function () {

    const yearText = birthYearInput.value.trim();

    // Convert the text into an integer
    const birthYear = parseInt(yearText, 10);

    // Check that the entered value is a valid year
    if (
        yearText === "" ||
        !/^\d+$/.test(yearText) ||
        !Number.isInteger(birthYear) ||
        birthYear < 1900 ||
        birthYear > 2026
    ) {

        ageMessage.textContent = "Please enter a valid birth year.";
        ageMessage.style.color = "red";

        return;
    }

    // Calculate age using the assignment's year
    const age = 2026 - birthYear;

    if (age < 18) {

        ageMessage.textContent =
            "Your age is " + age +
            ". You are not eligible for the student/senior discount.";

        ageMessage.style.color = "red";

    } else if (age <= 25) {

        ageMessage.textContent =
            "Your age is " + age +
            ". You qualify for the student discount category.";

        ageMessage.style.color = "green";

    } else if (age >= 60) {

        ageMessage.textContent =
            "Your age is " + age +
            ". You qualify for the senior discount category.";

        ageMessage.style.color = "green";

    } else {

        ageMessage.textContent =
            "Your age is " + age +
            ". You do not qualify for the student/senior discount category.";

        ageMessage.style.color = "red";
    }

});




const readMoreButton = document.getElementById("read-more-btn");
const extraAbout = document.getElementById("extra-about");

readMoreButton.addEventListener("click", function () {

    // Check whether the extra paragraph is hidden
    if (extraAbout.classList.contains("hidden")) {

        // Show the extra paragraph
        extraAbout.classList.remove("hidden");

        // Change the button text
        readMoreButton.textContent = "Read Less";

    } else {

        // Hide the extra paragraph
        extraAbout.classList.add("hidden");

        // Change the button text
        readMoreButton.textContent = "Read More";
    }

});




const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get the selected category
        const selectedCategory = button.dataset.category;

        // Check each project row
        projectRows.forEach(function (row) {

            const projectCategory = row.dataset.category;

            // Show all rows or only matching categories
            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {

                row.style.display = "";

            } else {

                row.style.display = "none";
            }

        });

        // Highlight the selected filter button
        filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

    });

});




const openingStatus = document.getElementById("opening-status");

function updateOpeningStatus() {

    // Get the current hour from the computer's clock
    const currentHour = new Date().getHours();

    // The portfolio is marked open from 8 AM to 5 PM
    if (currentHour >= 8 && currentHour < 17) {

        openingStatus.textContent = "Portfolio Status: We are Open!";
        openingStatus.style.color = "green";

    } else {

        openingStatus.textContent =
            "Portfolio Status: Closed - Open at 8 AM";

        openingStatus.style.color = "red";
    }

}

// Display the status when the page loads
updateOpeningStatus();




const specialNotes = document.getElementById("special-notes");
const characterCount = document.getElementById("char-count");

specialNotes.addEventListener("input", function () {

    // Get the number of characters entered
    const charactersUsed = specialNotes.value.length;

    // Calculate the remaining characters
    const charactersRemaining = 100 - charactersUsed;

    // Display the remaining character count
    characterCount.textContent =
        charactersRemaining + " characters remaining";

});
