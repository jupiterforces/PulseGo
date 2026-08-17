// Testlar docx fayldan (Embriologiya_yakuniy_testlar.docx) so'zma-so'z ko'chirildi.
// correct: 0 = A, 1 = B, 2 = C, 3 = D, 4 = E ...
// Asl faylda to'g'ri javob **qalin (bold)** shrift bilan belgilangan edi — shu asosda kodlandi.

// 35-mavzu: Tana bo'shliqlar embriologiyasi
const m4 = [
  {
    q: "Tana bo'shliqlari qayerdan rivojlanadi?",
    a: ["intraembryonic coelom", "embryonic coelom", "paraembryonic coelom", "paraxsialembryonic coelom", "intraembryonic ektodermadan"],
    correct: 0,
  },
  {
    q: "Embrional rivojlanish davrida lateral mezoderma ikkiga bo'linadi ular qaysilar?",
    a: [
      "splanchnic mesoderm va somatic mesoderm",
      "simpatic mesoderm va somatic mesoderm",
      "splanchnic mesoderm va intermedial mesoderm",
      "paraxsial mesoderm va somatic mesoderm",
      "splanchnic mesoderm va enteric mesoderm",
    ],
    correct: 0,
  },
  {
    q: "Birlamchi tana bo'shlig'i (coelom) qayerda joylashgan?",
    a: [
      "visseral mesoderm va somatic mesoderm orasida",
      "simpatic mesoderm va somatic mesoderm orasida",
      "splanchnic mesoderm va intermedial mesoderm orasida",
      "paraxsial mesoderm va somatic mesoderm orasida",
      "splanchnic mesoderm va enteric mesoderm orasida",
    ],
    correct: 0,
  },
  {
    q: "Quyidagi qaysi bo'shliqlar coelom bo'shlig'idan (a), qaysi birlari alohida rivojlanish o'zagiga ega (b). 1.Thoracic cavity 2.Cranial cavity 3.Abdominal cavity 4.Vertebral cavity 5.Pelvic cavity",
    a: ["a-1,3,5, b-2,4", "b-1,3,5, a-2,4", "a-1,3, b-2,4,5", "a-1,2,3 b-4,5", "a-4,5 b-1,2,3"],
    correct: 0,
  },
  {
    q: "Diafragma embriologik jihatdan 4 ta o'sish nuqtasiga ega ular qaysilar? 1.Septum transversum 2.Pleuroperitoneal membranes 3.Dorsal mesentery of the esophagus 4.Body wall 5.Dorsal mesentery of the duadeum 6.Ventral mesentery of the esophagus",
    a: ["1,2,3,4", "2,3,4,5", "3,4,5,6", "1,3,5,6", "2,3,4,6"],
    correct: 0,
  },
  {
    q: "Diafragma orqali o'tadigan organlar qaysilar?",
    a: [
      "pastki kovak vena, qizilo'ngach, aorta",
      "yuqori kovak vena, qizilo'ngach, aorta",
      "pastki kovak arteriya, qizilo'ngach, aorta",
      "pastki kovak vena, halqum, aorta",
      "pastki kovak vena, qizilo'ngach, oshqozon",
    ],
    correct: 0,
  },
  {
    q: "Diafragma bo'yinning qaysi segmentlardan chiqqan diafragma nervi (phrenic nerve) tomonidan innervatsiya qilinadi?",
    a: ["C3, C4 va C5", "C1, C4 va C5", "C2, C4 va C5", "C3, C4 va C6", "C3, C4 va C7"],
    correct: 0,
  },
  {
    q: "Diafragma qaysi embrional tuzilmalardan hosil bo'ladi?",
    a: [
      "Splanchnic mezoderma va notoxord",
      "Septum transversum va pleuroperitoneal membranalar",
      "Perikardial bo'shliq va umurtqalar",
      "Neyral krest va somatik mezoderma",
      "Endodermal qatlam va bo'yin segmentlari",
    ],
    correct: 1,
  },
  {
    q: "Tana bo'shliqlari hosil bo'lishi jarayonida lateral qatlamlar qanday shakllanadi?",
    a: ["To'g'ri tekislanadi", "Egilib, uchlari birlashadi", "Kengayadi", "Cho'ziladi", "Bo'linadi"],
    correct: 1,
  },
  {
    q: "Cranial cavity qayerdan hosil bo'ladi?",
    a: ["Splanchnic mezodermadan", "Bosh suyaklari rivojlanishidan", "Endodermadan", "Qorin bo'shlig'idan", "Perikardial bo'shliqdan"],
    correct: null, // TO'G'RI JAVOB BELGILANMAGAN (asl faylda bold yo'q)
  },
  {
    q: "Vertebral cavity qanday rivojlanadi?",
    a: ["Umurtqalararo disklar", "Umurtqa suyaklari tanasi va yoylari birlashishidan", "Qorin bo'shlig'idan", "Diafragmadan", "Neyral nayidan"],
    correct: 1,
  },
  {
    q: "Tana bo'shlig'idagi diafragma teshiklari nima uchun kerak?",
    a: ["Nervlarni o'tkazish uchun", "Organlarni ajratish uchun", "Maxsus organlar o'tishiga imkon yaratish uchun", "Qon aylanishini boshqarish uchun", "Suv muvozanatini ta'minlash uchun"],
    correct: 2,
  },
  {
    q: "Diafragma rivojlanishidagi asosiy to'siqlar nima?",
    a: [
      "Qon tomirlari va nervlarning noto'g'ri joylashuvi",
      "Septum transversumning noto'liq birlashuvi",
      "Neyral nayning bo'linishi",
      "Pleuroperikardial membranalar ko'chishi",
      "Umurtqa o'qi o'zgarishi",
    ],
    correct: 1,
  },
  {
    q: "Peritoneal bo'shliq qaysi qavatdan rivojlanadi?",
    a: ["Endodermadan", "Mezodermadan", "Ektodermadan", "Amniotik membranadan", "Qorin devoridan"],
    correct: 1,
  },
  {
    q: "Tana bo'shlig'i o'ziga xos pleural bo'shliqni qachon hosil qiladi?",
    a: ["2-hafta", "4-hafta", "6-hafta", "8-hafta", "10-hafta"],
    correct: 2,
  },
  {
    q: "Perikardial bo'shliq qanday joylashadi?",
    a: ["Orqa diafragmada", "Yurakning oldida", "Yurakning atrofida", "Qovurg'alar orqasida", "Pleural bo'shliqning yonida"],
    correct: 2,
  },
  {
    q: "Qorin bo'shlig'i ichidagi organlar qanday rivojlanadi?",
    a: ["Birlamchi mezenteriydan", "Ikkinchi darajali mezenteriydan", "Notoxord qoldiqlaridan", "Pleuroperikardial bo'shliqlardan", "Peritoneal bo'shliqdan"],
    correct: 0,
  },
  {
    q: "Peritoneum nima?",
    a: ["Mushak to'qimasi", "Teri osti qavati", "Qorin bo'shlig'ini qoplaydigan seroz membrana", "Yurakni o'rab turuvchi membrana", "Ichki organlar o'rtasidagi mushaklar"],
    correct: 2,
  },
  {
    q: "Pleuroperikardial membranalar qaysi bosqichda rivojlanadi?",
    a: ["3-hafta", "5-hafta", "7-hafta", "9-hafta", "11-hafta"],
    correct: 1,
  },
  {
    q: "Diafragma markaziy tendoni qayerdan kelib chiqadi?",
    a: ["Notoxord qoldiqlaridan", "Septum transversumdan", "Umurtqa suyaklaridan", "Neyral nayning lateral qismidan", "Peritoneal bo'shliqning qoldiqlaridan"],
    correct: 1,
  },
  {
    q: "Diafragmatik churralar nima sababdan yuzaga keladi?",
    a: [
      "Oshqozonning oshqozon-qizilo'ngach toraymasidan yuqoriga siljishi",
      "Diafragma nuqsonlari natijasida qorin organlarining ko'krak qafasiga chiqishi",
      "Oshqozon va ichaklarning bir-biriga o'xshashligini yo'qotishi",
      "Qizilo'ngachning yuza qismining kengayishi",
      "Oshqozonning bo'shlig'ining yallig'lanishi",
    ],
    correct: 1,
  },
  {
    q: "Surilgan hiatal churra qanday holatni ifodalaydi?",
    a: [
      "Oshqozonning oshqozon-qizilo'ngach toraymasi orqali yuqoriga siljishi",
      "Oshqozon-qizilo'ngach tizimining o'xshashligini yo'qotishi",
      "Oshqozonning qisqarishi va ichaklarning harakatlanishi",
      "Diafragma va qizilo'ngachning yuqoriga siljishi",
      "Oshqozonning qorin bo'shlig'idan siljishi",
    ],
    correct: 0,
  },
  {
    q: "Tana bo'shliqlari patologiyalaridan qaysi biri oshqozon-qizilo'ngach reflyuksini keltirib chiqarishi mumkin?",
    a: ["Yallig'lanishli oshqozon sindromi", "Surilgan hiatal churra", "Tana bo'shlig'i infeksiyalari", "Oshqozonning to'liq yo'qolishi", "Oshqozon shishlari"],
    correct: 1,
  },
  {
    q: "Diafragma nuqsoni qanday asoratlarga olib kelishi mumkin?",
    a: [
      "Oshqozonning ichaklarni qisib turishi",
      "Qorin organlarining ko'krak qafasiga chiqishi",
      "Oshqozon va ichaklarning yallig'lanishi",
      "Oshqozonning to'liq yoyilishi",
      "Oshqozonning ovqat hazm qilish qobiliyatining kamayishi",
    ],
    correct: 1,
  },
  {
    q: "Diafragmatik churralar qanday diagnostika usullari bilan aniqlanadi?",
    a: ["Endoskopik tekshiruvlar va rentgen", "Fiziologik testlar va echim tomografiya", "Oshqozon shishining tahlili", "Haroratni tekshirish", "Tana bo'shlig'idagi ultratovush"],
    correct: 0,
  },
];

