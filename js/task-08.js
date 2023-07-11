const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

const loginData = {};
function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password }} = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert ("Всі поля повинні бути заповнені!");
    }

    loginData.email = email.value;
    loginData.password = password.value;

    console.log('loginData:', loginData)
    event.currentTarget.reset();
}
