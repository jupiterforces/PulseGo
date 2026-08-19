// ============================================================
//  ⚙️  message.js – Professional Global Message Ticker
// ============================================================

(function () {
  "use strict";

  const CONFIG = {
    containerId: "messageView",
    storageKey: "messageTickerClosed",
    closeBtnText: "✕",
    closeBtnSize: "28px",
    closeBtnColor: "rgba(255,255,255,0.7)",
    closeBtnHoverColor: "#ffffff",
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: "15px",
    fontWeight: "500",
    letterSpacing: "0.3px",
    padding: "12px 20px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    zIndex: "999",
    transitionDuration: "0.5s",
  };

  const DATA = window.MESSAGE_DATA || {
    messages: ["Assalamu alaykum, bugungi kuningiz xayrli bo'lsin"],
    speed: 55,
    pauseBetween: 1800,
    // backgroundColor: "linear-gradient(135deg, #0f172a, #1e293b)",
    textColor: "#ffffff",
  };

  const messages = DATA.messages || [];
  const speed = DATA.speed || 55;
  const pauseBetween = DATA.pauseBetween || 1800;
  const bgColor =
    DATA.backgroundColor || "linear-gradient(135deg, #817d7d, #809cf0)";
  const textColor = DATA.textColor || "#fa6464";

  let currentIndex = 0;
  let isClosed = false;
  let animationId = null;
  let position = 0;
  let containerWidth = 0;
  let textWidth = 0;
  let container = null;
  let textEl = null;
  let wrapperEl = null;
  let isAnimating = false;
  let startPos = 0;
  let endPos = 0;
  let duration = 0;
  let animStartTime = 0;
  let waitTimeout = null;

  const containerEl = document.getElementById(CONFIG.containerId);
  if (!containerEl) {
    console.warn("[MessageTicker] #messageView topilmadi");
    return;
  }

  if (localStorage.getItem(CONFIG.storageKey) === "true") {
    isClosed = true;
    containerEl.style.display = "none";
    return;
  }

  function buildTicker() {
    containerEl.innerHTML = "";

    const outer = document.createElement("div");
    outer.className = "mt-outer";
    Object.assign(outer.style, {
      display: "block",
      width: "100%",
      background: bgColor,
      borderRadius: CONFIG.borderRadius,
      boxShadow: CONFIG.boxShadow,
      padding: CONFIG.padding,
      position: "relative",
      overflow: "hidden",
      zIndex: CONFIG.zIndex,
      transition: `all ${CONFIG.transitionDuration} ease`,
      fontFamily: CONFIG.fontFamily,
      boxSizing: "border-box",
      marginBottom: "16px",
    });

    const inner = document.createElement("div");
    Object.assign(inner.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      gap: "16px",
      boxSizing: "border-box",
    });

    wrapperEl = document.createElement("div");
    Object.assign(wrapperEl.style, {
      flex: "1",
      overflow: "hidden",
      position: "relative",
      height: "auto",
      minHeight: "28px",
      boxSizing: "border-box",
    });

    textEl = document.createElement("span");
    Object.assign(textEl.style, {
      display: "inline-block",
      whiteSpace: "nowrap",
      color: textColor,
      fontSize: CONFIG.fontSize,
      fontWeight: CONFIG.fontWeight,
      letterSpacing: CONFIG.letterSpacing,
      lineHeight: "1.6",
      position: "relative",
      willChange: "transform",
      boxSizing: "border-box",
      paddingRight: "20px",
    });
    textEl.textContent = messages[0] || "Xabar yo‘q";
    wrapperEl.appendChild(textEl);

    const closeBtn = document.createElement("button");
    closeBtn.className = "mt-close-btn";
    closeBtn.textContent = CONFIG.closeBtnText;
    Object.assign(closeBtn.style, {
      flexShrink: "0",
      width: CONFIG.closeBtnSize,
      height: CONFIG.closeBtnSize,
      borderRadius: "50%",
      border: "none",
      background: "rgba(255,255,255,0.12)",
      color: CONFIG.closeBtnColor,
      fontSize: "18px",
      lineHeight: "1",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.25s, color 0.25s, transform 0.25s",
      padding: "0",
      userSelect: "none",
      fontWeight: "300",
      backdropFilter: "blur(4px)",
    });
    closeBtn.addEventListener("mouseenter", () => {
      closeBtn.style.background = "rgba(255,255,255,0.25)";
      closeBtn.style.color = CONFIG.closeBtnHoverColor;
      closeBtn.style.transform = "scale(1.08)";
    });
    closeBtn.addEventListener("mouseleave", () => {
      closeBtn.style.background = "rgba(255,255,255,0.12)";
      closeBtn.style.color = CONFIG.closeBtnColor;
      closeBtn.style.transform = "scale(1)";
    });
    closeBtn.addEventListener("click", closeTicker);

    inner.appendChild(wrapperEl);
    inner.appendChild(closeBtn);
    outer.appendChild(inner);
    containerEl.appendChild(outer);
    container = outer;

    requestAnimationFrame(() => {
      updateDimensions();
      if (messages.length > 0) startTicker();
    });
  }

  function updateDimensions() {
    if (!wrapperEl || !textEl) return;
    containerWidth = wrapperEl.clientWidth || 600;
    textWidth = textEl.scrollWidth || 200;
  }

  function startTicker() {
    if (isClosed || messages.length === 0) return;
    if (isAnimating) return;

    const msg = messages[currentIndex] || "Xabar";
    textEl.textContent = msg;
    void textEl.offsetWidth;
    updateDimensions();

    startPos = containerWidth;
    endPos = -textWidth;
    const distance = startPos - endPos;
    duration = distance / speed;
    if (duration < 0.3) duration = 0.3;

    position = startPos;
    textEl.style.transform = `translateX(${position}px)`;

    isAnimating = true;
    animStartTime = performance.now();
    if (animationId) cancelAnimationFrame(animationId);
    animateStep(animStartTime);
  }

  function animateStep(timestamp) {
    if (isClosed || !isAnimating) {
      isAnimating = false;
      return;
    }
    const elapsed = (timestamp - animStartTime) / 1000;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOut(progress);
    const currentPos = startPos - (startPos - endPos) * eased;
    position = currentPos;
    textEl.style.transform = `translateX(${currentPos}px)`;

    if (progress < 1) {
      animationId = requestAnimationFrame(animateStep);
    } else {
      isAnimating = false;
      textEl.style.transform = `translateX(${endPos}px)`;
      if (waitTimeout) clearTimeout(waitTimeout);
      waitTimeout = setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        startTicker();
      }, pauseBetween);
    }
  }

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function closeTicker() {
    if (isClosed) return;
    isClosed = true;
    isAnimating = false;
    if (animationId) cancelAnimationFrame(animationId);
    if (waitTimeout) clearTimeout(waitTimeout);
    localStorage.setItem(CONFIG.storageKey, "true");
    if (container) {
      container.style.opacity = "0";
      container.style.transform = "translateY(-12px) scale(0.98)";
      setTimeout(() => {
        container.style.display = "none";
        containerEl.style.display = "none";
      }, 400);
    } else {
      containerEl.style.display = "none";
    }
  }

  window.reopenMessageTicker = function () {
    localStorage.removeItem(CONFIG.storageKey);
    isClosed = false;
    containerEl.style.display = "";
    if (container) {
      container.style.display = "";
      container.style.opacity = "1";
      container.style.transform = "";
    }
    buildTicker();
  };

  let resizeTimeout = null;
  function handleResize() {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (!isClosed && isAnimating) {
        isAnimating = false;
        if (animationId) cancelAnimationFrame(animationId);
        updateDimensions();
        if (messages.length > 0 && !isClosed) {
          isAnimating = false;
          if (waitTimeout) clearTimeout(waitTimeout);
          startTicker();
        }
      } else if (!isClosed) {
        updateDimensions();
      }
    }, 200);
  }

  buildTicker();
  window.addEventListener("resize", handleResize);

  window.messageTicker = {
    close: closeTicker,
    reopen: window.reopenMessageTicker,
    next: function () {
      if (isClosed) return;
      if (isAnimating) {
        isAnimating = false;
        if (animationId) cancelAnimationFrame(animationId);
      }
      if (waitTimeout) clearTimeout(waitTimeout);
      currentIndex = (currentIndex + 1) % messages.length;
      startTicker();
    },
    getCurrentMessage: () => messages[currentIndex] || "",
    isClosed: () => isClosed,
  };

  console.log("[MessageTicker] ✅ Ishlayapti", messages.length, "ta xabar");
})();
