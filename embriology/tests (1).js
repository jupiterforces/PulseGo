// Testlar docx fayldan (testsifat.docx) so'zma-so'z ko'chirildi.
// correct: 0 = A, 1 = B, 2 = C, 3 = D, 4 = E ...
// Diqqat: ba'zi savollarda asl faylda "+" belgisi (to'g'ri javob belgisi) qo'yilmagan edi.
// Bunday joylarda correct: null qilib qoldirildi (pastda // TO'G'RI JAVOB BELGILANMAGAN izohi bilan).

const m1 = [
  {
    q: "Primordial germ cells indifferent gonad sohaga migratsiya qiladi va SRY geni yo'qligi sababli indifferent gonadning tuxumdonga aylanishiga olib keladi bundan tashqari yana qaysi omil tuxumdonlar rivojlanishida faol rol o'ynaydi?",
    a: ["XX xromosoma genlari", "SRY oqsili", "testis determining factor", "AMH", "MIF"],
    correct: 0,
  },
  {
    q: "Tuxumdonda primordial germ cells, primary oocytega aylananishi to'g'ri ko'rsatilgan qatorni toping.",
    a: [
      "primordial germ cells(MITOZ)=> oogoniya(MEYOZ I)=> birlamchi ovotsit",
      "primordial germ cells(MEYOZ)=> oogoniya(MEYOZ I)=> primary oocyte",
      "dastlabki jinsiy hujayralar (MITOZ)=> birlamchi ovotsit (MEYOZ I)=> oogoniya",
      "primordial germ cells(MITOZ l)=> oogoniya(MEYOZ ll)=> primary oocyte",
      "dastlabki jinsiy hujayralar (MEYOZ l)=> oogoniya(MEYOZ ll)=> birlamchi ovotsit",
    ],
    correct: 0,
  },
  {
    q: "Ayollik ichki organlari shakllangandan so'ng tuxumdon ligamentiga va bachadonning yumaloq ligamentiga aylanuvchi tuzilma qiz homilada nima vazifa bajaradi?",
    a: [
      "Tuxumdonlarni labioskrotal sohaga yopishtiradi",
      "Yuqori qismi degeneratsiyaga uchraydi, pastki qismi scrotal ligamentga aylanadi",
      "Fallopiy naylari, bachadon, bachadon bo'yni (cervix) va vaginaning yuqori qismiga aylanadi",
      "Ikkala paramezonefrik kanallar qo'shilish vaqtida o'rtada vaqtinchalik uterovaginal to'siq hosil qiladi",
      "Rivojlanishning birinchi trimesterida vaqtinchalik buyrak vazifasini bajaradi",
    ],
    correct: 0,
  },
  {
    q: "Paramezonefrik nayga ta'sir etib, uni fallopiy naylari, bachadon, bachadon bo'yni (cervix) va vaginaning yuqori qismiga aylanishini ta'minlab beradigan gormon qayerdan ishlab chiqariladi?",
    a: [
      "Onadan organizmidan o'tadi va platsentadan",
      "Embrionning gipofiz bezi va onaning buyrak usti bezidan",
      "Mullerian duct va paramezanefrik naydan",
      "Oogoniya va primary oocytedan",
      "Wolfian duct va leydig hujayralaridan",
    ],
    correct: 0,
  },
  {
    q: "Paramezonefrik kanallarning kaudal qismlari o'zaro qo'shilish vaqtida o'rtada vaqtinchalik qanday tuzilma hosil qiladi.",
    a: ["Uterovaginal to'siq", "Gubernakulum", "Mullerian duct", "Klitor", "Korteks"],
    correct: 0,
  },
  {
    q: "SRY geni yo'q sharoitda Ovary, ixtisoslashmagan (befarq) jinsiy bezlarning qaysi qismidan hosil bo'ladi?",
    a: ["Korteks", "Medulla", "Vesicula", "Uvula", "Mullerian duct"],
    correct: 0,
  },
  {
    q: "Scrotumni rivojlantiradigan gormonning testosterondan sintezlanishida qatnashadigan factor?",
    a: ["5α-reduktaza", "Digidrotestosteron", "SRY geni", "Anti Mullerian Hormone", "5ᵦREDUCTAZA"],
    correct: 0,
  },
  {
    q: "Labioscrotal swellingni tashqi ayollik jinsiy a'zolariga aylantiradigan gormon embrionning qaysi organidan sintezlanadi.",
    a: ["Ovary", "Labia minor", "Labia major", "Scrotum", "Uterus"],
    correct: 0,
  },
  {
    q: "Leydig hujayralari tomonidan sintezlangan gormon, 5α-reduktaza ta'sirida o'zgarib, qaysi organni hosil qilishda muhim ahamiyatga ega?",
    a: ["Penis", "Epididymis", "Eyaculator canal", "Testes", "Glans clitoris"],
    correct: 0,
  },
  {
    q: "Genital do'mboq (genital tubercle), urogenital burma (urogenital fold) va labioskrotal shish (labioscrotal swelling) tuzilmalari rivojlanishning nechanchi haftasida differensiatsiyalashishni boshlaydi?",
    a: ["9-haftasida", "1-6 haftalarida", "12-haftadan boshlab", "20-haftaga kelib", "25-kunda"],
    correct: 0,
  },
  {
    q: "To'g'ri variantni tanlang.",
    a: [
      "Genital tubercle → klitor; urogenital fold → labia minor; labioscrotal swellings → labia major",
      "genital tubercle→ glans penis, corpus cavernosum, spongiosum; urogenital fold→ klitor",
      "penile urethra→ penile urethra; urogenital fold→penisning uretral qismi; labioscrotal swelling → scrotum",
      "Genital tubercle → labia minor; urogenital fold → klitor; labioscrotal swellings → labia major",
      "Genital tubercle → corpus cavernosum; urogenital fold → klitor; labioscrotal swellings → scrotum",
    ],
    correct: 0,
  },
  {
    q: "ikkala jinsda hali differensiatsiyalanmagan, bir xil 3 ta tuzilmalar qaysi javobda to'gri berilgan?",
    a: [
      "labioscrotal swelling, genital tubercle, urogenital fold",
      "genital tubercle, penile urethra, glans penis",
      "labioscrotal swelling, genital tubercle, corpus cavernosum",
      "labioscrotal swelling, genital tubercle, urogenital sinus",
      "genital tubercle, urogenital fold, spongiosum",
    ],
    correct: 0,
  },
  {
    q: "rasmda berilganlardan qaysi biri Glandula Cowper?",
    a: ["Bulbouretral bezlar", "Urug'don bezlari", "Epididymis glandulasi", "Prostate bezi", "Urug'pufakchasi"],
    correct: 0,
  },
  {
    q: "Urogenital sinusni vaqtinchalik qismlarini aniqlang.",
    a: [
      "Fallus, chanoq, pufakcha",
      "Bulbouretral bezlar, glandula Cowper, prostate",
      "Katta vestibulyar bezlar, Bartolin bezlar",
      "Uretral bezlar, parauretral bezlar, Skene bezlar",
      "Siydik pufagi, urethra, ayollarda distal vagina",
    ],
    correct: 0,
  },
  {
    q: "Jins farqlanishida erkak homilada urogenital sinusdan hosil bo'ladigan organlar qaysilar?",
    a: [
      "Bulbouretral bezlar (glandula Cowper), prostate",
      "Katta vestibulyar bezlar g.Bartolin, Uretral-parauretral bezlar(g.Skene)",
      "genital tubercle, urogenital fold, labioscrotal swelling",
      "Fallus, chanoq, pufakcha",
      "Spongiosum, corpus cavernosum, scrotum",
    ],
    correct: 0,
  },
  {
    q: "Differensiallashmagan 3 tuzilmaning ayol homilada tegishli jinsiy organlarga aylanishini homiladan ishlab chiqariladigan qaysi gormon ta'minlab beradi?",
    a: ["Esterogen", "AMH", "5α-reduktaza", "Digidrotestosteron", "Giperglikozillangan hCG"],
    correct: 0,
  },
  {
    q: "Ayol homilaning 9-haftasida urogenital fold nimaga aylanadi?",
    a: ["labia minor ga", "labioscrotal swellings ga", "clitor ga", "genital tubercle ga", "labia major ga"],
    correct: 0,
  },
  {
    q: "labia major qaysi tuzilmadan hosil bo'ladi?",
    a: ["labioscrotal swellings dan", "labia minor dan", "clitor dan", "genital tubercle dan", "spongiosum dan"],
    correct: 0,
  },
  {
    q: "Glans clitoris qaysi tuzilmadan rivojlanadi?",
    a: ["genital tubercle", "klitor", "urogenital fold", "labioscrotal swelling", "urogenital sinus"],
    correct: 0,
  },
  {
    q: "Labioscrotal swelling rivojlanishning nechinchi haftasida differensiatsiyalashishni boshlaydi?",
    a: ["9-hafta", "27-hafta", "25-hafta", "1-6-hafta", "20-hafta"],
    correct: 0,
  },
  {
    q: "Homilada Y xromosomadagi jinsni aniqlovchi gen yo'q bo'lsa, ixtisoslashmagan jinsiy bezlarning korteksidan nima rivojlanadi?",
    a: ["Ovaria", "Uterus", "Gubernaculum", "Leydig", "Penis"],
    correct: 0,
  },
  {
    q: "Parauretral bezlar qaysi tuzilmadan rivojlanadi?",
    a: ["Urogenital sinus", "urogenital fold", "labioskrotal shish", "urogenital burma", "gubernaculum"],
    correct: 0,
  },
  {
    q: "Kavernoz tana qaysi gormon ta'siri tufayli hosil bo'ladi?",
    a: ["Digidrotestosteron", "Estrogen", "Testosterone", "5α-reduktaza", "Anti-Mullerian inhibiting hormone"],
    correct: 0,
  },
  {
    q: "Vestibular bulbs qaysi jinsdan va qaysi tuzilmadan hosil bo'ladi?",
    a: [
      "Ayol jinsi, genital tubercle",
      "Ayol jinsi, labioskrotal shish",
      "Erkak jinsi, genital do'mboq",
      "Jinsi befarq, genital do'mboq",
      "Erkak jinsi, labioscrotal swellings",
    ],
    correct: 0,
  },
  {
    q: "Skene bezlari qaysilar?",
    a: ["Katta vestibular bezlar", "Cowper bezlari", "Bulbouretral bezlar", "Prostate bezi", "Uretral va parauretral bezlar"],
    correct: 0,
  },
  {
    q: "Embrional davrda qizlik parda qayerda shakllanadi?",
    a: [
      "Myuller yo'li urogenital sinusga birlashish joyida",
      "siydik pufagining uretraga quyilish joyida",
      "tilning oldingi ⅔ qismi va orqa ⅓ qismining qo'shilgan joyida",
      "kontrast modda rektumga o'tadigan torayish joyida",
      "umumiy o't yo'lining o'n ikki barmoqli ichakka kirish joyida",
    ],
    correct: 0,
  },
  {
    q: "Vaginal ochilishdan ungacha bo'lgan masofa qancha bo'ladi.",
    a: ["2-3 sm", "2-3 mm", "2-3 dm"],
    correct: 0,
  },
  {
    q: "Homiladorlik haftalarini jarayonlar bilan moslang. a)7-haftadan, b)20-hafta, c)1-6 haftalar, d)12-haftadan; 1.embrionni jinsiy jihatdan farqlab bo'lmaydi, 2.boshlab embrion fenotipik farqlanishni boshlaydi, 3.tashqi jinsiy a'zolar ko'rinishni boshlaydi, 4.embrionning jinsi to'liq farqlanadi",
    a: ["a-2, b-4, c-1, d-3", "a-1, b-2, c-3, d-4", "a-4, b-3, c-2, d-1", "d-1, c-2, b-3, a-4", "d-2, c-4, b-1, a-3"],
    correct: 0,
  },
  {
    q: "Perforatsiyasiz, Kribriform, Fimbriyali kabi holatiga ko'ra turlicha bo'lib Myuller yo'li urogenital sinusga birlashish joyida shakllanadi. Ta'rifga tegishli javobni toping.",
    a: ["Qizlik parda", "Mezonefrik qoldiqlar", "Mullerian agenezi", "Bicornuate", "Gipospadiya"],
    correct: 0,
  },
  {
    q: "Ushbu qizlik pardoning Turini aniqlang.",
    a: ["To'rsimon", "Annular", "Perforatsiyasiz", "Chala to'siqli", "Fimbriyali"],
    correct: 0,
  },
  {
    q: "Mezonefrik qoldiqlardan rivojlanadigan kistalarni hosil bo'lish joyini to'g'ri berilgan javob qaysi? a) mezonefrik nay qoldiqlari, b) Wolfian duct qoldiqchalari, c) Paramezanefrik nay qoldiqlaridan",
    a: [
      "Morgagni k.-c, Parooforon k.-b, Kobelt k.-a, Gartner kanali k.-a, Epooforon k.-b",
      "Kobelt k.-c, Parooforon k.-b, Morgagni k.-a, Gartner kanali k.-a, Epooforon k.-b",
      "Morgagni k.-c, Gartner k.-b, Kobelt k.-a, Parooforon kanali k.-a, Epooforon k.-b",
      "Kobelt k.-c, Parooforon k.-a, Morgagni k.-b, Gartner kanali k.-b, Epooforon k.-a",
      "Morgagni k.-c, Parooforon k.-a, Kobelt k.-b, Gartner kanali k.-a, Epooforon k.-a",
    ],
    correct: 0,
  },
  {
    q: "Morgagni kistasi nimadan hosil bo'ladi?",
    a: ["Paramezanefrik nay qoldiqlaridan", "mezonefrik nay qoldiqlari", "Mullerian duct qoldiqlaridan", "Gartner kanalidan", "Wolfian duct qoldiqchalari"],
    correct: 0,
  },
  {
    q: "Gartner kanali kistasi va Morgagni kistasi qaysi qoldiq(lar)dan hosil bo'ladi?",
    a: [
      "Mezonefrik nay qoldiqlari",
      "Paramezanefrik nay qoldiqlaridan va Gartner kanalidan",
      "Mullerian duct qoldiqlaridan",
      "Gartner kanalidan va Wolfian duct qoldiqchalari",
      "Wolfian duct qoldiqchalari",
    ],
    correct: 0,
  },
  {
    q: "Wolfian duct qoldiqchalaridan hosil bo'ladigan kista(lar)?",
    a: [
      "Parooforon va Epooforon kistalari",
      "Gartner kanali kistasi va Morgagni kistasi",
      "Gartner kanali va Kobelt kistalari",
      "Faqat epooforon kistasi",
      "Faqat Morgagni kistasi",
    ],
    correct: 0,
  },
  {
    q: "ushbu tasvirda uterusning qaysi qismi a-atreziya, qaysi soha b-ageneziya bo'lgan?",
    a: ["a-fallopian duct b-cervix", "a-fimbriae b-vagina", "a-isthmus b-infundibulum", "a-cervix b-fallopian duct", "a-fallopian duct b-ampula"],
    correct: 0,
  },
  {
    q: "17 yoshli qizning onasi, ikkilamchi jinsiy belgilari normada bo'lgan qizida, hali ham hayz sikli boshlanmaganidan shikoyat qilib, qizini ginekolog ko'rigiga olib keldi, UTTda qizda uterus yo'qligi va qin kaltaligi aniqlandi ginekologik tekshiruvda qizning tashqi jinsiy a'zolari normada ekanligi bildirildi. Sizning tashxisingiz?",
    a: ["Mayer-Rokitanskiy-Küster-Gauzer syndrome", "Mullerian atreziya", "Annulyar qizlik parda", "Amenoreya", "Anovulyatsiya"],
    correct: 0,
  },
  {
    q: "Paramezonefrik nayning bittasi bo'lmasa yoki chala rivojlansa kelib chiqadigan patologiyada qaysi symptom namoyon bo'ladi?",
    a: [
      "Bachadon bo'shlig'i bo'lmagan rudimentar shoxli bir shoxli bachadon",
      "Didelphis anomaliyalari",
      "Bicornuate uterus",
      "Septate Uterus",
      "Vaginal toza hujayrali adenokarsinoma",
    ],
    correct: 0,
  },
  {
    q: "Qaysi patalogiyada cervixda didelphis anomaliyalari bo'ladi?",
    a: ["Ikkilangan bachadon", "To'siqli bachadon", "Ikki shoxli bachadon", "Septate testis", "Endometrioz"],
    correct: 0,
  },
  {
    q: "Skrining tekshiruvida 16 yoshli homilador ayolning Qiz homilasi 20 haftalik bo'lishiga qaramay paramezanefrik naylarning faqatgina kaudal qismi qisman qo'shilganligi aniqlandi. Sizning fikringizcha bu qiz homilada qanday patalogiya vujudga keladi?",
    a: [
      "Bicornuate Uterus",
      "Ikkilangan bachadon",
      "Bo'shliq bilan qo'shilgan rudiment shoxli bir shoxli bachadon",
      "Preeklampsiya",
      "T-shaklli bachadon",
    ],
    correct: 0,
  },
  {
    q: "Preeklampsia, abort, vaqtidan oldin tug'ruq va diabetni davolash maqsadida foydalanilgan lekin qiz homilada vaginal toza hujayrali adenokarsinoma va T shaklidagi bachadon anomaliyalari keltirib chiqargani tufayli 18 asrning 2-yarmidan ishlatilmay qo'yilgan dori vositasi?",
    a: ["Dietilstilbestrol", "Diazepam", "Doksisiklin", "Digidrotestosteron", "Toxoplasmosis"],
    correct: 0,
  },
];

