const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const mesaj = input.value.trim();
  if (mesaj !== "") {
    const div = document.createElement("div");
    div.classList.add("chat-message");
    div.textContent = mesaj;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight; 
    input.value = "";
  }
});
