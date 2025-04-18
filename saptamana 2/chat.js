function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();

  if (message === "") return;

  addMessageToChat(message, "user");
  input.value = "";

  setTimeout(() => {
    const botReply = getBotResponse(message);
    addMessageToChat(botReply, "bot");
  }, 500);
}

function addMessageToChat(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageElem = document.createElement("div");

  messageElem.classList.add("message", sender);
  messageElem.textContent = message;

  chatBox.appendChild(messageElem);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("salut")) return "Salut! Cum pot ajuta?";
  if (input.includes("ce faci")) return "Încerc să fiu util 😄";
  if (input.includes("cine ești")) return "Sunt un mini-bot creat de tine!";
  if (input.includes("la revedere")) return "Ne mai vedem! 👋";

  return "Hmm... nu știu ce să răspund la asta 🤖";
}