const m2 = [
  {
    q: "SRY oqsili ?",
    a: ["Testis determining factor -- TDF", "Anti Mullerian Hormone -- AMH", "Mullerian Inhibiting Factor -- MIF"],
    correct: 0,
  },
  {
    q: "Mullerian kanallarning regressiyasi uchun ingibitor gormon ishlab chiqaruvchi hujayra?",
    a: ["Sertole", "Leydig", "Ovotsit", "SRY", "AMH"],
    correct: 0,
  },
  {
    q: "Wolfian yo'lni ichki erkaklik jinsiy a'zolariga aylanishini stimullovchi factor qaysi hujayra tomonidan sintezlanadi.",
    a: ["Leydig", "Sertole", "Ovotsit", "SRY", "AMH"],
    correct: 0,
  },
  {
    q: "Testosterone ta'sirida Wolfian ductdan hosil bo'luvchi a'zo?",
    a: ["Seminal vesicle", "Penis", "Scrotum", "Prostate", "Corpus Kavernosum"],
    correct: 0,
  },
  {
    q: "Quyidagi a'zolarni a-digidrotestosterone, b-testosterone ta'sirida hosil bo'lishiga qarab saralang. 1-epididymis, 2-eyakulyatsiya kanali, 3-vas deferens, 4-prostate, 5-glans penis, 6-spongios body, 7-penile urethra, 8-scrotum, 9-seminal vesicle, 10-cavernous body",
    a: [
      "a-1,2,3,9 b-4,5,6,7,8,10",
      "a-4,5,6,7,8,10 b-1,2,3,9",
      "a-1,2,4,9 b-4,5,6,7,8,10",
      "a-1,2,3,4,5 b-9,6,7,8,10",
      "a-1,3,5,7 b-2,4,6,8",
    ],
    correct: 0,
  },
  {
    q: "genital do'mboqdan digidrotestosteron stimulyatsiyasi tufayli hosil bo'ladigan qismlar qaysi?",
    a: [
      "G'ovaksimon tana, glans penis, spongiosum",
      "corpus cavernosum, urogenital fold, labioscrotal swelling",
      "kavernoz va spongioz tana, vestibular bulbs",
      "olat boshchasi, kavernoz tana, Cowper bezi",
      "scrotum, genital tubercle, jinsiy bo'rtiq",
    ],
    correct: 0,
  },
  {
    q: "Cowper bezlari va prostate uchun umumiy xususiyat",
    a: [
      "Urogenital sinusdan hosil bo'ladi",
      "labioscrotal swellingdan hosil bo'ladi",
      "urogenital Burmadan hosil bo'ladi",
      "genital tubercledan hosil bo'ladi",
      "vestibular bulbsdan hosil bo'ladi",
    ],
    correct: 0,
  },
  {
    q: "Bulbouretral bezlar hosil bo'lishini ta'minlovchi gormon qaysi factor ta'sirida hosil bo'ladi?",
    a: ["5 α-reduktaza", "Gialuronidaza", "Epoksid reduktaza", "Testosterone", "Digidrotestosteron"],
    correct: 0,
  },
  {
    q: "Eyakulyator kanal hosil bo'lishiga javobgar gormonni sintezlovchi hujayra qaysi gen ta'sirida rivojlanadi?",
    a: ["SRY", "SHH", "Urogenital ridge", "Genital tubercle", "Rb geni"],
    correct: 0,
  },
  {
    q: "Digidrotestosteron ta'sirida urogenital burmadan hosil bo'ladigan tuzilma?",
    a: ["Penile urethra", "Labia major", "Labia minor", "Scrotum", "Labioscrotal swelling"],
    correct: 0,
  },
  {
    q: "Gipospadiya bilan birga namoyon bo'ladigan patalogiyalar?",
    a: [
      "inguinal churra, kriptorxidizm, xordee",
      "5 alfa-reduktaza yetishmovchiligi, septate uterus",
      "Xordee, kriptorxidizm, adenokarsinoma",
      "Kobelt kistasi, kriptorxidizm, mullerian agenezi",
      "Gidrosele, varicosele, spermatosele",
    ],
    correct: 0,
  },
  {
    q: "Penil urethraning corpus cavernosum tomonga ochilishi bilan namoyon bo'livchi patalogik holat?",
    a: ["Epispadiya", "Gipospadiya", "Mayer-Rokitanskiy-Küster-Gauzer sindrom", "DES", "Bifid scrotum"],
    correct: 0,
  },
  {
    q: "16 yoshli 20 haftali homilador ayol UTT tekshiruvida homila erkak jinsli ekanligi lekin uretral fold ning penis o'rtasiga normal birikmaganligi va erta tug'riq havfi aniqlandi sizningcha homila qanday patalogiyalar bilan tugi'lishi mumkin?",
    a: [
      "Kriptorxidizm, gipospadiya",
      "Ambigious, epispadiya",
      "Xordee, Gartner kanali kistasi",
      "Didelphis anomalyalari, epispadiya, gipospadiya",
      "Bicornuate, kriptorxidizm, gipospasdiya",
    ],
    correct: 0,
  },
  {
    q: "Munosib ta'rifni toping.",
    a: [
      "Epispadiya- genital tubercle ning noto'g'ri joylashishi tufayli kelib chiqadi",
      "Epispadiya-uretral fold ning penis o'rtasiga normal birikmasligi natijasida kelib chiqadi",
      "Epispadiya -- peritoneal suyuqlik processus vaginalis ga oqib yorg'oq ichida to'planishi",
      "Epispadiya --mezonefrik kanal qoldiqchalaridan hosil bo'ladi",
      "Epispadiya -- Paramezonefrik nayning shakllanmasligi",
    ],
    correct: 0,
  },
  {
    q: "Tug'riqxonada 2 kun davomida 31 ta chaqaloq tug'ildi ulardan 9 tasi ayol jinsli bo'lib erkak jinslilarining 12 tasi o'z vaqtida sog'lom tug'ilgan. Shu 2 kun davomida tug'ilgan chaqaloqlarning tahminan nechtasiga kriptorxid testicle tashxisi qo'yilgan?",
    a: ["3 tasiga", "30 tasiga", "1 tasiga", "9 tasiga", "12 tasiga"],
    correct: 0,
  },
  {
    q: "Scrotum ichidagi normal harorat?",
    a: ["34°C", "36,6 °C", "37 °C", "25 °C", "38°C"],
    correct: 0,
  },
  {
    q: "Moyaklarning abdominal tomondan scrotumga tushish yo'li ?",
    a: ["inguinal canal", "inguinal anal", "Inguinal churra", "chov churra", "gubernaculum"],
    correct: null, // TO'G'RI JAVOB BELGILANMAGAN (asl faylda "+" yo'q)
  },
  {
    q: "Inguinal churralar ichaklarning qanday patalogiyaga olib kelishi mumkin.",
    a: [
      "Ichaklarning ishemiyasi va nekrozi",
      "Peritoneal suyuqlik processus vaginalis ga oqib yorg'oq ichida to'planishi",
      "Urug'don vena chigallarining (Pampiniform plexus) kengayib ketishi",
      "SMA sindromi",
      "Nutcrecker sindromi",
    ],
    correct: 0,
  },
  {
    q: "Urolog huzuruga kelgan 42 yoshli erkakda transversal fassiyaning zaifligi aniqlanib davolandi va qaysi kasallikning oldi olindi?",
    a: ["Direct inguinal churra", "Gidrosele", "Kriptorxidizm", "Diafragma churra", "Disk churra"],
    correct: 0,
  },
  {
    q: "Inguinal churraning qaysi turi gidrosele hosil qilishi mumkin?",
    a: ["Bilvosita churra", "Direct hernia", "Bevosita churra", "Diafragmatik churra", "Hiatal churra"],
    correct: 0,
  },
  {
    q: "To'g'ridan-to'g'ri parietal qorin pardasi orqali pastki epigastral tomirlarning medial qismidan va qorinning to'g'ri muskuli (rectus abdominis) lateral tomonidan bo'rtib chiqadi. Qaysi patalogik holat haqida gap ketmoqda?",
    a: ["Direct hernia", "Bilvosita chov churra", "Bevosita chov churra", "Diafragmatik churra", "Hiatal churra"],
    correct: 0,
  },
  {
    q: "Bevosita chov churraning chiqish joyi qaysi rangda ko'rsatilgan?",
    a: ["Siyohrang", "Ko'k", "Yashil", "Qizil", "Binafsharang"],
    correct: 0,
  },
  {
    q: "Urug' tizimchasi qavatlari?",
    a: [
      "Tashqi spermatik fassiya, internal oblique, transversalis fascia",
      "Linea alba, conjoint tendon, piramidasimon muskul",
      "Parietal peritonium, transversalis fascia, ichki qiyshiq muskul",
      "Indirect hernia, direct hernia, femoral halqa",
      "Qov simfizi, Hesselbax uchburchagi, ichki spermatik tomir",
    ],
    correct: 0,
  },
  {
    q: "Cremasteric muscle qayerda bo'ladi?",
    a: [
      "Urug' tizimchasi o'rta qavatida",
      "Anterolateral qorin devorining tashqi qavatida",
      "Chov uchburchagi markazida",
      "Chov kanali a'zolari ustida",
      "Peritoniumda",
    ],
    correct: 0,
  },
  {
    q: "Peritoneal suyuqlik Vaginal o'siqqa oqib yorg'oq ichida to'planishi bu...?",
    a: ["Gidrosele", "Meningogidroensefalosele", "Gidrosefaliya", "Poligidroamnioz", "Oligogidroamnioz"],
    correct: 0,
  },
  {
    q: "Transilluminatsiya nima?",
    a: [
      "Yorug'lik nurining to'qima orqali o'ta olishi",
      "Aorta va o'pka arteriyasining o'rni embrional davrda almashinib qolishi",
      "Organlarni retsipiyentga ko'chirib o'tkazish",
      "Ko'ndalang yo'g'on ichak",
      "Diafragmaning ko'ndalang o'sish nuqtasi",
    ],
    correct: 0,
  },
  {
    q: "Gidroseleni qattiq yomon sifatli o'smalardan qanday farqlash mumkin?",
    a: [
      "Transilluminatsiya bo'lishidan",
      "Transilluminatsiya bo'lmasligidan",
      "Transversum bo'lishidan",
      "Translokatsiya bo'lmasligidan",
      "Transvaginal tomonda bo'lishidan",
    ],
    correct: 0,
  },
  {
    q: "Suyuqlik bilan to'lgan kista nima deyiladi va qayerda rivojlanadi?",
    a: ["Spermatosele, epididimisda", "Epididymis, Spermatoseleda", "Gidrosele, epididimisda", "Varikosele, Pampiniform plexusda", "Gidrosele, scrotumda"],
    correct: 0,
  },
  {
    q: "tashxisingiz?",
    a: ["Spermatosele", "Omfalosele", "Gidrosele", "Varikosele", "Meningosele"],
    correct: 0,
  },
  {
    q: "Chap tomonlama Pampiliform plexus kengayib scrotum ichida qon dimlanib qolishiga sabab bo'luvchi sindrom?",
    a: ["Nutcracker syndrome", "Adrenogenital syndrome", "Potter syndrome", "CHARGE syndrome", "Alport syndrome"],
    correct: 0,
  },
  {
    q: "Genotipi XX yoki XO bo'lgan ayollarda tashqi erkaklik belgilarining paydo bo'lishining asosiy sababi?",
    a: [
      "digidrotestosteron ko'payib ketishi",
      "esterogen ko'payib ketishi",
      "kortizol AKTG hosil bo'lishini ingibirlash uchun yetarli bo'lishi",
      "AKTG normadan kam bo'lishi",
      "Onadagi androgen kamayib ketishi",
    ],
    correct: 0,
  },
  {
    q: "rasmga mos keluvchi javobni tanlang",
    a: ["Ambigious jinsiy organ", "Epispadiya", "Klitor kichikligi", "Xordee", "Erlak homilada androgen ta'siri yo'qolishi"],
    correct: 0,
  },
  {
    q: "Xromosomal nuqsonlarning qaysi biri ambigious jinsiy organlarni hosil qiladi?",
    a: ["Mozaik xromosomal shakl", "Daun", "Edvards", "Patau", "Ayol homilada faqatgina XX bo'lishi"],
    correct: 0,
  },
  {
    q: "Onaning laborator tekshiruvlarida kortizol normaga nisbatan kam, AKTG normadan ortiqcha ekani aniqlandi. Tashxisingiz qanday?",
    a: ["Adrenogenital sindrom", "Maskulinizatsiya", "Digidrotestosteron yetishmovchiligi", "Esterogen ko'pligi", "Gipospadiya"],
    correct: 0,
  },
  {
    q: "Genotipi XY bo'lgan homilada nima sababdan androgenlar o'z effektini chiqara olmasligi mumkin?",
    a: [
      "retseptorlarning mutatsiyasi yoki androgenlarning yetarlicha chiqmasligi",
      "kortizol normaga nisbatan kam, AKTG normadan ortiqcha ekani",
      "Adrenogenital sindrom",
      "Digidrotestosteron ko'pligi",
      "SRY geni faolligi",
    ],
    correct: 0,
  },
  {
    q: "Gidrosele turlarini aniqlang.",
    a: ["Bo'g'langan, bo'glanmagan", "Direct, indirect", "Varikosele, spermatosele", "Epispadiya, gipospadiya", "Bilvosita, bevosita"],
    correct: 0,
  },
  {
    q: "Penisning pastga yoki yuqoriga egilib qolishi?",
    a: ["Xordee", "Xorda", "Fibroz pilakcha", "Notoxord", "Axis"],
    correct: 0,
  },
  {
    q: "indirect inguinal hernianing chiqish joyi qaysi rangda ko'rsatilgan?",
    a: ["Yashil", "Ko'k", "Siyohrang", "Qizil", "Binafsharang"],
    correct: 0,
  },
  {
    q: "ichki chov halqasidagi qaysi tuzilma bachadon yumaloq boylami yoki urug' yo'liga aylanadi?",
    a: ["Pushti rangli", "Oq rangli", "Sariq rangli", "Qizil rangli", "Moviy rangli"],
    correct: null, // TO'G'RI JAVOB BELGILANMAGAN (asl faylda "+" yo'q)
  },
  {
    q: "Sariqlik qopi endodermasidan hosil bo'ladigan XY xromosoma saqlagan primordial germ cells qayerga migratsiya qiladi?",
    a: ["indifferent gonad sohaga", "Mullerian kanalga", "Testosteronga", "Ovaryga", "SRY geniga"],
    correct: null, // TO'G'RI JAVOB BELGILANMAGAN (asl faylda "+" yo'q)
  },
];

