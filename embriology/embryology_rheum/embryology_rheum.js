/* Embryology: Rheumatology/Orthopedics & Sports  (UWorld Cases) - 2 cases, ONE bank, English + Uzbek (uz)
   Register:  QBank.register("<subject>", "<topic>", EMBRYOLOGY_RHEUM);
   photo -> question image | img -> ARRAY of explanation images | explanation: [[img:N]] marks where img[N] is shown
   uz -> { q, a, explanation }  (a[] keeps the SAME order as the English a[]; correct is shared) */

window.TEST_QUESTIONS = {
  EMBRYOLOGY_RHEUM: [
    {
      q: "A newborn girl is being evaluated in the nursery. She was born at term via spontaneous vaginal delivery. Examination shows fusion of the third and fourth fingers bilaterally with an extra digit present between these 2 fingers. The remainder of the examination is unremarkable. Laboratory work-up confirms a mutation in HOXD13, a gene involved in regulating craniocaudal body patterning during embryonic development. This gene encodes a protein that directly regulates body patterning by which of the following mechanisms?",
      a: [
        "Alternatively splicing pre-mRNA",
        "Binding DNA transcription regulatory regions",
        "Modulating DNA methylation patterns",
        "Modulating histone acetylation",
        "Selectively initiating mRNA translation",
      ],
      correct: 1,
      explanation:
        "[[img:0]]\n\nThis patient has a mutation in a gene that regulates craniocaudal body patterning in utero, or a homeobox (HOX) gene. HOX genes are highly conserved DNA sequences that regulate positioning of embryonic structures. There is a spatial relationship between the location of the homeobox gene and its expression along the craniocaudal axis: genes located near the 3′ end gene cluster express cranially, and genes located near the 5′ end gene cluster express caudally.\n\nHOX genes code for transcription factors that bind regulatory regions on DNA of target genes involved in the segmental organization of the embryo. By either activating or silencing target gene expression, these transcription factors perform a key function in directing cell differentiation and positioning in early embryogenesis.\n\nMutations in a HOX gene lead to malpositioned body parts. This patient has webbing between digits (syndactyly) and a supernumerary finger in between (polydactyly) due to a mutation in HOXD13, a homeobox gene that regulates limb development.\n\n(Choice A) Alternative splicing of pre-mRNA may occur during aberrant homeobox gene expression, contributing to congenital malformation. However, homeobox genes themselves do not regulate body patterning by alternative splicing.\n\n(Choices C and D) Modulation of DNA methylation or histone acetylation patterns (ie, epigenetic modification) can result in altered gene expression without any change in the DNA sequence. Epigenetic changes can be inherited by daughter cells, and are responsible for normal cellular differentiation and X-chromosome inactivation. Activation of oncogenes via histone acetylation and/or inactivation of tumor suppressor genes by DNA methylation also occur during the development of nearly all cancers. Although homeobox genes influence epigenetic modification, they function directly as transcription factors.\n\n(Choice E) Regulation of protein synthesis at the translational level can occur via phosphorylation of various initiation, elongation, and release factors. Homeobox genes regulate body patterning by targeting transcription, not translation.\n\nEducational objective:\n\nHomeobox genes code for transcription factors that bind regulatory regions on target genes involved in the segmental organization of the embryo along the craniocaudal body axis. Mutations in homeobox genes lead to congenital malformations involving positioning and patterning (eg, synpolydactyly in HOXD13 mutation).",
      img: ["/embriology/embryology_rheum/img_assets/emb_rheum_i001.png"],
      uz: {
        q: "Yangi tug‘ilgan qiz chaqaloq yangi tug‘ilganlar xonasida ko‘rikdan o‘tkazilmoqda. U muddatiga yetib, spontan vaginal yo‘l bilan tug‘ilgan. Ko‘rikda ikkala qo‘lda uchinchi va to‘rtinchi barmoqlarning qo‘shilib ketgani va ular orasida qo‘shimcha barmoq mavjudligi aniqlangan. Qolgan ko‘rik o‘zgarishsiz. Laborator tekshiruv embrional rivojlanish davomida bosh-dum (kraniokaudal) tana tuzilishini boshqarishda ishtirok etuvchi HOXD13 genidagi mutatsiyani tasdiqladi. Ushbu gen kodlaydigan oqsil tana tuzilishini quyidagi mexanizmlardan qaysi biri orqali bevosita boshqaradi?",
        a: [
          "Pre-mRNK ning muqobil splaysingi",
          "DNK ning transkripsiyani boshqaruvchi sohalariga bog‘lanish",
          "DNK metillanish naqshlarini modulyatsiya qilish",
          "Gistonlar atsetillanishini modulyatsiya qilish",
          "mRNK translyatsiyasini tanlab boshlash",
        ],
        explanation:
          "[[img:0]]\n\nUshbu bemorda bachadon ichida bosh-dum tana tuzilishini boshqaruvchi gen, ya’ni gomeobox (HOX) genidagi mutatsiya bor. HOX genlari embrional tuzilmalarning joylashuvini boshqaruvchi yuqori darajada konservativ DNK ketma-ketliklaridir. Gomeobox genining joylashuvi va uning bosh-dum o‘qi bo‘ylab ifodalanishi o‘rtasida fazoviy bog‘liqlik bor: 3′ uchiga yaqin joylashgan genlar kranial, 5′ uchiga yaqin joylashgan genlar esa kaudal ifodalanadi.\n\nHOX genlari embrionning segmentar tashkil topishida ishtirok etuvchi nishon genlar DNK sining boshqaruv sohalariga bog‘lanuvchi transkripsiya omillarini kodlaydi. Nishon genlar ifodalanishini faollashtirish yoki o‘chirish orqali bu transkripsiya omillari erta embriogenezda hujayralar differensiatsiyasi va joylashuvini yo‘naltirishda asosiy vazifani bajaradi.\n\nHOX genidagi mutatsiyalar tana qismlarining noto‘g‘ri joylashuviga olib keladi. Ushbu bemorda oyoq-qo‘l rivojlanishini boshqaruvchi gomeobox geni — HOXD13 dagi mutatsiya tufayli barmoqlar orasida pardalanish (sindaktiliya) va ular orasida qo‘shimcha barmoq (polidaktiliya) bor.\n\n(A variant) Gomeobox genlari ifodalanishi buzilganda pre-mRNK ning muqobil splaysingi sodir bo‘lishi va tug‘ma malformatsiyalarga hissa qo‘shishi mumkin. Biroq gomeobox genlarining o‘zi tana tuzilishini muqobil splaysing orqali boshqarmaydi.\n\n(C va D variantlar) DNK metillanishi yoki gistonlar atsetillanishi naqshlarining modulyatsiyasi (ya’ni epigenetik o‘zgarishlar) DNK ketma-ketligi o‘zgarishisiz gen ifodalanishining o‘zgarishiga olib kelishi mumkin. Epigenetik o‘zgarishlar qiz hujayralarga o‘tishi mumkin va normal hujayra differensiatsiyasi hamda X-xromosoma inaktivatsiyasi uchun mas’uldir. Onkogenlarning gistonlar atsetillanishi orqali faollashuvi va/yoki o‘sma supressor genlarning DNK metillanishi orqali inaktivatsiyasi ham deyarli barcha saraton turlari rivojlanishida kuzatiladi. Gomeobox genlari epigenetik modifikatsiyaga ta’sir qilsa-da, ular bevosita transkripsiya omillari sifatida ishlaydi.\n\n(E variant) Oqsil sintezining translyatsiya darajasida boshqarilishi turli initsiatsiya, elongatsiya va terminatsiya omillarining fosforillanishi orqali sodir bo‘lishi mumkin. Gomeobox genlari tana tuzilishini translyatsiyani emas, transkripsiyani nishonga olish orqali boshqaradi.\n\nO‘quv maqsadi:\n\nGomeobox genlari embrionning bosh-dum tana o‘qi bo‘ylab segmentar tashkil topishida ishtirok etuvchi nishon genlarning boshqaruv sohalariga bog‘lanuvchi transkripsiya omillarini kodlaydi. Gomeobox genlaridagi mutatsiyalar joylashuv va tuzilishga oid tug‘ma malformatsiyalarga (masalan, HOXD13 mutatsiyasida sinpolidaktiliya) olib keladi.",
      },
    },
    {
      q: "A 32-year-old woman experiences double vision, heaviness in her eyelids, and weakness in her hands that worsens throughout the day. Chest imaging reveals an anterior mediastinal mass. Histologic analysis confirms the mass originates from an organ that is embryonically derived from a pharyngeal pouch. Which of the following structures most directly originates from that same pharyngeal pouch?",
      a: [
        "Inferior parathyroid glands",
        "Larynx",
        "Palatine tonsils",
        "Superior parathyroid glands",
        "Thyroid gland",
      ],
      correct: 0,
      explanation:
        "[[img:0]]\n\nThis patient's extraocular (double vision, ptosis) and extremity weakness that worsens throughout the day is characteristic of myasthenia gravis (MG); her anterior mediastinal mass most likely represents an associated thymoma.\n\n[[img:1]]\n\nThe thymus is involved in the differentiation of T cells and contains myoid (muscle-like) cells that express acetylcholine receptors; overgrowths of thymic tissue are associated with autoreactive targeting by T cells and subsequent antibody generation against these receptors; most patients with MG are found to have some form of thymic disease (thymic hyperplasia, thymoma).\n\nEmbryologically, the thymus originates from the third pharyngeal pouch of the pharyngeal apparatus, separated into ventral and dorsal wings. The dorsal wings fuse to form the inferior parathyroid glands, and the ventral wings form the epithelial structure of the thymus.\n\n(Choice B) The majority of the laryngeal cartilages and muscles develop from the fourth and sixth pharyngeal arches.\n\n[[img:2]]\n\n[[img:3]]\n\n(Choice C) The palatine tonsils are derived from the second pharyngeal pouches.\n\n(Choice D) The superior parathyroid glands originate from the dorsal wings of the fourth pouches.\n\n(Choice E) The thyroid gland is composed of two types of cells: follicular cells and parafollicular C cells. The follicular cells originate from an endodermal outpouching of the pharynx between the first and second pouches, becoming the thyroid diverticulum before differentiating into follicular cells. The parafollicular C cells originate from the ventral wings of the fourth pouches, becoming the ultimobranchial body before differentiating into parafollicular C cells.\n\nEducational objective:\n\nMyasthenia gravis is associated with abnormalities of the thymus (eg, thymoma, thymic hyperplasia). The thymus and inferior parathyroid glands arise from the third pharyngeal pouch.",
      img: [
        "/embriology/embryology_rheum/img_assets/emb_rheum_i002.png",
        "/embriology/embryology_rheum/img_assets/emb_rheum_i003.png",
        "/embriology/embryology_rheum/img_assets/emb_rheum_i004.png",
        "/embriology/embryology_rheum/img_assets/emb_rheum_i005.png",
      ],
      uz: {
        q: "32 yoshli ayolda ikkilanib ko‘rish, qovoqlarda og‘irlik hissi va kun davomida kuchayadigan qo‘l kuchsizligi kuzatiladi. Ko‘krak qafasi tasvirlashi oldingi o‘rta ko‘ks oralig‘i massasini ko‘rsatadi. Gistologik tahlil massa embriologik jihatdan faringeal cho‘ntakdan hosil bo‘ladigan a’zodan kelib chiqqanini tasdiqlaydi. Quyidagi tuzilmalardan qaysi biri o‘sha faringeal cho‘ntakdan eng bevosita kelib chiqadi?",
        a: [
          "Pastki qalqonsimon bez oldi bezlari",
          "Hiqildoq",
          "Tanglay murtaklari",
          "Yuqori qalqonsimon bez oldi bezlari",
          "Qalqonsimon bez",
        ],
        explanation:
          "[[img:0]]\n\nUshbu bemordagi ko‘z mushaklari (ikkilanib ko‘rish, ptoz) va oyoq-qo‘l kuchsizligi kun davomida kuchayishi miasteniya gravis (MG) uchun xarakterli; uning oldingi o‘rta ko‘ks oralig‘idagi massasi, ehtimol, bog‘liq timomadir.\n\n[[img:1]]\n\nTimus T-hujayralar differensiatsiyasida ishtirok etadi va atsetilxolin retseptorlarini ifodalovchi miyoid (mushaksimon) hujayralarni saqlaydi; timus to‘qimasining ortiqcha o‘sishi T-hujayralarning autoreaktiv ta’siri va keyinchalik bu retseptorlarga qarshi antitelolar hosil bo‘lishi bilan bog‘liq; MG bor aksariyat bemorlarda timusning qandaydir kasalligi (timus giperplaziyasi, timoma) aniqlanadi.\n\nEmbriologik jihatdan timus faringeal apparatning uchinchi faringeal cho‘ntagidan, ventral va dorsal qanotlarga bo‘lingan holda rivojlanadi. Dorsal qanotlar qo‘shilib pastki qalqonsimon bez oldi bezlarini, ventral qanotlar esa timusning epitelial tuzilmasini hosil qiladi.\n\n(B variant) Hiqildoq tog‘aylari va mushaklarining ko‘pchiligi to‘rtinchi va oltinchi faringeal yoylardan rivojlanadi.\n\n[[img:2]]\n\n[[img:3]]\n\n(C variant) Tanglay murtaklari ikkinchi faringeal cho‘ntaklardan hosil bo‘ladi.\n\n(D variant) Yuqori qalqonsimon bez oldi bezlari to‘rtinchi cho‘ntaklarning dorsal qanotlaridan hosil bo‘ladi.\n\n(E variant) Qalqonsimon bez 2 xil hujayradan iborat: follikulyar hujayralar va parafollikulyar C hujayralar. Follikulyar hujayralar halqumning birinchi va ikkinchi cho‘ntaklar o‘rtasidagi endodermal o‘simtasidan hosil bo‘lib, follikulyar hujayralarga differensiatsiyalanishdan oldin qalqonsimon bez divertikuliga aylanadi. Parafollikulyar C hujayralar to‘rtinchi cho‘ntaklarning ventral qanotlaridan hosil bo‘lib, parafollikulyar C hujayralarga differensiatsiyalanishdan oldin ultimobronxial tanachaga aylanadi.\n\nO‘quv maqsadi:\n\nMiasteniya gravis timus anomaliyalari (masalan, timoma, timus giperplaziyasi) bilan bog‘liq. Timus va pastki qalqonsimon bez oldi bezlari uchinchi faringeal cho‘ntakdan hosil bo‘ladi.",
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
