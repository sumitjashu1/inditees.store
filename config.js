/* INDITEES store settings. Edit only the values inside quotes. */
window.INDITEES_CONFIG = {
  brand: 'INDITEES',
  domain: 'inditees.store',
  // REQUIRED: Enter your WhatsApp number with country code, digits only.
  // Example format for India: '919876543210' (replace with YOUR number).
  whatsappNumber: '',
  instagramUrl: 'https://www.instagram.com/inditees.shop/',
  instagramHandle: '@inditees.shop',
  // Optional: edit prices below. Leave null for "Ask for price".
  products: [
    { id: 'round', name: 'Everyday Round Neck', category: 'essentials', fabric: '180 GSM · Regular Fit', price: null, image: 'assets/round-neck.svg', colors: ['Black','White','Navy Blue','Maroon','Bottle Green'], sizes: ['S','M','L','XL','XXL'], tag: 'EVERYDAY ESSENTIAL' },
    { id: 'oversized', name: 'Oversized French Terry', category: 'premium', fabric: '240 GSM · Relaxed Fit', price: null, image: 'assets/oversized.svg', colors: ['Off White','Black','Chocolate Brown','Olive Green'], sizes: ['S','M','L','XL','XXL'], tag: 'PREMIUM PICK' },
    { id: 'polo', name: 'Classic Polo T-Shirt', category: 'essentials', fabric: 'Polo Collar · Smart Casual', price: null, image: 'assets/polo.svg', colors: ['Black','White','Navy Blue','Bottle Green','Maroon'], sizes: ['S','M','L','XL','XXL'], tag: 'SMART CASUAL' },
    { id: 'custom', name: 'Custom Printed T-Shirt', category: 'custom', fabric: 'Your Design · Your Identity', price: null, image: 'assets/custom.svg', colors: ['Black','White','Off White','Navy Blue'], sizes: ['S','M','L','XL','XXL'], tag: 'MADE FOR YOU' }
  ]
};