// 36-mavzu: Homiladorlik
const m5 = [
  {
    q: "Homila yoshi yana nima deb ataladi?",
    a: ["gestatsion yosh", "teratogen yosh", "fetal yosh", "neonatal yosh", "postnatal yosh"],
    correct: 0,
  },
  {
    q: "Homila qaysi vaqtda tug'ilsa, \"muddatida tug'ilgan\" deb hisoblanadi?",
    a: ["30-36 hafta", "37-41 hafta", "42-45 hafta", "40-42 hafta", "35-40 hafta"],
    correct: 1,
  },
  {
    q: "Human Chorionic Gonadotropin (h-CG) gormoni nima vazifani bajaradi?",
    a: [
      "Sariq tana (corpus luteum) ni saqlab qoladi va progesteron ishlab chiqarilishini ta'minlaydi",
      "Ovariylarda tuxum hujayralarini ishlab chiqaradi",
      "Homiladorlikning boshlanishida estrogen ishlab chiqaradi",
      "Dovdirab ketgan endometriyni tiklaydi",
      "Tuxumdonlarda gormonal balansni saqlaydi",
    ],
    correct: 0,
  },
  {
    q: "Human Chorionic Gonadotropin (h-CG) gormonining qanday subbirliklari mavjud?",
    a: ["Beta va gamma subbirliklari", "Alfa va beta subbirliklari", "Delta va epsilon subbirliklari", "Kappa va theta subbirliklari", "Alfa va gamma subbirliklari"],
    correct: 1,
  },
  {
    q: "h-CG gormoni homiladorlik testida qachon aniqlanishi mumkin?",
    a: [
      "5-kuni ona qonida, 7-kuni ona siydigida",
      "8-kuni ona qonida, 10-kuni ona siydigida",
      "10-kuni ona qonida, 12-kuni ona siydigida",
      "7-kuni ona qonida, 9-kuni ona siydigida",
      "9-kuni ona qonida, 11-kuni ona siydigida",
    ],
    correct: 1,
  },
  {
    q: "h-CG gormoni ko'rsatkichlari qanday holatlarni ko'rsatadi?",
    a: [
      "Kam hCG ko'rsatkichi ektopik homila yoki spontan abortni ko'rsatadi",
      "Yuqori hCG ko'rsatkichi faqat molar homiladorlikni ko'rsatadi",
      "Kam hCG ko'rsatkichi ko'p bolali homiladorlikni ko'rsatadi",
      "Yuqori hCG ko'rsatkichi faqat normali homiladorlikni ko'rsatadi",
      "Kam hCG ko'rsatkichi homiladorlikning normal kechishini ko'rsatadi",
    ],
    correct: 0,
  },
  {
    q: "Human Placental Lactogen (hPL) gormonining vazifasi nima?",
    a: [
      "Onada lipolizni kuchaytirib, erkin yog' kislotalar miqdorini oshiradi",
      "Onada insulin ishlab chiqarilishini oshiradi",
      "Onada glukoza miqdorini oshiradi",
      "Homila rivojlanishini kuchaytiradi",
      "Homiladorlik davrida qonda xolesterin darajasini oshiradi",
    ],
    correct: 0,
  },
  {
    q: "Human Placental Lactogen (hPL) gormoni homilaga qanday ta'sir ko'rsatadi?",
    a: [
      "Homilaga faqat glukoza o'tadi",
      "Homilaga erkin yog' kislotalar va glukoza energiya zaxirasi sifatida o'tadi",
      "Homilaga faqat erkin yog' kislotalar o'tadi",
      "Homilaga faqat kislorod o'tadi",
      "Homilaga proteinlar o'tadi",
    ],
    correct: 1,
  },
  {
    q: "Prolaktin gormoni qayerda ishlab chiqariladi?",
    a: ["Jigar va buyraklar", "Gipofiz bezi va platsenta", "Oshqozon va ichak", "Tuxumdon va urug'lik bez", "Yurak va o'pkada"],
    correct: 1,
  },
  {
    q: "Prolaktinning asosiy vazifasi nima?",
    a: ["Yurak faoliyatini tartibga solish", "Sut bezlarini laktatsiyaga tayyorlash", "Qon bosimini oshirish", "Immun tizimini kuchaytirish", "Tana haroratini boshqarish"],
    correct: 1,
  },
  {
    q: "Prolaktinning sekretsiyasini qanday moddalar tartibga soladi?",
    a: ["Insulin va glukagon", "Tireotrop gormon (TSH) va dofamin", "Adrenalin va noradrenalin", "Testosteron va estrogen", "Melatonin va oksitocin"],
    correct: 1,
  },
  {
    q: "Prolaktin sekretsiyasini qaysi modda ingibirlaydi?",
    a: ["Estrogen", "Dofamin", "Testosteron", "Insulin", "Prolaktin o'zi"],
    correct: 1,
  },
  {
    q: "Estrogenlar nima uchun javobgar jinsiy gormonlardir?",
    a: [
      "Erkak organizmining rivojlanishi",
      "Ayol organizmining o'sish-rivojlanishi va ikkilamchi jinsiy belgilari rivojlanishi",
      "Suyaklarning kuchayishi",
      "Yashil o'simliklarning o'sishi",
      "Yurak faoliyatining tartibga solinishi",
    ],
    correct: 1,
  },
  {
    q: "Qaysi estrogen turi reproduktiv yoshda dominantlik qiladi?",
    a: ["Estron", "Estradiol", "Estriol", "Estetrol", "Progesteron"],
    correct: 1,
  },
  {
    q: "Qaysi estrogen turi faqatgina homiladorlik davrida ishlab chiqariladi?",
    a: ["Estron", "Estradiol", "Estriol", "Estetrol", "Testosteron"],
    correct: 3,
  },
  {
    q: "Homiladorlik davrida dominant bo'lgan estrogen turi qaysi?",
    a: ["Estron", "Estradiol", "Estriol", "Estetrol", "Progesteron"],
    correct: 2,
  },
  {
    q: "Estradiol osteoklastlarni qanday ta'sir qiladi?",
    a: ["Ularni faollashtiradi", "Ularni ingibirlaydi", "Ularni yo'q qiladi", "Ularni qisqartiradi", "Ularni qo'llab-quvvatlaydi"],
    correct: 1,
  },
  {
    q: "Ayollarda klimaks yoshiga yetganda qanday sog'liq muammosi ortadi?",
    a: ["Qandli diabet", "Suyaklar kuchayishi", "Osteoporoz", "Yashil o'simliklar etishmasligi", "Yana bir necha homiladorlik"],
    correct: 2,
  },
  {
    q: "Nima sababdan klimaks yoshidagi ayollarda osteoporoz xavfi ortadi?",
    a: ["Estradiolning yo'qligi sababli", "Testosterone yuqoriligi sababli", "Estronning yuqoriligi sababli", "Homiladorlikdan keyin", "D vitamini yetishmasligi sababli"],
    correct: 0,
  },
  {
    q: "Tug'ruqning taxminiy sanasini hisoblashda qanday sikl qo'llaniladi?",
    a: ["28 kunlik sikl", "30 kunlik sikl", "25 kunlik sikl", "35 kunlik sikl", "40 kunlik sikl"],
    correct: 0,
  },
  {
    q: "Tug'ruq sanasini hisoblashda ovulyatsiya qaysi kunda bo'ladi?",
    a: ["10-kun", "14 yoki 15-kun", "21-kun", "25-kun", "30-kun"],
    correct: 1,
  },
  {
    q: "Nigel qoidasi bo'yicha tug'ruq sanasini hisoblashda qaysi amal bajariladi?",
    a: [
      "Oxirgi hayz kuniga 1 yil qo'shiladi va 7 kun ayriladi",
      "Oxirgi hayz kuniga 1 yil qo'shiladi va 3 oy ayriladi",
      "Oxirgi hayz kuniga 9 oy qo'shiladi",
      "Oxirgi hayz kuniga 6 oy qo'shiladi va 10 kun ayriladi",
      "Oxirgi hayz kuniga 2 yil qo'shiladi",
    ],
    correct: 1,
  },
  {
    q: "Tug'ruq sanasini hisoblashda hayz sikli 28 kun bo'lganlarda qanday natija olinadi?",
    a: ["Taxminiy sanani aniqlashda xatolik bo'ladi", "Tug'ruq kuni aniq chiqadi", "3 hafta farq bo'ladi", "Natija noaniq bo'ladi", "2 hafta kechikish bo'ladi"],
    correct: 1,
  },
  {
    q: "UTT yordamida amniosentez yoki xorionik villi biopsiyasida nima aniqlanadi?",
    a: ["Qon bosimi", "Homila jinsini aniqlash", "Igna kiritish joyini aniqlash", "Qon guruhlari", "Jinsiy yo'llar orqali yuquvchi kasalliklar"],
    correct: 2,
  },
  {
    q: "Amniosentez qaysi usulda amalga oshiriladi?",
    a: [
      "Qon namunasini olish",
      "Amnion suyuqligi va homila hujayralaridan UTT nazorati ostida namuna olish",
      "EKG tekshiruvi",
      "Homiladorlik testini amalga oshirish",
      "Rentgen tekshiruvi",
    ],
    correct: 1,
  },
  {
    q: "Amniosentez qaysi homiladorlik haftalarida amalga oshiriladi?",
    a: ["8-10 hafta", "12-14 hafta", "14-18 hafta", "20-22 hafta", "24-26 hafta"],
    correct: 2,
  },
  {
    q: "Amniosentezga ko'rsatmalar qaysilar?",
    a: [
      "Ona yoshi 25 dan kichik bo'lsa",
      "Oldingi bolada xromosoma kasalliklari mavjud bo'lsa",
      "Ona yoshi 35 dan kichik bo'lsa",
      "Ota-onada xromosoma kasalliklari yo'q bo'lsa",
      "Homiladorlikdagi tug'ma anomaliyalar",
    ],
    correct: 1,
  },
  {
    q: "Xorionik villi biopsiyasi qanday usulda amalga oshiriladi?",
    a: ["Suyak hujayralaridan namuna olish", "Xorionik villi to'qimasidan UTT nazorati ostida namuna olish", "Qon testlari", "Spermiy tahlili", "Homilaning yurak faoliyatini tekshirish"],
    correct: 1,
  },
  {
    q: "Xorionik villi biopsiyasi qaysi homiladorlik haftalarida amalga oshiriladi?",
    a: ["4-6 hafta", "6-11 hafta", "12-14 hafta", "20-22 hafta", "24-26 hafta"],
    correct: 1,
  },
  {
    q: "Xorionik villi biopsiyasi qaysi maqsadlar uchun ishlatiladi?",
    a: [
      "Homiladorlikning oxirgi bosqichidagi tekshiruvlar",
      "Homiladorlikning erta bosqichidagi genetik anomaliyalar uchun diagnoz qo'yish",
      "Homilaning jinsini aniqlash",
      "Sut ishlab chiqarishni tekshirish",
      "Homiladorlikni kechiktirish",
    ],
    correct: 1,
  },
  {
    q: "Xorionik villi to'qimalarini qanday usullar bilan olish mumkin?",
    a: ["Transvaginal va transabdominal", "Qon namunasini olish", "Homilaning ultratovush tekshiruvi", "Laparoskopiya", "MRI skanerlash"],
    correct: 0,
  },
  {
    q: "Kordosentez qanday usulda amalga oshiriladi?",
    a: ["Suyakdan qon olish", "Platsentadan to'g'ridan-to'g'ri qon olish", "Urug'lik hujayrasidan namuna olish", "Homiladorlik testidan foydalanish", "O'pka hujayralaridan namuna olish"],
    correct: 1,
  },
  {
    q: "Kordosentez qaysi homiladorlik haftasidan keyin amalga oshiriladi?",
    a: ["6-8 hafta", "10-12 hafta", "14-16 hafta", "17-hafta", "20-22 hafta"],
    correct: 3,
  },
  {
    q: "Kordosentez yordamida qaysi maqsadlar amalga oshiriladi?",
    a: ["Fetal gemoglobinni aniqlash", "Fetal anemiya darajasini aniqlash", "Genetik kasalliklarni aniqlash", "Barcha yuqoridagilar"],
    correct: 3,
  },
  {
    q: "APGAR shkalasi nima uchun qo'llaniladi?",
    a: [
      "Yangi tug'ilgan chaqaloqlarning hayotiy darajasini baholash",
      "Chaqaloqning jinsini aniqlash",
      "Homiladorlik davrining davomiyligini hisoblash",
      "Chaqaloqning sog'lig'ini tahlil qilish",
      "Yangi tug'ilgan chaqaloqlarda xromosoma kasalliklarini aniqlash",
    ],
    correct: 0,
  },
  {
    q: "APGAR shkalasi bo'yicha qaysi xususiyatlar baholanadi?",
    a: [
      "Yangi tug'ilgan chaqaloqning yoshi va vazni",
      "Tashqi ko'rinishi, yurak urish soni, tashqi ta'sirga javob reaksiyasi, faolligi, nafas olish soni",
      "Homiladorlik davomiyligi va tug'ilish joyi",
      "Chaqaloqning jinsiy rivojlanishi",
      "Suyak va mushaklar faoliyati",
    ],
    correct: 1,
  },
  {
    q: "APGAR shkalasida har bir xususiyat qanday ball bilan baholanadi?",
    a: ["0-3 ball", "0-5 ball", "0-2 ball", "1-5 ball", "1-10 bal"],
    correct: 2,
  },
  {
    q: "APGAR shkalasi qaysi vaqtlarda baholanadi?",
    a: ["Faqat tug'ruqdan keyin", "Dastlabki birinchi daqiqada va beshinchi daqiqada", "Bir hafta keyin", "Har oyda", "2 hafta keyin"],
    correct: 1,
  },
];

