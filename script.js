const { hash } = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").textContent = message;
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const messageInput = document.querySelector("#message-input");
  const encrypted = btoa(messageInput.value);
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
