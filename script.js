// Simple form interaction for demo
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      message.textContent = "Thank you! Your message has been sent.";
      form.reset();
    });
  }
});
