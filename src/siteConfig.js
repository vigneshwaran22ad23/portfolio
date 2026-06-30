// Central place for contact details used across Hero, Contact, and Footer.
// Update PHONE_NUMBER once here and it updates the call button, WhatsApp
// button, and the Contact section everywhere.

// Use full international format, digits only, no spaces or symbols, e.g. "919876543210"
export const PHONE_NUMBER_INTL = '916379684287'

// Display format shown to the user
export const PHONE_NUMBER_DISPLAY = '+91 63796 84287'

export const EMAIL = 'vigneshrajasekar59@gmail.com'

// Opens Gmail's web compose window directly in the browser, so clicking the
// email icon works even if the visitor's OS has no default mail app set.
export const GMAIL_COMPOSE_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`

export const GITHUB_URL = 'https://github.com/vigneshwaran22ad23'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/vignesh-waran-a887692a2'
export const LEETCODE_URL = 'https://leetcode.com/'

export const CALL_LINK = `tel:+${PHONE_NUMBER_INTL}`
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER_INTL}`

// EmailJS config — used by the Contact form to send messages directly to EMAIL
// without relying on the visitor's device having a mail app configured.
// Get these from https://www.emailjs.com after creating a Service + Template.
export const EMAILJS_SERVICE_ID = 'service_rk1mt0j'
export const EMAILJS_TEMPLATE_ID = 'template_mdconvo'
export const EMAILJS_PUBLIC_KEY = 'NC7F0plOkNw_w1FLH'
