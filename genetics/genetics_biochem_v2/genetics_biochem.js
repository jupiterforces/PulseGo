/* Genetics: Biochemistry (General Principles) (UWorld Cases) - 1 case, ONE bank, English + Uzbek (uz)
   Register:  QBank.register("genetics", "BIOCHEM_GENERAL", GENETICS_BIOCHEM);
   photo -> question image | img -> ARRAY of explanation images | explanation: [[img:N]] marks where img[N] is shown
   uz -> { q, a, explanation }  (a[] keeps the SAME order as the English a[]; correct is shared) */
window.TEST_QUESTIONS = {
  GENETICS_BIOCHEM: [
    {
      q: "A mutation in a non-coding DNA sequence is believed to affect expression of the gene coding for a specific fetal enzyme. Liver and bone marrow cells from the fetus and his parents are obtained.\n\nWhich of the following is the best method to determine if this gene is being transcribed in cultures of the isolated cells?",
      a: [
        "Northern blot",
        "Western blot",
        "Southern blot",
        "Southwestern blot",
        "Enzyme-linked immunosorbent assay",
      ],
      correct: 0,
      explanation:
        '[[img:0]]\n\nThe Southern, Western, Northern and Southwestern blot procedures are techniques used to analyze and identify DNA fragments, proteins, mRNA, and DNA-bound proteins, respectively. The best method for determining whether a gene is undergoing <b>transcription</b> is to analyze for the presence of its <b>mRNA</b> using a <b>Northern blot</b>. In the case described above, Northern blot analysis of each of the cell culture samples can determine if mRNA corresponding to the gene of interest is being transcribed.\n\nAll of the "blot" tests rely on the same basic techniques. First, the components of the unknown sample – DNA for Southern blots, mRNA for Northern blots, protein for Western blots, and DNA-bound protein for Southwestern blots – are separated by size and charge via gel electrophoresis. The resultant bands are then blotted onto a nitrocellulose membrane and incubated with a labeled hybridization probe or antibody to identify the specific DNA fragment, mRNA molecule or protein of interest.\n\n(Choice B) A complete failure of gene expression would lead to a failure to produce the protein, which can be detected by Western blotting. However, the question is asking how to determine if the gene is being transcribed (genes may be transcribed but not properly expressed if there is a problem with protein translation). As transcription refers to the production of mRNA from a DNA template, a test that detects specific mRNA sequences (Northern blot) would be most appropriate.\n\n(Choices C and D) This patient\'s mutation in a non-coding DNA sequence (likely affecting a promoter or enhancer region) is resulting in decreased gene expression. A Southern or Southwestern blot could potentially be used to detect the mutated DNA sequence and assess for transcription factor binding. However, the degree of transcription of the affected gene is better assessed through direct detection of its associated mRNA.\n\n(Choice E) ELISA (enzyme-linked immunosorbent assay) is a test commonly employed to measure the amount of a protein in body fluids. It can be quantitative, for example, to measure plasma insulin levels.\n\nEducational objective:\n\nNorthern blots detect target mRNA in a sample and can be used to assess the degree of gene transcription.',
      img: ["/genetics/genetics_biochem_v2/img_assets/gen_biochem_i001.jpg"],
      uz: {
        q: "Kodlanmaydigan DNK ketma-ketligidagi mutatsiya ma’lum bir homila fermentini kodlovchi gen ekspressiyasiga ta’sir qiladi deb taxmin qilinmoqda. Homila va uning ota-onasidan jigar hamda suyak ko‘migi hujayralari olindi.\n\nAjratib olingan hujayralar kulturasida ushbu gen transkripsiya qilinayotganligini aniqlash uchun eng yaxshi usul qaysi?",
        a: [
          "Northern blot",
          "Western blot",
          "Southern blot",
          "Southwestern blot",
          "Ferment bilan bog‘langan immunosorbent tahlil (ELISA)",
        ],
        explanation:
          '[[img:0]]\n\nSouthern, Western, Northern va Southwestern blot usullari mos ravishda DNK fragmentlari, oqsillar, mRNK (iRNK) va DNKga bog‘langan oqsillarni tahlil qilish va aniqlash uchun qo‘llaniladi. Gen <b>transkripsiya</b> qilinayotganligini aniqlashning eng yaxshi usuli — uning <b>mRNK</b> (iRNK) mavjudligini <b>Northern blot</b> yordamida tekshirishdir. Yuqorida tavsiflangan holatda har bir hujayra kultura namunasini Northern blot bilan tahlil qilish orqali qiziqilayotgan genga mos mRNK sintezlanayotganligi yoki yo‘qligi aniqlanadi.\n\nBarcha "blot" usullari bir xil asosiy texnikaga tayanadi. Avval noma’lum namunaning tarkibiy qismlari — Southern blot uchun DNK, Northern blot uchun mRNK, Western blot uchun oqsil va Southwestern blot uchun DNKga bog‘langan oqsil — gel elektroforez yordamida o‘lchami va zaryadiga ko‘ra ajratiladi. Hosildor bo‘laklar nitrotsellyuloza membranaga ko‘chiriladi va maxsus DNK fragmenti, mRNK molekulasi yoki oqsilni aniqlash uchun nishonlangan gibridizatsiya probi yoki antitelalar bilan inkubatsiya qilinadi.\n\n(B variant) Gen ekspressiyasining to‘liq buzilishi oqsil ishlab chiqarilmasligiga olib keladi, bu esa Western blot orqali aniqlanishi mumkin. Biroq savolda gen transkripsiya qilinayotganligini qanday aniqlash so‘ralmoqda (genlar transkripsiya qilinishi, lekin oqsil sintezi bosqichida muammo bo‘lsa, to‘g‘ri ekspressiya qilinmasligi mumkin). Transkripsiya DNK qolipidan mRNK hosil bo‘lishini anglatgani sababli, maxsus mRNK ketma-ketliklarini aniqlaydigan usul (Northern blot) eng mos keladi.\n\n(C va D variantlar) Bemorda kodlanmaydigan DNK ketma-ketligidagi mutatsiya (ehtimol, promoter yoki enhancer sohasiga ta’sir qiluvchi) gen ekspressiyasining pasayishiga olib kelmoqda. Southern yoki Southwestern blot mutatsiyaga uchragan DNK ketma-ketligini aniqlash va transkripsion faktorlar bog‘lanishini baholash uchun ishlatilishi mumkin. Biroq zararlangan genning transkripsiya darajasi uning mRNKsini bevosita aniqlash orqali yaxshiroq baholanadi.\n\n(E variant) ELISA (ferment bilan bog‘langan immunosorbent tahlil) tana suyuqliklaridagi oqsil miqdorini o‘lchash uchun keng qo‘llaniladigan usuldir. U miqdoriy bo‘lishi mumkin, masalan, plazmadagi insulin darajasini o‘lchashda.\n\nO‘quv maqsadi:\n\nNorthern blot namuna ichidagi maqsadli mRNKni (iRNKni) aniqlaydi va gen transkripsiyasi darajasini baholash uchun ishlatilishi mumkin.',
      },
    },
  ],
};

if (window.QBank && window.TEST_QUESTIONS) {
  Object.keys(window.TEST_QUESTIONS).forEach((key) => {
    if (Array.isArray(window.TEST_QUESTIONS[key])) {
      QBank.register("genetics", key, window.TEST_QUESTIONS[key]);
    }
  });
}
