// ────────────────────────────────────────────────────────────────
//  welcomerdata.js – page-specific instruction data
//  Usage: add <script src="welcomerdata.js"></script> before welcomer.js
// ────────────────────────────────────────────────────────────────

const WELCOMER_DATA = {
  // ─── Tests page ─────────────────────────────────────────────
  tests: {
    title: "Testlar bozori",
    steps: [
      {
        icon: "bi-search",
        title: "Qidiruv",
        description:
          "Yuqoridagi qidiruv maydoniga test nomi yoki fan nomini yozing – natijalar avtomatik yangilanadi.",
      },
      {
        icon: "bi-magic",
        title: "Kerakli testni topish",
        description:
          "“Kerakli testni topish” tugmasi orqali 3 bosqichli yordamchi interfeys – kurs, fan va maqsadni tanlang.",
      },
      {
        icon: "bi-sliders",
        title: "Filtrlar",
        description:
          "“Filtr” tugmasi orqali fanni va maqsadni (YN, Grant, Cases, Mavzular) qo‘lda tanlang.",
      },
      {
        icon: "bi-grid-3x3-gap-fill",
        title: "Ko‘rinish",
        description:
          "Kartochkalar va ro‘yxat ko‘rinishlari orasida almashtiring – o‘zingizga qulay usulda ko‘ring.",
      },
    ],
  },

  // ─── Books page ─────────────────────────────────────────────
  books: {
    title: "Kitoblar",
    steps: [
      {
        icon: "bi-book",
        title: "Kitoblar katalogi",
        description:
          "Barcha tibbiy kitoblar ro‘yxati. Qidiruv va filtrlar orqali kerakli kitobni tez toping.",
      },
      {
        icon: "bi-download",
        title: "Yuklab olish",
        description:
          "Har bir kitob kartasida yuklab olish tugmasi mavjud – PDF yoki EPUB formatida saqlang.",
      },
    ],
  },

  // ─── Preparation session detail page ────────────────────────
  preparation: {
    title: "Sessiya batafsil",
    steps: [
      {
        icon: "bi-info-circle",
        title: "Sessiya haqida",
        description:
          "Yuqori qismda sessiya nomi, imtihon sanasi va qolgan kunlar ko‘rsatilgan. Progress halqasi umumiy aniqlikni aks ettiradi.",
      },
      {
        icon: "bi-grid-3x3-gap-fill",
        title: "Fanlar va testlar",
        description:
          "Har bir fan ostidagi test kartalariga bosib, shu testni boshlashingiz mumkin. Test yakunlangach natijalar avtomatik saqlanadi.",
      },
      {
        icon: "bi-exclamation-triangle-fill",
        title: "Xatolarni ko‘rish",
        description:
          "“Xatolarni ko‘rish” tugmasi orqali ushbu sessiyada xato qilgan barcha savollaringizni ko‘rib chiqishingiz mumkin.",
      },
      {
        icon: "bi-bar-chart-fill",
        title: "Statistika",
        description:
          "Sessiya bo‘yicha batafsil statistika – yechilgan savollar, to‘g‘ri/xato javoblar, aniqlik foizi va boshqalar.",
      },
      {
        icon: "bi-mic",
        title: "Og‘zaki imtihon (oraliq)",
        description:
          "Oraliq nazorat sessiyalarida “Randomizer” orqali savollarni ko‘rib, “Barcha savollar” bo‘limida har bir savolga ovoz yozib qoldirishingiz mumkin. Statistika bo‘limida yozuvlar soni ko‘rsatilgan.",
      },
    ],
  },
};
