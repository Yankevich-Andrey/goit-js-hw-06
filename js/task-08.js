const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const formData = {
      email,
      password,
    };

    console.log(formData);
    form.reset();
  }
}
