// ============================================
// PulseGo Billing Plans Data
// /billing/data.js
// ============================================

export const billingPlans = [
  {
    id: "free",
    name: "Free",
    badge: "BOSHLANG‘ICH",
    price: 0,
    currency: "UZS",
    period: "doimiy",
    description: "PulseGo platformasidan foydalanishni boshlash uchun.",
    popular: false,

    features: ["Bepul testlar", "Test natijalarini ko‘rish"],

    buttonText: "Hozirgi tarif",
    telegram: false,
  },

  {
    id: "pro_monthly",
    name: "Pro Monthly",
    badge: "PRO",
    price: 99000,
    currency: "UZS",
    period: "oyiga",
    description: "Barcha Pro testlar va premium imkoniyatlardan foydalaning.",
    popular: true,

    features: [
      "Barcha Pro testlar",
      "Premium testlar",
      "Barcha fanlar",
      "Yangi testlarga birinchi kirish",
      "Xatolar tahlili",
      "Premium o‘quv materiallari",
    ],

    buttonText: "Sotib olish",
    telegram: true,

    telegramUsername: "broinibek",
  },

  {
    id: "pro_3months",
    name: "Pro 3 Months",
    badge: "ENG FOYDALI",
    price: 249000,
    currency: "UZS",
    period: "3 oyga",
    description: "3 oy davomida PulseGo Pro imkoniyatlaridan foydalaning.",
    popular: false,

    features: [
      "Barcha Pro testlar",
      "Premium testlar",
      "Barcha fanlar",
      "Yangi testlarga birinchi kirish",
      "Xatolar tahlili",
      "Premium o‘quv materiallari",
    ],

    buttonText: "Sotib olish",
    telegram: true,

    telegramUsername: "broinibek",
  },

  {
    id: "pro_yearly",
    name: "Pro Yearly",
    badge: "MAXIMUM",
    price: 799000,
    currency: "UZS",
    period: "yiliga",
    description: "Bir yil davomida to‘liq PulseGo Pro tajribasi.",
    popular: false,

    features: [
      "Barcha Pro testlar",
      "Premium testlar",
      "Barcha fanlar",
      "Yangi testlarga birinchi kirish",
      "Xatolar tahlili",
      "Premium o‘quv materiallari",
      "12 oy Pro access",
    ],

    buttonText: "Sotib olish",
    telegram: true,

    telegramUsername: "broinibek",
  },
];
