document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        if (!handleSubmit()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    document.querySelector("button[type='reset']").addEventListener("click", function (event) {
        if (!handleReset()) {
            event.preventDefault(); // Prevent form reset if the user cancels
        }
    });
});

function handleReset() {
    return confirm("Are you sure you want to reset?");
}

function handleSubmit() {
    function isEmpty(field) {
        return !field.value.trim();
    }

    if (isEmpty(document.getElementById("first_name"))) {
        alert("First Name is required.");
        return false;
    }
    if (isEmpty(document.getElementById("last_name"))) {
        alert("Last Name is required.");
        return false;
    }
    if (isEmpty(document.getElementById("dob"))) {
        alert("Date of Birth is required.");
        return false;
    }
    if (isEmpty(document.getElementById("address"))) {
        alert("Address is required.");
        return false;
    }
    if (isEmpty(document.getElementById("pincode"))) {
        alert("Pincode is required.");
        return false;
    }
    if (isEmpty(document.getElementById("country"))) {
        alert("Country is required.");
        return false;
    }
    if (isEmpty(document.getElementById("state"))) {
        alert("State is required.");
        return false;
    }

    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        alert("Gender is required.");
        return false;
    }

    let subjectSelected = document.getElementById("subject_of_interest").value !== "Select one";
    if (!subjectSelected) {
        alert("Please select a subject of interest.");
        return false;
    }

    let languageSelected = document.querySelectorAll('input[name="language_known"]:checked').length > 0;
    if (!languageSelected) {
        alert("Please select at least one known language.");
        return false;
    }

    return true;
}
