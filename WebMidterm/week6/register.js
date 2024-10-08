window.onload = pageLoad;

function pageLoad() {
    document.getElementById("myRegister").addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
}

function validateForm() {
    const firstname = document.forms["myRegister"]["firstname"].value;
    const lastname = document.forms["myRegister"]["lastname"].value;
    const gender = document.forms["myRegister"]["gender"].value;
    const bday = document.forms["myRegister"]["bday"].value;
    const email = document.forms["myRegister"]["email"].value;
    const username = document.forms["myRegister"]["username"].value;
    const password = document.forms["myRegister"]["password"][0].value;
    const retypePassword = document.forms["myRegister"]["password"][1].value; // Assuming the second password input has the same name

    if (!firstname || !lastname || !gender || !bday || !email || !username || !password || !retypePassword) {
        document.getElementById("errormsg").innerText = "Please fill in all required fields.";
        return false;
    }

    if (password !== retypePassword) {
        document.getElementById("errormsg").innerText = "Passwords do not match.";
        return false;
    }

    return true;
}
