function openSidebar() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("sidebarOverlay").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebarOverlay").classList.remove("show");
  document.body.style.overflow = "";
}
/* =========================================================
       PULSEIMI BOOK DATABASE
       Edit ONLY this array. The card and modal are universal.
       ========================================================= */
const booksData = [
  {
    id: "brs-anatomy-01",
    course: "1-kurs",
    title: "BRS Gross Anatomiya",
    author: "BRS",
    subject: "Anatomy",
    type: "O'zbekcha",
    pages: 484,
    year: 2024,
    description:
      "TOPOGRAFIK ANATOMIYA BRS GROSS ANATOMY SAKKIZINCHI NASHRI TARJIMASI",
    cover: "#126e6c",
    coverImage: "./assets/img/anatomy.png",
    file: "",
    pdfLink: "https://t.me/impuls_revise/272",
    seller: "Semester | PulseGo",
    featured: true,
  },
  {
    id: "hujayra-01",
    course: "1-kurs",
    title: "Hujayra Biologiyasi",
    author: "Medical Reference",
    subject: "Cell Biology",
    type: "PDF",
    pages: 117,
    year: 2023,
    description: "Sitologiya | Molekulyar biologiya | Genetika",
    cover: "#0f7c78",
    coverImage: "./assets/img/cellbio.png",
    file: "",
    pdfLink: "https://t.me/impuls_revise/273",
    seller: "Semester | PulseGo",
  },
  {
    id: "embryo-01",
    course: "1-kurs",
    title: "BRS Embriologiya",
    author: "BRS",
    subject: "Embryology",
    type: "PDF",
    pages: 250,
    year: 2023,
    description:
      "Embrional rivojlanish jarayonlarini bosqichma-bosqich tushunish",
    cover: "#eb702b",
    coverImage: "./assets/img/embryology.png",
    file: "",
    pdfLink: "https://t.me/impuls_revise/271",
    seller: "Semester | PulseGo",

    featured: true,
  },
  {
    id: "physio-01",
    course: "2-kurs",
    title: "BRS Fiziologiya",
    author: "BRS",
    subject: "Physiology",
    type: "PDF",
    pages: 298,
    year: 2023,
    description: "Seventh edition",
    cover: "#d96325",
    coverImage: "./assets/img/physiology.png",
    file: "",
    pdfLink: "https://t.me/impuls_revise/274",
    seller: "Semester | PulseGo",
  },
  {
    id: "biochem-01",
    course: "2-kurs",
    title: "BRS Biokimyo",
    author: "BRS",
    subject: "Biochemistry",
    type: "PDF",
    pages: 432,
    year: 2023,
    description: "Biochemistry | Molecular Biology | Genetics",
    cover: "#176f70",
    coverImage: "./assets/img/biochemistry.png",
    file: "",
    pdfLink: "https://t.me/impuls_revise/275",
    seller: "Semester | PulseGo",
  },
  {
    id: "brs-anatomy-02",
    course: "1-kurs",
    title: "BRS Gross Anatomy",
    author: "BRS",
    subject: "Anatomy",
    type: "English",
    pages: 484,
    year: 2024,
    description: "Eighth edition of BRS Gross Anatomy",
    cover: "#126e6c",
    coverImage: "./assets/img/anatomy.png",
    file: "",
    pdfLink: "https://t.me/impuls_revise/275",
    seller: "Semester | PulseGo",
    featured: true,
  },
];

const params = new URLSearchParams(window.location.search);

