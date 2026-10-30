/*
 * Arslan Express — site configuration
 * -----------------------------------
 * Everything in this file is public: it is served to every visitor.
 * Never place OTPs, passwords, wallet PINs, bank logins or CNIC data here.
 *
 * Phone numbers use E.164 format without "+", spaces or dashes:
 * country code 92 (Pakistan) followed by the 10-digit local number.
 */
window.ARSLAN_CONFIG = {
  businessName: "Arslan Express",
  tagline: "Your Needs. Our Responsibility.",

  /* Primary contact — receives every booking request. */
  whatsappNumber: "923394946993",
  callNumber: "923394946993",

  /* Secondary contact — shown in the contact section. */
  alternateWhatsappNumber: "923493436993",

  serviceArea: "Lahore, Pakistan",

  /* Displayed as opening hours. Set both to "" to hide the line. */
  openingHours: "09:00",
  closingHours: "21:00",

  currency: "PKR",

  /* Short, friendly message used when no booking details are present. */
  greeting:
    "Assalam-o-Alaikum Arslan Express. I would like to ask about your services in Lahore.",

  /* Optional public links. Leave empty ("") to hide the link. */
  facebookUrl: "",
  instagramUrl: ""
};
