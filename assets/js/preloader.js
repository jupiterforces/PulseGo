(() => {
  if (window.__pulseGoPreloader) return;
  window.__pulseGoPreloader = true;

  const style = document.createElement("style");

  style.textContent = `
        #pg-preloader {
            position: fixed;
            inset: 0;
            z-index: 99999999;
            background: #061b49;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
            visibility: visible;
            transition: opacity .6s ease, visibility .6s ease;
        }

        #pg-preloader.hide {
            opacity: 0;
            visibility: hidden;
        }

        #pg-preloader svg {
            width: min(84vw, 590px);
            overflow: visible;
        }

        /* Pulse dots */
        #pg-preloader .dot {
            opacity: 0;
            transform: scale(0);
            transform-box: fill-box;
            transform-origin: center;
            animation: pg-dot .45s cubic-bezier(.2,.8,.3,1.4) forwards;
        }

        #pg-preloader .d1 { animation-delay: .15s; }
        #pg-preloader .d2 { animation-delay: 1s; }

        /* Pulse bars: grow from bottom */
        #pg-preloader .bar {
            transform: scaleY(0);
            transform-box: fill-box;
            transform-origin: center bottom;
            animation: pg-bar .7s cubic-bezier(.2,.8,.3,1.2) forwards;
        }

        #pg-preloader .b1 { animation-delay: .3s; }
        #pg-preloader .b2 { animation-delay: .5s; }
        #pg-preloader .b3 { animation-delay: .7s; }

        /* Logo text */
        #pg-preloader .word {
            clip-path: inset(0 100% 0 0);
            animation: pg-word 1s cubic-bezier(.2,.7,.2,1) 1.1s forwards;
        }

        @keyframes pg-dot {
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes pg-bar {
            to {
                transform: scaleY(1);
            }
        }

        @keyframes pg-word {
            to {
                clip-path: inset(0 0 0 0);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            #pg-preloader * {
                animation-duration: .01ms !important;
                animation-delay: 0ms !important;
            }
        }
    `;

  document.head.appendChild(style);

  const loader = document.createElement("div");
  loader.id = "pg-preloader";

  loader.innerHTML = `
        <svg viewBox="0 0 640 190">

            <defs>
                <linearGradient id="pg-gradient"
                    x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#b9d8ff"/>
                    <stop offset="100%" stop-color="#5798f2"/>
                </linearGradient>
            </defs>

            <g>
                <!-- Left blue dot -->
                <circle class="dot d1"
                    cx="38" cy="105" r="12.5"
                    fill="#2468f2"/>

                <!-- First short bar -->
                <rect class="bar b1"
                    x="62" y="55"
                    width="25" height="65"
                    rx="12.5"
                    fill="#b9d8ff"/>

                <!-- Middle tall bar -->
                <rect class="bar b2"
                    x="100" y="25"
                    width="25" height="125"
                    rx="12.5"
                    fill="url(#pg-gradient)"/>

                <!-- Third medium bar -->
                <rect class="bar b3"
                    x="138" y="80"
                    width="25" height="75"
                    rx="12.5"
                    fill="#b9d8ff"/>

                <!-- Right blue dot -->
                <circle class="dot d2"
                    cx="188" cy="105" r="12.5"
                    fill="#2468f2"/>
            </g>

            <!-- Pulse Go wordmark -->
            <text class="word"
                x="220" y="124"
                fill="url(#pg-gradient)"
                font-family="Inter, Arial, sans-serif"
                font-size="82"
                font-weight="700"
                letter-spacing="-3">
                Pulse Go
            </text>

        </svg>
    `;

  document.documentElement.appendChild(loader);

  const start = performance.now();
  let finished = false;

  function finish() {
    if (finished) return;
    finished = true;

    const remaining = Math.max(0, 2600 - (performance.now() - start));

    setTimeout(() => {
      loader.classList.add("hide");

      setTimeout(() => {
        loader.remove();
        style.remove();
      }, 650);
    }, remaining);
  }

  if (document.readyState === "complete") {
    finish();
  } else {
    window.addEventListener("load", finish, { once: true });
    setTimeout(finish, 9100);
  }
})();
