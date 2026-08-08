// ============================================================
//  PULSE GO — ORALIQ NAZORAT QUESTIONS DATA
//  Og'zaki imtihon uchun savollar va yozma javoblar.
//  Har bir sub'ekt uchun savollar qo'shish oson:
//    { id: 'unikal_id', q: "Savol matni", a: "Javob matni" }
//  id - unikal string (ovozli yozuvlar shu id ga bog'lanadi)
// ============================================================

const ORALIQ_DATA = {
  // ── FIZIOLOGIYA ─────────────────────────────────────────
  physiology: {
    label: "Fiziologiya",
    icon: "bi-heart-pulse",
    bgColor: "#dc2626",
    questions: [
      {
        id: "an_01",
        q: "Buyraklarning perfuzion bosimi pasayishi qaysi modda ishlab chiqarilishiga sabab bo’ladi va uning ta’sir mexanizmi qanday?",
        a: "Buyraklarning perfuzion bosimi pasayganda renin moddasi ishlab chiqariladi. Renin buyrakdagi juxtaglomerulyar hujayralardan chiqariladi va u qon plazmasidagi angiotenzinogenni angiotenzin I ga aylantiradi. Angiotenzin I o’pka kapillyarlarida angiotenzin almashtiruvchi ferment (AAF) orqali angiotenzin II ga aylanadi. Angiotenzin II buyrakdagi Na⁺ reabsorbsiyasini oshiradi, shuningdek, qon tomirlarni toraytiradi va bu natijada qon bosimi oshishiga olib keladi. Shuningdek, angiotenzin II buyrak usti bezlaridan aldosteron ishlab chiqarilishini rag’batlantiradi, bu ham natijada qon hajmini oshirib, qon bosimini ko’taradi.",
      },
      {
        id: "an_02",
        q: "Aldosteronning ta’sir mexanizmini tushuntirib bering?",
        a: "Aldosteron buyraklarning distal naylarida va yig’uvchi naylarda natriy (Na⁺) reabsorbsiyasini kuchaytiradi, bu esa suvning qayta so’rilishini rag’batlantiradi. Bu jarayon natijada qon hajmi oshishiga va arterial qon bosimi ko’tarilishiga olib keladi. Aldosteron uzoq vaqt davomida ishlaydi, chunki u yangi oqsillar sintezini talab qiladi, bu oqsillar esa Na⁺ transportini boshqaradi. Bundan tashqari, aldosteron kaliyning (K⁺) chiqarib yuborilishini oshirib, tanadagi elektrolit balansini saqlashda ishtirok etadi.",
      },
      {
        id: "an_03",
        q: "Organizmdan o’tkir qon ketishida qaysi mexanizmlar ishga tushadi?",
        a: "O’tkir qon ketishida bir nechta himoya mexanizmlari ishga tushadi: Baroretseptor refleksi: Qon bosimining tushishi baroretseptorlar tomonidan seziladi va bu simpatik nerv tizimining faollashuviga olib keladi. Natijada yurak urishi soni oshadi, qon tomirlari torayadi, venoz qaytish kuchayadi va qon bosimi ko’tariladi. Renin-angiotenzin-aldosteron tizimi: Qon bosimi pasayganda renin ishlab chiqarilishi kuchayadi, bu esa angiotenzin II ni hosil qiladi. Angiotenzin II qon tomirlarni toraytirib, bosimni oshiradi, shuningdek, aldosteron ishlab chiqarilishini rag’batlantirib, qon hajmini tiklaydi. ADG (vazopressin): Qon bosimi va qon hajmi pasayganda gipofizdan vazopressin chiqariladi, bu gormon buyraklarda suvning qayta so’rilishini oshiradi va qon tomirlarni toraytiradi, natijada qon bosimi normallashtiriladi.",
      },
      {
        id: "an_04",
        q: "Yurak elektr o’tkazuvchi yo’llarni ketma - ketligini aytib bering?",
        a: "Yurakni o’tkazuvchi tizimi elektr impulslarni yurak bo’ylab o’tkazib, yurak qisqarishini boshqaradi. Yurak avtomatizmida asosiy ritm boshlovchi tugun bu sinus tuguni (SA tugun). SA tuguni o’ng bo’lmachada joylashgan bo’lib, yurak urishining asosiy ritmini belgilaydi. SA tugunidan chiqqan impulslar bo’lmachalar qisqarishini boshqaradi va bu impulslar AV tugun orqali qorinchalarga o’tadi. Qo'zg'alishni yurak toʻqimasi boʻylab tarqalishi uchun zarur vaqtni aks ettiradi. Harakat potensialining cho'qqisiga erishish davomida ichkariga yo'nalgan oqim kattaligiga bog'liq. Ichkariga oqim qancha katta bo'lsa, o'tkazuvchanlik tezligini ham shuncha yuqori bo'ladi. Eng yuqori tezlik Purkinye sistemasiga tegishli. Eng past tezlik AV tugunga tegishli (EKG da PR interval sifatida ko'rish mumkin), bu qorinchalar qisqarishidan oldin to'lib olishi uchun imkon beradi. Agar AV tugun orqali o'tkazuvchanlik tezligi ortadigan bo'lsa, qorinchalar yetarli qon bilan to'la olmaydi.",
      },
      {
        id: "an_05",
        q: "Musbat va manfiy xronotrop ta’sirlar nima va parasimpatik ta’sir uni qanday o’zgartiradi?",
        a: "Musbat xronotrop ta’sirlar yurak urish sonini oshiradi, manfiy xronotrop ta’sirlar esa yurak urish sonini sekinlashtiradi. Parasimpatik nerv tizimi (vagus nervi orqali) manfiy xronotrop ta’sir ko’rsatib, yurak urishini sekinlashtiradi. Vagus nervi asosan sinus tuguniga ta’sir qilib, yurakning avtomatik ritmini susaytiradi. Xronotrop ta'sir yurak urish tezligiga o'zgartirish kiritadi. Manfiy xronotrop ta'sir SA tugundan hosil bo'lgan impulsni kamaytirish orqali yurak urish sonini kamaytiradi. Musbat xronotrop ta'sir SA tugundan hosil bo'lgan impulsni ko'paytirish orqali yurak urish sonini oshiradi. SA tugun, bo'lmacha, AV tugunlar parasimpatik vagal innervatsiya bilan ta'minlangan, lekin qorinchalar bundan mustasno. Ularning neyromediatori atsetilxolin (AX) boʻlib muskarinik retseptorlar orqali ta'sir qiladi. Manfiy xronotrop ta'sir Faza 4 dagi depolyarizatsiyani kamaytirish orqali yurak urish sonini kamaytiradi. Vaqt birligi ichida harakat potensiallarining hosil bo'lishi kamayadi, chunki potensialning bo'sag'aga erishishi sekinroq. Manfiy xronotrop ta'sir SA tugunda 4-faza depolyarizatsiya jarayoni uchun javobgar bo'lgan ichkariga yo'nalgan Na kanallari, If, kamayishi orqali amalga oshadi.",
      },
      {
        id: "an_06",
        q: "Musbat va manfiy dromotrop ta’sirlar nima va parasimpatik ta’sir uni qanday o’zgartiradi?",
        a: "Musbat dromotrop ta’sirlar yurak impulslarining o’tish tezligini oshiradi, manfiy dromotrop ta’sirlar esa yurak impulslarining o’tishini sekinlashtiradi. Parasimpatik nerv tizimi manfiy dromotrop ta’sir ko’rsatib, yurakning AV tuguni orqali impulslarning o’tishini sekinlashtiradi, bu esa qorinchalarning qisqarishini kechiktiradi. Dromotrop ta'sir o'tkazuvchanlik tezligida o'zgarishni hosil qiladi, asosan, AV tugunda. Manfiy dromotrop ta'sir AV tugun orqali o'tkazuvchanlik tezligini kamaytiradi. Harakat potensialini bo'lmachalardan qorinchalarga yetkazilishini sekinlashtiradi va PR intervalini uzaytiradi. Musbat dromotrop ta'sir AV tugun orqali o'tkazuvchanlik tezligini hamda harakat potensialini bo'lmachalardan qorinchalarga yetkazilishini tezlashtiradi va PR intervalini qisqartiradi. Manfiy dromotrop ta'sir AV tugun orqali o'tkazuvchanlik tezligini kamaytiradi. Harakat potensiallari bo'lmachalardan qorinchalarga o'tish jarayoni sekinlashadi. PR intervalni uzaytiradi. Manfiy dromotropik ta'sirning mexanizmi ichkariga yo'nalgan Ca²⁺ kanallari orqali ionlarning kirishining kamayishi va tashqariga yo'nalgan K⁺ kanallari orqali ionlarni chiqishining ortishi hisoblanadi.",
      },
      {
        id: "an_07",
        q: "Musbat va manfiy xronotrop ta’sirlar nima va simpatik ta’sir uni qanday o’zgartiradi?",
        a: "Simpatik nerv tizimi musbat xronotrop ta’sir ko’rsatadi, ya’ni yurak urish sonini oshiradi. Bu ta’sir adrenalin va noradrenalin orqali amalga oshiriladi, ular sinus tuguni va yurakning boshqa qismlariga ta’sir qilib, yurakning qisqarish tezligini oshiradi. Xronotrop ta'sir yurak urish tezligiga o'zgartirish kiritadi. Manfiy xronotrop ta'sir SA tugundan hosil bo'lgan impulsni kamaytirish orqali yurak urish sonini kamaytiradi. Musbat xronotrop ta'sir SA tugundan hosil bo'lgan impulsni ko'paytirish orqali yurak urish sonini oshiradi. Yurak urishi va uning o'tkazuvchanlik tezligiga simpatik nerv sistemasining ta'siri. Norepinefrin neyromediator bo'lib β retseptorlari orqali o'z ta'sirini ko'rsatadi. Musbat xronotrop ta'sir Faza 4 dagi depolyarizatsiya miqdorini oshirish orqali yurak urishlar sonini oshiradi. Vaqt birligi ichida ko'proq harakat potensiali hosil boʻladi, chunki potensialning bo'sag'aga yetishishi tezroq hamda ko'proq sodir bo'ladi. Musbat xronotrop ta'sirning mexanizmi SA tugunda faza 4 depolyarizatsiya jarayoni uchun javobgar bo'lgan, ichkariga yo'nalgan If, Na⁺ kanallari orqali ionlarning kirishining ortishi hisoblanadi.",
      },
      {
        id: "an_08",
        q: "AAF ingibitor preparatlari ta’sir mexanizmini aytib bering?",
        a: "AAF (angiotenzin ayiruvchi ferment) ingibitorlari (masalan, kaptopril) angiotenzin I ning angiotenzin II ga aylanishini bloklaydi. Angiotenzin II qon tomirlarni toraytiradi va UPQni oshirib, qon bosimini ko‘taradi. AAF ingibitorlari angiotenzin II ni kamaytirish orqali qon bosimini tushiradi. Bundan tashqari, AAF ingibitorlari natriy va suvning buyrak orqali chiqarilishini ham oshirib, qon hajmini kamaytiradi, bu ham qon bosimini tushirishda muhim ahamiyatga ega.",
      },
      {
        id: "an_09",
        q: "Chap qorinchadan aortaga qonning chiqarib berilishi yurak siklining qaysi bosqichlarida kechadi va ushbu sikl amalga oshish mexanizmi qanday?",
        a: "Chap qorinchadan aortaga qon chiqarilishi ikki fazada amalga oshadi: tezkor qon haydash va sekin qon haydash fazalari. Tezkor qon haydash fazasi davomida qorinchadagi bosim maksimal darajaga yetib, aortal klapan ochiladi va qon aortaga chiqariladi. Keyin sekin qon haydash fazasi boshlanadi, bu bosqichda aortadagi bosim pasaya boshlaydi va qon oqimi sekinlashadi. Bu jarayon T tishchasining boshlanishiga to‘g‘ri keladi, ya’ni qorinchalar repolyarizatsiya qilayotgan paytda yuz beradi.",
      },
      {
        id: "an_10",
        q: "Tomirlarda qon bosimi tushushini nazorat qiluvchi tez mexanizm qanday ishlaydi?",
        a: "Qon bosimi pasayganda baroretseptor refleksi tezda ishga tushadi. Karotid sinus va aorta ravog’ida joylashgan baroretseptorlar arterial bosimning pasayishini sezib, simpatik nerv tizimiga impuls yuboradi. Bu impuls yurak urishini oshiradi va qon tomirlarni toraytiradi, natijada qon bosimi oshadi.",
      },
    ],
  },
};

