
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Formular trimis!");
    console.log("Nume:", name);
    console.log("Email:", email);
    console.log("Mesaj:", message);

    alert("Mulțumim pentru mesaj! Vom reveni în curând.");
    form.reset();
  });
});
