// Kleine helper-scriptjes.
// Alles staat in een extern JS-bestand (optioneel, maar netjes).

// Zet het jaartal automatisch in de footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  // Contactformulier validatie (client-side)
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Gebruik HTML5 validatie rules (required, minlength, type="email", ...)
    if (!form.checkValidity()) {
      // Toon Bootstrap styling voor invalid fields
      form.classList.add("was-validated");
      return;
    }

    // Als alles ok is, toon een succesmelding
    form.classList.add("was-validated");
    const success = document.getElementById("formSuccess");
    if (success) {
      success.classList.remove("d-none");
    }

    // Reset geen velden automatisch: zo kan de gebruiker tekst nog kopiëren
  });
});
