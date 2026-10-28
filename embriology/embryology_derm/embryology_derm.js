/* Embryology: Dermatology  (UWorld Cases) - 1 cases, ONE bank, English + Uzbek (uz)
   Register:  QBank.register("<subject>", "<topic>", EMBRYOLOGY_DERM);
   photo -> question image | img -> ARRAY of explanation images | explanation: [[img:N]] marks where img[N] is shown
   uz -> { q, a, explanation }  (a[] keeps the SAME order as the English a[]; correct is shared) */
window.TEST_QUESTIONS = {
  EMBRYOLOGY_DERM: [
    {
      q: "A 45-year-old woman is brought to the emergency department after a generalized tonic-clonic seizure. She reports no prior history of seizures, but she has noticed right arm weakness over the last week. Her family history is significant for skin cancer in her mother. Physical examination shows a skin lesion measuring 13 mm on her back, as shown in the image below. The cells responsible for this patient's lesion most likely share a common embryologic origin with which of the following?",
      a: [
        "Adrenal cortex",
        "Anterior pituitary",
        "Dorsal root ganglia",
        "Pancreas",
        "Sweat glands",
      ],
      correct: 2,
      explanation:
        "[[img:0]]\n\nThis patient with a family history of skin cancer has a skin lesion with features characteristic of melanoma (eg, asymmetry, color variability, diameter ≥6 mm). In addition, her recent onset of right upper extremity weakness and generalized tonic-clonic seizure are concerning for spread to the central nervous system, a common site of melanoma metastases.\n\nMelanoma is a malignancy of melanocytes, which are derivatives of neural crest cells. Neural crest cells are multipotent, migratory cells that originate in the ectoderm and gives rise to a diverse cell lineage. In addition to melanocytes, neural ganglia are also derived from neural crest cells and include dorsal root ganglia and sympathetic and parasympathetic ganglia. Other important structures that arise from neural crest cells are the adrenal medulla and the bones and cartilage of the face and neck (ie, branchial arch derivatives).\n\n(Choice A) The mesoderm gives rise to the adrenal cortex as well as most bones, muscles, blood vessels, and visceral tissue.\n\n(Choices B and E) The surface ectoderm gives rise to the anterior pituitary as well as the epidermis and its appendages (eg, sweat glands).\n\n(Choice D) The endoderm gives rise to structures derived from the inner lining of the primitive gut tube. These include the gastrointestinal tract, liver and biliary tree, and pancreas.\n\nEducational objective:\n\nMelanoma is a malignancy of melanocytes, which are embryologically derived from neural crest cells. Neural crest cells originate from the ectoderm and give rise to a diverse cell lineage, including neural ganglia (eg, dorsal root ganglia, sympathetic/parasympathetic ganglia) and the adrenal medulla.",
      photo: "/embriology/embryology_derm/photo_assets/emb_derm_p001.png",
      img: ["/embriology/embryology_derm/img_assets/emb_derm_i001.png"],
      uz: {
        q: "45 yoshli ayol umumlashgan tonik-klonik tutqanoq xurujidan keyin shoshilinch yordam bo‘limiga olib kelindi. U ilgari tutqanoq bo‘lmaganini aytadi, lekin so‘nggi hafta davomida o‘ng qo‘lida kuchsizlik sezgan. Oilaviy anamnezida onasida teri saratoni bor. Fizikal ko‘rikda uning orqasida 13 mm li teri o‘zgarishi aniqlangan, u quyidagi rasmda ko‘rsatilgan. Ushbu bemor teri o‘zgarishiga javobgar hujayralar, ehtimol, quyidagilardan qaysi biri bilan umumiy embrional kelib chiqishga ega?",
        a: [
          "Buyrak usti bezi po‘stlog‘i",
          "Oldingi gipofiz",
          "Orqa ildiz gangliyalari (dorsal root ganglia)",
          "Oshqozon osti bezi",
          "Ter bezlari",
        ],
        explanation:
          "[[img:0]]\n\nOilaviy anamnezida teri saratoni bo‘lgan ushbu bemorning teri o‘zgarishi melanomaga xos belgilarga ega (masalan, asimmetriya, rang xilma-xilligi, diametri ≥6 mm). Bundan tashqari, yaqinda boshlangan o‘ng qo‘l kuchsizligi va umumlashgan tonik-klonik tutqanoq markaziy nerv tizimiga metastaz berishidan dalolat beradi, bu melanoma metastazlarining tez-tez uchraydigan joyidir.\n\nMelanoma — melanositlarning xavfli o‘smasi; melanositlar neyral krest hujayralarining hosilalaridir. Neyral krest hujayralari ektodermadan kelib chiqadigan, turli hujayra qatorlarini beruvchi multipotent, migratsiyalanuvchi hujayralardir. Melanositlardan tashqari, nerv gangliyalari ham neyral krest hujayralaridan hosil bo‘ladi va ularga orqa ildiz gangliyalari hamda simpatik va parasimpatik gangliyalar kiradi. Neyral krestdan hosil bo‘ladigan boshqa muhim tuzilmalar: buyrak usti bezi mag‘iz qismi hamda yuz va bo‘yin suyaklari va tog‘aylari (ya’ni jabra yoylari hosilalari).\n\n(A variant) Mezoderma buyrak usti bezi po‘stlog‘ini, shuningdek, ko‘pchilik suyaklar, muskullar, qon tomirlar va visseral to‘qimalarni hosil qiladi.\n\n(B va E variantlar) Sirt ektodermasi oldingi gipofizni, shuningdek, epidermis va uning hosilalarini (masalan, ter bezlari) hosil qiladi.\n\n(D variant) Endoderma ibtidoiy ichak nayining ichki qoplamidan kelib chiqadigan tuzilmalarni hosil qiladi. Ularga oshqozon-ichak trakti, jigar va o‘t yo‘llari hamda oshqozon osti bezi kiradi.\n\nO‘quv maqsadi:\n\nMelanoma — melanositlarning xavfli o‘smasi; melanositlar embriologik jihatdan neyral krest hujayralaridan kelib chiqadi. Neyral krest hujayralari ektodermadan paydo bo‘lib, turli hujayra qatorlarini, jumladan nerv gangliyalarini (masalan, orqa ildiz gangliyalari, simpatik/parasimpatik gangliyalar) va buyrak usti bezi mag‘iz qismini beradi.",
      },
    },
  ],
};

if (window.QBank && window.TEST_QUESTIONS) {
  Object.keys(window.TEST_QUESTIONS).forEach((key) => {
    // subjectId must match GLOBAL_QBANK — adjust if needed
    if (Array.isArray(window.TEST_QUESTIONS[key])) {
      QBank.register("embryology", key, window.TEST_QUESTIONS[key]);
    }
  });
}
