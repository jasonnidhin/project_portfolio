// Get elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const previewName = document.getElementById("previewName");
const previewEmail = document.getElementById("previewEmail");
const previewMessage = document.getElementById("previewMessage");

// Update live preview when typing
nameInput.addEventListener("input", () => {
  previewName.textContent = nameInput.value || "---";
});

emailInput.addEventListener("input", () => {
  previewEmail.textContent = emailInput.value || "---";
});

messageInput.addEventListener("input", () => {
  previewMessage.textContent = messageInput.value || "---";
});
