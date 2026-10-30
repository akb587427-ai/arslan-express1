/*
 * Arslan Express — site behaviour
 * -------------------------------
 * Responsibilities:
 *   1. Resolve contact links from window.ARSLAN_CONFIG.
 *   2. Drive the mobile navigation.
 *   3. Turn the booking form into a pre-filled WhatsApp message.
 *
 * The site has no backend. Nothing is stored or submitted to a server:
 * the booking form only prepares a message the visitor sends themselves.
 */
(() => {
  "use strict";

  const config = window.ARSLAN_CONFIG || {};
  const digits = (value) => String(value || "").replace(/\D/g, "");

  /* Accepts Pakistani numbers in E.164 (923XXXXXXXXX) or local 03XXXXXXXXX form. */
  const toE164 = (value) => {
    const raw = digits(value);
    if (/^92\d{10}$/.test(raw)) return raw;
    if (/^0\d{10}$/.test(raw)) return `92${raw.slice(1)}`;
    if (/^\d{10}$/.test(raw)) return `92${raw}`;
    return "";
  };

  const primaryNumber = toE164(config.whatsappNumber);
  const callNumber = toE164(config.callNumber);
  const alternateNumber = toE164(config.alternateWhatsappNumber);
  const businessName = config.businessName || "Arslan Express";
  const greeting =
    config.greeting || `Assalam-o-Alaikum ${businessName}. I would like to ask about your services.`;

  const whatsappUrl = (target, message) =>
    `https://wa.me/${target}?text=${encodeURIComponent(message)}`;

  const byId = (id) => document.getElementById(id);

  /* ---------------------------------------------------------------- links */

  const setWhatsappLink = (id, target, message) => {
    const link = byId(id);
    if (!link) return;
    if (!target) {
      link.hidden = true;
      return;
    }
    link.href = whatsappUrl(target, message);
  };

  setWhatsappLink("bookingWhatsApp", primaryNumber, greeting);
  setWhatsappLink("footerWhatsApp", primaryNumber, greeting);
  setWhatsappLink("alternateWhatsApp", alternateNumber, greeting);

  const callLink = byId("callArslan");
  if (callLink) {
    if (callNumber) callLink.href = `tel:+${callNumber}`;
    else callLink.hidden = true;
  }

  /* ----------------------------------------------------------- navigation */

  const menuToggle = byId("menuToggle");
  const nav = byId("mainNav");

  if (menuToggle && nav) {
    const setMenu = (open) => {
      nav.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.textContent = open ? "\u00d7" : "\u2630";
    };

    menuToggle.addEventListener("click", () =>
      setMenu(!nav.classList.contains("open"))
    );

    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => setMenu(false))
    );

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        setMenu(false);
        menuToggle.focus();
      }
    });

    /* Keep the button state correct when the viewport grows back to desktop. */
    window.matchMedia("(min-width: 651px)").addEventListener("change", (event) => {
      if (event.matches) setMenu(false);
    });
  }

  /* ------------------------------------------------- service pre-selection */

  const serviceSelect = byId("serviceSelect");
  document.querySelectorAll("[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
      if (!serviceSelect) return;
      const requested = link.dataset.service;
      const match = [...serviceSelect.options].find((option) => option.value === requested);
      if (match) serviceSelect.value = requested;
    });
  });

  /* -------------------------------------------------------------- booking */

  const dateInput = byId("bookingDate");
  if (dateInput) {
    const now = new Date();
    const localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10);
    dateInput.min = localToday;
  }

  const yearSlot = byId("year");
  if (yearSlot) yearSlot.textContent = String(new Date().getFullYear());

  const form = byId("bookingForm");
  const status = byId("formMessage");

  const setStatus = (message, isError = false) => {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("form-message--error", isError);
    status.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!primaryNumber) {
        setStatus(
          "Booking is temporarily unavailable: the WhatsApp number is not configured in config.js.",
          true
        );
        return;
      }

      const data = new FormData(form);
      const value = (key, fallback = "Not specified") =>
        String(data.get(key) || "").trim() || fallback;

      const lines = [
        `Assalam-o-Alaikum ${businessName}! I would like to request a booking.`,
        "",
        `Name: ${value("name")}`,
        `Phone: ${value("phone")}`,
        `Service: ${value("service")}`,
        `Pickup: ${value("pickup")}`,
        `Drop-off: ${value("dropoff")}`,
        `Preferred date: ${value("date", "Flexible")}`,
        `Preferred time: ${value("time", "Flexible")}`,
        `Payment preference: ${value("payment")}`,
        `Details: ${value("details")}`,
        "",
        "Please confirm availability, final charges and booking details.",
        "I understand this is a request, not a confirmed booking."
      ];

      if (byId("referencePhoto")?.files?.length) {
        lines.splice(-2, 0, "I have a reference photo and will attach it in this chat.");
      }

      window.open(whatsappUrl(primaryNumber, lines.join("\n")), "_blank", "noopener,noreferrer");
      setStatus(
        "WhatsApp is opening with your details. Review the message and press Send. Attach any reference photo in the chat."
      );
    });
  }
})();
