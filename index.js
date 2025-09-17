// Initialize EmailJS
emailjs.init("ZV2rFwdWb24QDd6zh");  // Your Public Key

function showNotification(message, isError = false) {
  const notif = document.getElementById("notification");
  notif.textContent = message;
  notif.className = "notification show" + (isError ? " error" : "");

  // Auto-hide after 3 sec
  setTimeout(() => {
    notif.classList.remove("show");
  }, 3000);
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_sa5e74l", "template_vcae338", this)
    .then(() => {
      showNotification("✅ Message sent successfully!");
      this.reset();
    })
    .catch((err) => {
      showNotification("❌ Failed to send message.", true);
      console.error("EmailJS Error:", err);
    });
});
