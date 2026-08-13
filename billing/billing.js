// ============================================
// PulseGo Billing
// /billing/billing.js
// ============================================

import { billingPlans } from "./data.js";

// ============================================
// TELEGRAM
// ============================================

const TELEGRAM_USERNAME = "broinibek";

// ============================================
// FORMAT PRICE
// ============================================

function formatPrice(price) {
  if (price === 0) {
    return "0";
  }

  return new Intl.NumberFormat("uz-UZ").format(price);
}

// ============================================
// BUY PLAN
// ============================================

function buyPlan(plan) {
  if (!plan || !plan.telegram) return;

  const message =
    `Assalamu alaykum!%0A%0A` +
    `PulseGo Pro tarifini sotib olmoqchiman.%0A%0A` +
    `📦 Tarif: ${plan.name}%0A` +
    `💰 Narxi: ${formatPrice(plan.price)} UZS%0A` +
    `🆔 Plan ID: ${plan.id}`;

  const telegramUrl = `https://t.me/${plan.telegramUsername || TELEGRAM_USERNAME}?text=${message}`;

  window.location.href = telegramUrl;
}

// ============================================
// FEATURE
// ============================================

function createFeature(feature) {
  const li = document.createElement("li");

  li.innerHTML = `
        <span class="billing-dot"></span>
        <span>${feature}</span>
    `;

  return li;
}

// ============================================
// PLAN CARD
// ============================================

function createPlanCard(plan) {
  const col = document.createElement("div");

  col.className = "col-12 col-md-6 col-xl-3";
  col.dataset.planId = plan.id;
  // Orange cards
  const isOrange = plan.id === "pro_3months" || plan.id === "pro_yearly";

  // VIP card
  const isVip = plan.id === "pro_yearly";

  let cardClasses = "billing-card";

  if (isOrange) {
    cardClasses += " billing-card-orange";
  }

  if (isVip) {
    cardClasses += " billing-card-vip";
  }

  const badge = plan.badge || "PRO";

  const price = formatPrice(plan.price);

  const currency = plan.price === 0 ? "" : "UZS";

  const buttonText = plan.telegram ? "Sotib olish" : "Hozirgi tarif";

  col.innerHTML = `

        <div class="${cardClasses}">

            <div class="billing-card-top">

                <h2>
                    ${plan.name}
                </h2>

                <div class="billing-badge">
                    ${badge}
                </div>

            </div>


            <div class="billing-price-row">

                <div class="billing-price">
                    ${price}
                </div>

                <div>

                    ${
                      currency
                        ? `<div class="billing-currency">${currency}</div>`
                        : ""
                    }

                    <div class="billing-period">
                        ${plan.period}
                    </div>

                </div>

            </div>


            <div class="billing-description">
                ${plan.description}
            </div>


            <ul class="billing-features"></ul>


            <button
                type="button"
                class="billing-buy-btn"
            >
                ${buttonText}
            </button>

        </div>
    `;

  // ========================================
  // FEATURES
  // ========================================

  const featureList = col.querySelector(".billing-features");

  plan.features.forEach((feature) => {
    featureList.appendChild(createFeature(feature));
  });

  // ========================================
  // BUTTON
  // ========================================

  const button = col.querySelector(".billing-buy-btn");

  if (plan.telegram) {
    button.addEventListener("click", () => buyPlan(plan));
  } else {
    button.disabled = true;

    button.style.cursor = "default";
    button.style.opacity = "0.65";
  }

  return col;
}

// ============================================
// RENDER
// ============================================

function renderPlans() {
  const container = document.getElementById("billingPlans");

  if (!container) {
    console.error("❌ #billingPlans topilmadi");
    return;
  }

  container.innerHTML = "";

  billingPlans.forEach((plan) => {
    const card = createPlanCard(plan);
    container.appendChild(card);
  });

  console.log("✅ PulseGo Billing loaded");

  focusRequestedPlan();
}

function focusRequestedPlan() {
  const params = new URLSearchParams(window.location.search);

  const planId = params.get("plan");

  if (!planId) return;

  const planCard = document.querySelector(`[data-plan-id="${planId}"]`);

  if (!planCard) {
    console.warn("⚠️ Plan topilmadi:", planId);
    return;
  }

  setTimeout(() => {
    planCard.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    const card = planCard.querySelector(".billing-card");

    if (card) {
      card.classList.add("billing-card-focused");

      setTimeout(() => {
        card.classList.remove("billing-card-focused");
      }, 2500);
    }
  }, 150);
}
// ============================================
// INIT
// ============================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderPlans);
} else {
  renderPlans();
}
