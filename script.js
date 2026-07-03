// ============================
// NAV TOGGLE (hamburger menu, mobile only)
// ============================
const navToggle = document.querySelector(".nav-toggle");
const sidebar = document.querySelector(".sidebar");

navToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// ============================
// COPY WIFI PASSWORD
// ============================
const copyBtn = document.getElementById("copy-wifi");

copyBtn.addEventListener("click", async () => {
  const value = copyBtn.dataset.value;
  try {
    await navigator.clipboard.writeText(value);
    const original = copyBtn.textContent;
    copyBtn.textContent = "Copied";
    copyBtn.classList.add("copied");
    setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.classList.remove("copied");
    }, 1500);
  } catch (err) {
    console.error("Could not copy password:", err);
  }
});

// ============================
// PRINT RECEIPT
// ============================
document.getElementById("print-btn").addEventListener("click", () => {
  window.print();
});

// ============================
// ADD TO CALENDAR (.ics file)
// ============================
document.getElementById("calendar-btn").addEventListener("click", () => {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    "SUMMARY:Stay at Maison Soleil \u2013 La Garrigue",
    "DTSTART:20260425T150000",
    "DTEND:20260429T110000",
    "LOCATION:12 Rue des Oliviers, Cassis",
    "DESCRIPTION:Booking confirmed. Check-in from 15:00, check-out by 11:00.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "maison-soleil-stay.ics";
  link.click();
  URL.revokeObjectURL(url);
});
