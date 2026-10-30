(() => {
  const config = window.ARSLAN_CONFIG || {};
  const number = (config.whatsappNumber || "").replace(/\D/g, "");
  const callNumber = (config.callNumber || "").replace(/\D/g, "");
  const alternateNumber = (config.alternateWhatsappNumber || "").replace(/\D/g, "");
  const validNumber = /^92\d{10}$/.test(number);
  const validCallNumber = /^92\d{10}$/.test(callNumber);
  const validAlternateNumber = /^92\d{10}$/.test(alternateNumber);
  const waUrl = (targetNumber, message) => `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
  const defaultMessage = "Assalam-o-Alaikum Arslan Express. I would like to ask about your services in Lahore.";
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  menuToggle?.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
    menuToggle.textContent = opened ? "×" : "☰";
  });
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  }));

  ["bookingWhatsApp", "footerWhatsApp"].forEach(id => {
    const link = document.getElementById(id);
    if (!link) return;
    if (validNumber) link.href = waUrl(number, defaultMessage);
    else {
      link.href = "#booking";
      link.addEventListener("click", e => {
        e.preventDefault();
        alert("Please add your WhatsApp number in config.js first.");
      });
    }
  });

  const callLink = document.getElementById("callArslan");
  if (callLink && validCallNumber) callLink.href = `tel:+${callNumber}`;

  const alternateLink = document.getElementById("alternateWhatsApp");
  if (alternateLink && validAlternateNumber) {
    alternateLink.href = waUrl(alternateNumber, defaultMessage);
  }

  document.querySelectorAll("[data-service]").forEach(link => {
    link.addEventListener("click", () => {
      const select = document.getElementById("serviceSelect");
      if (select) select.value = link.dataset.service;
    });
  });

  const dateInput = document.getElementById("bookingDate");
  if (dateInput) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    dateInput.min = localToday;
  }
  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("bookingForm");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    const status = document.getElementById("formMessage");
    if (!validNumber) {
      status.textContent = "Setup required: add your real WhatsApp number in config.js (format: 923001234567), then publish again.";
      status.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const data = new FormData(form);
    const fields = [
      "Assalam-o-Alaikum Arslan Express! I want to request a booking.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      `Pickup: ${data.get("pickup")}`,
      `Drop-off: ${data.get("dropoff") || "Not specified"}`,
      `Preferred date: ${data.get("date") || "Flexible"}`,
      `Preferred time: ${data.get("time") || "Flexible"}`,
      `Payment preference: ${data.get("payment")}`,
      `Details: ${data.get("details") || "Not specified"}`,
      "",
      "Please confirm availability, final charges and booking details. I understand this is a request, not a confirmed booking."
    ];
    if (document.getElementById("referencePhoto")?.files?.length) {
      fields.push("I have a reference photo and will attach it in this WhatsApp chat.");
    }
    const message = fields.join("\n");
    window.open(waUrl(number, message), "_blank", "noopener,noreferrer");
    status.textContent = "WhatsApp is opening with your booking details. Review the message and press Send in WhatsApp. Attach any reference photo there.";
  });
})();