// 37-mavzu: Teratalogiya, mikroblar
const m6 = [
  {
    q: "Teratologiya nima bilan shug'ullanadi?",
    a: [
      "Homiladorlikning davomiyligini o'rganish",
      "Homila uchun xavf tug'diradigan har qanday omillarni o'rganish",
      "Yangi tug'ilgan chaqaloqlarning sog'lig'ini o'rganish",
      "Onaning yoshi va sog'lig'ini o'rganish",
      "Homiladorlik davridagi genetik o'zgarishlarni o'rganish",
    ],
    correct: 1,
  },
  {
    q: "Teratogen agentlar qaysilarni o'z ichiga oladi?",
    a: [
      "Infeksiyalar, dorilar, onadagi kasalliklar, metallardan zaharlanish, fizik agentlar (radiatsiya)",
      "Yangi tug'ilgan chaqaloqlarning rangi, og'irligi, harakati",
      "Homiladorlik davrida eyiladigan mahsulotlar",
      "Tug'ruq usullari va jarrohlik amaliyotlari",
      "Homiladorlik davridagi dietalar",
    ],
    correct: 0,
  },
  {
    q: "Teratogen agentlardan biri sifatida qaysi omil ko'rsatilgan?",
    a: ["Nutritiv omillar", "Onadagi kasalliklar", "Tug'ruq usullari", "Homiladorlikning yoshi", "Tug'ma anomaliyalarning tarixi"],
    correct: 1,
  },
  {
    q: "Teratogen agentlardan biri sifatida qanday fizik agent ko'rsatilgan?",
    a: ["Infeksiya", "Dorilar", "Radiatsiya", "Metallardan zaharlanish", "Xromosoma kasalliklari"],
    correct: 2,
  },
  {
    q: "Agar teratogen agent rivojlanishning dastlabki davrida (0-2 hafta) ta'sir ko'rsatsa, nima bo'ladi?",
    a: [
      "Homilaning genetik xususiyatlari o'zgartiriladi",
      "Homilaning tug'masi bilan bog'liq kasalliklar yuzaga keladi",
      "Homilaning tushishiga olib keladi",
      "Homilaning organsal rivojlanishi boshlanadi",
      "Homiladorlik davom etadi, lekin homila salomatligi yaxshilanadi",
    ],
    correct: 2,
  },
  {
    q: "Agar teratogen agent embrional davrda (3-8 hafta) ta'sir ko'rsatsa, nima bo'ladi?",
    a: [
      "Fetal rivojlanish boshlanadi",
      "Embrionda tug'ma anatomik nuqsonlar (masalan, anensefaliya) paydo bo'ladi",
      "Homiladorlik davom etadi, lekin homila jinsiy rivojlanishda zaiflik ko'rsatadi",
      "Homilaning organlari to'liq rivojlanadi",
      "Fetal davrda hech qanday ta'sir ko'rsatilmaydi",
    ],
    correct: 1,
  },
  {
    q: "Agar teratogen agent fetal davrda (8-40 hafta) ta'sir ko'rsatsa, nima bo'ladi?",
    a: [
      "Homilada organlar funksiyasining o'zgarishi yuzaga keladi",
      "Homilada hech qanday o'zgarishlar bo'lmaydi",
      "Homila tug'ma anomaliyalarga uchraydi",
      "Homiladorlik oxiriga yetadi",
      "Homilada faqat tashqi ko'rinishda o'zgarishlar kuzatiladi",
    ],
    correct: 0,
  },
  {
    q: "Teratogen agentlarning ta'sirini qaysi davrda eng ko'p sezish mumkin?",
    a: ["Fetal davr", "Embrional davr", "Dastlabki davr", "Tug'ruqdan keyin", "Homiladorlikning oxirgi davrid"],
    correct: 1,
  },
  {
    q: "TORCH infeksiyasi nima?",
    a: [
      "Homilaning jinsini aniqlash",
      "Homilaga teratogen sifatida ta'sir qiladigan mikroblar nomlarining qisqartmasi",
      "Homilaning rivojlanishidagi o'zgarishlar",
      "Yangi tug'ilgan chaqaloqlarning immun tizimini o'rganish",
      "Homiladorlikning kechikishi",
    ],
    correct: 1,
  },
  {
    q: "TORCH infeksiyasining tarkibiga qaysi mikroblar kiradi?",
    a: [
      "Toxoplasmosis, Rubella, HIV",
      "Toxoplasmosis, Cytomegalovirus, Herpes simplex virus",
      "Toxoplasmosis, Syphilis, Varicella zoster virus, HIV, Rubella, Cytomegalovirus, Herpes simplex virus",
      "HIV, Rubella, Herpes simplex virus",
      "Toxoplasmosis, Syphilis, Rubella",
    ],
    correct: 2,
  },
  {
    q: "TORCH infeksiyasiga kiradigan mikroblardan biri nima?",
    a: ["Pneumonia", "Toxoplasmosis", "Tuberkulyoz", "Gripp", "Hepatit"],
    correct: 1,
  },
  {
    q: "TORCH infeksiyasi homilaga qanday ta'sir ko'rsatishi mumkin?",
    a: [
      "Fetal rivojlanishni to'xtatadi",
      "Homilaning organizmida tug'ma anomaliyalarga olib kelishi mumkin",
      "Homiladorlikning davomiyligini qisqartiradi",
      "Faqatgina qon bosimini boshqaradi",
      "Homiladorlikni to'xtatish uchun zarur bo'lgan dori",
    ],
    correct: 1,
  },
  {
    q: "Toxoplasmosisni qanday mikroorganizmlar qo'zg'atadi?",
    a: ["Toxoplasma gondii", "Cytomegalovirus", "Rubella virus", "Herpes simplex virus", "Varicella zoster virus"],
    correct: 0,
  },
  {
    q: "Toxoplasmosisni homilaga qanday yo'l orqali yuqadi?",
    a: ["Havo orqali", "Transplatsentar yo'l orqali", "Tana orqali", "Suv va havo orqali", "Kontaktdan"],
    correct: 1,
  },
  {
    q: "Toxoplasmosis infeksiyasining 1-trimestrda yuqish ehtimoli qancha?",
    a: ["25%", "54%", "65%", "85%", "95%"],
    correct: 0,
  },
  {
    q: "Toxoplasmosis infektsiyasining 1-trimestrda yuqishi qanday natijalar keltirib chiqarishi mumkin?",
    a: [
      "Tabiiy abort yoki erta tug'ilish",
      "Homiladorlik davom etadi",
      "Homilada metabolik o'zgarishlar yuzaga keladi",
      "Homilada sindrom paydo bo'ladi",
      "Chaqaloqning jinsiy rivojlanishida muammo",
    ],
    correct: 0,
  },
  {
    q: "Toxoplasmosis infeksiyasining klassik triadasi quyidagilardan iborat:",
    a: [
      "Xorioretinit, gidrosefaliya, kalsifikatsiya",
      "Xorioretinit, diffuz intrakranial kalsifikatsiya, gidrosefaliya",
      "Trombositopeniya, isitma, gidrosefaliya",
      "Gidrosefaliya, isitma, sariqlik",
      "Xorioretinit, gipertoniya, gidrosefaliya",
    ],
    correct: 1,
  },
  {
    q: "Toxoplasmosis infeksiyasida quyidagi belgilarni ko'rish mumkin, lekin qaysi biri ularning orasida emas?",
    a: ["Sariqlik", "Isitma", "Gepatosplenomegaliya", "Trombositopeniya", "Tushkunlik"],
    correct: 4,
  },
  {
    q: "Syphilis (Zaxm) infeksiyasining qo'zg'atuvchisi nima?",
    a: ["Toxoplasma gondii", "Treponema pallidum", "Rubella virus", "Herpes simplex virus", "Cytomegalovirus"],
    correct: 1,
  },
  {
    q: "Syphilis infeksiyasi homilaga qanday yo'llar bilan yuqishi mumkin?",
    a: [
      "Jinsiy aloqa, platsenta orqali, tug'ruq vaqtida",
      "Suv orqali",
      "Havo orqali",
      "Xotirjam muhitda yuqadi",
      "Homiladorlik davrida faqat jinsiy aloqa orqali",
    ],
    correct: 0,
  },
  {
    q: "Syphilis infektsiyasining homiladagi ta'siri qanday bo'ladi?",
    a: [
      "Tabiiy abort, o'lik tug'ilish, hydops fetalis",
      "Homilada faqatgina rangi o'zgaradi",
      "Homilada metabolid o'zgarishlar yuzaga keladi",
      "Homilada hech qanday ta'sir ko'rmaydi",
      "Homilaning jinsiy rivojlanishi to'xtaydi",
    ],
    correct: 0,
  },
  {
    q: "Syphilisning yangi tug'ilgan chaqaloqlarda erta belgilariga nima kiradi?",
    a: [
      "Gepatomegaliya, sariqlik, burundan qon yoki oq ajralma",
      "Yuzdagi abnormal o'zgarishlar, Hutchinson tishi",
      "Isitma, apenditsit",
      "Tana og'rig'i, bosh aylanishi",
      "Ochiq yaralar",
    ],
    correct: 0,
  },
  {
    q: "Tug'ma sifilisning kechki belgilari qachon namoyon bo'ladi?",
    a: ["1 yoshgacha", "2 yoshdan keyin", "5 yoshgacha", "10 yoshgacha", "15 yoshgacha"],
    correct: 1,
  },
  {
    q: "Tug'ma sifilisning kechki belgilari qaysilarni o'z ichiga oladi?",
    a: [
      "Yuzdagi abnormal o'zgarishlar, Hutchinson tishi, eshitishning pasayishi",
      "Tana og'rig'i, isitma, bosh aylanishi",
      "Sariqlik, gepatomegaliya",
      "Tushkunlik, uyqusizlik",
      "Suyak abnormalliklari, burun qonashi",
    ],
    correct: 0,
  },
  {
    q: "Rubella infeksiyasining qo'zg'atuvchisi nima?",
    a: ["Toxoplasma gondii", "Rubella virus", "Treponema pallidum", "Herpes simplex virus", "Cytomegalovirus"],
    correct: 1,
  },
  {
    q: "Rubella infeksiyasi homilaga qanday yo'llar bilan yuqadi?",
    a: ["Jinsiy aloqa orqali", "Havo orqali, platsenta orqali", "Suv orqali", "Kontaktdan", "Faqat tug'ruq vaqtida"],
    correct: 1,
  },
  {
    q: "Rubella infeksiyasining 1-trimestrda homilaga ta'siri qanday bo'ladi?",
    a: ["Infeksiyalanish xavfi yuqori bo'ladi", "Xavf kamayadi", "Homila hech qanday ta'sir ko'rmaydi", "Homila yuqmaydi", "Infeksiya erta tug'ilishga sabab bo'ladi"],
    correct: 0,
  },
  {
    q: "Rubella triadaga kiradigan belgilarni tanlang:",
    a: [
      "Yurak nuqsonlari, katarakta, koxlear defekt",
      "Sariqlik, isitma, katarakta",
      "Xorioretinit, gidrosefaliya, kalsifikatsiya",
      "Trombositopeniya, isitma, burun qonashi",
      "Suyuqlik to'planishi, o'lik tug'ilish, katarakta",
    ],
    correct: 0,
  },
  {
    q: "Rubella infeksiyasi homilada qanday holatlarni keltirib chiqarishi mumkin?",
    a: [
      "Tabiiy abort, erta tug'ilish, homila gipotrofiyasi",
      "Homilaning rivojlanishining tezlashuvi",
      "Homilada faqatgina charchoq",
      "Homilaning yanada sog'lom bo'lishi",
      "Homilada rivojlanishning to'xtashi",
    ],
    correct: 0,
  },
  {
    q: "Rubella infeksiyasining 2-trimestrda homilaga ta'siri qanday bo'ladi?",
    a: ["Infeksiyalanish xavfi kamayadi", "Xavf yuqori bo'ladi", "Homilaga hech qanday ta'sir ko'rsatmaydi", "Homila o'lgani aniqlanadi", "Homilada organlar funksiyasi o'zgaradi"],
    correct: 0,
  },
  {
    q: "Cytomegalovirus (CMV) infeksiyasi onaga qanday yo'llar bilan yuqadi?",
    a: ["Infeksiyalangan qon, siydik, so'lak, genital suyuqlik", "Havo orqali", "Suyuqliklar orqali", "Suv orqali", "Faqat jinsiy aloqa orqali"],
    correct: 0,
  },
  {
    q: "Cytomegalovirus (CMV) homilaga qanday yo'llar bilan yuqadi?",
    a: ["Havo orqali", "Platsenta orqali va tug'ruq vaqtida", "Jinsiy aloqa orqali", "Faqat tug'ruq vaqtida", "Sut orqali"],
    correct: 1,
  },
  {
    q: "Cytomegalovirus (CMV) infektsiyasining homiladagi klinik belgilari qanday bo'ladi?",
    a: [
      "Homila halok bo'lishi, intrauterine growth restriction, platsental abnormalliklar",
      "Homila faqatgina o'sishdan to'xtaydi",
      "Homila faqatgina ruhiy rivojlanishda kechikadi",
      "Homila sog'lom bo'lib tug'iladi",
      "Homilada faqatgina teri rangi o'zgaradi",
    ],
    correct: 0,
  },
  {
    q: "Cytomegalovirus (CMV) infeksiyasining chaqaloqlarda namoyon bo'ladigan belgilariga nima kiradi?",
    a: [
      "Gidrosefaliya, intrakranial kalsifikatsiya, sensorineyral karlik",
      "Isitma, apenditsit, burun qonashi",
      "Yuzdagi abnormal o'zgarishlar, Hutchinson tishi",
      "Xorioretinit, suyak abnormalliklari",
      "Suyak to'qimalarining zaifligi",
    ],
    correct: 0,
  },
  {
    q: "Cytomegalovirus (CMV) infeksiyasining chaqaloqlardagi boshqa klinik belgilari qaysilarni o'z ichiga oladi?",
    a: [
      "Petixiya, trombositopeniya, gemolitik anemiya, gepatosplenomegaliya, sariqlik",
      "Sariqlik va isitma",
      "Xorioretinit va burun qonashi",
      "Xorioretinit va yuzdagi abnormal o'zgarishlar",
      "Yuzdagi abnormal o'zgarishlar, Hutchinson tishi",
    ],
    correct: 0,
  },
  {
    q: "Cytomegalovirus (CMV) infektsiyasi chaqaloqlarda qanday teri o'zgarishlariga olib kelishi mumkin?",
    a: ["Blueberry muffin spots", "Yuzdagi qizarish", "Teri o'smalari", "Ochiq yaralar", "Teri toshmalari"],
    correct: 0,
  },
  {
    q: "Herpes simplex virus (HSV) onaga qanday yo'llar bilan yuqadi?",
    a: ["Kontakt yo'li orqali", "Havo orqali", "Sut orqali", "Suv orqali", "Faqat jinsiy aloqa orqali"],
    correct: 0,
  },
  {
    q: "Herpes simplex virus (HSV) homilaga qanday yo'llar bilan yuqadi?",
    a: ["Platsenta orqali va tug'ruq vaqtida", "Havo orqali", "Sut orqali", "Jinsiy aloqa orqali", "Faqat tug'ruq vaqtida"],
    correct: 0,
  },
  {
    q: "Herpes simplex virus (HSV) infeksiyasining homiladagi klinik belgilari qanday bo'ladi?",
    a: [
      "Homila o'limi, erta tug'ilish, kam vazn bilan tug'ilish",
      "Homilada faqatgina teri o'zgaradi",
      "Homila sog'lom bo'lib tug'iladi",
      "Homilada faqatgina ichak kasalliklari kuzatiladi",
      "Homila katta vazn bilan tug'iladi",
    ],
    correct: 0,
  },
  {
    q: "Herpes simplex virus (HSV) infeksiyasining chaqaloqlarda namoyon bo'ladigan klinik belgilariga nimalar kiradi?",
    a: [
      "Teri, ko'z, og'iz shilliq qavatlari yaralanishlari",
      "Sariqlik, burun qonashi, isitma",
      "Xorioretinit va mikrosefaliya",
      "Xorioretinit va katarakta",
      "Teri va ko'zning qizarishi",
    ],
    correct: 0,
  },
  {
    q: "Herpes simplex virus (HSV) infeksiyasining chaqaloqlarda qanday ko'z bilan bog'liq belgilar bor?",
    a: ["Keratokonyuktivit, katarakta", "Burun qonashi", "Yuzdagi abnormal o'zgarishlar", "Burun va og'izdan qon kelishi", "Xorioretinit va mikrosefaliya"],
    correct: 0,
  },
  {
    q: "Herpes simplex virus (HSV) infeksiyasining chaqaloqlarda qanday boshqa belgilar kuzatiladi?",
    a: ["Meningoensefalit, sepsis", "Isitma va apenditsit", "Suyuqlik to'planishi", "Teri toshmalari", "Xorioretinit va mikrosefaliya"],
    correct: 0,
  },
];

