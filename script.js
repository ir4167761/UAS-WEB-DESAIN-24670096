// ============================
// AUTO YEAR FOOTER
// ============================
document.querySelectorAll('[id^="year"]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// ============================
// GREETING HERO
// ============================
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  const hour = new Date().getHours();
  let greeting = "Halo Selamat Datang 👋";

  if (hour < 11) greeting = "Halo Selamat Pagi ☀️";
  else if (hour < 15) greeting = "Halo Selamat Siang 🌤️";
  else if (hour < 18) greeting = "Halo Selamat Sore 🌇";
  else greeting = "Halo Selamat Malam 🌙";

  greetingEl.textContent = greeting;
}

// ============================
// GALLERY MODAL
// ============================
const galleryModal = document.getElementById("galleryModal");
if (galleryModal) {
  galleryModal.addEventListener("show.bs.modal", function (event) {
    const trigger = event.relatedTarget;
    const imgSrc = trigger.getAttribute("data-src");
    const caption = trigger.getAttribute("data-caption");

    document.getElementById("galleryModalImg").src = imgSrc;
    document.getElementById("galleryCaption").textContent = caption || "";
  });
}

// ============================
// CONTACT FORM (FAKE SUBMIT)
// ============================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const feedback = document.getElementById("formFeedback");
    feedback.innerHTML = `
      <div class="alert alert-success">
        Terima kasih! Pesan Anda telah kami terima 🙌
      </div>
    `;

    contactForm.reset();
  });
}