// ── Helper: get oraliq subject data by id ──────────────────
function getOraliqData(subjectId) {
  return ORALIQ_DATA[subjectId] || null;
}

// ── Helper: get questions for a subject ───────────────────
function getOraliqQuestions(subjectId) {
  return (ORALIQ_DATA[subjectId] || {}).questions || [];
}

// ── Helper: get single question by id ─────────────────────
function getOraliqQuestion(subjectId, questionId) {
  const qs = getOraliqQuestions(subjectId);
  return qs.find((q) => q.id === questionId) || null;
}

// ── Shuffle helper ─────────────────────────────────────────
function shuffleOraliq(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ── Voice storage helpers ──────────────────────────────────
const VOICE_STORAGE_KEY = "pulsego_oraliq_voices";

function getVoiceStorage() {
  try {
    const raw = localStorage.getItem(VOICE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveVoiceStorage(data) {
  try {
    localStorage.setItem(VOICE_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Voice storage full or error:", e);
    return false;
  }
  return true;
}

function getVoicesForQuestion(sessionId, questionId) {
  const store = getVoiceStorage();
  return (store[sessionId] || {})[questionId] || [];
}

function saveVoiceForQuestion(sessionId, questionId, voiceEntry) {
  const store = getVoiceStorage();
  if (!store[sessionId]) store[sessionId] = {};
  if (!store[sessionId][questionId]) store[sessionId][questionId] = [];
  store[sessionId][questionId].push(voiceEntry);
  return saveVoiceStorage(store);
}

function deleteVoice(sessionId, questionId, voiceId) {
  const store = getVoiceStorage();
  if (store[sessionId] && store[sessionId][questionId]) {
    store[sessionId][questionId] = store[sessionId][questionId].filter(
      (v) => v.id !== voiceId,
    );
    saveVoiceStorage(store);
  }
}

function getSessionVoiceStats(sessionId) {
  const store = getVoiceStorage();
  const sessionStore = store[sessionId] || {};
  const questionsWithVoice = Object.keys(sessionStore).filter(
    (qId) => sessionStore[qId].length > 0,
  );
  const totalVoices = questionsWithVoice.reduce(
    (a, qId) => a + sessionStore[qId].length,
    0,
  );
  return { questionsWithVoice: questionsWithVoice.length, totalVoices };
}

function clearAllSessionVoices(sessionId) {
  const store = getVoiceStorage();
  delete store[sessionId];
  saveVoiceStorage(store);
}