// 38-mavzu: Teratologiya: Dorilar va boshqa agentlar
const m7 = [
  {
    q: "Varfarin (Warfarin) qanday dori hisoblanadi?",
    a: ["Antikoagulant (qon ivishiga qarshi) dori", "Antibakterial dori", "Analgetik dori", "Antiviral dori", "Antiseptik dori"],
    correct: 0,
  },
  {
    q: "Varfarin qanday mexanizm orqali qon ivishini ingibirlaydi?",
    a: ["Qon ivish faktorlarini ingibirlaydi", "Qon tomirlarini kengaytiradi", "Qon bosimini pasaytiradi", "Qon hujayralarini ko'paytiradi", "Qon pıhtılaşmasını tezlashtiradi"],
    correct: 0,
  },
  {
    q: "Varfarin homilaga qanday yo'llar bilan o'tadi?",
    a: ["Platsenta orqali", "Havo orqali", "Sut orqali", "Jinsiy aloqa orqali", "Suv orqali"],
    correct: 0,
  },
  {
    q: "Varfarin qanday fermentni ingibirlaydi?",
    a: ["Epoksid reduktaza fermenti", "Gamma-glutamat karboksilaza fermenti", "Xolesterol reduktaza fermenti", "Amilaza fermenti", "Pepsin fermenti"],
    correct: 0,
  },
  {
    q: "Varfarin ta'sirida homilada qanday klinik holatlar kuzatilishi mumkin?",
    a: [
      "Qon ketishlar, yuz suyagida deformatsiyalar, spontan abort",
      "Isitma va apenditsit",
      "Suyuqlik to'planishi va teri toshmalari",
      "Xorioretinit va mikrosefaliya",
      "Faqatgina qon ketishlar",
    ],
    correct: 0,
  },
  {
    q: "Varfarin qanday vitamin K bilan bog'liq faoliyatni ta'sir qiladi?",
    a: [
      "Aktiv vitamin K ni ingibirlaydi",
      "Vitamin K ni faol vitaminga aylantiradi",
      "Vitamin K ni nofaol holatda saqlaydi",
      "Vitamin K miqdorini oshiradi",
      "Vitamin K ni mushaklarga yetkazadi",
    ],
    correct: 1,
  },
  {
    q: "Nikotin qanday modda hisoblanadi?",
    a: ["O'ziga qaram qiluvchi alkaloid modda", "Vitamin", "Mineral modda", "Protein", "Karbohidrat"],
    correct: 0,
  },
  {
    q: "Nikotin homilador ayolning organizmiga qanday ta'sir qiladi?",
    a: ["Qon-tomirlarni toraytiradi", "Qon-tomirlarni kengaytiradi", "Oziq moddalarning o'tishini oshiradi", "Homilaning o'sishini tezlashtiradi", "Homilaning rivojlanishini stimullaydi"],
    correct: 0,
  },
  {
    q: "Nikotin ta'sirida homilaga nimalar ta'sir qiladi?",
    a: [
      "Kislorod va oziq moddalarining o'tishi kamayadi",
      "Homilaning o'sish-rivojlanishi tezlashadi",
      "Homilaning o'sishi to'xtaydi",
      "Homilaning rivojlanishida hech qanday o'zgarish bo'lmaydi",
      "Homilaning o'sishi bir xil davom etadi",
    ],
    correct: 0,
  },
  {
    q: "Nikotin ta'sirida qaysi muammo kuzatilishi mumkin?",
    a: ["Ektopik homila", "Homila o'limi", "Spontan abort", "Platsentaga bog'liq muammolar", "Barcha javoblar to'g'ri"],
    correct: 4,
  },
  {
    q: "Nikotin ta'sirida homilada qanday holatlar kuzatilishi mumkin?",
    a: [
      "Homila o'limi, platsentaga bog'liq muammolar, spontan abort",
      "Faqatgina homila o'limi",
      "Faqat platsentaga bog'liq muammolar",
      "Homilaning o'sishi tezlashadi",
      "Homilaning rivojlanishi normada davom etadi",
    ],
    correct: 0,
  },
  {
    q: "Nikotin ta'sirida qaysi joyda ektopik homila kuzatilishi mumkin?",
    a: ["Fallopiy nayida", "Bachadonning pastki qismida", "Jigar ichida", "Tuxumdonlarda", "Ichaklarda"],
    correct: 0,
  },
  {
    q: "Homiladorlik davomida alkogol iste'mol qilish nima keltirib chiqaradi?",
    a: ["Fetal alkogol sindromi", "Homilaning tez rivojlanishi", "Homilaning tez o'sishi", "Homilaning normal rivojlanishi", "Homilaning gipotrofiyasi"],
    correct: 0,
  },
  {
    q: "Fetal alkogol sindromi qanday belgilarni keltirib chiqaradi?",
    a: [
      "Aqliy zaiflik, holoprosensefaliya, oyoq-qo'l deformatsiyasi",
      "Xorioretinit, mikrosefaliya, katarakta",
      "Spontan abort, yuz deformatsiyasi, moyak kattalashuvi",
      "Faqat mikrosefaliya",
      "Yalpi o'sishning pasayishi",
    ],
    correct: 0,
  },
  {
    q: "Fetal alkogol sindromi bilan bog'liq bo'lgan deformatsiyalar qaysi guruhga kiradi?",
    a: ["Kraniofatsial deformatsiyalar", "Muskul-skelet tizimi kasalliklari", "Ichak tizimi nuqsonlari", "Tuxumdon va jigar kasalliklari", "Qon tomirlaridagi o'zgarishlar"],
    correct: 0,
  },
  {
    q: "Fetal alkogol sindromi quyidagi muammolarni keltirib chiqarishi mumkin, qaysi biri to'g'ri?",
    a: ["Ko'rish va eshitish muammolari", "Faqatgina aqliy zaiflik", "Yalpi o'sishning pasayishi va yurak nuqsoni", "Faqat oyoq-qo'l deformatsiyasi", "Tirotoksikoz"],
    correct: 0,
  },
  {
    q: "Fetal alkogol sindromida qanday miyaning deformatsiyasi kuzatilishi mumkin?",
    a: ["Mikrosefaliya", "Gidrosefaliya", "Gistoz", "Neirodegeneratsiya", "Xorioretinit"],
    correct: 0,
  },
  {
    q: "Fetal alkogol sindromi qanday yurak nuqsonlariga sabab bo'lishi mumkin?",
    a: ["Yurak-qon tomir nuqsonlari", "Qon bosimining oshishi", "Ateroskleroz", "Miokard infarkti", "Qon to'planishi"],
    correct: 0,
  },
  {
    q: "Tetrasiklin nima tufayli homilada tishlarning sariq-jigarrang rangga kirishiga va suyaklarning o'sishdan ortda qolishiga sabab bo'lishi mumkin?",
    a: ["Kalsiy bilan birikishi", "Vitamin B9 yetishmovchiligi", "Glutamate formyltransferase fermentini ingibirlashi", "Nerv nayi defekti", "Yurak nuqsonlari"],
    correct: 0,
  },
  {
    q: "Doksisiklinning kalsiy bilan birikish xususiyati Tetrasiklinga qaraganda qandaydir?",
    a: ["Yuqori", "Kamroq", "Bir xil", "Hech qanday ta'sir ko'rsatmaydi", "Aniq bo'lmagan"],
    correct: 1,
  },
  {
    q: "Valproat kislota homilaga qanday ta'sir ko'rsatadi?",
    a: [
      "Nerv nayi defekti rivojlanishiga sabab bo'ladi",
      "Tishlarni sariq-jigarrang rangga bo'yaydi",
      "Yurt nuqsonlari keltirib chiqaradi",
      "Glutamate formyltransferase fermentini faollashtiradi",
      "Kalsiy bilan bog'lanadi",
    ],
    correct: 0,
  },
  {
    q: "Litiy tuzlarining homilaga ta'siri nima?",
    a: [
      "Yurak nuqsonlariga olib kelishi mumkin",
      "Tishlarning rangini o'zgartiradi",
      "Nerv nayi defekti keltiradi",
      "Glutamate formyltransferase fermentini ingibirlash",
      "Suyaklarning o'sishiga yordam beradi",
    ],
    correct: 0,
  },
  {
    q: "Valproat kislota qanday kasalliklarni davolashda ishlatiladi?",
    a: ["Epilepsiya va migren", "Qon bosimi", "Suyuqlik yetishmovchiligi", "Yurak nuqsonlari", "Tish kasalliklari"],
    correct: 0,
  },
  {
    q: "Litiy tuzlari homilada qanday muammolarni keltirib chiqarishi mumkin?",
    a: [
      "Yurak nuqsonlari va katta tomirlar malformatsiyasi",
      "Tishlarning o'sishdan ortda qolishi",
      "Suyaklarning deformatsiyasi",
      "Glutamate formyltransferase fermentining ortishi",
      "Nerv nayi defekti",
    ],
    correct: 0,
  },
  {
    q: "Simob tuzlari baliqlar orqali qanday toksik modda hosil qiladi?",
    a: ["Metilmerkuriy", "Lead", "Kofein", "Kokain", "Amonyak"],
    correct: 0,
  },
  {
    q: "Simobning homilaga ta'siri qanday bo'ladi?",
    a: [
      "Neyrotoksik ta'sir ko'rsatadi, neyron degeneratsiyasiga olib keladi",
      "Yurak nuqsonlari keltiradi",
      "Suyaklarning deformatsiyasiga sabab bo'ladi",
      "Xulq-atvorning o'zgarishiga olib keladi",
      "Ikkala nuqson ham yuqoridagi javoblar",
    ],
    correct: 0,
  },
  {
    q: "Qo'rg'oshin bilan zaharlanishda homilada qanday asoratlar kuzatiladi?",
    a: [
      "Abort xavfi, juda erta yoki kam vaznli tug'ilish, xulq-atvorning o'zgarishi",
      "Mikrosefaliya va leykemiya",
      "Aqliy zaiflik va o'sishning kechikishi",
      "Xavfli tug'ma anomaliyalar",
      "Hech biri",
    ],
    correct: 0,
  },
  {
    q: "Kokainning homilaga ta'siri qanday bo'lishi mumkin?",
    a: [
      "Turli xil tug'ma anomaliyalar, o'lik tug'ilish, o'sishdan ortda qolish",
      "Neyrotoksik ta'sir ko'rsatadi",
      "Tishlar sariq rangga kiradi",
      "Suyak o'sishining kechikishi",
      "Aqliy zaiflik va mikrosefaliya",
    ],
    correct: 0,
  },
  {
    q: "Radiatsiya ta'siri homilada qanday asoratlarga sabab bo'lishi mumkin?",
    a: [
      "Mikrosefaliya, aqliy zaiflik, o'sishning kechikishi",
      "Turli xil tug'ma anomaliyalar",
      "Xulq-atvorning o'zgarishi",
      "Tishlarning sariq rangga kirishi",
      "Hech biri",
    ],
    correct: 0,
  },
  {
    q: "O'tkir radiatsiya dozasidan zaharlanish qaysi holatlarda uchraydi?",
    a: ["Atom portlashlar", "Rentgen tekshiruvlari", "KT tekshiruvlari", "Kofein iste'moli", "Simob bilan zaharlanish"],
    correct: 0,
  },
];

module.exports = { m4, m5, m6, m7 };