const state = {
  course: params.get("course") || "All",
  subject: params.get("subject") || "All",
  search: params.get("search") || "",
  sort: params.get("sort") || "default",
};
const $ = (id) => document.getElementById(id);
function esc(v) {
  return String(v ?? "").replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[m],
  );
}
function courses() {
  return [...new Set(booksData.map((x) => x.course).filter(Boolean))].sort(
    (a, b) => a.localeCompare(b, undefined, { numeric: true }),
  );
}
function subjects() {
  const src =
    state.course === "All"
      ? booksData
      : booksData.filter((x) => x.course === state.course);
  return [...new Set(src.map((x) => x.subject))].sort();
}
function renderCourses() {
  $("courseFilter").innerHTML = ["All", ...courses()]
    .map(
      (x) =>
        `<button class="${state.course === x ? "active" : ""}" data-course="${esc(x)}">${x === "All" ? "Barcha kurslar" : esc(x)}</button>`,
    )
    .join("");
  $("courseFilter")
    .querySelectorAll("button")
    .forEach(
      (b) =>
        (b.onclick = () => {
          state.course = b.dataset.course;
          state.subject = "All";
          renderCourses();
          renderSubjects();
          renderBooks();
        }),
    );
}
function renderSubjects() {
  $("subjectFilter").innerHTML = ["All", ...subjects()]
    .map(
      (x) =>
        `<button class="${state.subject === x ? "active" : ""}" data-subject="${esc(x)}">${x === "All" ? "Barchasi" : esc(x)}</button>`,
    )
    .join("");
  $("subjectFilter")
    .querySelectorAll("button")
    .forEach(
      (b) =>
        (b.onclick = () => {
          state.subject = b.dataset.subject;
          renderSubjects();
          renderBooks();
        }),
    );
}
function filtered() {
  let r = [...booksData],
    q = state.search.trim().toLowerCase();
  if (q)
    r = r.filter((b) =>
      [b.id, b.title, b.author, b.subject, b.course, b.description, b.type]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  if (state.course !== "All") r = r.filter((b) => b.course === state.course);
  if (state.subject !== "All") r = r.filter((b) => b.subject === state.subject);
  if (state.sort === "az") r.sort((a, b) => a.title.localeCompare(b.title));
  if (state.sort === "za") r.sort((a, b) => b.title.localeCompare(a.title));
  if (state.sort === "newest") r.sort((a, b) => (b.year || 0) - (a.year || 0));
  if (state.sort === "default")
    r.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  return r;
}

/* ONE universal card generator */
function createBookCard(b) {
  const el = document.createElement("article");
  el.className = "card";

  const cover = b.coverImage
    ? `background-image:url('${esc(b.coverImage)}');background-size:contain;background-repeat:no-repeat;background-position:center;background-color:#f1f5f4`
    : `--cover:${esc(b.cover || "#126e6c")}`;

  el.innerHTML = `
    <div class="cover" style="${cover}">
      <span class="coverLabel">${esc(b.coverLabel || b.subject)}</span>
    </div>

    <div class="body">
      <div class="meta">
        <span class="subject">${esc(b.subject)}</span>
        <span class="subject">${esc(b.type || "Book")}</span>
      </div>

      <h3 class="title">${esc(b.title)}</h3>

      <p class="author">
        ${esc(b.author || "PulseIMI Library")}
      </p>

      <p class="desc">
        ${esc(b.description || "")}
      </p>

      <div class="bottom">
        <span class="info">
          ${b.pages ? esc(b.pages) + " bet" : ""}
          ${b.year ? " · " + esc(b.year) : ""}
        </span>

        <button class="read" type="button">
          Batafsil
        </button>
      </div>
    </div>
  `;

  el.onclick = (e) => {
    if (!e.target.closest("button")) openBookModal(b);
  };

  el.querySelector(".read").onclick = () => openBookModal(b);

  return el;
}
function renderBooks() {
  const list = filtered(),
    grid = $("grid");
  grid.querySelectorAll(".card").forEach((x) => x.remove());
  list.forEach((b) => grid.insertBefore(createBookCard(b), $("empty")));
  $("count").textContent = list.length + " ta kitob";
  $("empty").classList.toggle("show", !list.length);
}
function telegramLink(b) {
  if (b.buyLink) return b.buyLink;
  const msg = `Assalamu alaykum, men "${b.title}" kitobini sotib olmoqchiman`;
  return `https://t.me/${("broinibek" || "broinibek").replace(/^@/, "")}?text=${encodeURIComponent(msg)}`;
}
function openBookModal(b) {
  $("bookModal")?.remove();

  const pdf = b.pdfLink || b.file || "#",
    buy = telegramLink(b);

  const modal = document.createElement("div");
  modal.id = "bookModal";
  modal.className = "modal";

  const cover = b.coverImage
    ? `background-image:url('${esc(b.coverImage)}');background-size:contain;background-repeat:no-repeat;background-position:center;background-color:#f1f5f4`
    : `--modalCover:${esc(b.cover || "#126e6c")}`;

  const courses = Array.isArray(b.course)
    ? b.course
    : b.course
      ? [b.course]
      : [];

  modal.innerHTML = `
    <div class="panel" role="dialog" aria-modal="true">

      <div class="modalCover" style="${cover}"></div>

      <div class="modalBody">

        <div class="modalTop">
          <div>
            <h2>${esc(b.title)}</h2>
            <p class="modalAuthor">
              ${esc(b.author || "PulseIMI Library")}
            </p>
          </div>

          <button class="close" aria-label="Yopish">×</button>
        </div>

        <div class="badges">

          ${
            courses.length
              ? courses
                  .map(
                    (course) =>
                      `<span class="badge">${esc(
                        course.replace("-", " "),
                      )}</span>`,
                  )
                  .join("")
              : ""
          }

          ${b.subject ? `<span class="badge">${esc(b.subject)}</span>` : ""}

          ${b.type ? `<span class="badge">${esc(b.type)}</span>` : ""}

          ${b.pages ? `<span class="badge">${esc(b.pages)} bet</span>` : ""}

        </div>

        <p class="modalDesc">
          ${esc(
            b.description ||
              "Ushbu kitob haqida qo‘shimcha ma’lumot mavjud emas.",
          )}
        </p>

        <div class="bookId">
          Book ID: ${esc(b.id)}
        </div>

        <div class="actions">

          <a
            class="action pdf"
            href="${esc(pdf)}"
            target="_blank"
            rel="noopener"
          >
            ↓ &nbsp; PDF yuklash
          </a>

          <a
            class="action buy"
            href="${esc(buy)}"
            target="_blank"
            rel="noopener"
          >
            Telegram orqali sotib olish
          </a>

        </div>

        <p class="hint">
          Sotib olish tugmasi Telegram'da kitob nomi va Book ID bilan
          tayyor xabar ochadi.
        </p>

      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const close = () => modal.remove();

  modal.querySelector(".close").onclick = close;

  modal.onclick = (e) => {
    if (e.target === modal) close();
  };

  const key = (e) => {
    if (e.key === "Escape") {
      close();
      document.removeEventListener("keydown", key);
    }
  };

  document.addEventListener("keydown", key);
}
$("search").oninput = (e) => {
  state.search = e.target.value;
  renderBooks();
};
$("sort").onchange = (e) => {
  state.sort = e.target.value;
  renderBooks();
};
$("totalBooks").textContent = booksData.length;
$("totalSubjects").textContent = new Set(booksData.map((b) => b.subject)).size;
renderCourses();
renderSubjects();
renderBooks();