const m3 = [
  {
    q: "Xoana nima?",
    a: ["burun bo'shlig'i va nasopharynx orasidagi teshik", "lower respirator tract", "medium respirator tract", "o'rta yuz suyagi", "Orqa burun teshigining to'silib qolishi"],
    correct: 0,
  },
  {
    q: "Ko'pincha Midface suyak anormalliklari tufayli kelib chiqadigan patalogiya ?",
    a: ["Xoanal atreziya", "Xoana", "Xoanal ageneziya", "Nasopharynx", "Retinoic kislota yetishmovchiligi"],
    correct: 0,
  },
  {
    q: "Ikki tomonlama Xoanal atreziya belgisi?",
    a: ["burun orqali nafas ololmaydi", "sianoz bo'lmaydi", "midface suyagi o'rtacha bo'ladi", "nasopharynx ko'karadi", "lower respirator tract obstruksiyasi"],
    correct: 0,
  },
  {
    q: "Ona 7 kunlik o'g'il chaqalog'i nafas olishga juda qiynalayotganidan shikoyat qildi, siz bolaning shovqinli nafas olayotganini sezib Bolani emizishini buyurganingizda emayotgan bolada sianozni payqadingiz nafas yetishmovchiligidan bezovtalangan chaqaloq yig'laganida esa og'iz-burun va ko'zlar atrofidagi ko'karishlar o'z-o'zidan yaxshilandi. Tashxisingiz ?",
    a: ["Xoanal atreziya", "Alveolar collaps", "Pulmonar ageneziya", "Gipoksiya", "Bronxogen kista"],
    correct: 0,
  },
  {
    q: "Nafas olish tizimining rivojlanishidagi muhim hodisalar qaysilar",
    a: [
      "Vaskulyarizatsiya, Alveolyarizatsiya, Tarmoqlanish, Septation",
      "Embrional, Psevdoglandulyar, Kanalikulyar, Sakkulyar, Alveolyar",
      "Invaginatsiya, vaskulyarizatsiya, migratsiya, septatsiya",
      "Tarmoqlanish, to'siq hosil bo'lishi, Invaginatsiya, septatsiya",
      "Vaskulyarizatsiya, Alveolyarizatsiya, septatsiya, malformatsiya",
    ],
    correct: 0,
  },
  {
    q: "terminal bronxiolalar qaysi hududda joylashgan?",
    a: ["O'tkazuvchi zonada", "Respirator zonada", "Terminator zona", "Alveolar qopchalar", "Soxta bezli"],
    correct: 0,
  },
  {
    q: "Nafas olish tizimining rivojlanishi uchun beshta asosiy bosqichlar to'gri ketma-ketligini toping.",
    a: [
      "Embrional, Psevdoglandulyar, Kanalikulyar, Sakkulyar, Alveolyar",
      "Psevdoglandulyar, Embrional, Kanalikulyar, Sakkulyar, Alveolyar",
      "Embrional, Kanalikulyar, Sakkulyar, Psevdoglandulyar, Alveolyar",
      "Embrional, Psevdoglandulyar, Sakkulyar, Kanalikulyar, Alveolyar",
      "Psevdoglandulyar, Kanalikulyar, Sakkulyar, Alveolyar, Embrional",
    ],
    correct: 0,
  },
  {
    q: "Nafas olish tizimi rivojlanishining qaysi bosqichida o'pka ixtisoslashuvi boshlanadi?",
    a: ["Embrional", "Alveolyar", "Psevdoglandulyar", "Kanalikulyar", "Sakkulyar"],
    correct: 0,
  },
  {
    q: "Nafas olish tizimi rivojlanishining qaysi bosqichida neyral tarmoqlar rivojlana boshlaydi?",
    a: ["Psevdoglandulyar", "Embrional", "Alveolyar", "Kanalikulyar", "Sakkulyar"],
    correct: 0,
  },
  {
    q: "Nafas olish tizimi rivojlanishining qaysi bosqichida preatsinar tomirlar rivojlana boshlaydi?",
    a: ["Psevdoglandulyar", "Embrional", "Alveolyar", "Kanalikulyar", "Sakkulyar"],
    correct: 0,
  },
  {
    q: "Nafas olish tizimi rivojlanishining qaysi bosqichida neyral tarmoqlar yetiladi?",
    a: ["Sakkulyar", "Psevdoglandulyar", "Embrional", "Alveolyar", "Kanalikulyar"],
    correct: 0,
  },
  {
    q: "Nafas olish tizimi rivojlanishining qaysi bosqichida ekstrasellular matriks yetiladi?",
    a: ["Sakkulyar", "Psevdoglandulyar", "Embrional", "Alveolyar", "Kanalikulyar"],
    correct: 0,
  },
  {
    q: "Nafas yo'llarining ichki qoplamasi qaysi embrional varaqdan rivojlanadi?",
    a: ["Endoderma", "ektoderma", "mezoderma", "neyroektoderma", "splanxik mezoderma"],
    correct: 0,
  },
  {
    q: "Trilaminar diskning qaysi qavatidan nafas yo'llarining tog'aylari, mushaklari rivojlanadi?",
    a: ["Mezoderma", "Mezodermaning sariqlik qopidan", "Ektoderma", "Endodermaning sklerotomidan", "Ektodermaning somitidan"],
    correct: 0,
  },
  {
    q: "Nafas olish tizimi rivojlanishining birinchi belgisi ?",
    a: ["Retinoik kislota ko'payishi", "Retinoik kislota kamayishi", "Mezodermadan FGF-10 ajralishi", "conducting zone yakunlanishi", "terminal xaltachalar rivojlanishi"],
    correct: 0,
  },
  {
    q: "Lung budni shakllantiruvchi omil?",
    a: ["Retinoik kislota", "fibroblast growth factor-10", "birlamchi alveolalar", "Surfaktant", "CPAP"],
    correct: 0,
  },
  {
    q: "urug'lanishdan necha kun o'tgach, homila qonida retinoik kislota ko'paya boshlaydi?",
    a: ["26 kun", "33-kun", "25 kun", "27 kun", "22 kun"],
    correct: 0,
  },
  {
    q: "lens rivojlanishni boshlagan kunda nafas tizimida qanday o'zgarish sodir bo'ladi?",
    a: ["lung bud chap va o'ng bronchial budsga bo'linadi", "Retinoik kislota ko'payishi", "Mezodermadan FGF-10 ajralishi", "conducting zone yakunlanishi", "terminal xaltachalar rivojlanishi"],
    correct: 0,
  },
  {
    q: "Nima sababdan o'ng asosiy bronx vertikalroq yo'nalgan va chap asosiy bronxga qaraganda kengroq bo'ladi?",
    a: ["Yurak joylashuvi tufayli", "Buyrak joylashuvi tufayli", "Jigar joylashuvi tufayli", "Lens joylashuvi tufayli", "Lung joylashuvi tufayli"],
    correct: 0,
  },
  {
    q: "Nafas olish tizimi rivojlanishi bosqichlari boshlanishi gestatsion yosh bilan muvofiq javobni toping.",
    a: [
      "Embrional 4-hafta, Psevdoglandulyar 5-hafta, Kanalikulyar 16-hafta, Sakkulyar 24-hafta, Alveolyar 32-hafta",
      "Psevdoglandulyar 4-hafta, Embrional 5-17 hafta, Kanalikulyar 16-25 hafta, Sakkulyar 24 haftalikdan, Alveolyar 32 haftalikdan",
      "Embrional 4-7 hafta, Kanalikulyar 5-17 hafta, Sakkulyar 16-25 hafta, Psevdoglandulyar 24 haftalikdan, Alveolyar 32 haftalikdan",
      "Embrional 4-7 hafta, Psevdoglandulyar 5-17 hafta, Sakkulyar 16-25 hafta, Kanalikulyar 24 haftalikdan, Alveolyar 32 haftalikdan",
      "Psevdoglandulyar 4-7 hafta, Kanalikulyar 5-17 hafta, Sakkulyar 16-25 hafta, Alveolyar Kanalikulyar 24 haftalikdan, Embrional 32 haftalikdan",
    ],
    correct: 0,
  },
  {
    q: "Necha kunlik homila chap o'pkaning ikkita lobar bronxini va o'ng o'pkaning uchta lobar bronxini hosil qiladi?",
    a: ["56 kunlik", "28 kunlik", "35 kunlik", "42 kunlik", "26 kunlik"],
    correct: 0,
  },
  {
    q: "Limfa tizimlari homiladorlikning qaysi haftalarida hosil bo'ladi?",
    a: ["4-7 haftasi", "5-17 haftasi", "16-25 haftasi", "24 haftalikdan tug'ilguncha", "32 haftalikdan 8 yoshgacha"],
    correct: 0,
  },
  {
    q: "Nafas yo'llari va qon tomirlarining keng shoxlanib o'sishini ta'minlovchi omil?",
    a: ["fibroblast growth factor-10", "Retinoik kislota", "letsitin", "Surfaktant", "CPAP"],
    correct: 0,
  },
  {
    q: "Soxta bezli bosqichda mezodermadan ajralib chiqadigan moddaning vazifasi?",
    a: [
      "nafas yo'llari va qon tomirlarining keng shoxlanib o'sishini ta'minlaydi",
      "nafas tizimi divertikullari shakllanishiga sabab bo'ladi",
      "Prekursor funksiyasi",
      "Fosfolipidga boy suyuqlik bo'lgan sirt faol modda sintez qiladi",
      "alveolyar sirt tarangligini pasaytiradi",
    ],
    correct: 0,
  },
  {
    q: "Conducting zone rivojlanishini qachon yakunlaydi ?",
    a: ["Psevdoglandulyar (soxta bezli) bosqichda", "4-7 haftalikda", "20- haftadan boshlab", "sakkulyar bosqichda", "35 haftalikda"],
    correct: 0,
  },
  {
    q: "Nima sababdan psevdoglandulyar bosqich deyiladi?",
    a: [
      "Mesodermal hujayralar tomirlarni hosil qilib soxta bezlar ko'rinishini bergani uchun",
      "FGF-10 mezodermadan ajralib chiqqani uchun",
      "Retinoblastoma mezodermadan ajralib chiqqani uchun",
      "Surfactant mezodermadan ajralib chiqqani uchun",
      "Homila qoni retinoic kislotani ko'paytirgani uchun",
    ],
    correct: 0,
  },
  {
    q: "Soxta bezli bosqichda Proksimal havo yo'llari qanday hujayralar bilan qoplanadi?",
    a: ["Ustunsimon epiteliy", "Bezli epiteliy", "Kubsimon epiteliy", "Tolali biriktiruvchi", "Ustunsimon nerv"],
    correct: null, // TO'G'RI JAVOB BELGILANMAGAN (asl faylda "+" yo'q)
  },
  {
    q: "Proksimal havo yo'llari ustunsimon epiteliy, distal havo yo'llari esa kubsimon epiteliy bilan qoplanadi. Ammo .... Jumlani dvom ettiring.",
    a: [
      "Sitoplazmasi kam ixtisoslashgan, va mikrovilluslari, kiprikchalar yaxshi rivojlanmagan",
      "Qo'shimcha shoxlanish sodir bo'ladi",
      "Atsinuslar hosil bo'ladi",
      "Surfaktantni sintez qiladi",
      "Glukokortikoidlarni ko'paytiradi",
    ],
    correct: 0,
  },
  {
    q: "Muqobil javobni tanlang.",
    a: [
      "Kanalikular bosqichda kapillyarlar periferik o'sib yangi bo'lgan havo bo'shliqlarini qoplaydi",
      "Embrional rivojlanishning 33-kunida homila qonida retinoik kislota ko'payadi",
      "Atsinusdagi mesodermal hujayralar tomirlarni hosil qilib soxta bezlar ko'rinishini beradi",
      "Dipalmitoilfosfatidilxolinlar homila surfaktant sintezi va o'pka rivojlanishi uchun muhimdir.",
      "Tug'ilish vaqtida alveolalarni 95%i to'liq rivojlanadi; qolgan 5%i tug'ilgandan 8 yoshgacha to'liq yetiladi",
    ],
    correct: 0,
  },
  {
    q: "Noto'g'ri jumlani toping.",
    a: [
      "Makrofaglarni fagotsitoz qilgan eritrositlar Gemosiderin bilan to'ladi",
      "Vaginal tug'ilish vaqtidagi bosim tufayli og'iz orqali o'pka suyuqligining ma'lum qismi chiqib ketadi.",
      "Vaginal tug'ilishdagi bosim (stress) chaqaloq tanasida glukokortikoidlarni ko'paytiradi",
      "Surfaktant sintezi homiladorlikning ~20 haftaligidan boshlanadi va homiladorlikning ~35 haftaligida yetuk darajaga yetadi",
      "Alveolyar qoplar elastik bo'lib, ularning ichki yuzasini qoplagan suv molekulalari alveolalar devori yopishib qo'yishi mumkin",
    ],
    correct: 0,
  },
  {
    q: "ushbu tuzilmaning nomi nima?",
    a: ["Atsinus", "nafas tizimi divertikullari", "conducting zone", "bronxlar", "2-tip pnevmotsitlar"],
    correct: 0,
  },
  {
    q: "Sakkulyar bosqichda qanday to'siqlar alveolyar qoplarni kichikroq birliklarga bo'lishni boshlaydi?",
    a: ["elastik tolali", "ustunsimon epiteliyli", "kubsimon epiteliy bilan qoplangan", "squamous", "DPPC"],
    correct: 0,
  },
  {
    q: "Alveolyar yuzalarning 97%ini tashkil qiluvch alveolatsit",
    a: ["Squamous hujayralar", "II turdagi pnevmosit", "Alveolyar makrofaglar", "Mikrovilluslar", "terminal qopchalar"],
    correct: 0,
  },
  {
    q: "I tur pnevmosit, qon tomir bazal membranasi va endoteliy (qon tomir ichki yuzasini qoplovchi yassi hujayralar) dan tashkil topgan tuzilma?",
    a: ["Qon-gaz baryeri", "Atsinus", "Squamous", "Kohn teshiklari", "Interbronxiolyar bog'lanish"],
    correct: 0,
  },
  {
    q: "Havo, suyuqlik, fagotsitlar va bakteriyalarning o'tishiga imkon beruvchi alveolalar orasidagi anatomik poralar",
    a: ["Kohn teshiklari", "Alveolar qopchalar", "Martin kanallari", "Kobelt kanallari", "Lamber kistasi"],
    correct: 0,
  },
  {
    q: "Alveolar collapse qachon sodir bo'ladi.",
    a: ["Yetarli miqdorda surfaktant bo'lmasa", "Yetarli miqdorda letsitin bo'lganda", "glukokortikoidlar ko'payganda", "35-haftada surfactant yetuk darajaga yetganda", "Sfingomiyelin kamayib ketganda"],
    correct: 0,
  },
  {
    q: "terminal qopchalar bu-?",
    a: ["Birlamchi alveolalar", "Kohn teshiklari", "Alveolar qopchalar", "Martin kanallari", "Kobelt kanallari", "Lamber kistasi"],
    correct: 0,
  },
  {
    q: "o'zidan alveolar proteaza, sitokin chiqaruvchi alveolatsit?",
    a: ["Alveolyar makrofaglar", "Squamous hujayralar", "II turdagi pnevmosit", "Mikrovilluslar", "Kiprikli epiteliy"],
    correct: 0,
  },
  {
    q: "O'pka shishi, alveolyar qon ketishda eritrositlarni fagotsitoz qilgan makrofaglar qaysi modda bilan to'ladi?",
    a: ["Gemosiderin", "Gemoglobin", "Gem", "Alveolyarizatsiy", "Sitokin"],
    correct: 0,
  },
  {
    q: "O'pka kurtaklari qayerdan o'sib traxeyani hosil qiladi",
    a: ["Forgut", "Forebrain", "Midgut", "Hindgut", "proensefalon"],
    correct: 0,
  },
];

module.exports = { m1, m2, m3 };
