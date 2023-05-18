function showAlert() {
    alert('¡Hola, esta es una alerta desde JavaScript!');
    console.log("Print");
}

const form = document.getElementById('myForm');

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm();
    });
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;


    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        fetch("https://formspree.io/f/xvonyypb", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(new FormData(event.target)).toString()
        })
            .then(function (response) {
                if (response.ok) {
                    alert("El formulario se ha enviado correctamente.");
                    form.reset();
                } else {
                    alert("Hubo un error al enviar el formulario.");
                }
            })
            .catch(function (error) {
                console.error("Error al enviar el formulario:", error);
            });
        // alert('Correo electrónico enviado correctamente.');
    }
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function () {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive")
        console.log("correcto")
    })