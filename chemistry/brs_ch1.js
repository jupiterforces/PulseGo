// BRS Biochemistry (UZ) — 1-bob: Energiya Metabolizmi va Oziqlanish: Asosiy Prinsiplar
// "Takrorlash testi" bo'limidan olindi, javob va izohlar "Javoblar va izohlar" qismidan.
// correct: 0 = A, 1 = B, 2 = C, 3 = D, 4 = E ...
// explanation — kitobdagi izoh matni ("To'g'ri javob X." qismisiz, faqat tushuntirish).
window.TEST_QUESTIONS = {
  m1: [
    {
      q: "Tanadagi eng katta zaxira energiya manbayi qaysi?",
      a: ["Oqsil", "Triatsilgitserol", "Jigar glikogeni", "Muskul glikogeni"],
      correct: 1,
      explanation:
        "Insondagi yog' to'qima triatsilglitserollari eng ko'p energiya zaxirasi hisoblanadi. Undan keyingi o'rinlarda oqsil (shunga qaramay oqsilning ko'p yo'qotilishi o'limga olib keladi), jigar glikogeni va muskul glikogeni turadi.",
    },
    {
      q: "Kuchli jismoniy ish bajarayotgan muskul uchun energiya manbayi qaysi?",
      a: ["Oqsil", "Triatsilgitserol", "Jigar glikogeni", "Muskul glikogeni"],
      correct: 3,
      explanation:
        "Muskul glikogeni jismoniy ish davomida energiya sifatida foydalaniladi. Glikogen energiya hosil qilish uchun metabolizmga uchrovchi glyukozaga degradatsiyalanadi. Jismoniy ish mashaqqatli bo'lganda muskul katta miqdorda energiya talab etadi va bu holatda eng tez energiya hosil qilish muskuldagi glikogenni parchalash hisoblanadi. Jigardagi glikogen glyukoza hosil qilib qonga chiqadi va bu glyukozani ham muskul o'ziga energiya uchun olishi mumkin, biroq jigardan ajraluvchi glyukozadan energiya olish muskul o'zidagi glyukozanikiga qaraganda sekinroq.",
    },
    {
      q: "Tungi ochlik davrida qonda glyukoza miqdorini saqlash uchun uglerod manbayi qaysi?",
      a: ["Oqsil", "Triatsilgitserol", "Jigar glikogeni", "Muskul glikogeni"],
      correct: 2,
      explanation:
        "Jigardagi glikogenoliz nahorgi ochlikda qonda glyukoza miqdorini nazorat qilishda asosiy jarayon hisoblanadi. Muskullar qondagi glyukoza miqdorini ushlab turish uchun qonga glyukoza ajrata olmaydi, yog' kislotalari uglerodi esa glyukoza sintezi uchun sarflanmaydi.",
    },
    {
      q: "Siydikdagi mochevina uchun prekursor (dastlabki mahsulot) qaysi?",
      a: ["Oqsil", "Triatsilgitserol", "Jigar glikogeni", "Muskul glikogeni"],
      correct: 0,
      explanation:
        "Oqsillardan olingan aminokislotalardagi azot mochevinaga aylanadi va siydik bilan ekskretsiyalanadi. Siydik kislota esa oqsillardan emas, purin asoslaridan hosil bo'luvchi azotni saqlovchi ekskretsiya mahsulotidir.",
    },
    {
      q: "32 yoshli erkak vazn saqlovchi parhez qilyapti. U semirishni ham, ozishni ham xohlamaydi. Bemorda manfiy azot balansi bo'lmasligi uchun parhezi tarkibida qaysi aminokislota bo'lishi kerak?",
      a: ["Alanin", "Arginin", "Glitsin", "Treonin", "Serin"],
      correct: 3,
      explanation:
        "Ozuqa moddalar tarkibida bitta almashinmaydigan aminokislota bo'lmasligi manfiy azot balansiga olib keladi, chunki oqsil sintezini ayni o'sha aminokislota bilan ta'minlash uchun oqsillar degradatsiyasi ko'payadi. Javoblardagi aminokislotalardan faqatgina treonin almashinmaydigan aminokislotadir (alanin piruvatdan sintezlanishi mumkin [glyukozadan hosil bo'luvchi], arginin mochevina siklida aspartat va ornitin aminokislotasidan hosil bo'ladi, glitsin serindan, serin esa 3-fosfoglitseratdan [glyukozadan hosil bo'luvchi] sintezlanishi mumkin).",
    },
    {
      q: "Bir necha kunlik ochlikdan keyin keton tanachalari muhim energiya manbayi bo'ladigan to'qima qaysi?",
      a: ["Jigar", "Bosh miya", "Skelet muskuli", "Qizil qon hujayralari"],
      correct: 1,
      explanation:
        "Bosh miya ochlikning 3-5-kunlaridan keyin qonda keton tanachalari miqdori ortishi bilan ulardan foydalana boshlaydi. Normal holatda miya energiya sifatida faqat glyukozadan foydalanadi (ko'plab yog' kislotalar gematoensefalitik baryerdan o'ta olmaydi), lekin keton tanachalari miqdori qonda oshganda ular bosh miyaga kira oladi va energiya manbayi sifatida foydalanishi mumkin.",
    },
    {
      q: "Nahorgi ochlikda keton tanachalari energiya sifatida foydalaniladigan to'qima qaysi?",
      a: ["Jigar", "Bosh miya", "Skelet muskuli", "Qizil qon hujayralari"],
      correct: 2,
      explanation:
        "Yog' to'qimalaridan ajralgan yog' kislotalardan jigar hosil qilgan keton tanachalarini skelet muskuli oksidlaydi. Ochlik davom etar ekan, muskullar yog' kislotalarni oksidlay boshlaydi, bu esa qonda keton tanachalari ko'tarilishiga imkon beradi va ulardan bosh miya energiya sifatida foydalana boshlaydi.",
    },
    {
      q: "Yog' kislotalari har qanday vaqtda ham muhim energiya manbayi bo'lmagan to'qima qaysi?",
      a: ["Jigar", "Bosh miya", "Skelet muskuli", "Qizil qon hujayralari"],
      correct: 3,
      explanation:
        "Yog' kislotalarining oksidlanishi mitoxondriyada kechadi. Qizil qon hujayralarida mitoxondriya yo'qligi sababli ular yog' kislotalaridan foydalana olmaydi. Bosh miya gematoensefalitik baryer orqali ko'pchilik yog' kislotalarni o'ziga transport qila olmaydi (almashinmaydigan yog' kislotalari bundan istisno), shu sababli miya ham yog' kislotalaridan energiya sifatida foydalana olmaydi, biroq o'zining yog' kislotalarini sintezlab, kerak bo'lsa oksidlashi mumkin. Qizil qon hujayralari esa mitoxondriyasi yo'qligi sababli yog' kislotalaridan umuman foydalana olmaydi.",
    },
    {
      q: "Uzoq davom etgan ochlikda aminokislotalardan qondagi glyukoza miqdorini saqlab turishda foydalanadigan to'qima qaysi?",
      a: ["Jigar", "Bosh miya", "Skelet muskuli", "Qizil qon hujayralari"],
      correct: 0,
      explanation:
        "Jigar aminokislotalardan glyukoneogenez orqali glyukoza hosil qilib, qonga chiqaradi. Bundan tashqari glyukoneogenez uchun sut kislota (eritrotsitlarda glyukoza metabolizmida hosil bo'luvchi) va glitserol (triatsilglitserol erkin yog' kislotalariga va glitserolga parchalanishidan hosil bo'lgan) manba hisoblanadi. Na bosh miya, na skelet muskuli, na qizil qon hujayralari glyukozani qon aylanish tizimiga eksport qila olmaydi.",
    },
    {
      q: "Muskul laktatini boshqa to'qimalar uchun energiya manbayiga aylantiradigan to'qima qaysi?",
      a: ["Jigar", "Bosh miya", "Skelet muskuli", "Qizil qon hujayralari"],
      correct: 0,
      explanation:
        "Jismoniy ish bajarayotgan muskul laktat hosil qiladi va u jigarda glyukoneogenez orqali glyukozaga aylanadi. Qondagi glyukoza qizil qon hujayralari va boshqa to'qimalarda oksidlanadi. Faqatgina jigar va buyrak (kam miqdorda) boshqa to'qimalar uchun qonga erkin glyukoza chiqaradi.",
    },
    {
      q: "Kam harakat kasbga ega yosh ayol (bo'yi 1.6 m, vazni 50 kg) shifokor tavsiya qilgan mashqlarni bajarmaydi. Ovqatlanish bo'yicha anamnezida kuniga o'rtacha 100 gr uglevod, 20 gr oqsil va 40 gr yog'dan iborat taom qabul qilishini ko'rsatyapti. — Ayolning TVI ni toping?",
      a: ["16.5", "17.5", "18.5", "19.5", "20.5"],
      correct: 3,
      explanation:
        "TVI insonning tana vaznini (kg) bo'yining (m) kvadratiga bo'lish orqali hisoblanadi. Bu ayol uchun 50/1.6² = 19.5.",
    },
    {
      q: "Kam harakat kasbga ega yosh ayol (bo'yi 1.6 m, vazni 50 kg) shifokor tavsiya qilgan mashqlarni bajarmaydi. Ovqatlanish bo'yicha anamnezida kuniga o'rtacha 100 gr uglevod, 20 gr oqsil va 40 gr yog'dan iborat taom qabul qilishini ko'rsatyapti. — Shu ayolning TVI ga ko'ra qaysi klassifikatsiyaga mansub ekanligini toping?",
      a: [
        "Kam vaznlik",
        "Normal oraliq",
        "Ortiqcha vazn",
        "Semizlik I daraja",
        "Semizlik II daraja",
      ],
      correct: 1,
      explanation:
        "1.2-jadvalga ko'ra ayolning 19.5 bo'lgan TVI normal holatning pastki chegarasida joylashadi. Vazn yetishmasligi TVI 18.5 dan kam bo'lsa, ortiqcha vazn esa 25 va 30 oralig'idagi holat. TVI 30 va 35 oralig'ida bo'lsa I darajali semizlik, 35 va 40 oralig'ida bo'lsa II darajali semizlik tasnifiga kiradi.",
    },
    {
      q: "Kam harakat kasbga ega yosh ayol (bo'yi 1.6 m, vazni 50 kg) shifokor tavsiya qilgan mashqlarni bajarmaydi. Ovqatlanish bo'yicha anamnezida kuniga o'rtacha 100 gr uglevod, 20 gr oqsil va 40 gr yog'dan iborat taom qabul qilishini ko'rsatyapti. — Bu ayol har kuni qancha kaloriya energiya qabul qiladi?",
      a: ["1440", "1340", "940", "840", "640"],
      correct: 3,
      explanation:
        "Ayol uglevoddan 400 kkal (100 g x 4 kkal/g), oqsildan 80 kkal (20 g x 4 kkal/g) va yog'dan 360 kkal (40 g x 9 kkal), umumiy 840 kkal qabul qiladi.",
    },
    {
      q: "Kam harakat kasbga ega yosh ayol (bo'yi 1.6 m, vazni 50 kg) shifokor tavsiya qilgan mashqlarni bajarmaydi. Ovqatlanish bo'yicha anamnezida kuniga o'rtacha 100 gr uglevod, 20 gr oqsil va 40 gr yog'dan iborat taom qabul qilishini ko'rsatyapti. — Bu vaznda ayolning har kunlik taqribiy KESi kaloriyasi qancha (kkal)?",
      a: ["1200", "1560", "1800", "2640", "3432"],
      correct: 1,
      explanation:
        "Ayolda KES 1560 kkal ga teng. KES = AMA + jismoniy faoliyatga sarflanuvchi energiya. Uning vazni 50 kg. Unda AMA (taxminan 24 kkal/kg) kuniga 50 kg x 24 = 1200 kkal ga teng. Unga gipodinamik ish faoliyati uchun 360 kkal qo'shimcha energiya kerak (AMAning 30% i). Shuning uchun unga har kuni 1200+360=1560 kkal energiya kerak.",
    },
    {
      q: "Kam harakat kasbga ega yosh ayol (bo'yi 1.6 m, vazni 50 kg) shifokor tavsiya qilgan mashqlarni bajarmaydi. Ovqatlanish bo'yicha anamnezida kuniga o'rtacha 100 gr uglevod, 20 gr oqsil va 40 gr yog'dan iborat taom qabul qilishini ko'rsatyapti. — Ayolning vazni, parhezi va gipodinamik hayot tarziga asoslangan holatda quyida berilganlarning qaysi biri shifokor tomonidan berilgan to'g'ri tavsiya hisoblanadi?",
      a: [
        "Jismoniy faollikni oshirish",
        "Parhezida oqsilni kamaytirish",
        "Qabul qilinadigan kaloriyalarini oshirish",
        "Yog'ni o'zining umumiy qabul qiladigan kaloriyasining 30% idan kamaytirish",
        "Qabul qiladigan umumiy kaloriyasini kamaytirish",
      ],
      correct: 2,
      explanation:
        "Qabul qilayotgan kaloriyasi (840 kkal/kun) uning sarflayotganidan (1560 kkal/kun) kam va ayol vazn yo'qotyapti. U qabul qilayotgan kaloriyalarini ko'paytirishi kerak. Jismoniy mashq uning vazni ko'proq yo'qolishiga olib keladi. Ehtimol unda manfiy azot balansi kechayapti, chunki u kam oqsil iste'mol qilyapti (kuniga 0.8 g/kg oqsil qabul qilish tavsiya etiladi). Biroq qabul qilayotgan yog' umumiy kaloriyaning 43% ini tashkil etadi va yog'larning tavsiya qilingan miqdori umumiy kaloriyaning 30% idan kam bo'lishi kerak. U umumiy qabul qilayotgan kaloriyalarini iste'mol qiladigan uglevod va oqsillarini oshirish orqali ko'paytirishi kerak (qabul qilayotgan yog'lar miqdorini kamaytirish tavsiya etilmaydi).",
    },
    {
      q: "25 yoshli, taxminan vazni 70 kg atrofidagi erkak kimsasiz orolda (kema halokati sababli) qolib ketgan, yeguligi yo'q, faqat ichimlik suvi mavjud. — Quyida berilgan zaxira energiya manbalaridan qaysi birining erkakni ko'p miqdordagi kaloriya bilan ta'minlash ehtimoli eng kam?",
      a: [
        "Yog' to'qimasi triatsilglitseroli",
        "Jigar glikogeni",
        "Muskul glikogeni",
        "Muskul oqsili",
        "Yog' to'qimasi triatsilglitseroli va jigar glikogeni",
      ],
      correct: 1,
      explanation:
        "O'rtacha (70 kg) erkak yog' to'qimasi 15 kg yog'dan yoki 135000 kkal kaloriyadan iborat. Jigar glikogeni 0.08 kg uglevoddan (320 kkal), muskul glikogeni 0.15 kg uglevoddan (600 kkal) iborat. Bundan tashqari 6 kg atrofidagi muskul oqsili (24 000 kkal) ham energiya sifatida ishlatilishi mumkin. Shuning uchun jigar glikogeni mavjud kaloriyalarning eng kami hisoblanadi.",
    },
    {
      q: "25 yoshli, taxminan vazni 70 kg atrofidagi erkak kimsasiz orolda (kema halokati sababli) qolib ketgan, yeguligi yo'q, faqat ichimlik suvi mavjud. — Bu erkakda zaxira energiya manbayining asosiy qismini triatsilglitserol tashkil etadi (muskuldagi oqsil o'rniga), chunki triatsilglitserol zaxirasi oqsilga qaraganda ... dan iborat bo'ladi?",
      a: [
        "Ko'proq kaloriya va ko'proq suv",
        "Kamroq kaloriya va kamroq suv",
        "Kamroq kaloriya va ko'proq suv",
        "Ko'proq kaloriya va kamroq suv",
        "Teng kaloriya va kamroq suv",
      ],
      correct: 3,
      explanation:
        "Yog' to'qimasi muskul oqsiliga qaraganda ko'proq kaloriya va kamroq suvdan iborat. Yog' to'qimasida triatsilglitserol saqlanadi va 9 kkal/g energiya beradi. Bu to'qimada 15% atrofida suv bo'ladi. Muskul oqsili esa 4 kkal/g energiya va 80% suvdan iborat.",
    },
    {
      q: "Ochlik bosqichida quyidagilardan qaysi biri jigarda glyukoneogenez uchun sarflanadi?",
      a: [
        "Glitserol",
        "Toq zanjirli yog' kislotalar",
        "Jigar glikogeni",
        "Keton tanachalar",
        "Almashinmaydigan yog' kislotalar",
      ],
      correct: 0,
      explanation:
        "Laktat, propionat (ma'lum aminokislotalar va toq zanjirli yog' kislotalardan), glitserol (yog' zaxirasidan) va aminokislotalar (muskuldan) uglerodi glyukoneogenez uchun sarflanishi mumkin. Yog' kislota va keton tanachalari to'g'ridan-to'g'ri energiya uchun sarflanadi va glyukoneogenez uchun foydalanilmaydi. Juft zanjirli yog' kislotalar oksidlanishining oxirgi mahsuloti atsetil-KoA bo'lib, u glyukoza sintez qilishda qatnashmaydi. Jigar glikogenoliz orqali glikogendan glyukoza hosil qiladi (bu glyukoneogenez emas).",
    },
    {
      q: "Tibbiyot oliygohi talabasi imtihonga tayyorlandi va 12 soat davomida hech narsa yemadi. Shu nuqtada talaba yirik qutidagi shirinlikni ochadi va barchasini qisqa vaqt ichida yeydi. Quyida berilganlardan qaysi biri yuqoridagi taomning talaba metabolizmiga ta'siri natijasi hisoblanadi?",
      a: [
        "Jigar glikogen zaxirasi qayta to'ldiriladi",
        "Glyukoneogenez darajasi ortadi",
        "Yog' kislotalarining yog' to'qimasidagi triatsilglitserolga aylanishi pasayadi",
        "Qonda glyukagon darajasi ortadi",
        "Glyukoza miyada laktatga, eritrotsitlarda esa CO2 va H2O ga oksidlanadi",
      ],
      correct: 0,
      explanation:
        "Uglevodlardan (shirinlik asosiy tarkibiy qismi) iborat taom iste'mol qilingandan keyin jigar va muskulda glikogen, yog' to'qimasida triatsilglitserol zaxiralanadi. Qonda glyukoza miqdori ko'tarilishi bilan me'da osti bezidan insulin sekretsiyasi oshadi, glyukagon miqdori pasayadi. Qonda glyukoza balandligi sababli jigar glyukoza sintezlashiga boshqa ehtiyoj yo'q va glyukoneogenez pasayadi. Insulin/glyukagon nisbatining o'zgarishi triatsilglitserollar parchalanishini ham kamaytiradi va ularning sintezini oshiradi. Bosh miya glyukozani CO2 va H2O gacha oksidlaydi, qizil qon hujayralari esa glyukozadan laktat hosil qiladi, chunki qizil qon hujayralarida aerob metabolizm bo'lmaydi.",
    },
    {
      q: "II tip qandli diabet tashxisi yaqinda qo'yilgan bemor vazn kamaytirishga harakat qilmoqda va uyqudan oldin har kechki ovqatdagi kaloriyalarni kamaytirdi. Tungi ochlik davrida bemor quyidagi energiya zaxiralarining qaysilarini sarflashi mumkin? (tartib: Yog' to'qimasi triatsilglitseroli / Jigar glikogeni / Muskul glikogeni / Muskul oqsili — Ha/Yo'q). Eng mos keluvchi javobni tanlang.",
      a: [
        "Ha, Ha, Yo'q, Yo'q",
        "Ha, Yo'q, Ha, Yo'q",
        "Ha, Ha, Yo'q, Ha",
        "Yo'q, Yo'q, Ha, Ha",
        "Yo'q, Ha, Yo'q, Yo'q",
        "Yo'q, Yo'q, Ha, Ha",
      ],
      correct: 2,
      explanation:
        "Yog' to'qimasi triatsilglitseroli tanadagi katta energiya zaxirasidir. Jigar glikogeni ochlikning dastlabki soatlarida qondagi glyukoza miqdorini saqlash uchun ishlatiladi. Oqsil chegaralangan miqdorda degradatsiyalanishi va energiya manbayi sifatida foydalanilishi mumkin. Muskul glikogeni muskul qisqarishi uchun oksidlanadi va har qanday holatda ham qonda glyukoza miqdorini saqlashda qatnasha olmaydi.",
    },
    {
      q: "Afrikada qochqinlar lagerida ishlaydigan shifokor qo'l va oyoqlari ozg'in, qorni kengaygan bolalar ko'p sonda ekanligini kuzatdi. Bolalar qon tahlili sog'lom bolalarga solishtirganda quyidagilarning qaysi biri yaqqol past darajada ekanligini ko'rsatadi?",
      a: ["Glyukoza", "Keton tanachalari", "Oqsil", "Yog' kislota", "Glikogen"],
      correct: 2,
      explanation:
        "Bolalarda kvashiorkor — qabul qilinayotgan kaloriyalar yetarli miqdorda, lekin oqsil yetishmasligi sababli kelib chiqadigan kasallik — namoyon bo'lmoqda. Buning oqibatida jigarda plazma albumini kam ishlab chiqariladi (chunki almashinmaydigan aminokislotalar yetarli emas). Bu qon va intersitsial bo'shliqdagi osmotik balans buzilishiga olib keladi, natijada shish (kengaygan, shishgan qorin) kuzatiladi. Bolalarda degradatsiyalanayotgan muskul oqsili yangi oqsil sinteziga sarflanadi, bu esa qo'l-oyoqlar ingichkaligiga olib keladi. Qonda keton tanachalari va yog' kislotalar normal yoki biroz ko'tarilgan bo'ladi, chunki qabul qilinayotgan kaloriyalar yetarli. Glikogen faqat biroz past bo'lishi mumkin, glyukoza darajasi esa glyukoneogenez hisobiga normaga yaqin saqlanadi.",
    },
    {
      q: "Kasallik tarixida yurak hurujlariga nasliy moyilligi bor va katta qorin solgan 50 yoshli bemor shifokoridan qanday qilib ortiqcha vazndan qutilish bo'yicha maslahat olish uchun keldi. Uning vazni 100 kg va bo'y uzunligi 1.85 m. Uning hayot tarzini gipodinamik hayot tarzi deyish eng yaxshi tarif bo'la oladi. — Bemorning TVI ini toping?",
      a: ["24", "29", "31", "36", "40"],
      correct: 1,
      explanation:
        "TVI = kg/m². Ushbu klinik holatda 100/1.85² va bu 29 ga teng.",
    },
    {
      q: "Kasallik tarixida yurak hurujlariga nasliy moyilligi bor va katta qorin solgan 50 yoshli bemor shifokoridan qanday qilib ortiqcha vazndan qutilish bo'yicha maslahat olish uchun keldi. Uning vazni 100 kg va bo'y uzunligi 1.85 m. Uning hayot tarzini gipodinamik hayot tarzi deyish eng yaxshi tarif bo'la oladi. — Quyidagi kategoriyadan shu bemor uchun mosini toping?",
      a: [
        "Vazn kamligi",
        "Normal",
        "Ortiqcha vazn",
        "Semizlik I",
        "Semizlik II",
      ],
      correct: 2,
      explanation:
        "Bemorda TVI 29 bilan ortiqcha vazn kategoriyasiga kiradi. TVI 18.5 dan kamligi kam vaznlik, 18.5 dan 24.9 gacha sog'lom oraliq, 25 dan 30 gacha ortiqcha vazn, 30 dan yuqori ko'rsatgichlar semizlik kategoriyasiga kiradi. Semizlik I sinfi 30-35 oralig'ida, II sinfi 35-40 oralig'ida. Semizlik III sinfi (morbid semizlik) TVI 40 va undan yuqori bo'lganlarga qo'yiladi.",
    },
    {
      q: "Kasallik tarixida yurak hurujlariga nasliy moyilligi bor va katta qorin solgan 50 yoshli bemor shifokoridan qanday qilib ortiqcha vazndan qutilish bo'yicha maslahat olish uchun keldi. Uning vazni 100 kg va bo'y uzunligi 1.85 m. Uning hayot tarzini gipodinamik hayot tarzi deyish eng yaxshi tarif bo'la oladi. — Bemor bu vaznni saqlab turish uchun har kuni qancha kilokaloriya qabul qilishi kerak?",
      a: ["2400", "2620", "3120", "3620", "3950"],
      correct: 2,
      explanation:
        "KES = AMA + jismoniy faollikka sarflanadigan energiya. Bemor uchun AMA = 24 kkal/kg/kun x 100 kg = 2400 kkal/kun. Bemor gipodinamik hayot tarziga ega bo'lgani sababli jismoniy faollik darajasi AMA ning 30% iga teng, ya'ni 720 kkal/kun. Umumiy kunlik energiya ehtiyoji 2400+720=3120 kkal/kun. Agar bemor kuniga 3000 kkal dan kam iste'mol qilsa yoki jismoniy faolligini oshirsa, ozadi.",
    },
    {
      q: "Kasallik tarixida yurak hurujlariga nasliy moyilligi bor va katta qorin solgan 50 yoshli bemor shifokoridan qanday qilib ortiqcha vazndan qutilish bo'yicha maslahat olish uchun keldi. Uning vazni 100 kg va bo'y uzunligi 1.85 m. Uning hayot tarzini gipodinamik hayot tarzi deyish eng yaxshi tarif bo'la oladi. — Bu bemorda quyida berilgan qaysi kasallik paydo bo'lish xavfi balandroq?",
      a: [
        "Qandli diabet I tip",
        "Insulinga rezistentlik sindromi",
        "Gausher kasalligi",
        "Past qon bosimi",
        "O'roqsimon anemiya",
      ],
      correct: 1,
      explanation:
        "Bemorning vazni, yoshi va faoliyatiga ko'ra insulinga rezistentlik sindromi kelib chiqish xavfi juda yuqori. Bu sindrom gipertoniya, II tip qandli diabet, zichligi yuqori lipoproteinlar miqdorining kamayishi, triglitseridlar oshishi, uratlar ko'payishi, plazminogen aktivatorini ingibirlovchi faktor 1 ortishi, jigarning alkogolga bog'liq bo'lmagan gepatosteatozi, markaziy semizlik va tuxumdon polikistozi sindromini (ayollarda) o'z ichiga oladi hamda ateroskleroz erta rivojlanishiga olib keladi. Bemorda I tip QD rivojlanish xavfi yuqori emas, chunki bu holat me'daosti bezi β-hujayralarining avtoimmun zararlanishi natijasi bo'lib, bemorning hayot tarzi avtoimmun jarayon bilan bog'lanmagan. Gausher kasalligi va o'roqsimon anemiya irsiy avtosom-retsessiv kasalliklar bo'lib, ularning paydo bo'lishiga bemorning hayot tarzi ta'sir etmaydi. Bemorning ortib borayotgan vazni qon bosimi oshishiga olib kelishi mumkin, pasayishiga emas.",
    },
    {
      q: "Ochlikning birinchi haftasidan keyin insonda quyidagi metabolik o'zgarishlardan qaysi biri kuzatiladi? (tartib: Bosh miya energiya manbalaridan foydalanishi / Jigar glikogen manbayi [Normaning %i] / Azot balansi / Glyukoneogenez). Eng mos keluvchi javobni toping.",
      a: [
        "Faqat glyukoza / <5 / Musbat / Ingibirlangan",
        "Faqat glyukoza va keton tanachalar / <5 / Manfiy / Aktivlangan",
        "Faqat keton tanachalar / <5 / Manfiy / Ingibirlangan",
        "Yog' kislotalari va keton tanachalar / 50 / Musbat / Aktivlangan",
        "Glyukoza va yog' kislotalari / 50 / Muvozanatda / Ingibirlangan",
      ],
      correct: 1,
      explanation:
        "Uzoq davom etgan ochlikning 3-5-kunlaridan so'ng, miya energiya sifatida glyukozaga qo'shimcha sifatida keton tanachalaridan foydalana boshlaydi. Jigarning glikogen zaxirasi ochlikning dastlabki 30 soatidan so'ng tugaydi. Ozuqa tarkibida oqsil kam bo'lishi manfiy azot balansiga olib keladi. Qondagi glyukoza miqdori glyukoneogenez jarayoni orqali saqlab turiladi, bunda uglerod manbayi sifatida laktat (qizil qon hujayralaridan), glitserol (triatsilglitseroldan) va aminokislotalar (muskul oqsili parchalanishidan) foydalaniladi.",
    },
    {
      q: "Qandli diabet I tip bilan yangi tashxislangan bemor tungi uyquga ketishdan avval insulinni xatolik tufayli katta dozada qabul qildi. Tungi ochlik paytida bemor qaysi energiya manbasidan foydalana oladi? (tartib: Yog' to'qimasi triatsilglitseroli / Jigar glikogeni / Muskul glikogeni / Muskul oqsili — Ha/Yo'q). Eng mos keluvchi javobni tanlang.",
      a: [
        "Ha, Yo'q, Yo'q, Yo'q",
        "Ha, Ha, Ha, Yo'q",
        "Ha, Yo'q, Yo'q, Ha",
        "Yo'q, Ha, Ha, Ha",
        "Yo'q, Yo'q, Yo'q, Yo'q",
        "Yo'q, Ha, Ha, Ha",
      ],
      correct: 4,
      explanation:
        "Ko'p miqdordagi insulin mavjudligida yog' to'qimasi triatsilglitseroli glitserol va yog' kislotaga parchalanmaydi, demak yog' kislotalari boshqa to'qimalar foydalanishi uchun qonga ajralmaydi. Jigar glikogeni insulin yuqori darajasi sababli parchalanmaydi (insulin glikogen sintezini oshiradi) va muskul glikogeni qondagi glyukoza miqdorini saqlab turishda qatnashmaydi. Insulin mavjudligida muskul oqsili ham boshqa to'qimalar energiya sarfini aminokislotalar bilan ta'minlash uchun parchalanmaydi. Bu bemor qondagi glyukoza miqdori pastligi sababli koma holatiga tushib qolishi mumkin, chunki insulin qondagi glyukozaning muskul va yog' hujayralariga transportini stimullaydi va bunda transport tezligi jigar tomonidan glyukoza ajralishidan tez bo'ladi.",
    },
    {
      q: "Quyidagilarning qaysi biri anorexia nervosa, davolanmagan I tip qandli diabet, gipertiroidizm va tropik bo'lmagan spru bilan og'rigan bemorlar uchun mos keluvchi umumiy metabolik xususiyat hisoblanadi?",
      a: [
        "Yuqori AMA",
        "Qonda insulin miqdori yuqoriligi",
        "Vazn yo'qotish",
        "Ozuqalar malabsorbsiyasi",
        "Qonda keton tanachalarining kamayishi",
      ],
      correct: 2,
      explanation:
        "Anoreksiya bo'layotgan bemorlar yetarli ozuqa qabul qilmaganligi, QD I tip bilan og'rigan bemorlarda glyukoza va keton tanachalari siydik bilan chiqib ketganligi, gipertiroidizmda esa AMA oshib ketganligi va tropik bo'lmagan spruda ichaklardan ozuqalarning so'rilmaganligi sababli bu bemorlarning barchasi vazn yo'qotadi. Davolanmagan I tip QD mavjud bemorlarda insulin kamligi sababli keton tanachalar miqdori yuqori bo'ladi, anoreksiya va spruda ham glyukoneogenez prekursorlari kamligi sababli keton tanachalari ko'tarilgan bo'lishi mumkin. AMA ning ko'tarilishi faqat gipertiroidizmda kuzatiladi. Ozuqaviy malabsorbsiya faqatgina anoreksiya va tropik bo'lmagan spruda kuzatiladi.",
    },
    {
      q: "18 yoshli I tip QD bilan og'rigan bemor 2 kundan beri insulin qabul qilmayapti. Uning qonida glyukoza miqdori 600 mg/dL (normal ko'rsatgich: 80-100 mg/dL). Quyidagi hujayralardan qaysi biri shu holatda ham qonidagi glyukozani energiya sifatida sarflay oladi?",
      a: [
        "Bosh miya hujayralari",
        "Muskul hujayralari",
        "Yog' to'qimasi hujayralari",
      ],
      correct: 0,
      explanation:
        "Muskul va yog' to'qimasi hujayralari glyukozani hujayra ichiga transporti stimullanishi uchun insulinni talab etadi. Gematoensefalitik baryerdagi glyukoza transportyorlari esa doim mavjud va insulinga bog'liq emas. Shunday qilib, miya qondagi glyukozadan har doim foydalana oladi, biroq muskul va yog' to'qimasi hujayraga glyukoza transporti uchun insulinga qaramdir.",
    },
    {
      q: "Qutqaruv guruhi tomonidan topilgan bemor shoshilinch yordam shifoxonasiga olib kelindi. U alpinist, tog'da kutilmaganda boshlangan qor bo'ronida qolib ketgan va g'orda jon saqlab qolgan. 6 kun davomida ovqatsiz qolgan. Bu sharoitga moslashish uchun unda qaysi metabolik jarayon pasayish o'rniga kuchaygan?",
      a: [
        "Miyaning glyukozadan foydalanishi",
        "Muskulning keton tanachalaridan foydalanishi",
        "Qizil qon hujayralarining glyukozadan foydalanishi",
        "Bosh miyaning keton tanachalaridan foydalanishi",
        "Qizil qon hujayralari keton tanachalaridan foydalanishi",
        "Muskulning glyukozadan foydalanishi",
      ],
      correct: 3,
      explanation:
        "Uzoq davom etgan ochlikda muskul keton tanachalaridan foydalanishni kamaytiradi va ularning qondagi miqdori ko'tariladi. Bosh miya energiya uchun keton tanachalardan foydalanadi va glyukozadan kamroq foydalanib, glyukoneogenezga ehtiyojni kamaytiradi. Shu yo'sinda glyukoneogenez prekursorlari bilan ta'minlash uchun bo'ladigan degradatsiyadan muskul oqsili saqlab qolinadi. Qizil qon hujayralari keton tanachalaridan foydalana olmaydi va glyukozani utilizatsiyalaydi, shu sababdan qizil qon hujayralarining glyukozadan foydalanishi bu hodisalar davomida o'zgarishsiz bo'ladi.",
    },
    {
      q: "27 yoshli erkak Yosemit milliy bog'ida hayking qilayotganda adashib qoldi. U 8 kundan so'ng topildi. Qutqarilishidan avval hech qanday ovqat yemagan, faqat suv ichgan. — Bu bemor topilganda uning qonda glyukoza miqdorini normal saqlash uchun uglerod manbayi quyidagi moddalardan qaysi biri bo'lgan?",
      a: [
        "Jigar glikogeni",
        "Muskul glikogeni",
        "Yog' kislotalar",
        "Triatsilglitserol",
        "Keton tanachalar",
      ],
      correct: 3,
      explanation:
        "Keltirilgan javob variantlari orasida triatsilglitserolning glitserol qismi glyukoneogenez uchun asosiy uglerod manbayi bo'ladi. Jigar glyukoneogenezi uchun laktat (qizil qon hujayralaridan), aminokislotalar (muskuldan), glitserol (yog' to'qimasidan) substrat bo'ladi. Yog' kislotalar energiya uchun foydalaniladi, biroq ularning uglerodidan glyukoza sintezlana olmaydi. Ochlik boshlanganidan 30 soat o'tib jigarda glikogen zaxiralari sarflanib bo'ladi, muskul glikogen zaxirasi esa faqatgina muskulning o'z energiya ehtiyoji uchun sarflanadi (qonda glyukoza miqdorini saqlab turish uchun emas).",
    },
    {
      q: "27 yoshli erkak Yosemit milliy bog'ida hayking qilayotganda adashib qoldi. U 8 kundan so'ng topildi. Qutqarilishidan avval hech qanday ovqat yemagan, faqat suv ichgan. — Qaysi hujayra energiya manbayi sifatida faqat glyukozadan foydalanadi?",
      a: ["Bosh miya", "Qizil qon hujayrasi", "Gepatotsit", "Yurak", "Muskul"],
      correct: 1,
      explanation:
        "Eritrotsitlarda mitoxondriya yo'q, shuning uchun ular energiya manbayi sifatida faqat glyukozadan foydalanadi (yog' kislota va keton tanachalari oksidlanish uchun mitoxondrial oqsillarni talab etadi). Bosh miya energiya sifatida glyukoza bilan bir qatorda keton tanachalaridan ham foydalanadi. Jigar energiya manbayi sifatida glyukoza, yog' kislota va aminokislotalardan foydalana oladi. Yurak esa glyukoza, yog' kislota, aminokislota va sut kislotadan foydalana oladi.",
    },
    {
      q: "27 yoshli erkak Yosemit milliy bog'ida hayking qilayotganda adashib qoldi. U 8 kundan so'ng topildi. Qutqarilishidan avval hech qanday ovqat yemagan, faqat suv ichgan. — Quyidagilardan qaysi biri u o'tgan 8 kun davomida qabul qilmagan muhim (almashinmaydigan) ozuqa hisoblanadi?",
      a: [
        "Sut kislota",
        "Olein kislota",
        "Stearin kislota",
        "EPK",
        "Palmitin kislota",
      ],
      correct: 3,
      explanation:
        "EPK (20 ta uglerodli beshta qo'sh bog' saqlovchi yog' kislota) eykazonoidlar (prostaglandinlar, leykotriyenlar va tromboksanlar) prekursori bo'lib, baliq yog'ida bo'ladigan almashinmaydigan yog' kislotadan (linolen kislota) olinishi mumkin, shuningdek baliq yog'i bilan ham iste'mol qilinishi mumkin. Sut kislota (laktat) muskul va eritrotsitlarda hosil bo'ladi va muhim (almashinmaydigan) ozuqa emas. Palmitin, olein va stearin kislotalar barcha sutemizuvchilar jigarida normal yog' kislota sintezlash jarayonlarida sintezlanadi.",
    },
    {
      q: "27 yoshli erkak Yosemit milliy bog'ida hayking qilayotganda adashib qoldi. U 8 kundan so'ng topildi. Qutqarilishidan avval hech qanday ovqat yemagan, faqat suv ichgan. — Bu bemorning miyasi quyidagilardan qaysi birini parchalanish (katabolizm)dan himoya qilish uchun glyukoza sarfini pasaytirib, ketonlar sarfini oshiradi?",
      a: [
        "Muskul glikogeni",
        "Jigar glikogeni",
        "Muskul oqsili",
        "Qizil qon hujayrasi (gemni saqlash uchun)",
        "Yog' to'qimasidagi triatsilglitserol",
      ],
      correct: 2,
      explanation:
        "Muskul to'qimasini (aminokislotalar glyukoneogenez uchun foydalaniladi) saqlab qolish uchun bosh miya uzoq davom etgan ochlikda o'zining energiya ehtiyojlarining bir qismi uchun keton tanachalarni sarflaydi. Jigar glikogen zaxirasi tasvirlangan holatlarda tugagan bo'ladi. Gem energiya sifatida foydalanilmaydi, parchalansa bilirubin hosil qiladi va u ham energiya yoki keton tana hosil qilish uchun foydalanilmaydi. Muskul glikogeni qondagi glyukoza miqdoriga hissa qo'sha olmaydi, chunki muskul to'qimasida erkin glyukozani hosil qilishga imkon beradigan ferment mavjud emas.",
    },
    {
      q: "27 yoshli erkak Yosemit milliy bog'ida hayking qilayotganda adashib qoldi. U 8 kundan so'ng topildi. Qutqarilishidan avval hech qanday ovqat yemagan, faqat suv ichgan. — Quyida berilgan qaysi laboratoriya testi bemorda umumiy oqsil yetishmovchiligi mavjudligi yoki yo'qligiga aniqlik kiritadi?",
      a: [
        "Albumin",
        "Qon mochevinasi azoti (QMA)",
        "Kreatinin",
        "Ferritin",
        "Kreatin fosfokinaza (KFK)",
      ],
      correct: 0,
      explanation:
        "Albumin, spetsifik bo'lmasa ham, umumiy oqsil yetishmovchiligini baholash standarti deb qabul qilingan. Albumin jigar tomonidan ishlab chiqariladi va qonda aniqlanadi hamda yog' kislotalari va boshqa gidrofob molekulalar uchun nospetsifik tashuvchi bo'lib xizmat qiladi. Aminokislotalar miqdori chegaralanganida jigar ularning sintezini pasaytiradi va sirkulyatsiyadagi albumin kamayishi jigar disfunksiyasini ko'rsatadi. Ferritin to'qimalarda temir zaxiralovchi oqsil bo'lib, uning sirkulyatsiyadagi ko'rsatgichi doimo past darajada bo'ladi. Kreatinin kreatin fosfat (muskuldagi energiya zaxirasi) parchalanish mahsuloti bo'lib, uning sirkulyatsiyada mavjudligi buyrak tomonidan kreatinin klirensini aks ettiradi va yuqori ko'rsatgichi buyrak yetishmovchiligini ko'rsatadi. Kreatinin fosfokinaza muskul fermenti bo'lib, sirkulyatsiyaga faqatgina muskul shikastlanishi mavjud bo'lsa chiqadi. QMA mochevina hosil bo'lishidagi aminokislota metabolizmi jadalligini ko'rsatadi, biroq oqsil yetishmovchiligini ko'rsatmaydi.",
    },
  ],
  m2: [
    {
      q: "Rasmda ko'rsatilgan birikmada A deb belgilangan bog' fosfat guruhi bilan karbonil (C=O) guruhi o'rtasida, B deb belgilangan bog' esa fosfat guruhi bilan metoksi (-OCH3) guruhi o'rtasida joylashgan. Ko'rsatilgan birikmada A va B deb belgilangan bog'lanishlar quyidagilarning qaysi biri sifatida yaxshiroq tavsiflanadi?",
      a: [
        "A: Angidrid, B: Murakkab efir",
        "A: Murakkab efir, B: Angidrid",
        "A: Oddiy efir, B: Murakkab efir",
        "A: Murakkab efir, B: Oddiy efir",
        "A: Fosfodiefir, B: Angidrid",
        "A: Angidrid, B: Fosfodiefir",
      ],
      correct: 0,
      img: "40-bet",
      explanation:
        "A bog' karboksiklik kislotani fosfat kislota bilan reaksiyaga kirishib H2O ajralib chiqqanda hosil bo'luvchi angidrid bog'. B bog' fosfat kislota spirt (metanol) bilan reaksiyaga kirishganda suv ajralib chiqadi va fosfat kislota efiri hosil bo'ladi. Efir bog'lanishi –C-O-P– bog'lanishda ham, fosfodiefir (fosfat guruh nuklein kislota tuzilishiga o'xshash ikkita efir bog'lanishni o'z ichiga oladi) bog'lanishda ham uchramaydi.",
    },
    {
      q: "β-gidroksibutirat va atsetoatsetat keton tanachalari hisoblanadi va uzoq vaqt ochlik paytida jigarda sintezlanadi. Bu ikki keton tanachalari sintezlanadigan joy mitoxondriyadagi sharoitga qarab osonlik bilan bir-biriga aylanadi. β-gidroksibutiratni atsetoatsetatga aylanishi qaysi reaksiya orqali sodir bo'ladi?",
      a: [
        "Oksidlanish",
        "Qaytarilish",
        "Degidratlanish",
        "Degidroksillanish",
        "Dekarboksillanish",
      ],
      correct: 0,
      img: "40-bet",
      explanation:
        "β-gidroksibutirat atsetoatsetatga aylanganda spirt ketonga oksidlanadi (β-uglerod o'zgarishiga qarang, 3-uglerod). Garchi texnik jihatdan faqat atsetoatsetat tarkibida keton mavjud bo'lishiga qaramasdan ushbu birikmalar klassik ravishda keton tanalari sifatida tavsiflanadi.",
    },
    {
      q: "Kuchsiz kislota HK eritmasining pH i pKa ga teng bo'lsa, shu holatda tuz va kislota [K⁻] / [HK] konsentratsiyasi nisbati quyidagilardan qaysi biriga mos keladi?",
      a: ["0", "1", "2", "3", "4"],
      correct: 1,
      explanation:
        "pKa — bu funksional guruh 50% dissotsiatsiyalangandagi pH, bu holda pH da [K⁻] = [HK]. Henderson-Hasselbalch tenglamasi, pH = pKa + log10 [A⁻]/[HA], bu parametrlar orasidagi bog'liqlikni beradi. Agar pH = pKa bo'lsa, log10 [K⁻]/[HK] = 0 va [K⁻]/[HK] = 1.",
    },
    {
      q: "Insonlardagi plazma albumini eng ko'p qon oqsili bo'lib, ko'plab vazifalari bor va bufer tizim sifatida qonning pH ini saqlashni ham o'z ichiga oladi. Quyidagilardan qaysi biri sababli albumin buferdek ta'sir qila oladi?",
      a: [
        "Chunki oqsilda juda ko'p aminokislotalar bor",
        "Oqsil har xil pKa ga ega bo'lgan turli aminokislota qoldig'ini o'z ichiga oladi",
        "Albuminning amino va karboksil oxirlari fiziologik pH oralig'ida protonlarni qabul qilishi yoki ajratishi mumkin",
        "Albumin tarkibida vodorod va gidroksil ionlaridan foydalanib osonlik bilan gidrolizlanadigan peptid bog'lar mavjud",
        "Albumin α-spirallarida proton qabul qiluvchi va beruvchi juda ham ko'plab vodorod bog'larni o'z ichiga oladi",
      ],
      correct: 1,
      explanation:
        "Oqsillardagi aminokislota qoldiqlarining yon zanjirlari har xil pKa qiymatiga ega funksional guruhlarni o'z ichiga oladi. Shuning uchun ular turli pH muhitlarida proton qabul qilishi yoki berishi mumkin va keng pH spektrida buferlik qila oladi. Har bir polipeptid zanjirda 1 ta N-oxir amino guruh (pKa~9) va 1 ta C-oxir karboksil guruh (pKa~3) bor. Fiziologik pH da bu guruhlar protonlarni qabul qilmaydi ham, ajratmaydi ham, chunki amino terminal guruhi har doim protonlangan, karboksiklik kislotaning karboksil oxiri har doim deprotonlangan bo'ladi. Peptid bog'lari osonlikcha gidrolizlanmaydi va bunday gidroliz buferlikni ta'minlamaydi. Vodorod bog'larida buferlik qobiliyati yo'q, chunki bu bog'lardagi vodorod bog' hosil bo'lgandan keyin protonlarni bermaydi ham olmaydi ham.",
    },
    {
      q: "5-6-savollar quyidagi ketma-ketlikda geksapeptidga asoslangan: D-A-S-E-V-R. Quyidagilardan qaysi biri geksapeptidning C-oxiridagi aminokislota hisoblanadi?",
      a: ["Ala", "Asn", "Asp", "Arg", "Glu"],
      correct: 3,
      explanation:
        "Odatda, peptidlar N-terminal aminokislota bilan chapga, C-terminal aminokislota bilan o'ngga yoziladi. Shuning uchun peptidlar C-terminalida argininni (1 ta harfli kodi R, 3 ta harfli kodi Arg) o'z ichiga oladi. Bu peptidning ketma-ketligi aspartat kislota (D, Asp), alanin (A, Ala), serin (S, Ser), valin (V, Val) va arginin.",
    },
    {
      q: "5-6-savollar quyidagi ketma-ketlikda geksapeptidga asoslangan: D-A-S-E-V-R. Fiziologik pH (7.4) da bu geksapeptidning zaryadlar tarmog'i quyidagilardan qaysi biriga mos keladi?",
      a: ["-2", "-1", "0", "+1", "+2"],
      correct: 1,
      explanation:
        "N-terminal aspartat o'zining N-terminal amino guruhida musbat zaryadga ega va uning yon zanjir karboksil guruhida manfiy zaryad bo'ladi. Fiziologik pH da alanin va serin yon zanjirlari zaryadsiz. Glutamat yon zanjiridagi karboksil guruh hisobiga manfiy zaryadga ega. Valin yon zanjiri gidrofob va zaryadsiz. C-terminal arginin o'zining C-oxir karboksil guruhida manfiy zaryadga ega va yon zanjirida musbat zaryadga ega. Shuning uchun umumiy zaryadlar +2 va -3 yig'indisi -1 ga teng. Ushbu geksapeptidning ichki qismidagi aminokislotalar (alanin, serin, glutamat, valin) peptid bog' shakllantiruvchi amino va karboksil oxirlariga ega va aminokislotalarning ichki guruhlari bilan bog'liq qo'shimcha zaryadlar yo'q.",
    },
    {
      q: "Quyidagi bog'lardan qaysi biri kovalent?",
      a: ["Gidrofob", "Gidrogen", "Disulfid", "Elektrostatik", "Van der Waals"],
      correct: 2,
      explanation:
        "Disulfid bog'lar kovalent bog'larga misol bo'ladi. Suv bilan o'zaro ta'sirni kamaytirish va suvga entropiyani oshirishga imkon berish uchun bo'shliqda gidrofob guruhlar orasida gidrofob ta'sirlar amalga oshadi. Vodorod bog'lar 2 ta elektromanfiy atomlar o'rtasidagi vodorod atomlaridan hosil bo'ladi (kovalent bo'lmagan tarzda qisman zaryadli ta'sir). Elektrostatik o'zaro ta'sirlar to'liq zaryadlangan guruhlarning bir-birini tortishidir. Van der Waals o'zaro aloqalari spetsifik bo'lmagan ikki atomning bir-biriga ma'lum masofaga yaqinlashganida sodir bo'luvchi o'zaro aloqa.",
    },
    {
      q: "Oqsillarni zaryadi orqali ajratishning usullaridan biri mos keluvchi gelsimon moddadan o'tkazish. Agar shunday gelga normal HbA va HbS joylashtirilsa, qaysi molekula gelning musbat qutbiga tezroq migratsiya qiladi?",
      a: [
        "HbA",
        "HbS",
        "Ikkisi ham bir xil zaryadga ega va migratsiya qilishda farq yo'q",
      ],
      correct: 0,
      explanation:
        "O'roqsimon anemiyada E6V β-globin zanjirda mutatsiya bo'ladi. Kasal Hb molekulasi tetramerdagi 2 ta β-zanjirlarda glutamat o'rniga valinga ega bo'ladi. Boshqa barcha aminokislotalar normal Hb ga solishtirganda bir xil va kasal variantida 2 ta manfiy zaryad kamroq bo'ladi. Bu shuni anglatadiki, normal Hb gelning musbat maydoniga qarab tezroq harakat qiladi, chunki u HbS ga qaraganda ko'proq manfiy zaryadga ega.",
    },
    {
      q: "Fermentning faol joyi ko'rsatilgan quyidagi molekulalar to'plamidan qaysi biriga bog'lanadi? (jadval: Reaksiya substrati / Allosterik ingibitorlar / Raqobatli ingibitorlar / Raqobatsiz ingibitorlar tartibida Ha/Yo'q)",
      a: [
        "Ha, Ha, Ha, Ha",
        "Ha, Yo'q, Ha, Ha",
        "Ha, Yo'q, Ha, Yo'q",
        "Yo'q, Yo'q, Yo'q, Yo'q",
        "Yo'q, Ha, Yo'q, Ha",
      ],
      correct: 2,
      explanation:
        "Faol qism ferment o'zining uch o'lchamli konfiguratsiyasiga buklanganda shakllanadi va birlamchi ketma-ketlikda bir-biridan uzoq bo'lgan aminokislota qoldiqlari bo'lishi mumkin. Substrat molekulalari va raqobatbardosh ingibitorlar (faol qismga bog'lash uchun substrat bilan raqobatlashish orqali) faol qismga birikib ferment faolligini pasaytiradi. Allosterik ingibitorlar esa raqobatbardosh bo'lmagan fermentlar kabi faol qismdan boshqa qismga birikadi (Km ga ta'sir etmasdan Vmax ni kamaytiradi).",
    },
    {
      q: "Quyidagi reaksiyani katalizlovchi ferment 4 mM substrat bilan (A birikmada) aralashtirildi: E+A ⇄ EA → E+P. Mahsulotni dastlabki hosil bo'lish darajasi Vmax ning 25% iga teng. Quyidagilardan qaysi biri fermentning Km iga mos keladi?",
      a: ["2 mM", "4 mM", "9 mM", "12 mM", "25 mM"],
      correct: 3,
      explanation:
        "Michaelis-Menten tenglamasi υ = (Vmax x [S]) / (Km + [S]). Bunda tezlik (υ) = ¼ Vmax va [S] = 4 mM. Shuning uchun ¼ Vmax = (Vmax x 4) / (Km + 4). Qachonki Km uchun tenglama yechilganda, Km = 12 mM.",
    },
    {
      q: "Jigarning glyukokinaza fermenti glyukozani glyukoza 6-fosfatga fosforillanishini katalizlaydi. Glyukoza uchun Km 7 mM ga teng. Glyukozaning ochlik paytida qondagi miqdori 5 mM va jigarda uglevodga boy ovqat yegandan keyin 20 mM gacha ko'tarilishi mumkin. Shuni hisobga olgan holda och inson agar uglevodga boy ovqat yesa, glyukokinaza reaksiyasining tezligi o'zgarishiga mos javobni toping.",
      a: [
        "Vmax ning 50% idan kam holda qoladi",
        "Vmax ning 80% idan yuqori",
        "Vmax ning 50% idan kam holatdan 50% idan ko'p holatga oshadi",
        "Vmax ning 50% idan yuqori holatdan 50% idan kam holatga pasayadi",
        "Vmax holatda qoladi",
      ],
      correct: 2,
      explanation:
        "Ushbu muammoni hal qilishning eng yaxshi yo'li Michaelis-Menten tenglamasi va ochlik hamda to'qlik paytidagi tezlikni (eng yuqori tezlik funksiyasi kabi) taqqoslashdir. Ochlik paytida [S] = 5 mM, Km = 7 mM, υ = (5 x Vmax)/(7+5) = 42% Vmax. To'qlik paytida [S] = 20, Km = 7 mM, υ = (20 x Vmax)/(7+20) = 74% Vmax. Glyukokinaza to'qlik paytida ochlik paytdagiga qaraganda faolroq, va tezlik Vmax ning 50% idan kamroq holatdan Vmax ning 50% idan ko'pga ko'tariladi.",
    },
    {
      q: "Malonat Krebs siklining asosiy fermenti bo'lgan suksinat degidrogenazani raqobatbardosh ingibitori hisoblanadi. Malonatning borligi quyida berilgan yo'llardan qaysi biri orqali suksinat degidrogenazaning kinetik xususiyatlariga ta'sir eta oladi?",
      a: [
        "Vmax ga ta'sir etmasdan joriy Km ni oshirish",
        "Vmax ga ta'sir etmasdan joriy Km ni tushirish",
        "Joriy Km ga ta'sir etmasdan Vmax ni tushirish",
        "Joriy Km ga ta'sir etmasdan Vmax ni oshirish",
        "Vmax va Km ni tushirish",
      ],
      correct: 0,
      explanation:
        "Raqobatbardosh ingibitorlar substrat bilan fermentning faol qismiga birikishda ko'rinadigan Km ni oshirishda raqobatlashadi (ingibitor mavjud bo'lganda, Vmax ning ½ qismiga erishish uchun substratning yuqori konsentratsiyasi talab qilinadi, chunki substrat faol qismga bog'lanish uchun ingibitor bilan raqobatlashadi). Substrat kontsentratsiyasi oshgani sayin, substrat ingibitor bilan raqobatlashib, uning ingibirlovchi ta'sirini yengib o'tishi mumkin va oxir-oqibat normal Vmax ga erishiladi. Raqobatbardosh bo'lmagan ingibitorlar substratning faol qismga bog'lanishiga ta'sir qilmasdan Vmax ni kamaytiradi, bu holatda Km o'zgarmaydi. Allosterik fermentlarning aktivatorlari Vmax ga ta'sir etmasdan ko'rinadigan Km ni kamaytiradi.",
    },
    {
      q: "Yosh qora tanli yigit tez yordam bo'limiga tanasida kuchli og'riq bilan olib kelindi. Og'riq boshlanganda u kuchli jismoniy mashq qilayotgan edi. Unda bunday holatlar oxirgi 10 yildan beri yiliga 2 marta kuzatilyapti. Qon tahlilida qon hujayralari kamayganligi (anemiya) va disksimon bo'lmagan va kolbasaga o'xshash cho'zilgan g'alati qizil qon hujayralari aniqlandi. Ushbu hujayralar shakli o'zgarishining asosiy sababi quyidagilardan qaysi biri?",
      a: [
        "Oksigenlangan Hb molekulalari orasidagi o'zaro ion ta'sirining kuchayishi",
        "Dezoksigenlangan Hb molekulalari orasidagi o'zaro ion ta'sirining kuchayishi",
        "Oksigenlangan Hb molekulalari orasidagi o'zaro gidrofob ta'sirining kuchayishi",
        "Dezoksigenlangan Hb molekulalari orasidagi o'zaro gidrofob ta'sirining kuchayishi",
        "Oksigenlangan Hb molekulalari fosforillanishining oshishi",
        "Dezoksigenlangan Hb molekulalari fosforillanishining oshishi",
      ],
      correct: 3,
      explanation:
        "Erkak o'roqsimon anemiya kasaliga chalingan, uning Hb i normal α zanjirga va mutatsiyalangan β-zanjirga ega. HbA β-zanjiri 6-o'rindagi glutamat HbS da valinga almashgan. Valin gidrofob yon zanjirga ega, glutamat esa kislotali yon zanjirni o'z ichiga oladi. Kislorod kam bo'lgan sharoitda (juda kuchli jismoniy mashq) HbS molekulalari β-zanjirdagi valin va boshqa HbS molekulasining gidrofob qismi o'rtasida o'zaro gidrofob ta'sir tufayli polimerlanadi. Kislorod yuqori bo'lgan sharoitda esa β-zanjirdagi valin molekula yuzasida bo'lmaydi va boshqa HbS molekulasi gidrofob qismi bilan o'zaro aloqa qila olmaydi. HbS bir marta polimerlanganda eritrotsitlarni deformatsiyalovchi va o'roqsimon shakl beruvchi qattiq tayoqcha hosil qiladi. Shikastlangan eritrotsit shakli tiklanishi va torroq kapillarlardan o'tishi oson bo'lmaydi va bemorning og'rig'iga sabab bo'luvchi tananing ma'lum bir qismida kislorod yo'qolishiga olib keladi. O'roqsimon shaklga kelib qolish HbS monomerlari fosforillanishi yoki HbS molekulalari orasidagi o'zaro ion ta'sirning oshishi yoki tushishi hisobiga kelib chiqmaydi.",
    },
    {
      q: "Bir kishi Mexiko shahriga (shahar 7350 fut balandlikda) tashrif buyurdi. U to'qimalarga yetarli kislorod olishi qiyinligi tufayli nafas olishda qiynalmoqda. Quyidagi muolajalardan qaysi biri Hb ni kislorodni tezroq ajratishiga olib kelishi mumkin?",
      a: [
        "Metabolik alkalozga olib keluvchi dorilarni qabul qilish",
        "BFG hosil bo'lishini kuchaytiruvchi dorilarni qabul qilish",
        "Qonda CO2 kamayishiga olib keluvchi giperventilatsiya",
        "Hb β-subbirligi sintezini oshiruvchi dorilarni qabul qilish (γ-genlar sintezini stimullash)",
        "Hb β-subbirligi konsentratsiyasini oshiruvchi dorilarni qabul qilish",
      ],
      correct: 1,
      explanation:
        "Hb kislorodni osonroq chiqarishi uchun gemoglobinning kislorodsiz holatini barqarorlashtirish kerak. Buni pH ni kamaytirish orqali (Bohr effekti), CO2 konsentratsiyasini oshirish orqali yoki BFG miqdorini oshirish orqali amalga oshirish mumkin. Fetal gemoglobin (HbF = α2γ2) HbA ga qaraganda O2 bilan ko'proq birikish moyilligiga ega, shuni inobatga olib, γ-genlarning sintezini stimullash mo'ljallangan ta'sirga teskari bo'ladi. β-zanjir konsentratsiyasini oshirish Hb ga kislorod birikishini kamaytirmaydi (talassemiya kasalligiga olib kelishi mumkin). BFG miqdorining oshishi O2 ni tezroq ajralishiga olib keladi. Metabolik alkaloz qonda pH ko'tarilishiga olib keladi va Hb ning oksidlangan shaklini barqarorlashtiradi. Giperventilatsiya holatida qonda karbonat angidrid miqdorining kamayishi ham oksidlangan Hb barqarorligini oshiradi va to'qimaga kislorod yetkazib berishni qiyinlashtiradi.",
    },
    {
      q: "Ekolog kimsasiz orolda 6 oy yashashga harakat qildi, lekin tajribasini milklaridan qon ketish, tish to'kilishi, son va oyoqlarda qizil dog'lardan aziyat chekishni boshlashi bilan qisqa muddatda yakunladi. Bu inson quyidagi oqsillardan qaysi birining noto'g'ri sintezlanishidan aziyat chekmoqda?",
      a: ["Mioglobin", "Hb", "Kollagen", "Insulin", "Fibrillin"],
      correct: 2,
      explanation:
        "Ekolog vitamin C yetishmasa kelib chiquvchi singa kasalligi bilan og'rigan. Kollagen tarkibidagi prolin va lizin qoldiqlari gidroksillanishi uchun vitamin C va kislorod talab etiladi. Vitamin C yo'q bo'lsa, hosil bo'lgan kollagenni mos ravishda barqarorlashtirib bo'lmaydi (gidroksiprolin yetishmaganligi uchun subbirliklar orasidagi vodorod bog'lar kamayishi tufayli) va osonlik bilan degradatsiyalanadi va milklarda qon ketishi va tish to'kilishi kuzatiladi. Globin sinteziga bilvosita ta'sir qilish mumkin, chunki temirning ichakdan so'rilishi vitamin C bilan stimullanadi, ammo globin gidroksillanish reaksiyasi orqali o'zgartirilmaydi. Insulin va fibrillin sintezi vitamin C ga bog'liq emas.",
    },
    {
      q: "Bemor joniga qasd qilish maqsadida antifriz ichgan va shoshilinch yordam bo'limiga olib kelingan. Bikarbonatdan tashqari, quyidagilardan qaysi biri qondagi pH qiymatini hayotga mos keladigan diapazonda saqlashga yordam beradigan kislotalarning asosiy buferi hisoblanadi?",
      a: ["Hb", "Atsetoatsetat", "β-gidroksibutirat", "Fosfat", "Kollagen"],
      correct: 0,
      explanation:
        "Antifriz etilenglikol (HO-CH2-CH2-OH) ni o'z ichiga oladi. Etilenglikolni iste'mol qilish uni glikol kislota va oksalat kislotani hosil qilganligi tufayli metabolik atsidozga olib keladi. Kislotalar hosil bo'lganda protonlar ajralib chiqadi, va bikarbonat va Hb qondagi asosiy buferlar bo'lib, bu protonlarni qon pH qiymatining pasayishini oldini olish uchun bog'laydi. Atsetoatsetat va β-gidroksibutirat jigarda hosil bo'luvchi keton tanachalari bo'lib, ikkisi ham kislota hisoblanadi va ularning to'planishi ko'pincha metabolik atsidozga sabab bo'ladi (bufer emas, atsidoz manbayi). Fosfat intrasellular bufer tizimi hisoblanadi, lekin uning ahamiyati Hb va bikarbonat kabi muhim emas.",
    },
    {
      q: "Quyidagi aminokislotalardan qaysi biri gemoglobinda (Hb) H+ ni qabul qiladi va Hb ga kislota buferi sifatida faoliyat ko'rsatishiga imkon beradi?",
      a: ["Alanin", "Gistidin", "Serin", "Treonin", "Aspartat"],
      correct: 1,
      explanation:
        "Gistidin yon zanjiri hamma aminokislotalar yon zanjirlari orasida fiziologik pH ga eng yaqin pKa 6.0 ga ega. Oqsillarning mahalliy muhiti bu pKa qiymatini gistidin yon zanjiri Hb bilan Hb bufer tizimdek faoliyat ko'rsatganda protonlarni qabul qiluvchi va ajratuvchi katta guruhni hosil qilganidek 7 ga yaqin ko'tarishi mumkin. Alanin yon zanjiri (metil guruh) protonlarni qabul ham qilmaydi, ajratmaydi ham. Serin va treonin yon zanjiri pKa si 10.0 dan yuqori, shuning uchun fiziologik pH da bu yon zanjirlar doimo protonlangan bo'ladi. Aspartat yon zanjiri pKa si 4.0 atrofida, shuning uchun fiziologik pH da deprotonlangan bo'ladi va kislotali sharoitda hosil bo'layotgan protonlarni qabul qilmaydi.",
    },
    {
      q: "Bemor chang'i uchgani Rokki tog'iga chiqmoqchi va balandlik kasalligiga qarshi atsetazolamid berilgan. Afsuski, bemorda QD I tip kasalligi bor. U ketoatsidozni og'irlashishi bilan kasalxonaga olib kelindi. Quyidagi hujayralardan qaysi birida asetazolamid reaksiyani bloklab, metabolik atsidoz og'irliklariga olib kelgan?",
      a: [
        "Leykotsitlar",
        "Eritrotsitlar",
        "Ko'z gavhari",
        "Gepatotsit",
        "Muskul",
      ],
      correct: 1,
      explanation:
        "Atsetazolamid karbonat angidraza ingibitori bo'lib, asosan eritrotsitlarda topilgan. Eritrotsitlar CO2 va H2O dan karbonat kislota hosil bo'lish reaksiyasini katalizlovchi karbonat angidrazani o'z ichiga oladi. Yuqori balandlik sharoitida karbonat angidrazani ingibirlanishi qon pH i kamayishiga olib keladi, bu esa Hb deoksidlangan shaklini barqarorlashtiradi (buyrakdagi karbonat angidrazani ingibirlanishi orqali siydik bilan bikarbonatlarni ko'p yo'qotilishi tufayli). Biroq QD I tip bilan og'rigan, keton tanachalari ishlab chiqarilishi boshlangan bemorda atsidozni kompensatsiya qilishning asosiy mexanizmi bloklanadi: keton tanachalari shakllanishi bilan H+ bikarbonat bilan reaksiyaga kirishadi va karbonat kislota hosil qiladi, karbonat angidraza esa uni CO2 va H2O ga parchalab, protonlarni yutadi. Agar karbonat angidraza atsetazolamid bilan ingibirlansa, bikarbonatlar qon pH ida buferlik qila olmaydi va atsidoz og'irroq bo'lishi mumkin. Leykotsitlar, mushak hujayralari, jigar hujayralari va ko'zning gavhari qonning buferlanishiga hissa qo'shmaydi.",
    },
    {
      q: "23 yoshli ayol tez yordam bo'limiga nafas ololmaslik, bosh aylanishi va barmoqlar, oyoqlar va og'iz atrofida uvishishlar bilan shikoyat qilganligi uchun olib kelindi. Bu holat tunel orqali harakatlanayotganda sodir bo'ladi va simptomlar yuzaga chiqadi. Quyidagi arterial qon pH ining qaysi biri uning tashxisiga eng mos keladi?",
      a: ["8.10", "7.55", "7.15", "6.40", "6.10"],
      correct: 1,
      explanation:
        "Bemorda vahima huruji (tuneldan o'tayotganda) bor, giperventilatsiya o'tkir respirator alkalozga sabab bo'lgan. Karbonat angidridni yo'qotish karbonat angidraza uchun CO2 hosil qilishga turtki bo'ladi, protonlar konsentratsiyasi kamayadi (va shu bilan pH oshadi). Bemor og'irroq hurujda hushini yo'qotadi. Respirator alkaloz metabolik alkalozga qaraganda yengilroq, sababi pH kichikroq ko'tariladi (metabolik alkaloz tufayli 8.10 ga qaraganda ko'proq 7.55 bo'ladi). Boshqa berilgan variantlar 7.15, 6.40 va 6.10 fiziologik pH (7.40) dan past va alkalozda emas atsidozda kuzatiladi.",
    },
    {
      q: "Fazoda spetsifik orientatsiyaga ega aminokislotalarga qarshi hujum qilishda yuqori aktivlikga ega antibiotik yaratildi. O'z navbatida u insonlarda yaxshi samara berishi uchun aminokislotalarning qaysi konfiguratsiyasiga qarshi samarali bo'lishi kerak?",
      a: [
        "R-konfiguratsiya",
        "L-konfiguratsiya",
        "Aromatik halqali konfiguratsiya",
        "Polipeptid zanjirli konfiguratsiya",
        "D-konfiguratsiya",
      ],
      correct: 4,
      explanation:
        "Insondagi aminokislotalar L-konfiguratsiyada (glitsindan tashqari, u na L na D konfiguratsiyali) bo'ladi, bakteriya aminokislotalari esa ham L ham D konfiguratsiyali bo'lishi mumkin. Antibiotik inson oqsillariga emas, balki bakterial oqsillarga qarshi samarali bo'lishi kerak, shuning uchun D aminokislotalarini o'z ichiga olgan oqsillarni yoki polipeptidlarni taniydigan antibiotikni ishlab chiqish faqat bakterial mahsulotlarga qarshi samarali bo'ladi. Barcha aminokislotalar polipeptid zanjirlarda uchraydi (bu ajratuvchi belgi emas); fenilalanin, tirozin va triptofan aromatik halqalarni o'z ichiga oladi va bakteriyalarda ham, insonlarda ham mavjud. R va S nomenklatura aminokislotalar konfiguratsiyasini tasvirlash uchun biokimyoda odatda foydalanilmaydi.",
    },
    {
      q: "40 yoshli tamaki yetishtiradigan fermer shoshilinch yordam bo'limiga bradikardiya, kuchli terlash, qayt qilish, gipersalivatsiya va ko'rish xiralashuvi bilan keldi. U o'z dalasida malation (fosfor-organik insektitsid) sepayotgan edi va shlang yorilib, fermer malation bilan qoplanib qoldi. Quyidagilardan qaysi bir ferment ingibitori turi bu zaharlanishni keltirib chiqaradi?",
      a: [
        "Raqobatli",
        "Raqobatsiz",
        "Qaytmas",
        "Qaytar",
        "Dori ferment faolligini ingibirlamagan",
      ],
      correct: 2,
      explanation:
        "Malation — bu asetilxolinesteraza ta'sirini qaytmas tarzda ingibirlovchi organofosfat. Bu butun dunyo bo'ylab zaharlanishning eng keng tarqalgan sabablaridan biridir. Malation serinning (ferment faol qismi) ingibitori bo'lib, ferment yon zanjiri va faol qism o'rtasida qaytmas kovalent bog'lanish hosil qiladi. Atsetilxolinesteraza yo'q bo'lsa atsetilxolin neyronal sinapslarda to'planib qoladi va savolda tasvirlangan simptomlarga sabab bo'ladi. Raqobatbardosh va raqobatdosh bo'lmagan ingibitorlar ingibirlashning qaytariladigan shakllari bo'lib, ularning ta'sir mexanizmi malationga taalluqli emas.",
    },
    {
      q: "Chaqaloqda hech qanday sezilarli muammo bo'lmagan, lekin 3 oylikka kelib sianotik holat kuzatilgan va keyinroq miokard infarkti kuzatilgan. Autopsiyada chap asosiy koronar arteriyani aortadan emas o'pka arteriyasidan chiqqani ma'lum bo'ldi. 3 oylikkacha simptomsiz holatda bo'lishining eng mos keluvchi sababi keltirilgan qatorni toping.",
      a: [
        "U Hb ning anomal α zanjiriga ega",
        "U Hb ning anomal β zanjiriga ega",
        "U Hb ning anomal γ zanjiriga ega",
        "HbF BFG uchun kamroq moyillikka ega",
        "HbF BFG uchun ko'proq moyillikka ega",
      ],
      correct: 3,
      explanation:
        "HbF 2 ta α va 2 ta γ-subbirlikdan iborat. U BFG bilan past yaqinlikka ega va shuning uchun kislorod bilan yuqori yaqinlikka ega. Bolalarda koronar arteriyalar normal holatda kislorodli qonni aortadan qabul qiladi, lekin savoldagi holatga ko'ra chap asosiy koronar arteriya o'pka arteriyasidan chap qorinchaga kislorodsiz qonni olib keladi. Biroq bola katta bo'lgan sari HbF o'rniga HbA ishlab chiqarishni boshlaganda (HbA BFG ga ko'proq moyillikka va kislorodga kamroq moyillikka ega), aortaga kislorod yetarlicha tashilmaydi va yurakka kislorod yetishmasligi tufayli miokard infarktiga olib keladi. Agar bola anormal γ-zanjir bilan tug'ilgan bo'lsa, yetishmovchilik 3 oylikda emas tug'ilish bilan namoyon bo'lardi.",
    },
    {
      q: "28 yoshli ayolda dam-badam uchrovchi charchoq, qovoqlar tushishi, yutish qiyinligi va duduqlanish kuzatilmoqda. Bemorga ferment faolligiga ta'sir etadigan dori berildi. Dorining bor va yo'qligidagi ferment-katalizlaydigan reaksiya kinetik tahlili (Lineweaver-Burk grafigi, 1/V - 1/[S]) tasvirlangan bo'lib, ikkala chiziq ham y-o'qi (1/V) ustida bitta nuqtada kesishadi, dori mavjudligidagi chiziq esa qiyaroq (kattaroq og'ish burchagiga ega). Ushbu dorining ta'sirini quyida qaysi atamalar to'plami bilan yaxshiroq tasvirlash mumkin? (tartib: Ingibirlanish turi / Km ga ta'siri / Vmax ga ta'siri)",
      a: [
        "Raqobatli / ortadi / o'zgarishsiz",
        "Raqobatli / kamayadi / kamayadi",
        "Raqobatsiz / ortadi / o'zgarishsiz",
        "Raqobatsiz / kamayadi / ortadi",
        "Qaytar / ortadi / o'zgarishsiz",
        "Qaymas / kamayadi / kamayadi",
      ],
      correct: 0,
      img: "42-43-bet",
      explanation:
        "Bemorda miasteniya gravis bor, davosi esa atsetilxolinesterazaning raqobatbardosh, qaytar ingibitori hisoblangan piridostigmin hisoblanadi. Atsetilxolin retseptorlariga qarshi paydo bo'lgan antitelolar miasteniya gravisga sabab bo'ladi va atsetilxolinning neyronal sinapslarda samaraliligini kamaytiradi. Asetilxolinesterazani qaytar ravishda ingibirlash orqali atsetilxolinning samarali darajasi oshadi. Rasm raqobatbardosh ingibitor uchun klassik hisoblanadi: raqobatbardosh ingibitorlar ko'rinadigan Km ni oshiradi, Vmax esa o'zgarishsiz qoladi (grafiklar y-o'qida kesishadi).",
    },
    {
      q: "Rokki tog'iga chang'i uchish uchun borgan bemor balandlik kasalligiga qarshi kurashish uchun dori ichdi. Bu dorining ingibirlash mexanizmi tasviri berilgan: Lineweaver-Burk grafigida (1/V - 1/[S]) dori mavjudligidagi va mavjud emasligidagi chiziqlar x-o'qi (1/[S]) ustida bitta nuqtada kesishadi, dori mavjudligidagi chiziq y-o'qini yuqoriroq nuqtada kesib o'tadi. Bu dori qaysi ingibitor guruhiga kiradi?",
      a: [
        "Raqobatli",
        "Raqobatsiz",
        "Qaytmas",
        "Allosterik",
        "Dori ingibitor emas, aktivator",
      ],
      correct: 1,
      img: "43-bet",
      explanation:
        "Raqobatbardosh bo'lmagan (raqobatsiz) ingibirlashda Km o'zgarmaydi, Vmax tushadi (grafiklar x-o'qida kesishadi). Balandlik kasalligini davolash uchun ishlatiladigan atsetazolamid karbonat angidrazaning raqobatbardosh bo'lmagan ingibitori hisoblanadi. Rasm sof raqobatbardosh bo'lmagan ingibitorlardan biridir.",
    },
    {
      q: "QD I tip bilan og'rigan bemor retseptidagi insulin tugadi va 3 kundan beri insulin inyeksiyasini olmadi. Quyidagilardan qaysi birining ortiqcha ishlab chiqarilishi metabolik atsidozga sabab bo'lgan?",
      a: ["Hb", "Keton tanachalari", "HCl", "Bikarbonat"],
      correct: 1,
      explanation:
        "Keton tanachalari kuchsiz kislotalardir. Diabetik ketoatsidozda jigar miyaning yagona energiya manbayi sifatida glyukozaga bog'liqligini kamaytiruvchi keton tanachalarini ishlab chiqaradi. Bu insulin yetishmaganligi tufayli sodir bo'ladi va glyukagon tomonidan doimiy signalizatsiya tufayli jigar uzoq vaqt ochlik rejimiga o'tadi. Eritrotsitlardagi Hb va bikarbonat tananing ikkita asosiy buferi bo'lib, ularning ortiqcha ishlab chiqarilishi atsidozga olib kelmaydi. Oshqozonda HCl ni ko'p ishlab chiqarilishi qon oqimiga o'tuvchi protonlar yo'qligi sababli umumiy atsidozga olib kelmaydi.",
    },
    {
      q: "Yuqoridagi savoldagi (insulin inyeksiyasini 3 kundan beri olmagan QD I tip bemor) metabolik atsidozni kompensatsiya qilish uchun bemor giperventilatsiya qilsa, quyidagi reaksiyalardan qaysi biri respirator alkaloz kompensatsiyasini tushuntirib beradi?",
      a: [
        "H+ + NH3 ⇄ NH4+",
        "CH3CHOHCH2COOH ⇄ CH3CHOHCH2COO⁻ + H+",
        "CO2 + H2O ⇄ H2CO3 ⇄ H+ + HCO3⁻",
        "H2O ⇄ H+ + HO⁻",
      ],
      correct: 2,
      explanation:
        "Bemor kislotalilikni kamaytirish uchun 'CO2 ni ko'proq' chiqarib yuboradi. C variantdagi tenglamada CO2 dastlab eruvchan molekulaga, keyin bikarbonatga aylanishi tasvirlangan. Atsidoz paytida protonlarning yuqori konsentratsiyasi bu reaksiyani chap tomonga, suv va karbonat angidrid hosil bo'lishiga undaydi. Karbonat angidrid chiqarilishi bilan uning konsentratsiyasi kamayadi, erkin protonlar miqdori ham kamayadi va pH oshadi. Ammiak protonlanganda ammoniy ioni hosil bo'ladi va o'pkaga emas buyrakka boradi (siydikni ishqorlashtirish uchun). B javobida tasvirlangan reaksiya protonning β-gidroksibutirat (keton tanachasi)dan ajralishi bo'lib, bu kompensator respirator alkalozga emas, ketoatsidozga olib keladi. D reaksiya suvning dissotsiatsiyalanishi bo'lib, kislota-bufer tizimi emas.",
    },
    {
      q: "Patolog Kretzfeld-Jakob sindromi bilan vafot etgan murda autopsiyasida miyani tekshirayotgan vaqtida tasodifan qo'lini kesib oldi. U o'zining salomatligidan juda ham xavotirda. Asosan quyidagi materiallardan qaysi birining uning qoniga tushish ehtimoli uni xavotirga solyapti?",
      a: ["Virus", "Oqsil", "Lipid", "Bakteriya", "Polinukleotid"],
      correct: 1,
      explanation:
        "Creutzfeldt-Jakob sindromi prion kasalligi hisoblanadi va yuquvchi omil oqsildir. O'zgartirilgan oqsil miyada cho'kadi va normal oqsil muvozanatini o'zgartirilgan oqsil bilan birlashgan holatga o'tkazadi. Patolog yuqumli oqsil uning miyasiga ko'chib o'tishi va miyasida normal prion oqsillari bilan aggregatsiya jarayonining kelib chiqishidan xavotirda. Prion kasalliklari viruslar, bakteriyalar, lipidlar yoki nuklein kislota shakllari orqali o'tkazilmaydi.",
    },
    {
      q: "Yaqinda egalari bilmagan holda go'shti uchun so'yilgan sigirda ahmoq sigir kasalligi bor edi. Sigirning miyasida ushbu kasallikka olib kelgan hodisa quyidagilardan qaysi biri?",
      a: [
        "Gen ekspressiyasining o'zgarishi",
        "Miyadagi virusli infeksiya",
        "Miya oqsillarining proteolitik parchalanishi",
        "Miya oqsillarining ikkilamchi va uchlamchi tuzilishilarining o'zgarishi",
        "Yadro membranasining yo'qolishi",
      ],
      correct: 3,
      explanation:
        "Ahmoq sigir kasalligi prion buzilishi bo'lib, unda noto'g'ri sintezlangan prion oqsili miyada agregatlar hosil qiladi va cho'kadi, miyaning normal ishlashiga xalaqit beradi. Prionlar asosan α-heliks(spiral)lardan iborat bo'lgan barqaror konformatsiyalarni va β-list(sheet)lardan iborat agregatsiyaga moyil konformatsiyalarni qabul qilishi mumkin. Bir marta agregatsiyaga moyil konformatsiyada oqsillar agregatsiyalanadi va tuzilish shakllari orasidagi muvozanatni agregatsiyaga moyil shaklga o'tkazadi. Bu shaklni oqsil cho'kmalari miya funksiyasiga halal berguncha hosil qiladi va oxir-oqibat o'limga olib keladi. Prion kasalliklari gen ekspressiyasi, viruslar, prion oqsillarining proteolitik parchalanishi yoki yadro membrana funksiyasining yo'qolishi hisobiga kelib chiqmaydi.",
    },
    {
      q: "Bemor oshqozon reflyuksi kasalligi uchun omeprazol qabul qiladi. Omeprazol tarkibida uning ta'sir mexanizmi uchun juda muhim bo'lgan erkin sulfgidril guruhi mavjud. Quyidagi yo'llardan qaysi biri ushbu dori ta'siriga juda mos tushadi?",
      a: [
        "Ichak proton nasosidagi sulfgidrilni qaytarish",
        "Oshqozon proton nasosidagi metionin bilan disulfid bog' hosil qilish",
        "Oshqozon proton nasosidagi sistein bilan disulfid bog' hosil qilish",
        "Oshqozon proton nasosidagi mavjud sulfgidril guruhni qaytarish",
        "Ichak proton nasosidagi sistein bilan disulfid bog' hosil qilish",
      ],
      correct: 2,
      explanation:
        "Erkin sulfgidril guruhlar sistein yon zanjiri bilan oqsil funksiyasiga xalaqit beruvchi disulfid bog'larni hosil qilishi mumkin. Gastral reflyuks kasalligi gastroezofageal sfinkter funksiyasi buzilishidan kelib chiqadi va oshqozon moddalari qizilo'ngachga o'tib ketadi (kislota qizilo'ngachni zararlaydi). Oshqozon proton nasoslarini ingibirlash yuqori pH li modda qizilo'ngachni shikastlashini kamaytiradi. Ichak proton nasoslarini ingibirlash gastral reflyuks kasalligiga ta'sir etmaydi. Metionin qoldiqlari tarkibida oltingugurt atomi bo'lsa-da, disulfid bog'lanishlarini hosil qilmaydi.",
    },
    {
      q: "Bir oila qish oylarida yopiq kvartirasida qo'shimcha propan isitgichidan foydalanmoqda. Bir kuni tongda oila a'zolaridan birini uyg'otish qiyin bo'ldi va uyg'onganida bosh og'rig'i va juda charchaganidan shikoyat qildi. Uning shilliq pardalari qizil gilos rangiga ega. Bu belgilar quyidagilardan qaysi biri natijasida kelib chiqqan?",
      a: [
        "To'qimalarga kislorod tashilishining oshishi",
        "To'qimalarga kislorod tashilishining kamayishi",
        "Miyaga qon kelishining ortishi",
        "Miyaga qon kelishining kamayishi",
        "Hb ga kislorod moyilligining pasayishi",
      ],
      correct: 1,
      explanation:
        "Oila a'zosi uglerod oksidi (CO) bilan zaharlanish simptomlarini ko'rsatmoqda. CO Hb bilan kislorodga qaraganda yuqori yaqinlik bilan birikadi va to'qimalarga kislorod tashilishini kamaytiradi. Bundan tashqari CO Hb bilan bir marta bog'langanda kislorod birikish egri chizig'ini chapga suradi, 'R' holatini (oksidlangan holatni) barqarorlashtiradi va to'qimalarda kislorodning ajralishini qiyinlashtiradi (Hb ga kislorodning yaqinligi aslida ortadi). CO bilan zaharlanish miyaga qon oqishiga bevosita ta'sir etmaydi.",
    },
    {
      q: "53 yoshli, 35 yildan beri kuniga 2 quti sigaret chekuvchi erkak o'tib ketmayotgan yo'tal va nafas olish qiyinligidan shikoyat qilib shifokor qabuliga keldi. Ko'krak qafasi rentgenogrammasi o'smani inkor etdi, lekin anterior-posterior diametr oshganligi, diafragma yassilanganligi va 'havo yig'ilgan'ligi ma'lum bo'ldi. Bemorga uning ahvoli yaxshilanmasligi va kasallikning rivojlanishini to'xtatish uchun chekishni tashlashi kerakligi aytildi. Molekulyar darajada bu kasallikka quyidagilardan qaysi biri sabab bo'lgan?",
      a: [
        "O'pkada tripsin faolligining oshishi",
        "O'pkada tripsin faolligining pasayishi",
        "O'pkada α1-antitripsin faolligining oshishi",
        "O'pkada α1-antitripsin faolligining pasayishi",
        "O'pkada sulfgidril guruhlarini qaytarilishining oshishi",
        "O'pkada sulfgidril guruhlarining qaytarilishi pasayishi",
      ],
      correct: 3,
      explanation:
        "Erkakda proteaza elastaza ta'sirida o'pka hujayralarining destruksiyasi sababli kelib chiquvchi emfizema bor. O'pkadagi neytrofillar nafas olayotganda kirgan bakteriyalar va boshqa zarralarni yutib, yo'q qiladi va tasodifan elastazani chiqaradi, normal holatda esa α1-antitripsin elastazaga birikib uni ingibirlaydi. Uzoq vaqt chekuvchilarda sigaret chekilgandagi mahsulotlar α1-antitripsin tarkibidagi muhim metioninni oksidlaydi va uni nofaol holatga o'tkazadi. Shuning uchun vaqt o'tib ingibirlanmagan elastaza o'pka to'qimasini shikastlayveradi. Ingibitor tripsin faolligini bloklasa ham, o'pkaning shikastlanishi elastaza faolligining oshishi natijasida kelib chiqadi (tripsin faolligiga bog'liq emas).",
    },
    {
      q: "16 yoshli bola yuqori sinf o'quvchisi maktabida basketbol o'ynayotganda hushdan ketib maydonga yiqildi va reanimatsiya qilib bo'lmadi. Autopsiyada chap qorincha devori va qorinchalararo to'siq devori qalinlashganligi aniqlandi. Bu ma'lumotlar quyidagi oqsillardan qaysi birining mutatsiyasi orqali tushuntirib beriladi?",
      a: [
        "Spektrin",
        "α1-antitripsin",
        "Kollagen",
        "Fibrillin",
        "β-miozin og'ir zanjiri",
      ],
      correct: 4,
      explanation:
        "Talaba gipertrofik kardiomiopatiyadan vafot etgan, yurak chap qorincha devorining qalinlashganligi β-miozin og'ir zanjiri mutatsiyasi hisobiga kelib chiqqan. Gipertrofiyaga olib keluvchi turli xil sarkomer oqsillarining mutatsiyasiga aniq sabab hozirgacha ma'lum emas. Javob sifatida yozilgan boshqa oqsillarning hech biri muskul sarkomer oqsillari emas: spektrin eritrotsit oqsili, α1-antitripsin jigarda sintezlanuvchi va uning yetishmovchiligida emfizemaga olib keluvchi oqsil, kollagenda yurak muskullarining kuchli gipertrofiyasiga olib keluvchi mutatsiyalar yo'q, fibrillinning yetishmovchiligi esa yurak klapani va aortadagi nuqson bilan namoyon bo'luvchi Marfan sindromiga olib keladi.",
    },
    {
      q: "Tez yordam bo'limida 28 yoshli erkak siydigidan juda ko'p miqdorda qon va oqsil aniqlandi. U o'smirlikdan beri sensonevronal eshitish qobiliyatini yo'qotgan va noto'g'ri shakldagi gavhar (anterior lenticonus)ga ega. Shifokor buyrak yetishmovchiligiga olib kelishi mumkin bo'lgan genetik kasallikka shubha qilmoqda. Agar shunday bo'lsa, bemorda quyidagi oqsillardan qaysi birida mutatsiya bo'lishi mumkin?",
      a: [
        "Spektrin",
        "α1-antitripsin",
        "Kollagen",
        "Fibrillin",
        "β-miozin og'ir zanjiri",
      ],
      correct: 2,
      explanation:
        "Bemorda buyrak koptokchalari bazal membranasining o'zgarishiga sabab bo'luvchi, IV tipdagi kollagen mutatsiyasi hisobiga kelib chiquvchi Alport sindromi bor. Funksional bazal membrana yo'q bo'lganda buyraklar qondan zararli almashinuv mahsulotlarini to'g'ri filtratsiya qilishi qiyinlashadi va qon hamda oqsillar siydikka chiqib ketadi. IV tipdagi kollagen eshitish (ichki quloqda) va ko'zda ham muhim. IV tipdagi kollagen tayoqsimon tuzilish hosil qiluvchi I tip kollagendan farq qilib, to'rsimon tuzilish hosil qiladi va deyarli barcha bazal membranalarda uchraydi. Yetarlicha vaqt o'tib, koptokcha bazal membranasidagi o'zgarishlar ularning destruksiyasiga olib keladi va buyraklar funksiyasini yo'qotadi.",
    },
    {
      q: "45 yoshli ayol alkogolizm uchun narkologiya markaziga yotqizilgan. Bemorning ichishini cheklash uchun birinchi urinish sifatida unga spirtli ichimliklar ichsa, quyidagi metabolitlardan qaysi biri ko'tarilishiga olib keladigan dori beriladi?",
      a: [
        "Sirka kislota",
        "Atsetaldegid",
        "Metanol",
        "Etanol",
        "Karbonat angidrid",
        "Is gazi",
      ],
      correct: 1,
      explanation:
        "Surunkali alkogolizmni davolash usullaridan biri aldegid degidrogenaza fermentini ingibirlashdir, bu esa etanol so'rilgan bo'lsa, atsetaldegid to'planishiga olib keladi. Etanol metabolizmi birinchi bosqichida etanolni asetaldegidga (alkogol degidrogenaza fermenti) aylantiradi. Aldegid degidrogenaza atsetaldegidni sirka kislotaga aylantiradi. Hangover (ichgandan keyin kelib chiquvchi belgilar) simptomlari — bosh og'rig'i, qusish — atsetaldegidni to'planishi bilan bog'liq. Dori bilan davolash asosida bemor alkogol ichganda atsetaldegid to'planishi yotadi va bunda bemor o'zini juda ham noqulay his etadi va ichishni kamaytiradi yoki butunlay voz kechadi. Aldegid degidrogenazani ingibirlash sirka kislotasi, etanol, karbonat angidrid yoki uglerod monooksidining ko'tarilishiga olib kelmaydi.",
    },
    {
      q: "23 yoshli erkak tez yordam bo'limiga kichik balandlikdan yiqilib, yelka suyagi singan holda olib kelindi. U oldin ham kichik jarohatlarda ko'plab sinishlarni boshidan o'tkazgan. U shuningdek, aorta regurgitatsiya shovqini va ko'k-moviy skleraga ega. Quyidagi oqsillarning qaysi birining mutatsiyasi undagi muammoning asosiy sababchisi hisoblanadi?",
      a: [
        "Fibrillin",
        "I tip kollagen",
        "IV tip kollagen",
        "α1-antitripsin",
        "β-miozin og'ir zanjiri",
      ],
      correct: 1,
      explanation:
        "Bemorda I tip kollagendagi turli mutatsiyalar hisobiga kelib chiquvchi, suyak qurilishi buzilishi va siniq suyaklar kuzatiluvchi osteogenez imperfekta kasalligi bor. Aortada regurgitatsiya shovqini ekstrasellular matriksda I tip kollagenning yetishmasligi tufayli kelib chiqadi. Fibrillin mutatsiyalarida Marfan sindromi kelib chiqadi va uzun suyaklar bilan namoyon bo'ladi, lekin bu suyaklar siniq bo'lmaydi. IV tipdagi kollagen mutatsiyasi Alport sindromiga olib keladi (bu bemorda singan suyaklar yo'q). α1-antitripsin nuqsoni emfizemaga olib keladi va β-miozin og'ir zanjiri mutatsiyasi gipertrofik kardiomiopatiyaga olib keladi, ikkalasi ham siniq suyaklarga aloqasi yo'q.",
    },
  ],
  m3: [
    {
      q: "Quyidagilardan qaysi biri ikki zanjirli DNK molekulasi uchun to'g'ri keladi? (tartib: [A]=[T] / [U]=[A] / [G]=[C] / [C]=[T] / Umumiy zaryad / DNK spirali har bir egriligidagi asos juftliklar soni)",
      a: [
        "Ha, Yo'q, Ha, Yo'q, Manfiy, 10",
        "Ha, Ha, Yo'q, Ha, Musbat, 10",
        "Ha, Yo'q, Ha, Yo'q, Manfiy, 12",
        "Yo'q, Ha, Ha, Ha, Musbat, 12",
        "Yo'q, Yo'q, Yo'q, Yo'q, Manfiy, 10",
        "Yo'q, Ha, Ha, Ha, Musbat, 12",
      ],
      correct: 0,
      explanation:
        "DNKda teng miqdorda adenin va timin, guanin va sitozin mavjud. Uratsil DNKda bo'lmaydi (shuning uchun [U]=[A] taqqoslanmaydi). Spiralning har bir burilishida 10 asos-juftligi bor va molekuladagi umumiy zaryad manfiy, chunki skeletida fosfatlar mavjud (har bir fosfodiester bog'lanishida bitta manfiy zaryad mavjud).",
    },
    {
      q: "Bakterial mutant 32°C da normal o'sadi, lekin 42°C da yangi sintez qilingan DNKning qisqa segmentlarini to'playdi. Quyidagi fermentlardan qaysi biri ushbu mutantda rivojlanishga to'sqinlik qiladigan haroratda (yuqoriroq haroratda) eng katta ehtimol bilan nuqsonli bo'lishi mumkin?",
      a: [
        "DNK primazasi (praymaza)",
        "DNK polimeraza",
        "Ekzonukleaza",
        "Spirallarni yoyuvchi ferment (helikaza)",
        "DNK ligaza",
      ],
      correct: 4,
      explanation:
        "42°C da to'plangan yangi sintezlangan DNKning qisqa segmentlari Okazaki fragmentlaridir. Ular odatda 42°C li sharoitda pasaygan aktivlikni namoyon qilgan DNK ligazasi bilan birlashtiriladi. Agar ligaza ishlamasa, replikatsiya jarayonida Okazaki fragmentlari qo'shilmaydi, shuning uchun hujayralar DNKning qisqa fragmentlarini saqlaydi. Endonukleazalar va ekzonukleazalar mos ravishda DNK zanjirini o'rtasidan va oxiridan qirqadi, ular ham, DNK polimeraza ham fragmentlarni birlashtirmaydi. Yoyuvchi fermentlar ota-ona zanjirlarni yoyadi va agar ular nuqsonli bo'lganida, DNK sintezi nopermessiv haroratda umuman sodir bo'lmas edi.",
    },
    {
      q: "DNK fragmentidan hosil bo'lgan RNK AAUUGGCU ketma-ketligiga ega. Ushbu ketma-ketlikni keltirib chiqargan DNKdagi andoza bo'lmagan zanjir ketma-ketligi quyidagilardan qaysi biri?",
      a: ["AGCCAATT", "AAUUGGCU", "AATTGGCT", "TTAACCGA", "UUAACCGA"],
      correct: 2,
      explanation:
        "DNKdagi andoza bo'lmagan zanjir kodlovchi zanjir bilan bir xil va hosil bo'lgan RNKning ketma-ketligiga o'xshash bo'ladi, faqat U ning o'rniga T bo'ladi. Andoza bo'lmagan zanjir va hosil bo'lgan RNK andoza zanjirga komplementar ketma-ketlikda bo'ladi. Barcha ketma-ketliklar 5'→3' yo'nalishda yozilgani uchun, AAUUGGCU RNK ketma-ketligi DNK bo'lagining andoza bo'lmagan zanjirida AATTGGCT ketma-ketlikka to'g'ri keladi. Andoza zanjir andoza bo'lmagan zanjirga komplementar, ya'ni AGCCAATT (5'→3' yozilgan) bo'ladi. Uratsil asosi DNKda bo'lmaydi (shuning uchun B va E javoblar noto'g'ri).",
    },
    {
      q: "iRNKning oqsil kodlaydigan maydonidagi quyidagi o'zgarishlardan qaysi biri (nuqtali mutatsiyasidan kelib chiqqan) normal oqsil bilan bir xil bo'lgan oqsil translyatsiyasiga olib keladi?",
      a: ["UCA → UAA", "UCA → CCA", "UCA → UCU", "UCA → ACA", "UCA → GCA"],
      correct: 2,
      explanation:
        "UCA serin uchun kodondir. Berilgan javoblardan faqat kodon UCU ham serin uchun kodon bo'lib, silent mutatsiyaga olib keladi. UCA ning UAA ga konversiyasi terminator kodonini hosil qiladi va qisqa oqsil ishlab chiqariladi. UCA ning CCA ga aylanishi serinni prolin bilan, ACA ga aylanishi serinni treonin bilan, GCA ga aylanishi esa serinni alanin bilan almashtiradi. Faqat UCA ning UCU ga o'zgarishi natijasida oqsilda aynan bir xil aminokislota ketma-ketligi hosil bo'ladi.",
    },
    {
      q: "Eukaryot hujayralardan sekretsiyalanadigan oqsillar uchun quyidagilardan qaysi biri mos? (tartib: Yetuk oqsilda N-terminal Metionin / Signal peptid joylashgan / Ribosoma qaysi tipida ishlab chiqariladi / ER membranasi bilan bog'langan)",
      a: [
        "Judayam ehtimolli, Karboksi terminalda, DET, Ha",
        "Judayam ehtimolli, Amino terminalda, Sitoplazmatik, Yo'q",
        "Judayam ehtimolli, Karboksi terminalda, DET, Ha",
        "Kam ehtimolli, Amino terminalda, DET, Yo'q",
        "Kam ehtimolli, Karboksi terminalda, Sitoplazmatik, Ha",
        "Kam ehtimolli, Amino terminalda, Sitoplazmatik, Yo'q",
      ],
      correct: 3,
      explanation:
        "Sekretsiya uchun mo'ljallangan oqsillar N-terminal oxirida signal ketma-ketligini o'z ichiga olib, ular o'zlari sintezlanayotgan ribosomalarning STZ (signal tanish zarrachasi) bilan bog'lanishiga sabab bo'ladi va bu iRNK-ribosoma kompleksini donador endoplazmatik to'rga (DET) o'tkazadi. Ular ishlab chiqarilayotganda DET sisternasiga kiradi, u yerda dastlabki metioninni o'z ichiga olgan signal ketma-ketligi olib tashlanadi. Shunday qilib, yetuk oqsil tarkibida N-terminal metionin bo'lishi dargumon (kam ehtimolli). Bu oqsillar sekretor bo'lgani (membranaga singib qolmagani) uchun yakuniy holatda ER membranasi bilan bog'lanmagan bo'ladi.",
    },
    {
      q: "Induksiyalanadigan bakterial operonlar quyidagi xususiyatlardan qaysi birini namoyon qiladi? (tartib: Induktor repressorga bog'lanadi va / RNK polimeraza promouterga bog'lanishiga induktor effekti / Repressor ... tomonidan ishlab chiqariladi)",
      a: [
        "Repressorni aktivlaydi, Stimullaydi, Polisitron signal",
        "Repressorni aktivlaydi, Stimullaydi, Alohida gen",
        "Repressorni aktivlaydi, Ingibirlaydi, Polisitron signal",
        "Repressorni ingibirlaydi, Ingibirlaydi, Alohida gen",
        "Repressorni ingibirlaydi, Effekti yo'q, Polisitron signal",
        "Repressorni ingibirlaydi, Effekti yo'q, Alohida gen",
      ],
      correct: 5,
      explanation:
        "Induksiyada regulyator gen induktorga bog'lanish orqali inaktivatsiyalanuvchi aktiv repressor hosil qiladi. Induktor repressorni ingibirlaydi (inaktivlaydi), shu orqali repressor operatorga bog'lanishini oldini oladi — bu RNK polimeraza bog'lanishini bevosita stimullamaydi (to'g'ridan-to'g'ri effekti yo'q). Struktur genlar muvofiqlashtirilgan tarzda ekspressiyalanib, bitta polisitron iRNK hosil qiladi, ammo regulyator genning o'zi polisitron signalning bir qismi emas — u alohida gen sifatida ishlab chiqariladi.",
    },
    {
      q: "Eukaryotlarda gen ekspressiyasining faollashishiga olib kelishi mumkin bo'lgan jarayon quyidagilardan qaysi biri bilan eng yaxshi ifodalanishi mumkin? (tartib: Gen metillanishi / Polisistron signal hosil bo'lishi / Giston atsetillanish darajasi)",
      a: [
        "Ortgan, Ha, Pasaygan",
        "Pasaygan, Ha, Ortgan",
        "Ortgan, Ha, Ortgan",
        "Pasaygan, Yo'q, Pasaygan",
        "Ortgan, Yo'q, Pasaygan",
        "Pasaygan, Yo'q, Ortgan",
      ],
      correct: 5,
      explanation:
        "Metillangan gen metillanmagan genga qaraganda kamroq transkripsiyalanadi, shuning uchun faollashish uchun metillanish pasayishi kerak. Polisistron iRNKlar eukariot hujayralarda emas, faqat prokariotlarda hosil bo'ladi (shuning uchun 'Yo'q'). Transkripsiya qilinayotgan xromatin (euxromatin) maydonlarida giston atsetillanishi ko'payadi — gistonlarning atsetillanishi oqsillardagi musbat zaryadlarni kamaytiradi va shu bilan ularning DNKdagi manfiy zaryadlangan fosfatlar bilan o'zaro ta'sirini susaytiradi, xromatinni 'ochadi'.",
    },
    {
      q: "Glyukokortikoidlar tomonidan induksiyalangan ferment uchun gen transkripsiyasi tezligi va iRNK darajasi aniqlandi. Davolanmagan bosqichlar bilan solishtirganda, glyukokortikoid bilan davolash gen transkripsiyasi tezligining 10 barobar oshishiga va iRNK darajasining ham, ferment faolligining ham 20 barobar oshishiga olib keldi. Ushbu ma'lumotlar shuni ko'rsatadiki, glyukokortikoidlar bilan davolashning birlamchi ta'siri quyidagilardan qaysi birini kamaytiradi?",
      a: [
        "RNK polimeraza II ning faolligi",
        "iRNK translyatsiyasi tezligi",
        "Nukleazalarning iRNKga ta'sir qilish qobiliyati",
        "Ribosomalarning iRNK bilan bog'lanish tezligi",
        "RNK polimeraza II tomonidan transkripsiyani boshlash tezligi",
      ],
      correct: 2,
      explanation:
        "Agar iRNKning degradatsiya tezligi glyukokortikoidlar orqali o'zgarmasa, unda iRNK darajasining oshishi faqat transkripsiya tezligining oshishida aks etardi (10 barobar). Lekin iRNK darajasining ortishi (20 barobar) transkripsiya tezligining ortishidan (10 barobar) kattaroq bo'lgani sababli, glyukokortikoidlar iRNK barqarorligini ham oshirishi kerak — ya'ni nukleazalar tomonidan parchalanish tezligini (nukleazalarning iRNKga ta'sir qilish qobiliyatini) kamaytiradi. RNK polimeraza II faolligi va translyatsiya tezligi bu holatda ortadi, kamaymaydi.",
    },
    {
      q: "Ko'rsatilgan DNK zanjirlarining qaysi maydoni (A-D, rasmda har biri DNKning turli qismi sifatida ko'rsatilgan) uzunligi 300 ta aminokislotadan iborat oqsilning translyatsiyasi uchun dastlabki kodonni o'z ichiga olgan iRNK maydonining transkripsiyasi uchun andoza bo'lib xizmat qilishi mumkin?",
      a: [
        "A",
        "B",
        "C",
        "D",
        "Ko'rsatilgan hududlarning hech biri yetarli bo'lmaydi",
      ],
      correct: 1,
      img: "97-98-bet",
      explanation:
        "B ketma-ketlik (3' dan 5' ga, o'ngdan chapga o'qilganda) transkripsiyalanganda iRNKda start kodon (5'-AUG-3') hosil qiladi va bu ketma-ketlikda stop kodonlar yo'q, shuning uchun u uzunligi 300 ta aminokislotali oqsilni hosil qilishi mumkin. D javobdagi ketma-ketlik ham start kodon hosil qiladigan 3'-TAC-5' ketma-ketlikni o'z ichiga olsa-da, unda darhol stop kodon (5'-UAA-3') hosil qiluvchi ketma-ketlik (DNKda 3'-ATT-5') ham mavjud. A va C ketma-ketliklarda iRNKdagi start kodonga mos keluvchi triplet mavjud emas.",
    },
    {
      q: "Haroratga sezgir bo'lgan hujayra qatori rivojlanishga to'sqinlik qiladigan haroratda o'sganda erta qarishni namoyon qiladi va xromosomalarni tekshirish DNK fragmentlarining uchlarida ko'plab 3'-bir zanjirli qismlarni ko'rsatdi. Nopermessiv (rivojlanishga to'sqinlik qiladigan) haroratdagi nuqsonli ferment quyidagilardan qaysi biri hisoblanadi?",
      a: [
        "Telomeraza",
        "DNK ligazasi",
        "DNK polimeraza",
        "DNK tiklovchi polimeraza",
        "Helikaza",
      ],
      correct: 0,
      explanation:
        "Telomeraza nopermessiv haroratda nuqsonlidir. DNK polimerazalarining ikki tomonlama talablari (DNKni 5'→3' yo'nalishda sintez qilish va andoza zanjirga bo'lgan ehtiyoj) tufayli chiziqli xromosomalarning uchlarini replikatsiyalash 3'-bir zanjirli qismlar (3'-overhang) ga olib keladi. Telomeraza ushbu muammoni o'z RNK andozasiga egaligi va 3'-overhangni uzaytirish orqali yechadi. DNK ligazasining yetishmasligi fosfodiefir skeletida ko'p sonli bo'shliqlarga olib keladi, ammo telomerlarga maxsus ta'sir qilmaydi. DNK polimeraza yoki helikaza faolligining yetishmasligi butun DNK replikatsiyasiga ta'sir qiladi, faqat telomerlarga emas.",
    },
    {
      q: "Bir oila piknikda bo'lganida, piknik salatiga qo'shish uchun yovvoyi qo'ziqorinlarni yig'di. Ko'p o'tmay, oilaning barcha a'zolari kasal bo'lib, kenja farzandda eng og'ir alomatlar namoyon bo'ldi. Oila o'z hujayralari va to'qimalarida quyidagilardan qaysi birini amalga oshira olmaslik tufayli bu ta'sirlardan qiynalmoqda?",
      a: [
        "Oqsillar sintezi",
        "Lipidlar sintezi",
        "DNK sintezi",
        "Uglevodlar sintezi",
        "DNKdagi shikastlanishini tiklash",
      ],
      correct: 0,
      explanation:
        "Zaharli qo'ziqorinlardagi zahar eukariot RNK polimerazalari, birinchi navbatda RNK polimeraza II ning ingibitori bo'lgan α-amanitindir. Oila zaharli qo'ziqorinni iste'mol qilar ekan, RNK polimeraza II faoliyatini to'xtatgan va iRNK ishlab chiqarilmagan, bu oqsil sintezining yetishmasligiga olib keladi. Bu holda lipidlar, uglevodlar yoki DNK sinteziga to'g'ridan-to'g'ri ta'sir yo'q (faqat sintezga talab etiladigan fermentlar almashinuvidan boshqa yo'l bilan bilvosita ta'sirlanadi). α-amanitin DNK tiklanishiga bevosita ta'sir qilmaydi.",
    },
    {
      q: "Yangi tug'ilgan chaqaloq juda fotofob, uning terisi quyosh nurining minimal ta'siri bilan ham kuyadi va natijada terisida pufakchalar hosil bo'ladi. Ota-onasining hech birida bu xususiyat yo'q, garchi ikkalasi ham qisqa vaqt ichida quyoshda kuyishga moyil. Bola o'sib ulg'aygan sayin, yoshi uchun o'rtacha bo'y va vaznda, yoshiga xos o'sib-rivojlanmoqda bormoqda. Biroq, u har doim ichkarida saqlanadi va agar u uydan chiqishi kerak bo'lsa, ehtiyotkorlik bilan tanasi o'raladi. Bu boladan olingan fibroblastlar to'plami o'stiriladi va tajribada ultrabinafsha nuri ta'sir ettirildi. Fibroblast DNKsining tahlili quyidagilardan qaysi birini ko'rsatadi?",
      a: [
        "Purinsiz va pirimidinsiz saytlarning ustunligi",
        "Opa-singil xromatid almashinuvining ortishi",
        "DNKdagi anomal asos juftlarining ustunligi",
        "DNK ichidagi telomerlarning yo'qolishi",
        "DNK zanjirlari ichida o'zaro bog'langan asoslarning ko'payishi (timin dimerlari)",
      ],
      correct: 4,
      explanation:
        "Bolada Kseroderma pigmentozum (XP) bor, nukleotid qirqish reparatsiyasida nuqson bor, shuning uchun ultrabinafsha nurlari ta'sirida hosil bo'lgan timin dimerlari (DNK zanjiri ichida o'zaro bog'langan qo'shni pirimidin asoslari) DNKdan olib tashlanmaydi. XP purinsiz yoki pirimidinsiz saytlarni qayta tiklashga ta'sir qilmaydi. Opa-singil xromatid almashinuvining oshishi Bloom sindromiga xos. XP DNKda noodatiy asos juftlariga olib kelmaydi. XP telomerazaning chiziqli xromosomalar oxirini uzaytirish qobiliyatiga ta'sir qilmaydi.",
    },
    {
      q: "15 yoshli bolaga teri saratoni tashxisi qo'yildi. U har doim quyosh nuriga sezgir bo'lgan va umrining ko'p qismini uyda o'tkazgan. Uning izolyatsiyalangan fibroblastlaridan olingan DNKsining tahlili ultrabinafsha nurlar bilan ta'sirlangan hujayralarda timin dimerlari darajasining oshganligini ko'rsatdi. Bolada quyidagilardan qaysi biri sababli mutatsiya darajasi oshishi teri raki paydo bo'lishiga olib kelgan?",
      a: [
        "DNK praymaza faolligining yetishmasligi",
        "Mitoz paytida rekombinatsiyaning pasayishi",
        "Mitoz paytida rekombinatsiyaning kuchayishi",
        "Asos qirqish reparatsiyasi aktivligi yo'qolishi",
        "Nukleotid qirqish reparatsiyasi aktivligi yo'qolishi",
      ],
      correct: 4,
      explanation:
        "Ultrabinafsha nurlari tomonidan DNKning shikastlanishi (pirimidin dimerlari) nukleotid qirqish reparatsiyasi yo'li bilan tiklanishi mumkin. Bolada XP bor, buni ultrabinafsha nurlar ta'siridan keyin DNKdagi timin dimerlarining ko'payishi ko'rsatadi. Dimerlarni tuzatib bo'lmas ekan, DNK polimeraza dimerlar bo'ylab replikatsiya sodir bo'lganda 'taxmin qiladi', bu esa hujayralarning mutatsion tezligini oshiradi. Natijada, hujayra proliferatsiyasini tartibga soluvchi genda mutatsiya sodir bo'ladi va saraton kelib chiqadi. Mutatsiya tezligining oshishi mitoz vaqtida rekombinatsiya tezligi bilan yoki DNK primaza faolligining yetishmasligi bilan bog'liq emas. XP bilan og'rigan bemorlarda asos qirqish reparatsiyasi normaldir.",
    },
    {
      q: "40 yoshli erkak faktor V Leyden yetishmovchiligi va qaytalanuvchi chuqur venalar trombozini varfarin yordamida samarali profilaktika qiladi. U bugun shifoxonadan tashqari pnevmoniya bilan keldi va eritromitsinli davo buyurildi. Uch kundan keyin unda qon ketishi paydo bo'ldi va unda INR 8,0 chiqdi (qon ivish vaqtini ortganligini ko'rsatadi). Quyidagilardan qaysi biri bu qon ketish nima uchun sodir bo'lganligini eng yaxshi izohlaydi?",
      a: [
        "Eritromitsin sitoxrom P450ni ingibirlagan",
        "Eritromitsin sitoxrom P450ni stimullagan",
        "Pnevmoniya qo'zg'atuvchisi K vitaminidan foydalanishni ingibirlagan",
        "Pnevmoniya qo'zg'atuvchisi K vitaminidan foydalanishni stimullagan",
        "Eritromitsin mitoxondrial translyatsiyani ingibirlagan",
        "Eritromitsin mitoxondrial transkripsiyani ingibirlagan",
      ],
      correct: 0,
      explanation:
        "Varfarin induksiyalangan P450 izoenzimlarining spetsifik guruhi tomonidan metabolizmga uchraydi. P450 tizimi hujayralar tomonidan ksenobiotikni (bu holda varfarin) osonroq ekskretsiyalanishi uchun o'zgartirishda ishlatiladi. Eritromitsin, boshqa makrolid antibiotiklari bilan bir qatorda, P450 oksidlanish tizimini ingibirlaydi, bu holda qonda varfarinning yuqori darajasiga olib keladi, shuning oqibatida qon ivish va qon ketish muvozanati ortiqcha qon ketishiga tomon siljigan. P450 ishlab chiqarilishini stimullash aksincha varfarinning qondagi miqdorini pastroq darajasiga olib kelgan bo'lar edi. Shifoxonadan tashqari pnevmoniyaning qo'zg'atuvchilari vitamin K ning so'rilishiga ta'sir qilmaydi. Eritromitsin mitoxondrial transkripsiyaga ta'sir qilmaydi va mitoxondrial translyatsiyani ingibirlash sitoxrom P450 faolligiga ta'sir qilmaydi.",
    },
    {
      q: "Sizning diabetga chalingan bemoringiz qonidagi glyukoza miqdorini nazorat qilish uchun qisqa muddatli insulin lisprodan foydalanmoqda. Lispro B zanjirining C-terminal uchidagi lizin va prolin qoldiqlari pozitsiyasini almashtirish orqali hosil bo'lgan sintetik insulin. Bu inyeksiya joyidan insulinning tezroq so'rilishiga imkon beradi. Ushbu preparatning muhandisligi quyidagi texnologiyalardan qaysi biriga misol bo'la oladi?",
      a: [
        "Polimorfizm",
        "DNK fingerprinting",
        "Saytga yo'naltirilgan mutagenez",
        "Repressor promouterga bog'lanishi",
        "PZR",
      ],
      correct: 2,
      explanation:
        "Bu rekombinant DNK texnologiyasining saytga yo'naltirilgan mutagenez yordamida inson kasalliklari uchun juda foydali davolashni ishlab chiqishdagi yorqin namunasidir. Yetuk insulinning aminokislota va DNK ketma-ketligi ma'lum ekan, lisproning injeneringi prolin kodonni lizin kodoniga, qo'shni lizin kodonini esa prolin kodoniga aylantirishni talab qiladi. Polimorfizm populyatsiyadagi shaxslar o'rtasidagi DNK farqlarini anglatadi va lispro sintezi bilan bog'liq emas. DNK-fingerprinting noma'lum DNK namunalarini aniqlash uchun ishlatiladi. Repressor promouterga bog'lanishi prokariotlardagi gen regulyatsiyasi mexanizmi. PZR ma'lum DNK segmentini ko'paytiradi, ammo aminokislotalar ketma-ketligidagi o'zgarishga olib kelmaydi.",
    },
    {
      q: "Lispro insulinini sintez qilish uchun (oldingi savolda tasvirlanganidek) B zanjiri uchun kodlashda quyidagi o'zgarishlardan qaysi biri talab qilinadi?",
      a: [
        "CAAAAA→AAAAAC",
        "CCTAAT→AAACTC",
        "CCGAAG→AAACCA",
        "AAACCA→CCGAAG",
        "AAGCCT→AAACCC",
      ],
      correct: 2,
      explanation:
        "Prolin uchun kodonlar CCU, CCA, CCG va CCC. Lizin uchun kodonlar AAA va AAG. Ushbu ikki aminokislotaning insulin B-zanjiridagi normal ketma-ketligi pro-lys, shuning uchun bunga CCGAAG misol bo'ladi. Insulinning genetik jihatdan yaratilgan lispro variantida birinchi navbatda lizin kodoni, so'ngra prolin kodoni keladi (lys-pro), ya'ni CCGAAG → AAACCA. Boshqa javoblar noto'g'ri kombinatsiyalarni beradi.",
    },
    {
      q: "Oriq, nimjon 25 yoshli erkak yuzi va qo'llarida binafsha rangli pilakchalar va tugunlar, yo'tal va nafas siqishi bilan keldi. Uning muammolarining sababini eng samarali tashxislash uchun siz quyidagi test turlaridan qaysi biriga buyurtma berasiz?",
      a: [
        "Janubiy blot",
        "Shimoliy blot",
        "G'arbiy blot",
        "Sanger texnikasi",
        "Janubi-g'arbiy blot",
      ],
      correct: 2,
      explanation:
        "Bemorda Kaposhi sarkomasi va OITS bor. Qo'zg'atuvchisi RNK saqlovchi OIV virusi. G'arbiy blot texnikasi spetsifik qon namunasida OIVga xos oqsillar bilan bog'lanadigan antitanalar mavjudligini aniqlash uchun ishlatiladi. Janubiy blot DNKni, Shimoliy blot RNKni aniqlash uchun ishlatiladi, ammo virus RNKsining past darajasi tufayli OIVga qarshi oqsillarni tekshirish samaraliroq. Sanger texnikasi DNK ketma-ketligini aniqlaydi va OIV statusini aniqlash uchun ishlatilmaydi. Janubi-g'arbiy blot DNKning oqsillar bilan bog'lanishini aniqlash uchun ishlatiladi.",
    },
    {
      q: "17 yoshli erkakda katta, bo'rtib chiqqan quloqlar, cho'zilgan yuz, katta moyaklar, asteriksis, mushak tonusi pastligi va yengil intellektual zaiflik bor. Uning tashxisi mutatsiyaning qaysi turini ifodalaydi?",
      a: [
        "Nuqtali",
        "Insersiya",
        "Deletsiya",
        "Mismatch (nomuvofiqlik)",
        "Silent (saylent)",
      ],
      correct: 1,
      explanation:
        "Bemorda X xromosomasidagi FMR1 geni ichida triplet nukleotid takrorlanishining (CGG) kengayishi natijasida yuzaga keladigan Fragile X sindromi mavjud. Kengayish ushbu gen mahsulotining miyadagi normal ishlashiga xalaqit beradi va kuzatilgan alomatlarga olib keladi. Bu insersiya mutatsiyasining kuchli namunasidir. Nuqtali mutatsiya faqat bitta asos boshqasiga almashtirilganda sodir bo'ladi. Deletsiya gendan nukleotidlarni olib tashlashdir. Mismatch reparatsiya DNKda nomuvofiqlik aniqlanganda qo'llaniladigan tiklash jarayoni. Silent mutatsiya oqsildagi aminokislotaning o'zgarishiga olib kelmaydigan mutatsiya.",
    },
    {
      q: "Yosh qora tanli odam butun tanasi bo'ylab kuchli og'riq bilan tez yordam xonasiga olib kelindi. Og'riq boshlanganda u kuchli mashq qilar edi. So'nggi 10 yil ichida u yiliga ikki marta bunday epizodlarni boshdan kechirgan. Qon tahlilida qon hujayralari sonining kamayganligi (anemiya) va botiq bo'lmagan va cho'zilgan kolbasaga o'xshash g'alati ko'rinadigan qizil qon hujayralarini ko'rsatadi. Ushbu buzilishga olib keladigan mutatsiya turini quyidagilardan qaysi biri eng yaxshi tasvirlaydi?",
      a: ["Insersiya", "Deletsiya", "Missense", "Nonsense", "Silent (saylent)"],
      correct: 2,
      explanation:
        "Bemorda o'roqsimon anemiya bor. O'roqsimon anemiya valin (GTG) ning glutamat (GAG) bilan almashishi tufayli paydo bo'ladi. Bu missens mutatsiyaga misol bo'ladi (bitta aminokislota boshqasi bilan almashtiriladi) va faqat bitta aminokislota almashtirilganligi sababli nuqtali mutatsiyaga ham kiradi. Nonsens mutatsiya kodonni stop kodonga aylantiradi. Silent mutatsiya oqsilning aminokislotalar ketma-ketligini o'zgartirmaydi. Bu bitta nukleotidni almashtirish bo'lgani uchun insersiya yoki deletsiya oqibati emas.",
    },
    {
      q: "Ayol siyish paytida achishish hissi haqida shikoyat qiladi va siydik ekmasi bakterial infeksiyani ko'rsatdi. Shifokor ayolga siprofloksatsin buyurdi. Siprofloksatsin quyidagi jarayonlardan qaysi biriga xalaqit berganligi sababli bakteriyalarni yo'q qilishda samarali bo'ladi?",
      a: [
        "iRNK splaysing",
        "Protein sintezi initsiatsiyasi",
        "Protein sintezining elongatsiya bosqichi",
        "Nukleotid qirqish reparatsiyasi",
        "DNK replikatsiyasi",
      ],
      correct: 4,
      explanation:
        "Antibiotiklarning xinolon oilasi (siprofloksatsinni o'z ichiga oladi) DNK girazani ingibirlaydi. DNK giraza — replikatsiya sodir bo'lishi uchun DNK zanjirlarini yoyishda ishtirok etadigan prokariotlarga spetsifik topoizomeraza. Giraza faolligi bo'lmasa, DNK replikatsiyasi bo'lmaydi va bakteriyalar ko'paya olmaydi. Xinolonlar eukariotlar topoizomerazalariga ta'sir qilmaydi. hnRNKning splaysing jarayoni faqat eukariot hujayralarda sodir bo'ladi. Giraza nukleotid qirqish reparatsiyasida yoki oqsil sintezining biron bir jihatida ishtirok etmaydi.",
    },
    {
      q: "72 yoshli erkak son-chanoq bo'g'imini almashtirish operatsiyasidan so'ng kasalxonada bakterial infeksiya yuqtirib oldi. Stafilokokk infeksiyasi amoksitsillin, metitsillin va vankomitsin kabi ko'plab antibiotiklarga chidamli bo'lib, davolash juda qiyin. Bakteriya antibiotiklarga chidamliligini quyidagilardan qaysi biri tufayli paydo qilgan? Eng yaxshi javobni tanlang.",
      a: [
        "Mavjud genlardagi spontan mutatsiyalar",
        "Xromosomaning katta miqdordagi deletsiyasi",
        "Transpozon faoliyati",
        "Energiya ishlab chiqarishni yo'qotilishi",
        "Membrana tuzilishidagi o'zgarishlar",
      ],
      correct: 2,
      explanation:
        "Transpozonlar DNK elementlarini DNKning bir bo'lagidan boshqasiga, shu jumladan antibiotiklarga chidamlilik genlarni R-plazmidlardan xo'jayin xromosomaga o'tkazish qobiliyatiga ega. Shunday qilib, bakteriya antibiotiklarga qarshilik genlari bo'lgan plazmidlarni olganida, transpozonlar genni bakterial xromosomaga o'tkazishi mumkin, shundan so'ng u doimo hujayra tomonidan ekspressiyalanadi va endi plazmidni talab qilmaydi. Membrana strukturasidagi o'zgarishlar yoki bakterial xromosomaning katta deletsiyasi sodir bo'lmaydi. Antibiotiklarga chidamlilik energiya ishlab chiqarilishi yo'qotilishi yoki mavjud genlardagi spontan mutatsiyalar sababli kelib chiqmaydi.",
    },
    {
      q: "42 yoshli erkak tuberkulyoz bakteriyasi faollashishini oldini olish uchun ikki preparatli rejimga o'tkazilgan, chunki uning tuberkulin teri testi (PPD) ijobiy bo'lgan. Ammo unda silning klinik belgilari yo'q va ko'krak qafasi rentgenogrammasi manfiy. Preparatlardan birining ta'sir qilish mexanizmi quyidagi fermentlardan qaysi birini ingibirlashdir?",
      a: [
        "DNK polimeraza",
        "RNK polimeraza",
        "Peptidil transferaza",
        "Oqsil sintezining 1-initsiatsion faktori (IF-1)",
        "Telomeraza",
      ],
      correct: 1,
      explanation:
        "Latent tuberkulyoz uchun ikkita preparat qo'llaniladi: izoniazid va rifampin. Izoniazid sil kasalligiga olib keladigan bakteriyalar hujayra devorining zarur komponenti bo'lgan mikol kislota sintezini bloklash orqali ishlaydi. Rifampin bakterial RNK polimerazani ingibirlash va yangi oqsillarning sintezini bloklash orqali ishlaydi. Ikkala dori ham DNK polimeraza yoki peptidil transferazaga ta'sir qilmaydi (xloramfenikol peptidil transferaza faolligini ingibirlovchi antibiotikdir). Rifampin IF-1 ga ham ta'sir qilmaydi.",
    },
    {
      q: "47 yoshli, o'tgan 7 yil mobaynida buyrak dializida bo'lgan ayolda sariqlik, holsizlik, ko'ngil aynishi, past darajali isitma va qorin og'rig'i mavjud. Fizikal tekshiruv jigarning normadan ko'ra kattalashganini ko'rsatdi va qon tahlilida AST va ALT miqdorini oshganligi aniqlandi. Shifokor bemorga ribavirin va interferon buyurdi, ulardan biri nukleozid analogi bo'lib, DNK va RNK sintezlarini ingibirlashga qaratilgan. Boshqa preparatning asosiy vazifasi quyidagilardan qaysi birini bajarishdir?",
      a: [
        "Infeksiyalangan hujayralarda DNK tiklanishini ingibirlash",
        "Protein sintezining elongatsiya bosqichi tezligini oshirish",
        "Protein sintezining initsiatsiya tezligini kamaytirish",
        "Ribosoma shakllanishini ingibirlash",
        "Ribosoma shakllanishini rag'batlantirish",
      ],
      correct: 2,
      explanation:
        "Bemorda gepatit C infeksiyasining o'tkir versiyasi mavjud bo'lib, u birinchi navbatda jigarga ta'sir qiladi. Gepatit C uchun ikkita dori-preparatli davolash mavjud: ribavirin va modifikatsiyalangan interferon. Interferon oqsil sintezi uchun asosiy initsiatsiya faktorini fosforillaydigan kinazani (protein kinaza R) faollashtirish orqali ishlaydi va shu bilan faktorning oqsil sintezida ishtirok etishini ingibirlaydi (initsiatsiya tezligini kamaytiradi). Bu oqsil sintezining pasayishiga va hujayralarni zararlagan virusning replikatsiyasining kamayishiga olib keladi. Interferon DNKning tiklanishini ingibirlamaydi, elongatsiya bosqichini kuchaytirmaydi yoki ribosoma shakllanishiga ta'sir qilmaydi.",
    },
    {
      q: "50 yoshli ayolda 3 kundan beri nafas siqishi, yo'tal va isitma bor. U eri bilan yashaydi va tibbiy muammolari yo'q. Uning ofisdagi pulsoksimetr ko'rsatkichi 89, puls tezligi esa 110. U shifoxonadan tashqari pnevmoniyani davolash uchun qabul qilindi va uning intravenoz (IV) antibiotik davosi levofloksatsinni o'z ichiga oladi. Levofloksatsinga rezistentlik kuzatilishi uchun qaysi bakterial ferment mutatsiyasi talab qilinadi?",
      a: [
        "DNK primazasi",
        "DNK polimeraza III",
        "DNK giraza",
        "DNK ligazasi",
        "DNK polimeraza I",
      ],
      correct: 2,
      explanation:
        "Levofloksatsin bakterial topoizomerazalarni, birinchi navbatda DNK girazani ingibirlovchi xinolon antibiotiklar oilasining a'zosidir (etopozid — eukariot topoizomerazalarini ingibirlovchi dori). Giraza faolligisiz bakterial xromosomaning DNKsi to'g'ri yoyilmaydi va DNK replikatsiyasi to'xtab, bakteriyalarning o'limiga olib keladi. Xinolon antibiotiklar oilasi DNK polimerazalari, DNK ligazasi yoki DNK primazasiga bevosita ta'sir qilmaydi.",
    },
    {
      q: "18 yoshli kollej birinchi kurs talabasi yotoqxonada uchta xonadoshi bilan turishadi. Uning xonadoshlaridan biriga Neisseria meningitidis bakteriyasi sabab bo'lgan meningokokkli meningit tashxisi qo'yilgan. Qolgan uchta xonadosh izolyatsiya qilindi va kuniga ikki marta ushbu organizmga qarshi profilaktika sifatida antibiotik bilan davolandi, chunki ularning hech biri ro'yxatdan o'tishdan oldin meningokokk vaksinasini olmagan. Ularga bu antibiotik siydik yoki ko'z yoshlariga qizg'ish rang berishi mumkinligi aytildi. Ushbu preparat bakteriyalarni o'ldirishda samarali bo'lishining sababi quyidagilardan qaysi biri?",
      a: [
        "DNK sintezini ingibirlaydi",
        "RNK sintezini ingibirlaydi",
        "Protein sintezi jarayonini ingibirlaydi",
        "Bakterial membranani o'tkazuvchan holatga keltiradi",
        "ATF sintezini kamaytiradi",
      ],
      correct: 1,
      explanation:
        "Birinchi kurs yotoqxonalari yoki harbiy kazarmalar kabi gavjum sharoitlarda keng tarqalgan Neisseria infeksiyasini oldini olish uchun berilgan dori (profilaktika maqsadida) rifampindir. Rifampin RNK polimerazasini ingibirlaydi, shuningdek qizil rangni namoyish etadi — siydik yoki ko'z yoshlari orqali chiqarilishi bu suyuqliklarga qizg'ish rang beradi. Rifampin DNK sinteziga, bakterial membranaga, oqsil sintezi jarayoniga yoki bakteriyalar tomonidan ATF hosil bo'lishiga xalaqit bermaydi.",
    },
    {
      q: "38 yoshli uysiz erkak 2 kun oldin boshlangan nafas siqishi, qaltiroq, isitma, og'izdan ko'p so'lak ajralishi, yutinishda og'riq va 'it akkillashiga o'xshash' yo'tal tufayli shifokor qabulida. U 20 yildan beri hech qanday tibbiy yordam olmagan. Fizikal tekshiruvda teri rangi ko'karishi va halqumiga kulrang, qattiq membrana yopishgani aniqlandi. Bu kasallik ostida yotuvchi mexanizm quyidagilarning qaysi biri orqali normal hujayralarni zararlaydi?",
      a: [
        "Nishon hujayralarda DNK sintezi ingibirlanadi",
        "Nishon hujayralarda RNK sintezi ingibirlanadi",
        "Nishon hujayralarda oqsil sintezi jarayoni ingibirlanadi",
        "Nishon hujayralarda plazma membrana o'tkazuvchan bo'lib qoladi",
        "Nishon hujayralarda ATF hosil bo'lishi pasayadi",
      ],
      correct: 2,
      explanation:
        "Erkak difteriya bilan kasallangan va difteriya antitoksiniga, so'ngra qo'zg'atuvchi organizm C. diphtheriaeni yo'qotish uchun antibiotiklarga muhtoj. Difteriya toksini oqsil sintezining initsiatsiya faktorini fosforillash orqali eukariotlar oqsil sintezini bloklaydi (fosforillanish hujayrada oqsil sintezini ingibirlaydi). Toksin DNK yoki RNK sintezga bevosita ta'sir qilmaydi, mitoxondriya tomonidan ATF ishlab chiqarishni asosiy nishon sifatida kamaytirmaydi va plazma membranasining o'tkazuvchan bo'lib qolishiga yo'l qo'ymaydi.",
    },
    {
      q: "X kasallik yangi restriksiya fermenti saytini yaratilishi bilan bog'liq. DNKning tegishli maydoni EcoRI restriksiya saytlari, olingan fragmentlarning o'lchamlari (1.1 kb, 1.9 kb, 3.0 kb) va proba mavjud bo'lgan maydon bilan birga rasmda ko'rsatilgan (proba mutant allelning 1.1 kb fragmenti ichida joylashgan). Oiladan ularni ushbu buzilishning tashuvchisiligiga tekshirish uchun DNK olingan va ularning DNKlari EcoRI bilan parchalangan va mavjud proba yordamida Janubiy blot qilingan. Ushbu buzilish tashuvchisi Janubiy blotda qaysi tasmalarni ko'rsatadi?",
      a: [
        "1.1 kb",
        "1.9 kb",
        "3.0 kb",
        "1.1 va 1.9 kb",
        "1.1 va 3.0 kb",
        "1.9 va 3.0 kb",
        "1.1, 1.9 va 3.0 kb",
      ],
      correct: 4,
      img: "100-101-bet",
      explanation:
        "Tashuvchida bitta normal allel (3.0 kb EcoRI fragment hosil qiladi) va bitta mutatsiyaga uchragan allel (1.1 va 1.9 kb fragment hosil qiladi) bo'ladi. Bu savolga javob berishning kaliti shundaki, proba mutant allelda hosil bo'lgan 1.1 kb fragment ichida joylashgan (proba normal alleldan hosil bo'lgan normal 3.0 kb fragmentning ham ichida). Shunday qilib, Janubiy blot berilgan proba bilan tekshirilganda, faqat 1.1 kb DNK bo'lagi probaga birikadi va mutatsiyaga uchragan allelda ko'rinadi, DNKning shu qismi 3.0 kb DNK qismida ham mavjud bo'lgani uchun 3.0 kb DNK bo'lagi ham ko'rinadi.",
    },
    {
      q: "X kasallik yangi restriksiya fermenti saytini yaratilishi bilan bog'liq (27-savoldagi kabi). Ko'paytirilgan DNKda kasallik xavfi mavjudmi yoki yo'qligini aniqlash uchun tezkor PZR testi ishlab chiqilgan. Genomning ushbu sayti ko'rsatilgan PZR praymerlari bilan ko'paytirilgan va so'ngra ko'paytirilgan DNKga tegishli restriksiya fermenti bilan ishlov berilgan. Ushbu kasallik tashuvchisi bo'lgan bemor etidiy bromidli agaroza gelida quyidagi tasmalardan qaysi birini ifodalaydi?",
      a: [
        "1.1 kb",
        "1.9 kb",
        "3.0 kb",
        "1.1 va 1.9 kb",
        "1.1 va 3.0 kb",
        "1.9 va 3.0 kb",
        "1.1, 1.9 va 3.0 kb",
      ],
      correct: 6,
      img: "100-101-bet",
      explanation:
        "Primerlar orasidagi DNK maydonini kuchaytirish natijasida 3.0 kb bo'lak hosil bo'ladi. Oddiy allellardan olingan DNK tegishli restriktiv ferment bilan kesilganidan keyin agaroza gelida 3.0 kb diapazonni ko'rsatadi, chunki normal allelda bu joy kuchaytirilgan hududda mavjud emas. Ammo mutant allelda ushbu restriksiya joyi mavjud, shuning uchun DNKni kuchaytirgandan va restriksiya fermenti bilan davolashdan so'ng ikkala 1.1 va 1.9 kb bo'lak hosil bo'ladi. Tashuvchilarda har bir alleldan bittasi (normal va mutant) bo'ladi, shunda tashuvchi agaroza gelda uchta tasmani ko'rsatadi — 1.1, 1.9 va 3.0 kb.",
    },
    {
      q: "4 yoshli bolada o'sishdan ortda qolish, quyoshga ekstremal sezuvchanlik, eshitish yo'qolishi, og'ir darajadagi kariyes, pigmentli retinopatiya va erta qarish holatlari mavjud. Bolaning fibroblastlarini tahlil qilish o'sishga harakat qilayotgan hujayralarda DNKning ko'plab shikastlanishlarini, lekin transkripsiya darajasi ancha kamaygan latent hujayralarda o'sib borayotgan hujayralarga nisbatan minimal zararni ko'rsatdi. Bu bolada eng ko'p ehtimol bilan quyidagi jarayonlarning qaysi birida nuqson bor?",
      a: [
        "Timin dimerlari tiklanishi",
        "Asos qirqish reparatsiyasi",
        "Nukleotid qirqish reparatsiyasi",
        "Mismatch reparatsiya",
        "Transkripsiya bilan bog'liq DNK tiklanishi",
      ],
      correct: 4,
      explanation:
        "Bolada Cockayne sindromining alomatlari namoyon bo'lmoqda, bu sindrom transkripsiya bilan bog'liq DNK reparatsiyasidagi nuqson sababli kelib chiqadi. Genlar transkripsiyasi paytida, agar RNK polimeraza DNKning shikastlanishini sezsa, transkripsiya bilan bog'liq DNK reparatsiya mexanizmi DNK shikastlanishini tuzatayotganida transkripsiya to'xtab turadi. Bu sindrom ERCC6 yoki ERCC8 genidagi mutatsiyalar tufayli bo'lishi mumkin. Savolga javob berishning kaliti o'sayotgan hujayralardagi (transkripsion faol) va tinch hujayralardagi (kamroq genlarni ekspressiyalaydi) DNK shikastlanishining miqdorida. Timin dimerlarini tiklash, asos qirqish reparatsiyasi, nukleotid qirqish reparatsiyasi va mismatch reparatsiya jarayonlari ushbu kasallikka chalingan odamlarda normal ishlaydi.",
    },
    {
      q: "33 yoshli odam skrining kolonoskopiyadan o'tdi va o'ng tomonlama mutsinoz yo'g'on ichak saratoni bilan tashxislandi. Boshqa zararlanishlar yoki poliplar aniqlanmadi. Uning bunday erta yoshida kolonoskopiya qilinishining sababi shundaki, uning otasi va amakisi 40 yoshligida yo'g'on ichak saratoni aniqlangan. Uning ota tomonidan buvisida tuxumdon va bachadon saratoni bo'lgan. Bemordagi ehtimoliy nuqson quyidagi jarayonlardan qaysi birini amalga oshirish qobiliyatining pasayishi hisoblanadi?",
      a: [
        "DNKdan timin dimerlarini olib tashlash",
        "DNKdan U asosini olib tashlay olmaslik",
        "DNK ligaza faolligini yo'qolishi",
        "Yangi sintez qilingan DNKdagi mos kelmaydigan asoslarni tuzata olmaslik",
        "Individual nukleosomalardan solenoid tuzilishini hosil qila olmaslik",
      ],
      correct: 3,
      explanation:
        "Bemorda irsiy nopolipoz kolorektal rak (HNPCC) bor, bu mismatch reparatsiyada ishtirok etadigan oqsillardagi spetsifik mutatsiyalar bilan bog'liq (HNPCCga olib keladigan kamida to'rt xil oqsildagi mutatsiyalar aniqlangan). Mismatch reparatsiya timin dimerini olib tashlashda yoki asos qirqish reparatsiyasida ishtirok etmaydi. HNPCC nuqsonli DNK ligazasini o'z ichiga olmaydi yoki kasallik DNKning yadroda nuqsonli 'qadoqlanishi'ga (solenoid shakllanishi) olib kelmaydi.",
    },
    {
      q: "10 yoshli bola bo'yi va og'irligi bo'yicha o'zining yoshiga nisbatan kichik, hisoblab ko'rilganda bo'yi katta bo'lganida 5 futdan (152.4 sm). U fotofob, va quyoshga chiqsa burun va yanoqlarida kapalaksimon toshma paydo bo'ladi. Uning ovozi baland, burni yirik, quloqlari turtib chiqqan (katta) va bolaligida ko'plab pnevmoniyalar o'tkazgan. Ushbu bemorning fibroblastlarini tekshirish mitoz paytida singil xromatida almashish tezligi normal bola hujayralariga nisbatan oshganligini ko'rsatdi. Ushbu boladagi nuqsonli fermentativ faollik quyidagi faolliklarning qaysi biriga borib taqaladi?",
      a: [
        "DNK polimeraza",
        "RNK polimeraza",
        "Helikaza",
        "Ekzonukleaza",
        "Endonukleaza",
      ],
      correct: 2,
      explanation:
        "Bolada Bloom sindromi bor. Bloom sindromi — nuqsonli DNK helikaza sababli kelib chiqadigan DNK sintezi nuqsoni. Nuqsonli helikaza noma'lum mexanizm orqali hujayralardagi mutatsiya tezligining oshishiga olib keladi. Bloom sindromi bo'lgan bemorlardan olingan hujayralar gomologik xromosomalar orasidagi rekombinatsiya hodisalarining normal hujayralarga nisbatan yaqqol o'sishini ko'rsatadi (opa-singil xromatida almashinish tezligi). Bloom sindromi DNK yoki RNK polimeraza, ekzonukleaza yoki endonukleaza mutatsiyasi sababli kelib chiqmaydi.",
    },
    {
      q: "8 yoshli bolada rivojlanishdan orqada qolish, total alopetsiya, lokalizatsiyalangan skleroderemiya, kichkina yuz va jag', 'tumshuqsimon' burun, ajinli teri va bo'g'imlar karaxtligi bor. Unda yadro oqsili bitta nuqtali mutatsiyaga ega ekanligi aniqlandi, bu oqsilning birlamchi tuzilishi jihatidan bu saylent (silent) mutatsiyadir. Qanday qilib bunday mutatsiya kasallikka olib kelishi mumkin?",
      a: [
        "Oqsilning uchlamchi tuzilishini o'zgartirish orqali",
        "DNK replikatsiyasini ingibirlash",
        "Oqsilga erta stop kodonini kiritish orqali",
        "Genda alternativ splaysing saytini yaratish orqali",
        "Gen transkripsiyasi uchun alternativ start sayt yaratish orqali",
      ],
      correct: 3,
      explanation:
        "Bolada erta qarish kasalligi bo'lgan Hutchinson-Gilford progeriyasi alomatlari namoyon bo'lmoqda. Bu LMNA genidagi mutatsiya sababli bo'lib, LMNA geni yadro oqsili lamin A ni kodlaydi. Eng keng tarqalgan mutatsiya C1824T bo'lib, oqsil darajasida bu silent mutatsiya (G608G). Biroq T ning kiritilishi genda yashirin splays sayt hosil qiladi, buning oqibatida hnRNK qayta ishlanganda 150 ta nukleotid kam bo'lgan Lamin A iRNKsi hosil bo'ladi, bu o'z navbatida oqsilning karboksi terminali yaqinidagi 50 ta aminokislota yo'qotilishiga olib keladi. Mutant oqsil (progerin) da parchalanish joyi yo'qoladi, farnezilatsiya joyi esa saqlanib qoladi, natijada progerin yadro membranasi bilan bog'lanib, uni buzadi. Bu yetuk oqsildagi silent mutatsiya bo'lgani uchun oqsilning uchlamchi tuzilishi to'g'ridan-to'g'ri o'zgarmaydi va oqsilga erta stop kodoni kiritilmaydi.",
    },
    {
      q: "Olim hujayralar 42°C da o'stirilganda yadrocha hosil qila olmaydigan yangi gepatotsit hujayra turini o'rganmoqda. 96 soat mobaynida 42°C da bo'lgan hujayralarni tekshirganda, olim 14C-leytsinning oqsillarga qo'shilishi 35°C da o'stirilgan hujayralarga nisbatan ancha kamayganligini aniqladi. Bu eng katta ehtimol bilan nopermessiv haroratdagi quyidagilarning qaysi biri sababli?",
      a: [
        "Zaryadlangan tRNK molekulalarining yetishmasligi",
        "Protein sintezi paytida peptid bog'lar hosil qila olmaslik",
        "Initsiatsiya faktorlari yetishmasligi",
        "Yetuk iRNK hosil qila olmaslik",
        "Protein sintezi uchun zarur bo'lgan GTF yetishmasligi",
      ],
      correct: 1,
      explanation:
        "Yadrocha rRNK ishlab chiqariladigan va ribosomal subbirliklar yig'ilgan yadro ichidagi joydir. Yadrochalar bo'lmasa, hujayra ichidagi yetuk ribosoma miqdori kamayadi, bu esa oqsil sintezining umumiy pasayishiga olib keladi. Yetuk ribosomal kompleksning vazifalaridan biri katta ribosomal subbirlik rRNK ichidagi fermentativ faollikdan foydalangan holda peptid bog'larning shakllanishini katalizlashdir. tRNK sintezi va 'zaryadlash' reaksiyalari sitoplazmada sodir bo'ladi va yadrochani talab qilmaydi. iRNKning capping, splaysing va poliadenilatsiyasi ham yadrochani talab qilmaydi. Initsiatsiya faktorlari yoki GTF yetishmasligi bu holat uchun asosiy sabab emas — asosiy muammo yetuk ribosoma yetishmasligi tufayli peptid bog' hosil bo'lish jarayonining buzilishidir.",
    },
    {
      q: "Mukovitsidoz geni (CF) ajratilgan va ketma-ketligi aniqlangan. Mukovitsidoz (CF) eng keng tarqalgan shaklida normal gendan farq qiladigan DNK saytining ketma-ketligi uchun gel namunasi rasmda ko'rsatilgan (CF va normal genlarning ketma-ketligi dastlabki sakkizta asos uchun bir xil; normal genning 12-15 pozitsiyalari mukovitsidoz genining 9-12 pozitsiyalari bilan bir xil). Ushbu gel natijalari o'zgargan gendagi kasallikni keltirib chiqaradigan mutatsiya haqida nimani ko'rsatadi?",
      a: [
        "Bu bitta nukleotid almashishi sababli",
        "Bu oz sonli asoslarning kiritilishi sababli",
        "Bu oz sonli asoslarning deletsiyasi sababli",
        "Bu sitozinning dezaminlanishi sababli",
        "Bu DNKdagi frameshift mutatsiyasi sababli",
      ],
      correct: 2,
      img: "101-102-bet",
      explanation:
        "Ketma-ketliklar gelning pastidan yuqorisiga qarab o'qiladi. Ushbu maydonda mukovitsidoz (CF) va normal genlarning ketma-ketligi dastlabki sakkizta asos uchun bir xildir. Normal genning 12-dan 15-gacha pozitsiyalari mukovitsidoz genining 9-dan 12-gacha pozitsiyalari bilan bir xil. Shuning uchun CF genida normal genning 9-dan 11-gacha bo'lgan asoslariga mos keladigan 3 asosli deletsiya mavjud. Deletsiya 3 (uchta asos) ga karrali bo'lgani sababli, frameshift mavjud emas. Ushbu DNK namunasi ΔF508 mutatsiyasini ko'rsatadi, unda fenilalanin qoldig'i uchun kodon gendan o'chiriladi — bu CF bemorlarida eng keng tarqalgan mutatsiya bo'lib, CF bilan kasallangan shaxslarning taxminan 70% da uchraydi.",
    },
    {
      q: "Xuddi bir kasalxonada bir kunda ikkita o'g'il chaqaloq tug'ildi. Chaqaloqlar shifoxonada almashtirib qo'yilganligiga shubha sababli polimorfizmni namoyon qiladigan DNK restriksiya fragmentiga (RFLP) asoslangan genetik testlar o'tkazildi. Ota-onalar va chaqaloqlardan qon olindi, DNK ekstraktsiyalandi va PZR amalga oshirildi. Keyin DNKga restriksiya fermenti BanI bilan ishlov berildi va fragmentlar gel elektroforezi bilan ajratildi. Janubiy blot sinovining natijalari rasmda ko'rsatilgan (ona 9 va 7 kb, ota 8.5 va boshqa fragmentlarni ko'rsatadi; C1 bolada 9.5 va 7.0 kb, C2 bolada esa ota-onalarnikiga mos keluvchi fragmentlar bor). Ikki chaqaloqdan (C1 yoki C2) qaysi biri ushbu ona (M) va otaning (F) genetik avlodi?",
      a: [
        "C1 bu ota-onalarning avlodi bo'la oladi",
        "C2 bu ota-onalarning avlodi bo'la oladi",
        "Ikkala chaqaloq ham bu ota-onalarning avlodlari bo'lishi mumkin (ya'ni, bu sinov diskriminatsiya qila olmaydi)",
        "Ushbu chaqaloqlarning ikkalasi ham ona bilan bog'liq bo'lishi mumkin, ammo ikkalasi ham ota bilan bog'liq emas",
        "Chaqaloqlarning hech biri bu ota va onaga tegishli emas",
      ],
      correct: 1,
      img: "102-103-bet",
      explanation:
        "Har bir xromosomada gomolog mavjud. Shuning uchun genomda har bir DNK ketma-ketligining ikkita nusxasi bo'ladi. C2 bola bu onadan 9 kb restriksiya fragmentini va bu otadan 8.5 kb fragmentni olishi mumkin edi. Ushbu testga ko'ra, C1 bola bu onaga ham, bu otaga ham genetik jihatdan bog'liq emas, chunki na onada, na otada C1 bola tomonidan ekspressiyalangan 9.5 va 7.0 kb fragmentlar mavjud emas.",
    },
  ],
  m4: [
    {
      q: "15°C da o'sgan bakteriyalar membranalari 37°C da o'sgan bakteriyalarga solishtirganda turlicha yog' kislotalari tarkibidan iborat. Quyidagilardan qaysi biri bu ikki xil haroratdagi yog' kislotalar tarkibini eng yaxshi tasvirlab beradi?",
      a: [
        "Pastroq haroratdagi bakteriyalar yuqori haroratda o'sadigan bakteriyalarga nisbatan to'yingan yog' kislotalarining yuqoriroq ulushini o'z ichiga oladi",
        "Pastroq haroratda o'stirilgan bakteriyalarda yuqori haroratda o'stirilgan bakteriyalarga nisbatan uzun zanjirli yog' kislotalarining yuqoriroq ulushi bor",
        "Pastroq haroratda o'stirilgan bakteriyalar yuqori haroratda o'stirilgan bakteriyalarga nisbatan to'yinmagan yog' kislotalarning yuqoriroq ulushiga ega bo'ladi",
        "Pastroq haroratda o'stirilgan bakteriyalarda yuqori haroratda o'stirilgan bakteriyalarga nisbatan xolesterolning yuqori darajalari bo'ladi",
        "Pastroq haroratda o'stirilgan bakteriyalarda yuqori haroratda o'stirilgan bakteriyalarga solishtirganda xolesterolning past darajalari bo'ladi",
      ],
      correct: 2,
      explanation:
        "Bakteriyalar o'sishi uchun membrananing suyuqligi (oquvchanligi) ikki xil haroratda ham o'zgarmas bo'lishi kerak. Pastroq haroratda to'yinmagan yog' kislotalarning yuqori foizi va qisqa zanjirli to'yingan yog' kislotalari mavjud bo'ladi, chunki bu yog' kislotalar uzun zanjirli to'yingan yog' kislotalarga qaraganda pastroq suyuqlanish haroratiga ega. Bakterial membranalarda xolesterin topilmaydi.",
    },
    {
      q: "Avtopsiya paytida tez-tez o'zini jarohatlab oladigan 57 yoshli patologda qisqa vaqt ichida ko'rish xiralashishi, demensiya, shaxsiyatning o'zgarishi va muskul 'uchishi' rivojlandi. Ushbu xulq-atvor o'zgarishlariga olib keladigan oqsil quyidagilarning qaysi birida eng yaxshi ifodalangan?",
      a: [
        "Eruvchan, sitoplazmatik oqsil",
        "Periferik membrana oqsili",
        "Integral membrana oqsili",
        "GFIga bog'langan membrana oqsili",
        "Sekretsiyalanadigan oqsil",
      ],
      correct: 3,
      explanation:
        "Patolog prion oqsilining alternativ konformatsiya olishi va asab to'qimalarida cho'kmalar hosil qilishi natijasida prion kasalligini orttirib olgan. Normal prion oqsili GFI (glikozilfosfatidilinozitol) bilan bog'langan oqsildir.",
    },
    {
      q: "Ko'pgina o'sish omillari o'z retseptorlari bilan bog'langandan so'ng hujayra yuzasida retseptorlar soni kamayadigan manfiy regulyatsiyani namoyon qiladi. Bu quyidagi jarayonlarning qaysi biri tufayli yuz beradi?",
      a: ["Endositoz", "Ekzotsitoz", "Pinotsitoz", "Pototsitoz", "Fagotsitoz"],
      correct: 0,
      explanation:
        "Retseptor-vositali endotsitoz retseptorlarning ichki membranada klatrin bilan qoplangan chuqurchalar bo'ylab yig'ilishi va so'ngra hujayra membranasining retseptor-o'sish faktori kompleksini saqlovchi intrasellulyar pufakcha hosil qilish uchun invaginatsiyasini anglatadi. Ekzotsitoz teskari jarayondir. Pinotsitoz retseptorlarsiz endositozni anglatadi. Pototsitoz klatrin o'rniga kaveolalar orqali retseptor-vositali kirishni anglatadi. Fagotsitoz zarracha (yoki bakteriya)ni o'z ichiga oluvchi membrananing endotsitozi.",
    },
    {
      q: "Membranalar bo'ylab proton gradiyentlari quyidagi organellalardan qaysi birining funksiyalari uchun muhim? Eng yaxshi javobni tanlang.",
      a: [
        "Lizosomalar",
        "Mitoxondriya",
        "Yadro",
        "Lizosomalar va mitoxondriyalar",
        "Lizosomalar va yadro",
        "Yadro va mitoxondriya",
      ],
      correct: 3,
      explanation:
        "Lizosomalar o'zlarining hujayra ichidagi muhitini kislotaliga aylantirishi uchun proton gradiyentiga muhtoj bo'lib, shu orqali lizosomal gidrolazalar o'zlari uchun optimal pH darajasida (5,5 atrofida) bo'ladi. Mitoxondriyalar oksidlovchi fosforillanish orqali ATF ni sintez qilish uchun ichki membranasi bo'ylab proton gradiyentini talab qiladi. Yadro protonlarni to'plamaydi; yadro ichidagi bo'shliq sitoplazma bilan bir xil pHga ega.",
    },
    {
      q: "Faraz qilaylik, ma'lum bir SKI (siklinga bog'liq kinaza ingibitori) ekspressiyasini boshqarishda ishtirok etuvchi mikroRNK bor. Bu mikroRNKning o'zgarishi qanday qilib nazoratsiz hujayra proliferatsiyasiga olib kelishi mumkin?",
      a: [
        "MikroRNKning me'yordan ortiq ekspressiyasi, ya'ni u onkogen sifatida ta'sir qiladi",
        "MikroRNKning ekspressiyasi kamayadi, ya'ni u o'sma supressori kabi ta'sir qiladi",
        "MikroRNK faolligining to'liq yo'qolishi, shu tariqa u o'zining nishon iRNKsi bilan bog'lana olmaydi",
        "MikroRNKning nishon uchun spetsifikligi yo'qolishi, shu tariqa turli iRNKlar nishonga olinmaydi",
        "MikroRNK faolligida o'zgarish yo'qligi nazoratsiz hujayra proliferatsiyasiga olib kelishi mumkin",
      ],
      correct: 0,
      explanation:
        "SKI hujayra siklida tormoz vazifasini bajaradi. Agar SKIni hujayradan olib tashlash mumkin bo'lsa, unda hujayra sikli nazoratsiz davom etishi mumkin. MikroRNKlar nishon mRNKdan hosil bo'lgan oqsil mahsuloti miqdorini kamaytiradi. SKI ishlab chiqarishni bartaraf etish uchun mikroRNK me'yordan ortiq ekspressiyalanishi kerak, shunda barcha nishon mRNKlar bog'lanadi va gen mahsulotining translyatsiyasi to'xtatiladi (mikroRNK bu holda onkogen kabi ta'sir qiladi). MikroRNK ekspressiyasini kamaytirish esa SKI ning me'yordan ortiq ekspressiyasiga va hujayra siklini ko'proq boshqarishga olib keladi (aksincha ta'sir).",
    },
    {
      q: "Geterotrimer G-oqsillarning regulyatsiyasi quyidagi jarayonlarning qaysi birining regulyatsiyasiga o'xshash?",
      a: [
        "DNK sintezi",
        "RNK sintezi",
        "Oqsil sintezi",
        "Faol transport",
        "Yengillashgan transport",
      ],
      correct: 2,
      explanation:
        "Geterotrimer G-oqsillar α-subbirligiga GTF ni bog'laydi, bu esa subbirlikni aktivlaydi. Aktivlanish α-subbirlik ichida mavjud GTFaza orqali o'z-o'zidan boshqariladi, bu asta-sekin bog'langan GTFni GDFga gidrolizlaydi va subbirlikni inaktivlaydi. Shunga o'xshash hodisalar oqsil sintezida initsiatsiya omillari va elongatsiya faktorlari bilan ham sodir bo'ladi — ular GTF bilan bog'langanda aktiv bo'ladi va ichidagi GTFaza aktivligi ularning aktivlik davomiyligini cheklaydi. Bunday boshqaruv tizimlari DNK yoki RNK sintezida yoki tashuvchi-vositachiligidagi transportda kuzatilmaydi.",
    },
    {
      q: "Qaysi kimyoviy messenjer orqali uzatiladigan xabarga plazma membranasining suyuqligini juda ham kamaytirgan mutatsiya ko'p ehtimol bilan salbiy ta'sir ko'rsatadi?",
      a: ["Sitokin", "Steroid gormon", "TGF", "Insulin", "Glyukagon"],
      correct: 1,
      explanation:
        "Steroid gormonlar hujayra ichiga passiv diffuziya orqali kirishi kerak, agar membrana kamroq suyuq (oquvchan) bo'lsa, gormon retseptoriga bog'lanish uchun hujayra ichiga kirishi qiyinroq bo'ladi. Sitokinlar, TGFlar, insulin va glyukagon signalini retseptorning sitoplazmatik qismiga uzatuvchi transmembrana retseptorlari bilan bog'lanadi — ushbu konformatsion signallarning membrana suyuqligiga bog'liqligi steroid gormonining membrana orqali o'tishiga qaraganda kamroq.",
    },
    {
      q: "Li-Fraumeni sindromi quyidagilardan qaysi birining natijasida yuzaga keladi? Eng yaxshi javobni tanlang.",
      a: [
        "DNK shikastlanishini taniy olmaslik",
        "SDK (siklinga bog'liq kinazalar)larni regulyatsiya qila olmaslik",
        "Tirozin kinazani regulyatsiya qila olmaslik",
        "Gen transkripsiyasini regulyatsiya qila olmaslik",
        "Geterotrimer G-oqsilni aktivlay olmaslik",
      ],
      correct: 0,
      explanation:
        "Li-Fraumeni sindromi genom qo'riqchisi — p53 dagi irsiy mutatsiyadan kelib chiqadi. Ushbu oqsil DNKni shikastlanish mavjudligiga tekshiradi va agar shikastlanish aniqlansa, hujayra siklini to'xtatadigan, DNK shikastlanishining tiklanishiga imkon beradigan transkripsiya faktori sifatida ta'sir qiladi. Agar DNK shikastlanishi tiklanmasa, apoptoz indutsirlanadi. P53 SDKlar, tirozin kinazalari yoki G-oqsillarini boshqarmaydi. P53 ekspressiyasining yo'qolishi gen transkripsiyasining o'zini emas, balki uning natijalarini (reparatsiya, apoptoz) o'zgartiradi.",
    },
    {
      q: "Quyidagilardan qaysi biri tufayli xromosoma translokatsiyasi hujayraning nazoratsiz o'sishiga olib kelishi mumkin?",
      a: [
        "Mitozga xalaqit berish",
        "DNK sinteziga xalaqit berish",
        "Bo'linishdagi noteng krossingover",
        "Translokatsiyalangan genlarning nomuvofiq ekspressiyalanishi",
        "Gen ekspressiyasining yo'qolishi",
      ],
      correct: 3,
      explanation:
        "Nazoratsiz hujayra o'sishiga olib keladigan ko'pgina translokatsiyalarda gen konstitutiv (doimiy faol) promouterga yonma-yon joylashtirilganligi sababli nomuvofiq ekspressiyalanadi (masalan, Burkitt limfomasidagi immunoglobulin promouteri yonidagi myc geni). Hujayra proliferatsiyasining disregulyatsiyasi mitoz, DNK replikatsiyasi yoki krossingover bilan bog'liq muammolar tufayli yuzaga kelmaydi. Ko'pgina hollarda, muammo gen ekspressiyasining yo'qolishi emas, balki translokatsiya qilingan genning me'yordan ortiq yoki nomuvofiq ekspressiyasidir.",
    },
    {
      q: "Umumiy sitokin signal uzatilishidagi buzilish quyidagi buzilishlarning qaysi biriga olib kelishi mumkin?",
      a: [
        "Adrenoleykodistrofiya",
        "SCID (og'ir kombinatsiyalashgan immunotanqislik)",
        "Influenza",
        "Miasteniya gravis",
        "1-tip qandli diabet",
      ],
      correct: 1,
      explanation:
        "X ga bog'langan SCID sitokin retseptori umumiy subbirligi (γ-subbirlik) yo'qligidan kelib chiqadi, bu subbirlik yo'qligi turli sitokinlarning gematopoetik hujayralarga signal o'tkazish qobiliyatiga ta'sir qiladi. Adrenoleykodistrofiya juda uzun zanjirli yog' kislotalarining to'planishi oqibatida kelib chiqadi. Gripp virus sababli kelib chiqadi. Miasteniya gravis atsetilxolin retseptorlariga qarshi antitanalar natijasida yuzaga keladi. 1-tip diabet insulin ishlab chiqara olmaslikdan kelib chiqadi.",
    },
    {
      q: "Bodibildingchi so'nggi 6 oy ichida 50 funt (20.5 kg) muskulga ega bo'ldi, bunga og'ir atletika mashg'ulotining ko'payishi va 'qora bozor'dan olingan bir dorining inyeksiyasi yordam berdi. Bu vaqt ichida u umuman gipoglikemiyani his qilmadi. Noqonuniy moddaning bodibilder mushak hujayralariga o'tish mexanizmi eng ko'p ehtimol bilan quyidagilardan qaysi biri?",
      a: [
        "Oddiy diffuziya",
        "Faol transport",
        "Endotsitoz",
        "Yengillashgan diffuziya",
        "Pinotsitoz",
      ],
      correct: 0,
      explanation:
        "Bodibilder mushak massasini oshirishga yordam beradigan steroid gormoni testosteronni (ko'p ehtimol bilan) inyeksiya qilyapti. Steroid gormonlar lipidlarda eriydigan moddalar va oddiy diffuziya orqali membranalardan o'tadi. Steroid gormonlar uchun retseptor hujayra ichida (sitoplazma yoki yadroda) mavjud. Faol transport va yengillashgan diffuziya membrana bilan bog'langan tashuvchini yoki energiyani talab qiladi — steroid gormon transportida bu kuzatilmaydi. Bodibilder preparatni qabul qilganidan keyin umuman gipoglikemik bo'lmagani insulin inyeksiya qilinmayotganini ko'rsatadi.",
    },
    {
      q: "Bodibilder dori sifatida foydalanayotgan noqonuniy moddaning asosiy qismini hujayra ichiga kiritish uchun qancha energiya kerak bo'ladi?",
      a: [
        "Energiya talab qilinmaydi",
        "Tashilgan moddaning har bir molekulasi uchun bitta ATF molekulasi ishlatiladi",
        "Ko'p substansiyalar diffuziyalanadigan kanalni ochib yopish uchun faqatgina judayam kam ATF molekulalari ishlatiladi",
        "Bu kotransportga misol bo'lib, bunda energiya membrana bo'ylab natriy gradiyentini hosil qiladi va energiyaning aniq miqdorini hisoblash qiyin",
        "Ko'pgina erigan moddalar transporti yuz berishiga imkon berish uchun transportyor bir marta fosforillangan bo'lishi kerak",
      ],
      correct: 0,
      explanation:
        "Oddiy diffuziya uchun energiya kerak emas, agar bu steroid gormoni bo'lsa, shunday holat xos. Boshqa javob variantlari — fosforillanish yo'li bilan kanalni aktivlash yoki kotransport uchun membrana bo'ylab gradiyent hosil qilish — faol transport jarayoni uchun zarur bo'lgan ATF ni talab qiladi. Oddiy va yengillashgan diffuziya transport uchun hech qanday energiya manbalarini talab qilmaydi.",
    },
    {
      q: "12 yoshli bola ketoatsidoz, qondagi glyukoza darajasi 700 mg/dL (och qoringa glyukozaning normal darajasi 80 dan 100 mg/dL gacha) bilan kasalxonaga qabul qilindi. Qo'shimcha tekshiruvda bolada C-peptid aniqlanmadi. Qonda glyukoza miqdorining oshishiga quyidagilardan qaysi biri potensial sabab hisoblanadi?",
      a: [
        "Hujayra membranalari bo'ylab natriy gradiyentining yetishmasligi",
        "Hujayra membranalari bo'ylab kalsiy gradiyentining yetishmasligi",
        "Hujayra membranalari bo'ylab xlorid gradiyentining yetishmasligi",
        "Miya membranasida glyukoza tashuvchi molekulalar sonining kamligi",
        "Muskul membranasida glyukoza tashuvchi molekulalar sonining kamligi",
        "Jigar membranasida glyukoza tashuvchi molekulalar sonining kamligi",
      ],
      correct: 4,
      explanation:
        "Bolada 1-tip qandli diabet bor va insulin ishlab chiqarilmaydi. Insulinning ta'siridan biri GLUT4 transportyorlarini ichki vezikulalardan mushak va yog' hujayralarining plazma membranasiga ko'chirilishini stimullashdir. Hujayra yuzasida glyukoza transport molekulalarining ko'payishi qonda glyukoza darajasini tezkorlik bilan kamaytirish uchun muhimdir. GLUT4 transportyori yengillashgan diffuziya uchun mo'ljallangan va ion gradiyentiga bog'liq emas.",
    },
    {
      q: "Bolada to'g'ri davolanganligi sababli glyukoza darajasi pasaydi va suvsizlanish yo'qoldi. Glyukoza uning hujayralariga o'tkazilgandan so'ng, qaysi organella glyukozaning karbonat angidrid va suvgacha oksidlanishidan energiya hosil qilish uchun javobgardir?",
      a: [
        "Lizosoma",
        "Golji kompleksi",
        "Mitoxondriya",
        "Yadro",
        "Peroksisoma",
      ],
      correct: 2,
      explanation:
        "Mitoxondriyalar energiya manbalari oksidlanadigan va ATF hosil qilinadigan organellalardir. Lizosomalar tarkibida oqsillarni va boshqa yirik molekulalarni parchalaydigan gidrolitik fermentlar mavjud. Golji molekulalarni plazma membranasiga tashish va sekretsiya uchun pufakchalar hosil qiladi. Yadro gen replikatsiyasini va DNKning transkripsiyasini amalga oshiradi.",
    },
    {
      q: "Bemorga A guruh streptokokli bakteriemiya tashxisi qo'yildi. Ushbu turdagi kasallikda tananing asosiy himoya vositalaridan biri eozinofillar (neytrofillar) uchun bakteriyalarni fagotsitlashdir. Ichkariga kiritilgandan so'ng, bakteriyalar fagosomani ma'lum bir hujayra ichidagi organella bilan birlashtirish orqali yo'q qilinadi. Quyidagilardan qaysi biri bu organellaning faolligini buzadi va bakteriyalarning zararsizlanmasligiga olib keladi?",
      a: [
        "Natriy-kaliy ATFaza faolligini ingibirlash",
        "Mitoxondrial oqsil sinteziga to'sqinlik qilish",
        "Yadro poralari orqali transportni bloklash",
        "Proton-translokatsiya qiluvchi ATFazani ingibirlash",
        "Kalsiy bilan faollashtiriladigan ATFazani ingibirlash",
      ],
      correct: 3,
      explanation:
        "Fagosomalar lizosomalar bilan birlashadi, bu yerda lizosomalar ichidagi kislotalilik va hazmlovchi fermentlar fagosoma ichidagi tarkibiy qismlarni (bu holda bakteriyalar) yo'q qiladi. Hazmlovchi fermentlar uchun optimal pH 5,5 ga teng, bu lizosoma ichida proton nasosi (proton-translokatsiya qiluvchi ATFaza faolligi) orqali saqlanadi. Yadro va mitoxondriya fagosoma tarkibini lizosomal hazmlanishida ishtirok etmaydi. Natriy-kaliy yoki kalsiy-aktivlovchi ATFazani bloklash lizosomaning o'z tarkibiy qismlarini parchalash qobiliyatiga ta'sir qilmaydi.",
    },
    {
      q: "Lizosomal gidrolazalar oqsilga uglevod qoldig'ini (M6F — mannoza-6-fosfat) qo'shish orqali lizosomaga yo'naltiriladi. Ushbu uglevodni qo'sha olmaslik kasallikka olib keladi, bunda lizosomal gidrolazalar sekretsiyalanadigan oqsillar sifatida baholanadi va lizosomalarga kiritilish o'rniga hujayradan eksport qilinadi. Sekretsiyalangan oqsillar qon aylanishi tizimidagi hujayralarga va oqsillarga quyida berilgan ta'sirlarning qaysi birini ko'rsatadi?",
      a: [
        "Qon hujayralari membranasidagi oqsillar hazmlanadi",
        "Qon hujayralari hujayra yuzasidagi uglevodlar olib tashlanadi",
        "Qon hujayralari membranalari judayam o'tkazuvchan bo'lib qoladi, bu qon hujayralarining o'limiga olib keladi",
        "Qon aylanish tizimidagi oqsillar parchalansada, qon hujayralari fermentlardan himoyalangan bo'ladi",
        "Qon aylanish tizimidagi oqsillar sirkulyatsiyadan chiqarib tashlanish uchun taloqqa yo'naltiriladi",
        "Qon aylanishidagi oqsillar va hujayralarga hech qanday ta'sir ko'rsatmaydi",
      ],
      correct: 5,
      explanation:
        "Lizosomal gidrolazalarning ko'pchiligi 5.5 ga yaqin kislotali pHda (optimal pH) o'zining eng yuqori faolligiga ega va neytral yoki asosli muhitda kam faollikka ega bo'ladi. Intralizosomal pH lizosoma ichiga protonlarni faol ravishda tashuvchi vezikulyar ATFazalar tomonidan 5.5 atrofida saqlab turiladi. Sitozol va boshqa hujayra komponentlari 7,2 ga yaqin pHga ega va shu orqali erkin gidrolazalardan himoyalangan. Qonning pH qiymati 7,2 va 7,4 oralig'ida saqlanadi, shuning uchun erkin lizosomal fermentlar bu pH darajasida faollikka ega bo'lmaydi va qon aylanishidagi oqsillar hamda hujayralarga ta'sir qilmaydi. I-hujayra kasalligi lizosomal to'planish kasalligidir.",
    },
    {
      q: "25 yoshli ayol tunnel orqali mashinasini haydashi kerak bo'lganida kuchli qo'rquvni boshdan kechiradi. U hushini yo'qotadi, kuchli terlaydi, yuragi urib ketadi va hansiraydi. Uning simptomlarini kamaytirish uchun unga diazepam buyurilgan. Ushbu muolaja natijasida effekti kuchayadigan kimyoviy messenjer quyidagilardan qaysi birida eng yaxshi tasvirlangan?",
      a: [
        "Neyropeptid",
        "Biogen amin",
        "Yirik molekulali neyrotransmitter",
        "Sitokin",
        "G-oqsil",
      ],
      correct: 1,
      explanation:
        "Bemorda xavotir buzilishi va vahima hujumlari mavjud. Xavotir buzilishi bo'lgan bemorlarda past gamma-aminomoy kislota (GAMK) miqdori mavjud. Diazepam kabi benzodiazepinlar GAMKning sinaptik uzatilishi samaradorligini oshiradi (GAMK retseptorlari bilan bog'lanish orqali xlorid kanallarini ko'proq vaqt ochiq qoldiradi). GAMK biogen amin (kichik molekulali neyrotransmitter) bo'lib, glutamatning dekarboksillanishidan olinadi. Neyropeptidlar odatda kichik peptidlar, sitokinlar immun tizimining messenjerlari, G-oqsillar esa geptaspiral retseptorlar bilan bog'liq — GAMK o'z signalini G-oqsil orqali uzatmaydi.",
    },
    {
      q: "15 oylik qiz qizamiq, parotit va qizilchaga qarshi MMR vaksina bilan emlandi. Quyidagi kimyoviy messenjerlardan qaysi biri tananing bu vaksinatsiyaga immun javob hosil qilish qobiliyati uchun javobgar?",
      a: [
        "Neyropeptidlar",
        "Biogen aminlar",
        "Steroid gormonlar",
        "Sitokinlar",
        "Aminokislotalar",
      ],
      correct: 3,
      explanation:
        "Sitokinlar immun tizimining messenjerlaridir. Neyropeptidlar va biogen aminlar (kichik molekulali neyrotransmitterlar) asab tizimining messenjerlaridir. Steroid gormonlar endokrin tizimning messenjerlaridir. Aminokislotalar (masalan, glitsin va glutamat) asab tizimida mediator sifatida ta'sir qilishi mumkin. Inyeksiya yuborilgandan so'ng, immun hujayralar qizga kiritilgan antigenlarga qarshi antitanalar sintezini qo'zg'ash uchun sitokinlarni sekretsiyalaydi.",
    },
    {
      q: "30 yoshli ayol bir oyda 15 funt (6.8 kg) vazn yo'qotish, issiqlikka chidamsizlik, taxikardiya, tremor, ikki tomonlama ekzoftalm va bo'yin oldingi qismida hosila borligi bilan murojaat qiladi. Ushbu holatda me'yordan ortiq ishlab chiqarilgan gormon quyidagilardan qaysi birini talab qiladi?",
      a: [
        "Araxidon kislotasi",
        "Xolesterin",
        "Tirozin",
        "Triptofan",
        "Glutamat",
      ],
      correct: 2,
      explanation:
        "Bemorda qalqonsimon bez gormonining ortiqcha ishlab chiqarilishi — gipertiroidizm yoki Graves kasalligi bor. Qalqonsimon bez gormoni tirozindan sintezlanadi, tiroid gormon aktiv shakllarini (T3 va T4) hosil qilish uchun tirozin yodlanadi. Xolesterin steroid gormonlarining, araxidon kislotasi eykozanoidlarning prekursoridir. Triptofan serotonin, glutamat esa GAMK ishlab chiqarish uchun zarur.",
    },
    {
      q: "3 yoshli bola 3 kundan beri davom etayotgan past darajadagi isitma, bo'g'imlardagi og'riq, qo'l va oyoqlaridagi to'rsimon toshmalar sababli olib kelindi. Uning yuzida ham toshmalar paydo bo'la boshlagan va uning yuzi huddi tarsaki urilganga o'xshaydi. Simptomlarga sabab bo'lgan kimyoviy messenjer (klinik jihatdan 'toshma' sifatida namoyon bo'ladigan vazodilatatsiya) quyidagilardan qaysi biri sifatida tasniflanishi mumkin?",
      a: [
        "Sitokin",
        "Neyropeptid",
        "Eykozanoid",
        "Steroid gormon",
        "Aminokislota",
      ],
      correct: 2,
      explanation:
        "Bemorda 'beshinchi kasallik' — parvovirus B19 sabab bo'lgan virusli kasallik bor. Ushbu toshmaning 'tarsaki urilgan yonoq' ko'rinishi juda o'ziga xosdir. Eykozanoidlar shikastlanishga javoban hujayra funksiyasini nazorat qiladi (bu holda virusli infeksiya). Tomir endotelial hujayralari tomirlarning kengayishi uchun silliq muskul hujayralariga ta'sir qiluvchi prostaglandinlarni ajratadi va bu qizg'ish ko'rinishga olib keladi. Neyropeptidlar, sitokinlar, steroid gormonlar yoki aminokislotalar bu kasallikdagi vazodilatatsiya uchun javobgar emas.",
    },
    {
      q: "62 yoshli erkakning qulog'i tepasida qizg'ish, notekis, oq qipiqli toshma mavjud. U davolanmagan va 3 yil o'tgach u kattalashgan, cheti ko'tarilgan, tuzalmaydigan markaziy yarasi bo'lgan jarohatga aylandi. Quyidagilardan qaysi biri ushbu malignizatsiyaning eng ehtimoliy sababchi omilidir?",
      a: [
        "Pirimidin dimerlari hosil bo'lishi",
        "Gidroksil radikallari hosil bo'lishi",
        "Onkogen RNK virusi",
        "O'sma nekrozi faktori (TNF) retseptori mutatsiyasi",
        "DNKdagi ikki zanjirli yoriqlar",
      ],
      correct: 0,
      explanation:
        "Bu erkakda dastlab aktinik keratoz bo'lgan va 3 yildan so'ng yassi hujayrali karsinomaga aylangan. Aktinik keratoz terining quyosh nuri ko'p ta'sir qiladigan joylarida rivojlanadi. Ultrabinafsha (UV) nurlarining tez-tez ta'siri DNKda pirimidin dimerlarining paydo bo'lishiga olib kelgan. Agar hujayralar DNK shikastlanishini yetarlicha tez tiklay olmasa, vaqt o'tishi bilan yomon sifatli o'smaga oid o'zgarishlar sodir bo'ladi. Gidroksil radikallari ionlovchi radiatsiya natijasida hosil bo'ladi. Onkogen RNK viruslari yassi hujayrali karsinomaga aloqador emas. TNF retseptor mutatsiyalari immun nuqsonga olib keladi, saraton emas. UV nurlari DNKda ikki zanjirli yoriqlar paydo bo'lishiga olib kelmaydi.",
    },
    {
      q: "32 yoshli ayolda sut bezi saratoni rivojlandi. Uning onasi va bir xolasi ko'krak saratoni bilan kasallangan va ona tomondan buvisi tuxumdon saratoni bilan kasallangan. Quyidagilardan qaysi biri ushbu irsiy muammo ortidagi mexanizmni eng yaxshi tasvirlab beradi?",
      a: [
        "Apoptozning yo'qolishiga olib keluvchi o'sma supressori",
        "DNKni tiklay olmaslikka olib keluvchi o'sma supressori",
        "Doimiy faol MAP kinaza yo'liga olib keluvchi o'sma supressori",
        "Apoptozning yo'qolishiga olib keluvchi onkogen",
        "DNKni tiklay olmaslikka olib keluvchi onkogen",
        "Doimiy faol MAP kinaza yo'liga olib keluvchi onkogen",
      ],
      correct: 1,
      explanation:
        "Tug'ma sut bezi saratoni o'sma supressor genlar (BRCA1 yoki BRCA2) ning biridagi irsiy mutatsiyalar natijasida yuzaga keladi. Bu genlar DNKni tiklashda muhim rol o'ynaydigan oqsillarni kodlaydi (asosan bir va ikki zanjirli yoriqlar), va aynan shu funksiyaning yo'qolishi bemorni sut bezi va tuxumdon saratoniga moyil qiladi. BRCA1 ning bitta mutatsiyaga uchragan nusxasini nasldan olish kasallikning boshlanishi uchun boshqa normal nusxaning ma'lum bir hujayrada yo'qolishini talab qiladi (geterozigotalik yo'qotilishi). BRCA1/2 mutatsiyalari to'g'ridan-to'g'ri apoptozning yo'qolishiga yoki konstitutiv faol MAP kinaza yo'liga olib kelmaydi.",
    },
    {
      q: "4 yoshli bola ota-onasi bilan sohilga borgan va ular bir oz mollyuska topib olishgan, keyinroq ularni kechki ovqatga yeyishgan. Bir necha soatdan keyin bolaning isitmasi ko'tarildi, qusishni boshladi va ko'p miqdorda suvli diareya paydo bo'ldi. Shoshilinch yordam bo'limiga (ED) olib borilgandan so'ng, bola ehtimoliy suvsizlanishga qarshi davolandi va asoratsiz tuzaldi. Undagi simptomlarning asosiy molekulyar sababi quyidagilardan qaysi biri bo'lgan?",
      a: [
        "Gαs oqsilining ADF-ribozillanishi",
        "Gαs oqsilining fosforillanishi",
        "Gαs oqsilining atsetillanishi",
        "Gαi oqsilining ADF-ribozillanishi",
        "Gαi oqsilining fosforillanishi",
        "Gαi oqsilining atsetillanishi",
      ],
      correct: 0,
      explanation:
        "Vabo (xolera) qo'zg'atuvchisi Vibrio cholerae bo'lib, najas bilan ifloslangan oziq-ovqat yoki suvda va dengiz mahsulotlarida uchraydi. Xolera toksini Gαs ning ADF-ribozilatsiyasini katalizlaydi, bu G-oqsil α-subbirligining GTFaza aktivligini ingibirlaydi, bu esa adenilatsiklazaning doimiy faollashuviga va yuqori sAMF darajalariga olib keladi. Bu ion kanallarining faollashishiga olib keladi va kaliy, natriy, xlorid ionlari suv bilan birga ichak epiteliy hujayralarini tark etib ichak bo'shlig'iga chiqadi, bu esa suvli diareyaga olib keladi.",
    },
    {
      q: "4 yoshli bolada bir necha marta pnevmoniya va steatoreya epizodlari bo'lgan va normal o'sish egri chizig'idan tushib ketgan. Ter suyuqligi testi xlorid ionlari uchun ijobiy chiqdi. Bu bola pnevmoniyaning takroriy epizodlari xavfi ostida ekanligining sababi quyidagilardan qaysi biri?",
      a: [
        "O'pka hujayralarining elastaza tomonidan parchalanishi",
        "Nuqsonli α1-antitripsin faolligi",
        "O'pkada suvning ko'pligi",
        "O'pkada qurigan shilliq qavat to'planishi",
        "DNK tiklanishidagi nuqson natijasida o'pka hujayralarining yo'qotilishi",
      ],
      correct: 3,
      explanation:
        "Bolada CFTR dagi mutatsiya sababli kelib chiquvchi mukovitsidoz (cystic fibrosis) simptomlari namoyon bo'lyapti. CFTR membrana bo'ylab xlorid ioni transporti uchun talab etiladi, sAMF-aktivlovchi protein kinaza tomonidan fosforillanish orqali aktivlanadi. Nuqsonli CFTR shilliq qavatning ion tarkibini o'zgartiradi, uning osmos orqali suvni singdirish qobiliyatini pasaytiradi, bu o'pka hujayralarida shilliq qavatning qurishiga olib keladi. Suv o'pka hujayralarini tark eta olmasa, shilliq qavat quriydi, bronxlar tiqilib qolganligi sababli o'pka disfunksiyasiga olib keladi.",
    },
    {
      q: "Eukariot hujayraga eksperimental preparat qo'shildi va preparat membranalarnining tashish jarayoniga xalaqit berish uchun mo'ljallangan bo'lsa-da, tadqiqotchilar preparat bilan davolangan hujayralarda lizosomalar tezda kiritmalarga aylanishini aniqladilar. Parchalanish uchun lizosomalarga yo'naltirilgan materiallarning hech biri lizosomada hazm bo'lmayotgan va organella ichida o'zgarishsiz holda saqlanib qolgan edi. Dori bilan davolangan hujayralardagi lizosomal tarkibni tahlil qilish organellada lizosomal fermentlarning to'liq to'plami mavjud ekanligini ko'rsatdi. Dori faqat bitta proteinni nishonga oladi deb faraz qilsak, quyidagi oqsillardan qaysi biri eng ehtimoliy nishondir?",
      a: [
        "Lizosomal membranaga kichik molekulalar uchun o'tkazuvchan bo'lishga imkon beruvchi tashqi membrana oqsili",
        "Lizosomal membranadagi proton-translokatsiyalovchi ATFaza",
        "Lizosomal membranadagi xlorid nasosi",
        "M6F ni lizosomal fermentlarga qo'shuvchi ferment",
        "M6F retseptori",
      ],
      correct: 1,
      explanation:
        "Lizosomalar proton tashuvchi ATFazani o'z ichiga oluvchi bitta membranadan iborat. ATFaza ATF gidrolizi hisobiga organella ichidagi pHni kislotali qilish uchun lizosoma ichida protonlarni yig'adi, shu orqali lizosomal fermentlar aktiv bo'ladi. Agar intravezikulyar pH ni pasaytirib bo'lmasa, hazmlovchi fermentlar faol bo'lmaydi va hazmlanish yuz bermaydi (ammo fermentlar organellada mavjud bo'lib qoladi). Agar lizosomal fermentlar M6F qoldig'i bilan nishonlanmasa yoki M6F retseptorlari bilan bog'lana olmasa, unda lizosomal fermentlar umuman lizosomalar ichida bo'lmagan bo'lar edi (I-hujayra kasalligi), bu klinik holat uchun xos emas.",
    },
    {
      q: "5 yoshli bola rivojlanish bosqichlarida, xususan, nevrologik jihatdan orqaga qaytishni boshlaydi. Ko'p o'tmay, bola komaga tushadi va 2 yil komadan so'ng vafot etadi. Avtopsiya natijasida miyadagi miyelin qobig'i anomal ekanligi aniqlandi, chunki u fosfolipidlarida juda ko'p miqdordagi juda uzun zanjirli yog' kislotalarini o'z ichiga olgan edi. Buyrak usti bezlari ham tashqi ko'rinishidan anomal edi. Bola, molekulyar darajada, quyidagi hujayra ichi organellalarning qaysi birida sodir bo'ladigan reaksiyalarni katalizlay olmaslikka olib keladigan mutatsiyani naslidan olgan?",
      a: [
        "Lizosomalar",
        "Yadro",
        "Mitoxondriya",
        "Peroksisomalar",
        "Golji apparati",
        "Yadrocha",
      ],
      correct: 3,
      explanation:
        "Bolada X xromosomaga bog'langan adrenoleykodistrofiya belgilari bor, bu ABCD1 geni mutatsiyasi mavjud bo'lgan X xromosomaga bog'liq kasallik. ABCD1 geni katabolizm uchun juda uzun zanjirli yog' kislotalarining peroksisomaga transporti uchun talab qilinadi. Bu gen aktivligi bo'lmasa, juda uzun zanjirli yog' kislotalari to'planadi, fosfolipidlar tarkibiga qo'shiladi va miyelin tuzilishini o'zgartiradi. Mitoxondriya yog' kislotalarini oksidlaydi, lekin juda uzun zanjirli (20 dan ortiq uglerodli) yog' kislotalarini emas — bunday hollarda oksidlanishning dastlabki bosqichlari peroksisomada sodir bo'ladi.",
    },
    {
      q: "42 yoshli ayolda kun oxiriga borib ko'zlarini ochiq holda saqlay olmaslik asta-sekin rivojlandi. Ko'z qovoqlarini ochiq tutishga kuchli urinishiga qaramay yopilib qolaverardi. Bu ertalablari sodir bo'lmaydi. Qo'shimcha tekshiruv kun oxiriga qarab davom etishi bilan umumiy mushaklar holsizligi paydo bo'lishini ko'rsatdi. Ushbu holatni barqarorlashtirishga yordam beradigan dori quyidagilardan qaysi birini amalga oshiradi?",
      a: [
        "Immun hujayralar hosil bo'lishini stimullaydi",
        "Epinefrin ishlab chiqarilishni stimullaydi",
        "Atsetilxolin ishlab chiqarilishni ingibirlaydi",
        "Asetilxolinesterazani ingibirlaydi",
        "Katexol-O-transferazani stimullaydi",
      ],
      correct: 3,
      explanation:
        "Ayolda miasteniya gravis kasalligi bor, bu atsetilxolin retseptoriga qarshi qaratilgan antitanalar tufayli yuzaga keladi. Bu holatni davolash usullaridan biri nerv-mushak birikmasida atsetilxolinni parchalovchi ferment — atsetilxolinesterazani ingibirlashdir. Nerv-mushak birikmasida atsetilxolin darajasini yuqori darajada ushlab turish orqali atsetilxolin bilan bog'langan retseptorlar aktivligi ehtimoli yuqoriroq bo'ladi. Atsetilxolin ishlab chiqarishni ingibirlash yoki immun hujayralar hosil bo'lishini stimullash muammoni kuchaytiradi. Epinefrin va katexol-O-transferaza bu jarayonda ishtirok etmaydi.",
    },
    {
      q: "Oldingi savol javobiga qo'shimcha (miasteniya gravis bemori), ushbu holatni barqarorlashtirishga yordam beradigan boshqa dori quyidagilardan qaysi birini amalga oshiradi?",
      a: [
        "Apoptozni stimullaydi",
        "Apoptozni ingibirlaydi",
        "Hujayra o'sishini stimullaydi",
        "Hujayra o'sishini ingibirlaydi",
        "Mushaklar o'sishini kuchaytiradi",
        "Mushaklarning o'sishini ingibirlaydi",
      ],
      correct: 0,
      explanation:
        "Ayolda miasteniya gravis kasalligi bor, bu avtoimmun kasallik. Antitanalar ishlab chiqarilishini kamaytirish uchun immunosupressantlarni qabul qilish mumkin. Bunday preparatlar hujayralarda ularni yo'q qilinishiga olib keluvchi apoptozni faollashtiradigan o'sma nekrozi faktori retseptorlarini aktivlash orqali ishlaydi. Apoptozni ingibirlash muammoni kuchaytiradi, chunki antitana ishlab chiqaruvchi hujayralar uzoqroq yashaydi. Muskullarga ta'sir qiluvchi dorilar bu kasallikda yordam bermaydi, chunki muammo antitana ishlab chiqaruvchi hujayralarda, muskul hujayralarida emas.",
    },
    {
      q: "Bemor boshdan kechirayotgan kasallikni aniqlash uchun bemorning qon zardobidan antitanalar manbayi sifatida foydalangan holda Western blot o'tkazildi. Gel ustida harakatlanadigan oqsil quyidagilardan qaysi biri bo'lishi kerak?",
      a: [
        "Asetilxolinesteraza",
        "Asetilxolin retseptori",
        "Epinefrin retseptori",
        "Katexol-O-metiltransferaza",
        "Glyukokortikoid retseptori",
        "GMG(gidroksimetilglutaril)-KoA reduktaza",
      ],
      correct: 1,
      explanation:
        "Ayolda miasteniya gravis kasalligi bor, bu nerv-mushak birikmasidagi atsetilxolin retseptoriga qarshi qaratilgan avtoimmun antitanalar mavjudligi oqibatida kelib chiqadi. Tashxisni Western blot yordamida tasdiqlash uchun atsetilxolin retseptorlari namunasi poliakrilamid geli orqali elektroforez qilinadi, oqsil filtr qog'oziga o'tkaziladi va filtr qog'ozi bemorning qon zardobi bilan inkubatsiya qilinadi. Agar zardobda atsetilxolin retseptorlari bilan bog'lanadigan antitanalar mavjud bo'lsa, ular filtr qog'oziga bog'lanadi va vizualizatsiya qilinadi.",
    },
    {
      q: "12 yoshli bolada charchoq va letargiya namoyon bo'lyapdi, unda gipoxrom, mikrositar anemiya borligi aniqlandi. Bolaning qizil qon hujayralarini mikroskopik tekshiruvi qavariq emas, balki sharsimon shaklni ko'rsatdi. Bu boladagi mutatsiya ko'pincha qizil qon tanachalarining qaysi qismida joylashgan oqsilda uchraydi?",
      a: ["Sitoskelet", "Yadro", "Mitoxondriya", "ER", "Plazma membranasi"],
      correct: 0,
      explanation:
        "Bolada irsiy sferotsitoz bor, bu qizil qon hujayralari sitoskeletidagi oqsilning mutatsiyasi oqibatida kelib chiqadi. Eng keng tarqalgan mutatsiya spektrinda, shunga qaramay ankirin, 'band 3' va 'protein 4.2' dagi mutatsiyalar ham ushbu fenotipga olib kelishi mumkin. Sitoskeletal oqsildagi mutatsiya tufayli membrana shakli botiq bo'lish o'rniga sharsimon bo'ladi, bu taloq tomonidan sharsimon hujayralarni olib tashlanishiga, anemiya va splenomegaliyaga olib keladi. Qizil qon hujayralarida yadro yoki mitoxondriya yo'q.",
    },
    {
      q: "39 yoshli erkak o'z joniga qasd qilishga urinishda gumon qilinib, shoshilinch yordam bo'limiga keltirildi. Unda ko'rishi xiralashishi; juda quruq, issiq, qizil teri; quruq og'iz; siydik tutilishi; dovdirash; gallyutsinatsiyalar; muvozanatni yo'qotish; va taxikardiya mavjud. Shoshilinch tibbiy yordam bo'yicha mutaxassislar uning kvartirasida amitriptilinning bo'sh idishini topdi. Erkak boshdan kechirayotgan ta'sir quyidagi jarayonlarning qaysi biri ingibirlanishi sababli kelib chiqqan?",
      a: [
        "Muskarinli atsetilxolin retseptorlari signal uzatishi",
        "Nikotinli atsetilxolin retseptorlari signal uzatishi",
        "Gamma-aminomoy kislota (GAMK) signal uzatishi",
        "Serotonin signal uzatishi",
        "Katexolamin signal uzatishi",
      ],
      correct: 0,
      explanation:
        "Ko'pgina dori-preparatlari sinflari, jumladan trisiklik antidepressantlar (masalan, amitriptilin), antixolinergik ta'sirga ega va atsetilxolin retseptorlari uchun antagonistlar sifatida ishlaydi. Muskarinli atsetilxolin retseptorlari G-oqsilni aktivlash orqali ta'sir qiladi. Preparatning me'yordan ortiq dozasi avtonom va markaziy nerv tizimidagi muskarinli retseptorlarni ingibirlab, simptomlarni keltirib chiqaryapti. Bu antixolinergiklar dozasini oshirib yuborishning tipik klinik holati ('ko'rshapalak kabi ko'r', 'suyak kabi quruq', 'lavlagidek qizil', 'shlyapachi kabi telba', 'quyondek issiq'). Nikotinli retseptorlarga yoki GABA, serotonin, katexolamin retseptorlariga ta'sir qilmaydi.",
    },
    {
      q: "21 yoshli bemor depressiv epizod uchun tekshirilmoqda. Suhbat davomida u o'tmishda o'zini yettinchi osmonda his qilish, tungi 4 soatlik uyqu bilan juda yaxshi ishlay olish, kredit kartalari limitidan o'tib ketish (u uchun juda noodatiy xususiyat) va ko'plab partnyorlar bilan 'tartibsiz' jinsiy aloqa qilishning ko'plab epizodlarini o'tkazganini tan oladi. Ushbu bemordagi ruhiy buzilishini davolash uchun eng ko'p ishlatiladigan elementar dori (litiy) quyidagi birikmalardan qaysi birining to'planishiga olib keladi?",
      a: [
        "Inozitol",
        "FI (fosfatidilinozitol)",
        "Inozitol fosfat",
        "Inozitol bifosfat",
        "IF3",
        "DAG",
      ],
      correct: 2,
      explanation:
        "Bemorda bipolyar buzilishning klassik belgilari mavjud. Litiy bipolyar buzilishni davolashda birinchi qator preparati hisoblanadi, uning ta'sir mexanizmi inozitol monofosfatazalar (inozitol fosfatni erkin inozitolga aylantiruvchi ferment) ta'sirini bloklash orqali FI siklini to'xtatishdir, shu orqali FI SDF-DAG va inozitoldan qayta sintezlanishi mumkin. Sikldagi uzilish orqali inozitol fosfat to'planadi, kalit ikkilamchi messenjerlar uzluksiz ishlab chiqarila olmaydi, bu signal uzatish imkoniyatlarining pasayishiga olib keladi.",
    },
    {
      q: "Yangi tug'ilgan chaqaloqni muntazam tekshiruvida bir tomonlama ko'z tubining qizil refleksi yo'qligi qayd etildi. MRT to'r pardani to'sib qo'yadigan o'smani ko'rsatdi. Ushbu o'smaga olib keladigan mutatsiya hujayra siklining qaysi fazasi boshqaruviga ta'sir qiladi?",
      a: [
        "G0 dan G1 ga",
        "G1 dan S ga",
        "S dan G2 ga",
        "G2 dan M ga",
        "M dan G1 ga",
        "G1 dan G0 ga",
      ],
      correct: 1,
      explanation:
        "Bolada irsiy retinoblastoma bor, bu rb genidagi irsiy mutatsiya oqibatida kelib chiqadi. rb geni o'sma supressor gen bo'lganligi sababli, geterozigotalik yo'qolishi sodir bo'lsa, rb ning hujayra siklidagi funksiyasi yo'qoladi. Rb transkripsiya omillarining E2F oilasini boshqarishga yordam beradi. Siklin sintezlansa va SBK ni faollashtirsa, rb oqsili fosforillanadi va E2F omillari bilan kompleksdan ajraladi, bu esa E2F oqsillarini faollashtiradi va hujayraga hujayra siklining G1 dan S fazasiga o'tishiga imkon beruvchi yangi gen transkripsiyasini boshlaydi. Funktsional rb geni mahsuloti bo'lmasa, S fazaga o'tish boshqarilmaydi.",
    },
    {
      q: "45 yoshli erkak axlatida qon borligi bilan murojaat qildi. Tekshiruv natijasida yo'g'on ichakda bir nechta poliplar bo'lgan 3-bosqich (Duke bo'yicha C bosqich) yo'g'on ichak karsinomasi aniqlandi. Oilaviy tarixga ko'ra, uning otasi va bobosi hayotining beshinchi o'n yilligida yo'g'on ichak saratoni bilan kasallangan. Ushbu o'sma rivojlanishida potensial faollashtiruvchi hodisa quyidagilardan qaysi biri hisoblanadi?",
      a: [
        "β-katenin aktivligi yo'qolishi",
        "β-katenin aktivligi faollashishi",
        "Transkripsiya omili myc faolligi yo'qolishi",
        "Bcl-2 aktivligi faollashishi",
        "Siklin ekspressiyasining yo'qolishi",
        "Siklin ekspressiyasining ortishi",
      ],
      correct: 1,
      explanation:
        "Bemorda irsiy yo'g'on ichak saratoni, aniqroq APC (adenomatous polyposis coli) mavjud, u hayotning to'rtinchi yoki beshinchi o'n yilligida yo'g'on ichak bo'shlig'ini qoplagan ko'plab poliplar bilan namoyon bo'ladi. Nuqsonli oqsil β-katenin aktivligini boshqaradigan APCdir. APC funksiyasini yo'qotish nomuvofiq aktivlangan β-kateninga olib keladi. β-katenin transkripsiya faktori sifatida myc va siklin D1 ning ekspressiyasini stimullay oladi va hujayra o'sishini tezlatadi. APC yo'qolishi sababli myc va siklin D1 ning nomuvofiq ekspressiyasi onkogenezda initsiatsiyalovchi hodisadir. Siklin ekspressiyasining ortishi bu jarayonning natijasi, initsiatsiyalovchi hodisa emas.",
    },
    {
      q: "29 yoshli ayol oxirgi 9 oydan beri davom etayotgan surunkali charchoq sababli murojaat qildi. Ilgari u mononukleoz bilan kasallangan va qon tekshiruvi surunkali virusli infeksiyani aniqladi. Jigar biopsiyasi tahlili shuni ko'rsatdiki, apoptoz boshlanishi kerak bo'lgan sharoitda hujayralar o'sishda davom etgan. Virusli infeksiya eng ko'p ehtimol bilan quyidagilarning qaysi biri sababli kelib chiqqan?",
      a: [
        "Epstein-Barr virusi",
        "Influenza (Gripp) virusi",
        "Maymunlar sarkomasi virusi",
        "Poliomiyelit virusi",
        "Herpes simplex virusi",
      ],
      correct: 0,
      explanation:
        "Epstein-Barr virusi (mononukleoz qo'zg'atuvchisi) infeksiyasi apoptoz antagonisti bo'lgan Bcl-2-ga o'xshash faktor sinteziga olib keladi va virus bilan zararlangan hujayralarga omon qolishi va ko'proq viruslar ishlab chiqarishda davom etishiga imkon beradi. Bu faktor potensial javob sifatida sanab o'tilgan boshqa viruslarda mavjud emas.",
    },
  ],
  m5: [
    {
      q: "1- va 2-savollarga javob berishda quyidagi tenglamaga murojaat qiling: Reaksiya fumaraza tomonidan katalizlangan deb hisoblang: fumarat + H2O ⇌ malat. Fumaraza yo'qligida o'lchanganda, bu reaksiya uchun ΔG˚' = 0 kkal/molni (H2O bilan bog'liq aspektlarni hisobga olmaganda) tashkil qildi. Ushbu reaksiya uchun muvozanat konstantasi quyidagilardan qaysi biri bo'ladi?",
      a: ["0", "0.5", "1.0", "10.0", "50.0"],
      correct: 2,
      explanation:
        "Agar ΔG˚' = 0 bo'lsa, −RT ln Keq = 0, chunki ΔG˚' = −RT ln Keq. −RT ln Keq = 0 bo'lishi uchun ln Keq = 0 bo'lishi kerak, bu Keq = 1 ekanligini anglatadi (1 ning natural logarifmi 0 ga teng).",
    },
    {
      q: "Dastlab 20 µM fumarat bo'lgan eritmaga fumaraza qo'shildi. Muvozanat o'rnatilgandan so'ng, malatning kontsentratsiyasi quyidagilardan qaysi biri bo'ladi?",
      a: ["2 µM", "5 µM", "10 µM", "20 µM", "50 µM"],
      correct: 2,
      explanation:
        "Oldingi savolning javobidan Keq = 1 = [Malat]/[Fumarat] = X/(20−X) ekanligini bilamiz. Shuning uchun (20−X) = X, 20 = 2X, va X = 10 µM.",
    },
    {
      q: "3- va 4-savollar ularga javob berishda quyidagi reaksiyalar va ular bilan bog'liq miqdorlarga murojaat qilishni talab qiladi: Atsetat → (taqribiy ΔG˚' 243 kkal/mol energiya beruvchi oksidlanish, TKK sikli orqali CO2, GTF↔GDF va ATF↔ADF bilan). Asetat oksidlanishidan ajraladigan jami energiyaning necha foizi TKK sikli orqali NADH, FADH2 va GTF ga o'tkaziladi?",
      a: ["38%", "42%", "81%", "86%", "100%"],
      correct: 3,
      explanation:
        "TKK siklida siklning har bir aylanishida 3 ta NADH, 1 ta FADH2 va 1 ta GTF hosil bo'ladi. Har bir NADH 53 kkal/mol energiya ajratadi; shuning uchun 3 ta NADH 159 kkal/mol energiya hosil qiladi. FADH2 41 kkal/mol, va GTF 8 kkal/mol energiya ajratadi. Olingan energiya 159+41+8 yoki 208 kkal/mol. Mavjud umumiy energiya 243 kkal/mol, shuning uchun olingan energiyaning ulushi 208/243 yoki 86% ni tashkil qiladi.",
    },
    {
      q: "Asetat oksidlanishidan ajraladigan energiyaning necha foizi ATF ga aylanadi?",
      a: ["3%", "30%", "40%", "85%", "100%"],
      correct: 1,
      explanation:
        "Taxminan 10 ta ATF (NADH dan 7,5 ta, FADH2 dan 1,5 ta va GTF dan 1 ta) TKK sikli orqali ishlab chiqariladi (10 x 8 kkal = 80 kkal). Atsetat oksidlanishidan hosil bo'ladigan umumiy energiyaning ATF ga aylanadigan foizi 80/243 yoki 33% ni tashkil qiladi.",
    },
    {
      q: "Genetik mutatsiya biokimyoviy reaksiya uchun fermentning hujayra konsentratsiyasini 100 barobar ko'payishiga olib keldi. Shuning uchun ferment tomonidan katalizlanadigan reaksiya uchun muvozanat konstantasi quyidagilardan qaysi biriga o'zgaradi?",
      a: [
        "Ikki baravar kamayadi",
        "O'zgarmaydi",
        "Ferment kontsentratsiyasiga proporsional ortadi",
        "Ferment kontsentratsiyasiga teskari o'zgaradi",
        "100 barobar kamayadi",
      ],
      correct: 1,
      explanation:
        "Ferment reaksiyaning muvozanatga erishish tezligini oshiradi, ammo muvozanatdagi reaksiyaga kirishuvchi moddalar va mahsulotlarning kontsentratsiyasini o'zgartirmaydi; ya'ni Keq ga ferment ta'sir qilmaydi, shuning uchun ferment kontsentratsiyasining o'zgarishi Keq ga ta'sir qilmaydi.",
    },
    {
      q: "TKK siklining izotsitrat fumaratga aylanadigan qismi haqida fikr yuriting. TKK siklining ushbu segmenti quyidagilardan qaysi biri orqali eng yaxshi tasvirlanishi mumkin?",
      a: [
        "Ushbu reaksiyalar har bir mol izotsitrat uchun 5 mol yuqori energiyali fosfat bog'larini hosil qiladi",
        "Ushbu reaksiyalar odamda niatsindan (nikotinamid) sintez qilingan koenzimni talab qiladi",
        "Ushbu reaksiyalar faqatgina mitoxondrial membranada joylashgan fermentlar tomonidan katalizlanadi",
        "Ushbu reaksiyalar oksidlangan har bir mol izotsitrat uchun 1 mol CO2 hosil qiladi",
        "Ushbu reaksiyalar reaksiyalardan birining borishi uchun GTF talab qiladi",
      ],
      correct: 1,
      explanation:
        "Izositratning fumaratga aylanishida 2 ta CO2, 2 ta NADH (niatsin saqlaydi), 1 ta GTF va 1 ta FADH2 hosil bo'ladi. Jami taxminan 7,5 ta ATF hosil bo'ladi. Ushbu reaksiyalar uchun fermentlarning barchasi (ichki mitoxondrial membrana oqsili bo'lgan suksinat degidrogenazadan tashqari) mitoxondrial matriksda joylashgan. GTF reaksiyalarning hech birida talab qilinmaydi, ammo suksinil-KoA ning suksinatga aylanishida hosil bo'ladi.",
    },
    {
      q: "TKK siklida quyidagilardan qaysi biri tiamin pirofosfat vazifasi hisoblanadi?",
      a: [
        "Piruvat va α-ketoglutaratning oksidlanishidan elektronlarni qabul qilish",
        "Izositrat oksidlanishidan elektronlarni qabul qilish",
        "α-ketoglutaratning α-uglerodi bilan kovalent oraliq mahsulot hosil qilish",
        "KoASH ning sulfgidril guruhi bilan tioefir hosil qilish",
        "Lipoat kislotaning sulfgidril guruhi bilan tioefir hosil qilish",
      ],
      correct: 2,
      explanation:
        "Tiamin pirofosfat uglerod−uglerod bog'larini yaratish va uzishda ishtirok etadi. Tiamin oksidativ dekarboksillanish reaksiyalari uchun muhim kofaktor bo'lib, ushbu reaksiyalarda uglerod−uglerod bog'i uziladi va karbonat angidrid ajraladi. Mexanik jihatdan tiamin pirofosfat α-keto kislota substratining α-uglerodi bilan kovalent oraliq mahsulot hosil qiladi (TKK siklida bu α-keto kislota α-ketoglutarat hisoblanadi). Tiamin pirofosfat oksidlanish-qaytarilish reaksiyalarida yoki tioefir hosil bo'lishida ishtirok etmaydi.",
    },
    {
      q: "Quyidagilardan qaysi biri piruvat degidrogenazaning xususiyati hisoblanadi?",
      a: [
        "Ferment tarkibida faqat bitta polipeptid zanjiri mavjud",
        "Ferment kofaktor sifatida tiamin pirofosfatni talab qiladi",
        "Ferment piruvatdan oksaloatsetat hosil qiladi",
        "Ferment fosforillanish orqali faol shakliga aylanadi",
        "NADH miqdori ortganda ferment faollashadi",
      ],
      correct: 1,
      explanation:
        "Piruvat degidrogenaza piruvatni atsetil-KoA ga aylantiradi. Uning tarkibida ko'plab subbirliklar mavjud: piruvatni oksidativ dekarboksillovchi degidrogenaza komponenti, atsetil guruhini KoAga o'tkazadigan digidrolipoil transatsetilaza va lipoat kislotani qayta oksidlaydigan digidrolipoil degidrogenaza. Tiamin pirofosfat, lipoat kislota, CoA, NAD+ va FAD bu reaksiyalar uchun kofaktor bo'lib xizmat qiladi. Asetil-KoA va NADH kinazani faollashtirib, piruvat degidrogenazani fosforillash orqali INAKTIVLAYDI (aksincha), fosfataza esa qayta faollashtiradi.",
    },
    {
      q: "Elektron transport zanjirining quyidagi tarkibiy qismlaridan qaysi biri faqat elektronlarni qabul qiladi va ularni bermaydi?",
      a: ["Sitoxrom b", "Kislorod", "KoQ", "FMN", "Sitoxrom c1"],
      correct: 1,
      explanation:
        "Fiziologik sharoitda kislorod elektron transport zanjiridagi terminal (so'nggi) elektron akseptor hisoblanadi va suv kislorodni qayta tiklash uchun elektronlarini boshqa substratlarga bermaydi. Sitoxromlar, FMN va KoQ elektron transport zanjiri orqali elektron oqimi davomida elektronlarni qabul qiladi va beradi.",
    },
    {
      q: "Ko'zning quyidagi to'qimalaridan qaysi biri TKK/elektron transport sikli o'rniga deyarli faqat anaerob metabolizmga tayanadi?",
      a: [
        "Shox parda",
        "Gavhar",
        "Siliar muskul",
        "To'r parda",
        "Ko'zning barcha to'qimalari energiya manbayi sifatida faqat anaerob glikolizdan foydalanadi",
      ],
      correct: 1,
      explanation:
        "Aerob metabolizm O2 ta'minotini talab qiladi. Biroq, shaffof to'qima qon tomirlarining keng tarmog'iga ega bo'lolmaydi, chunki ular yorug'lik o'tishiga to'sqinlik qiladigan xiraliklarni keltirib chiqaradi. Shox parda havo bilan bevosita aloqada va kislorodni havodan diffuziya orqali oladi. Gavharda kapillyarlar yo'q va havo bilan ta'sirlashmaydi, shuning uchun u anaerob metabolizmdan foydalanadi. Kipriksimon muskul va to'r parda kuchli qon-tomir tizimlariga ega va oksidativ fosforillanishni amalga oshirishi mumkin.",
    },
    {
      q: "43 yoshli ayol vazn yo'qotish uchun bir necha oy davomida 'greypfrut va kartoshka' dietasida edi. Endi u tanasining ko'p qismini qoplagan toshma, yirik, qizil va silliq til, ko'ngil aynishi va diareya va biroz ong chalkashishiga shikoyat qiladi. Quyidagi kofaktorlar yoki ferment komplekslaridan qaysi biri bu holat sababli eng ko'p zararlangan?",
      a: [
        "NAD+ konsentratsiyasi",
        "FAD konsentratsiyasi",
        "KoQ konsentratsiyasi",
        "Kompleks I ning FMN komponentlari ishlashi",
        "Kompleks III ning sitoxrom saqlovchi komponentlarining ishlashi",
      ],
      correct: 0,
      explanation:
        "Bu bemorda pellagraning (B3 vitamini/niatsin yetishmovchiligi) klassik belgilari mavjud. NAD+ niatsindan hosil bo'ladi. Pellagra to'rtta D ga — dermatit, demensiya, diareya va o'limga (death) olib keladi. Riboflavin FAD va FMN uchun prekursor hisoblanadi. KoQ atsetil-KoAdan sintezlanadi va uning miqdori NAD+ kabi o'zgarishga uchramaydi. Gem suksinil-KoA va glitsindan sintezlanadi.",
    },
    {
      q: "Bemorda tasvirlangan simptomlarni (43 yoshli ayol, 'greypfrut va kartoshka' dietasi, pellagra belgilari) bartaraf etish uchun quyidagilardan qaysi biriga boy dietani tavsiya qilish kerak?",
      a: [
        "Yashil, bargli sabzavotlar",
        "Butun don va go'sht",
        "Sitrus mevalari",
        "To'q sariq va sariq sabzavotlar",
        "Shokoladli tort",
      ],
      correct: 1,
      explanation:
        "Yashil, bargli sabzavotlar boshqa B vitaminlariga boy bo'lsa-da, butun donlar, go'sht, baliq va jigar niatsinning eng yaxshi manbalari hisoblanadi. Sitrus mevalarida C vitamini ko'p, to'q sariq va sariq sabzavotlarda A vitamini ko'p, shokoladli tortda flavonoidlar, antioksidant, yog'lar va uglevodlar ko'p.",
    },
    {
      q: "13- va 14-savollar quyidagi klinik holatga asoslanadi: Bir alkogolga qaram bemorda lablarining shishishi va yorilishi, og'iz burchaklarida yorilish, qizil ko'zlar va yorg'oqning yog'li, tangachali toshmasi mavjud. Ushbu holat tufayli quyidagi ferment komplekslari kofaktorlaridan qaysi biri eng ko'p zarar ko'radi?",
      a: [
        "NAD+ konsentratsiyasi",
        "NADF+ konsentratsiyasi",
        "KoQ kontsentratsiyasi",
        "Kompleks I ning FMN komponentlari ishlashi",
        "Kompleks III ning sitoxrom saqlovchi komponentlarining ishlashi",
      ],
      correct: 3,
      explanation:
        "Bu bemorda unda namoyon bo'lgan simptomlarda ko'rsatilganidek B2 (riboflavin) vitamini tanqisligi, ariboflavinoz, mavjud. FAD va FMN hosil bo'lishi uchun B2 vitaminini talab qiladi. NAD+ va NADF+ niatsindan hosil bo'ladi. KoQ atsetil-KoAdan hosil bo'ladi va vitamin B2 gem halqasi sintezlanishida kerak emas, gem suksinil-KoA va glitsindan hosil bo'ladi.",
    },
    {
      q: "Quyidagi ozuqalardan qaysi biri (13-savoldagi ariboflavinoz bemorida) tasvirlangan simptomlarni bartaraf etishda yordam beradi?",
      a: ["Brokkoli", "Sabzilar", "Greypfrutlar", "Bug'doy", "Shokoladli tort"],
      correct: 0,
      explanation:
        "To'q yashil sabzavotlar, ayniqsa brokkoli, go'sht va sut mahsulotlarida riboflavin ko'p. Sabzi A vitaminiga, greypfrutlar C vitaminiga, va to'liq donlar niatsinga boy. Shokoladli tort tarkibida flavonoidlar, antioksidant, yog'lar va uglevodlar ko'p.",
    },
    {
      q: "Yong'in sodir bo'lgan joydan o't o'chiruvchi tez tibbiy yordam xonasiga (TTY) bosh og'rig'i, holsizlik, ong chalkashligi va nafas olish qiyinlashuvidan shikoyat qilib olib kelindi. Uning terisi va shilliq pardalari juda pushti/qizil ko'rinadi. Ushbu alomatlarning qo'zg'atuvchisi elektron transporti va oksidativ fosforillanishni quyidagi mexanizmlardan qaysi biri orqali ingibirlaydi?",
      a: [
        "Elektron transporti va fosforlanishni ajratish",
        "NADH degidrogenaza bilan birikish",
        "Sitoxrom oksidaza bilan birikish",
        "ADF ning yetarli ta'minotini ingibirlash",
        "KoQ bilan birikish",
      ],
      correct: 2,
      explanation:
        "O't o'chiruvchidagi simptomlarga sianid yoki uglerod monoksidi sabab bo'lgan bo'lishi mumkin, ikkalasi ham sitoxrom c oksidazani ingibirlaydi. Ikkala agent ham kislorodning suvga qaytarilishiga to'sqinlik qiladi va shu bilan elektron transport zanjiri va oksidativ fosforillanishni to'xtatadi. Ikkalasi ham ajratuvchi emas va ANT ni bloklamaydi. Rotenon (baliqlar uchun zahar) NADH degidrogenaza (kompleks I) bilan birikadi. Na sianid, na uglerod monoksidi KoQ bilan bog'lanmaydi.",
    },
    {
      q: "Bemor mushaklar rigidligi, taxikardiya va gipertermiya rivojlana boshlaganda umumiy anesteziya (suksinilxolin va ingalyatsion anestetik) ostida appendektomiya qilinayotgan edi. Quyidagilardan qaysi biri ushbu jarayon mexanizmini eng yaxshi tasvirlaydi?",
      a: [
        "Elektron transporti va fosforlanishni ajratish",
        "NADH degidrogenazasini ingibirlash",
        "Sitoxrom oksidazani ingibirlash",
        "ADF ning yetarli ta'minotini ingibirlash",
        "KoQ bilan birikish",
      ],
      correct: 0,
      explanation:
        "Bemorda ATF sintezidan elektron transport zanjirining ajralishiga o'xshash malignant gipertermiyani boshdan kechirmoqda. Suksinilxolin va bir nechta ingalatsiyalanadigan anestetiklar sezgir shaxslarga elektron transportini ajratuvchi sifatida ta'sir qilishi mumkin. Kompleks I ning yoki sitoxrom oksidazaning ingibirlanishi ATF sintezi va elektron oqimini bloklaydi, natijada mushaklarning rigidligi va gipertermiya kelib chiqmaydi.",
    },
    {
      q: "Bemor septik shokda, va uning to'qimalari perfuziyalanishi va kislorod bilan ta'minlanishi yomon. Ushbu to'qimalarda glyukoza almashinuvining asosiy yakuniy mahsuloti quyidagilardan qaysi birining to'planishi bo'ladi?",
      a: ["Piruvat", "Atsetil-KoA", "Laktat", "Mochevina", "Sitrat"],
      correct: 2,
      explanation:
        "Kislorodsiz aerob metabolizm ishlay olmaydi, shuning uchun elektron transport zanjiri to'xtaydi. Mitoxondriyadagi ATF sintezi to'xtaydi. Mitoxondriyada NADH to'planishi tufayli TKK sikli to'xtaydi. Biroq to'qimalar hamon energiyaga muhtoj va shuning uchun ular ATF hosil qilish uchun anaerob glikolizdan foydalanadi. Yakuniy mahsulot, piruvat, NAD+ ni qayta hosil qilish uchun laktatga aylanadi, shu orqali glikoliz davom etishi mumkin.",
    },
    {
      q: "Quyidagi hujayra turlaridan qaysi biri TKK sikli yoki elektron transport zanjiridan foydalana olmaydi?",
      a: ["Miya", "Qizil qon hujayralari", "Jigar", "Buyrak", "Yurak"],
      correct: 1,
      explanation:
        "Hujayra nafas olishi mitoxondriyada sodir bo'ladi. Qizil qon hujayralarida mitoxondriya yo'q va energiya ishlab chiqarish uchun faqat anaerob glikolizdan foydalanishi mumkin. Bosh miya, jigar, buyrak va yurak hujayralarida mitoxondriya mavjud bo'lib, oksidativ fosforillanishni, shuningdek anaerob glikolizni amalga oshirishi mumkin.",
    },
    {
      q: "Metformin 2-tip diabet uchun standart birinchi qator oral dori-preparatidir. Preparatni qo'llashda potensial nojo'ya ta'sir laktatli atsidozdir. Quyidagilardan qaysi biri nima uchun ushbu sut kislotasi yig'ilishi klinik jihatdan kamdan-kam uchrashini tushuntirib beradi?",
      a: [
        "Qizil qon hujayralari laktatni energiya sifatida ishlatadi",
        "Buyrak hujayrasi laktatni energiya sifatida ishlatadi",
        "Yurak mushak hujayralari laktatni energiya sifatida ishlatadi",
        "Katta, ixtiyoriy mushak guruhlari laktatni energiya sifatida ishlatadi",
        "Laktat oksidlanish uchun to'g'ridan-to'g'ri TKK sikliga kiradi",
      ],
      correct: 2,
      explanation:
        "Metformin to'qimalar tomonidan glyukoza so'rilishini oshirishi va laktat hosil bo'lishining kuchayishiga olib kelishi mumkin, shuningdek jigar tomonidan laktatning o'zlashtirilishini bloklaydi. Yurak mushaklari (juda ko'p miqdorda mitoxondrialari mavjud) laktatdan energiya manbayi sifatida foydalanadi va metforminning terapevtik dozalaridan qonda to'planishi mumkin bo'lgan laktatni kamaytiradi. Laktat oksidlanishi uchun avval piruvatga, so'ngra atsetil-KoAga aylantirilishi kerak (to'g'ridan-to'g'ri TKK sikliga kirmaydi). Qizil qon hujayralari laktat hosil qiladi, lekin undan foydalanmaydi.",
    },
    {
      q: "Quyidagi ssenariylardan qaysi birida metforminni glyukoza miqdorini nazorat qilish uchun qabul qiladigan 2-tip diabet bilan og'rigan bemorga metforminni davom ettirish natijasida laktatli atsidoz xavfi ortishi mavjudligi sababli metforminni to'xtatish tavsiya etilishi kerak?",
      a: [
        "Og'ir anemiya",
        "Erta piyelonefrit",
        "Miokard infarktidan yurak to'qimalarining og'ir yo'qotilishi",
        "To'rt boshli muskulning og'ir yirtilishi",
        "Sezilarli vazn ortishi",
      ],
      correct: 2,
      explanation:
        "Metformin jigarda glyukoneogenez uchun laktatdan foydalanishni pasaytirish orqali sirkulyatsiyadagi qonda laktat miqdorini oshirishi mumkin. Ammo ortiqcha laktat yurak tomonidan energiya manbayi sifatida ishlatiladi. Agar miokard infarkti tufayli yurak mushak hujayralarining (va ularning mitoxondriyalarining) yo'qotilishi katta bo'lsa, metformindan foydalanish tufayli ortgan laktat to'planadi, chunki laktat endi yurak tomonidan metabolizmga uchramaydi. Bu o'limga olib kelishi mumkin bo'lgan laktatli atsidozga olib kelishi mumkin.",
    },
    {
      q: "RKZ (reaktiv kislorod zarrachalari) inson hujayralari va to'qimalari uchun halokatli bo'lishi mumkin. Quyidagilardan qaysi biri kislorodga qo'shilsa, eng kuchli RKZ hosil qiladi?",
      a: [
        "Bitta elektron",
        "Ikkita elektron",
        "Uchta elektron",
        "To'rtta elektron",
        "Azot oksidi (NO)",
      ],
      correct: 2,
      explanation:
        "Kislorod suvga qaytarilishi uchun to'rtta elektronni qabul qiladi. Bitta elektronning qo'shilishi superoksidni, ikkita elektron qo'shilishi vodorod peroksidni, uchta elektron qo'shilishi suv hamda gidroksil radikalini va to'rtta elektron qo'shilishi ikkita suv molekulasini hosil qiladi. Gidroksil radikal biologik molekulalarga hujum qilishda eng kuchli RKZ va eng reaktivdir. Azot oksidi (NO) RAKZ bo'lib, boshqa RAKZ hosil qiladi.",
    },
    {
      q: "Internet manbalaridan foydalangan holda, bemor makula degeneratsiyasini oldini olish uchun o'z ovqatlanish rejasini ishlab chiqdi. Har kuni ertalab nonushta uchun u qovurilgan tuxum, apelsin, sabzi sharbati va qizil sharob iste'mol qiladi. Uning dietasida quyidagilardan qaysi biri bemorda makula degeneratsiyasi rivojlanishidan himoya qilishi mumkin? (tartib: Karotinoidlar / Flavanoidlar / Vitamin C / Vitamin D / Vitamin E)",
      a: [
        "Ha, Ha, Ha, Yo'q, Ha",
        "Ha, Yo'q, Ha, Ha, Ha",
        "Ha, Ha, Yo'q, Yo'q, Ha",
        "Yo'q, Yo'q, Yo'q, Ha, Ha",
        "Yo'q, Ha, Yo'q, Yo'q, Yo'q",
        "Yo'q, Yo'q, Ha, Ha, Yo'q",
      ],
      correct: 0,
      explanation:
        "Makula degeneratsiyasi makulaning oksidativ shikastlanishi orqali yuzaga kelishi mumkin, shuning uchun bemor RKZ hosil bo'lishidan himoyalanish uchun antioksidant birikmalarni iste'mol qilishni ko'paytirishga harakat qilmoqda. Sabzi sharbatida karotinoidlar, qizil sharobda flavonoidlar, apelsin sharbatida vitamin C, tuxum sarig'ida esa vitamin E mavjud — barchasi antioksidantlar. Bemorning ratsionida D vitamini manbalari yo'q.",
    },
    {
      q: "Surunkali tarzda berilgan quyidagi dorilardan qaysi biri erkin radikal ishlab chiqarishning asosiy manbayi bo'ladigan fiziologik javobni yaratishi mumkin?",
      a: [
        "Siprofloksatsin",
        "Izoniazid",
        "Simetidin",
        "Ketokonazol",
        "Ushbu dorilarning hech biri erkin radikal shakllanishini oshirish potensialiga ega emas",
      ],
      correct: 1,
      explanation:
        "Siprofloksatsin, simetidin va ketokonazolning barchasi sitoxrom P450 ni ingibirlaydi. Izoniazid esa sitoxrom P450 hosil bo'lishini induksiyalaydi, ya'ni preparat tanadan chiqarilishi uchun sitoxrom P450 oksidlaydi. Sitoxrom P450 fermentlari elektronlar reaksiyalardan tasodifan chiqib ketganida va molekulyar kislorod bilan reaksiyaga kirishganida yuz beradigan erkin radikal ishlab chiqarishning asosiy manbayi hisoblanadi.",
    },
    {
      q: "Televizion realiti-shouning ishtirokchisida (shou ishtirokchilari uzoq vaqt davomida orolda omon qolishlari kerak) qaytalanuvchi diareya, dermatit rivojlandi va u narsalarni eslashda qiynaladi. Ushbu simptomlar tanlov ishtirokchisining ratsionida quyidagilardan qaysi birining yo'qligi sababli paydo bo'lgan?",
      a: ["Niasin", "Tiamin", "Riboflavin", "Vitamin C", "Vitamin D"],
      correct: 0,
      explanation:
        "Tanlov ishtirokchisida pellagra belgilari bor, bu to'rtta D (diareya, dermatit, demensiya va o'lim) bilan tavsiflanadi. Pellagra dietada niatsin yetishmasligidan kelib chiqadi. Tiamin yetishmasligi beriberiga, riboflavin yetishmasligi ariboflavinozga, C vitamini yetishmasligi singaga va D vitamini yetishmasligi raxitga olib keladi.",
    },
    {
      q: "40 yoshli surunkali alkogolik kasalxonaga turli xil alomatlar, shu jumladan qo'llari va oyoqlarida sezishni yo'qotish, nistagm va yurish paytida muvozanatni saqlashga bog'liq qiyinchiliklar tufayli keltirildi. Ushbu bemor quyidagi reaksiyalardan qaysi birini katalizlashda qiynaladi?",
      a: [
        "α-ketoglutarat degidrogenaza",
        "Suksinat degidrogenaza",
        "Fumaraza",
        "Malat degidrogenaza",
        "Piruvat karboksilaza",
      ],
      correct: 0,
      explanation:
        "Bemorda B1 vitamini yetishmasligi tufayli beriberi belgilari namoyon bo'lmoqda. Tiamin (B1) piruvat degidrogenaza va α-ketoglutarat degidrogenaza tomonidan katalizlanadigan reaksiyalar kabi oksidativ dekarboksillanish reaksiyalari uchun talab etiladi. α-ketoglutarat degidrogenaza tiamin (tiamin pirofosfat sifatida), lipoat kislota, KoASH, FAD va NAD+ ni talab qiladi. Suksinat degidrogenaza faqat FAD ni, malat degidrogenaza NAD+ ni, piruvat karboksilaza esa biotinni talab qiladi; fumaraza kofaktor talab qilmaydi.",
    },
    {
      q: "Olim eukaryot hujayralarga qo'shilsa, laktat darajasining ko'tarilishiga olib keladigan dori ishlab chiqdi. Mitoxondrial tarkibni tahlil qilish, shuningdek, dori bilan davolangan hujayralardagi α-ketoglutarat darajasining ko'tarilishini ham ko'rsatdi. Ushbu preparat quyidagi vitaminlardan qaysi birini talab qiladigan reaksiyaga xalaqit qilayotgan bo'lishi mumkin?",
      a: ["Biotin", "Vitamin K", "Pantotenat", "Askorbat", "Piridoksin"],
      correct: 2,
      explanation:
        "Laktatning ortishi, shuningdek TKK siklidagi α-ketoglutaratning ortishi, oksidativ dekarboksillanishlarni katalizlaydigan reaksiyalardagi nuqsonga ishora qiladi. Oksidativ dekarboksillanish reaksiyalari uchun beshta kofaktor kerak: NAD+, FAD, lipoat kislota, tiamin pirofosfat va KoA (pantotenat kislotadan hosil bo'ladi). Preparat pantotenat kislotaning KoA ga aylanishini bloklash orqali ta'sir qilayotganga o'xshaydi. Biotin va vitamin K karboksillanish reaksiyalarida, askorbat prolin gidroksillanishida, vitamin B6 esa aminokislota reaksiyalarida ishlatiladi.",
    },
    {
      q: "Bir insonga yaqinda o'tkir miyeloid leykemiya tashxisi qo'yilgan va uning genomi ketma-ketligini aniqlashda genomning bir qismida izotsitrat degidrogenaza izozimida mutatsiya mavjudligi aniqlangan. Ushbu alteratsiyalangan enzim quyidagi reaksiyalarning qaysi birining borishini oldini oladigan onkometabolit ishlab chiqarayotganligi ehtimoliydir?",
      a: [
        "Vitamin B1ni talab qiladigan reaksiya",
        "Vitamin C ni talab qiladigan reaksiya",
        "Vitamin B3ni talab qiladigan reaksiya",
        "Vitamin D ni talab qiladigan reaksiya",
        "Biotinni talab qiladigan reaksiya",
      ],
      correct: 1,
      explanation:
        "Mutatsiyaga uchragan izositrat degidrogenaza α-ketoglutaratni substrat sifatida ishlatadi (izositrat o'rniga) va 2-pozitsiyani qaytarib, 2-gidroksiglutarat hosil qiladi. Keyin 2-gidroksiglutarat gistonlar va DNKning demetillanishi uchun zarur bo'lgan, C vitaminiga bog'liq gidroksillanish reaksiyalarini bloklaydi. Demetillanish reaksiyalarini bloklash gen ekspressiyasining o'zgarishiga va nazoratsiz hujayraviy proliferatsiyaga olib keladi.",
    },
    {
      q: "Yurak xurujidan aziyat chekayotgan bemor tez tibbiy yordam bo'limiga keltirildi. Aterosklerotik pilakcha asosiy koronar arteriyani to'sib, qon yurakning bir sohasiga yetib borishini to'xtatgan. Natijada, zararlangan yurak muskul hujayralarida quyidagilardan qaysi biri ortgan?",
      a: [
        "CO2 ishlab chiqarish tezligi",
        "Elektron transport zanjiri orqali elektronlar transport tezligi",
        "ADF kontsentratsiyasi",
        "Ichki mitoxondrial membrana bo'ylab proton gradiyenti",
        "O2 iste'mol tezligi",
      ],
      correct: 2,
      explanation:
        "Qon oqimining yetishmasligi yurakka O2 oqimini kamaytirdi, bu esa elektron transport zanjirini sekinlashtirdi. Elektron transport zanjiri tezligining pasayishi mitoxondriya ichida NADH miqdorining ortishiga olib keladi, bu esa TKK siklini sekinlashtiradi. TKK siklining sekinlashishi karbonat angidrid ishlab chiqarishning kamayishiga olib keladi. Oksidativ fosforillanish bloklanganligi sababli mitoxondriyaga kiradigan ADF ATF ga qayta aylanmaydi va ADF to'planishiga olib keladi.",
    },
    {
      q: "Olim ADF mavjud buferlangan eritmada izolyatsiyalangan mitoxondriyalar ustida tajriba o'tkazmoqda. Vaqt=0 da mitoxondrial suspenziyaga kislorod va suksinat qo'shildi va kislorod iste'moli vaqt o'tishi davomida o'lchandi (grafikda ko'rsatilgan). Tajriba boshlanganidan keyin turli vaqtlarda (1, 2, 3 va 4 deb belgilangan) eritmaga turli xil kimyoviy moddalar qo'shildi: vaqt=1 da qo'shilgan modda kislorod sarfiga ta'sir qilmadi; vaqt=2 da kislorod sarfi to'xtadi; vaqt=3 da kislorod sarfi oldingisidan tezroq qayta boshlandi; vaqt=4 da barcha kislorod sarfi butunlay to'xtadi. Quyidagilardan qaysi biri 1, 2, 3 va 4 vaqtlarda qaysi kimyoviy moddalar qo'shilganligini to'g'ri tasvirlaydi?",
      a: [
        "Antimitsin / Oligomitsin / Sianid / Uglerod monoksid",
        "Antimitsin / Sianid / Dinitrofenol / Oligomitsin",
        "Rotenon / Oligomitsin / Dinitrofenol / Sianid",
        "Rotenon / Dinitrofenol / Oligomitsin / Uglerod monoksid",
        "Dinitrofenol / Rotenon / Oligomitsin / Sianid",
        "Dinitrofenol / Sianid / Oligomitsin / Dinitrofenol",
      ],
      correct: 2,
      img: "173-174-bet",
      explanation:
        "Vaqt=0 da suksinat elektron transport zanjiriga kompleks II orqali elektronlarni beradi. Vaqt=1 da qo'shilgan modda kislorod sarfiga ta'sir qilmaydi — rotenon kompleks I ni ingibirlaydi va kompleks II orqali uzatilayotgan elektronlarga ta'sir qilmaydi, shuning uchun vaqt=1 da rotenon qo'shilgan. Vaqt=2 da elektron oqimi to'xtaydi — bu oligomitsin orqali fosforillanishning ingibirlanishi (elektron transport zanjirining o'zini ingibirlamasdan kislorod iste'molini bloklaydi, chunki fosforillanish va kislorod iste'moli bir-biriga bog'liq). Vaqt=3 da tezroq qayta boshlanadi — bu dinitrofenol (ajratuvchi) qo'shilishi, chunki u proton gradiyentini yo'qqa chiqarib, oligomitsin bloki bo'lishiga qaramay kislorod iste'molini qayta tiklaydi. Vaqt=4 da barcha oqim to'xtaydi — bu sianid yoki uglerod monoksidi, ikkalasi ham kompleks IV (sitoxrom oksidaza)ni ingibirlaydi.",
    },
    {
      q: "52 yoshli erkak to'satdan ish joyida kollaps holatiga tushdi va tez yordam kelguniga qadar ba'zi hamkasblari tomonidan o'pka-yurak reanimatsiyasi qilindi. Kasalxonaga kelganida, qon analizida troponin I darajasini ortgan edi. Bemorga to'qima plazminogen aktivatori yuborildi, ammo bu davodan zararlangan organning shikastlanishi kuchayib ketdi. Bu quyidagilardan qaysi biri tufayli sodir bo'lgan bo'lishi mumkin?",
      a: [
        "Mitoxondriyadan sitoxrom a ning chiqishi",
        "Kisloroddan hosil bo'lgan radikallar hosil bo'lishining ortganligi",
        "Sut kislotasi miqdorining ortganligi",
        "Plazminogen aktivatori yuborilishi tufayli TKK sikli ingibirlanishi",
        "Oksidlanishni fosforillanishdan ajralishi",
      ],
      correct: 1,
      explanation:
        "Bemor ishemik-reperfuzion shikastlanishni boshdan kechirmoqda. Yurak xurujiga uchragan, kislorod yetishmasligi tufayli yurak mushagining bir qismi anaerob bo'lib qoldi. tPA shikastlangan yurak mushagiga kislorod yetkazib berishni bloklagan trombni eritish uchun yuborilganda, kislorod shikastlangan hujayralarga tezda qayta kiradi. Ushbu hujayralarda gipoksiya tufayli mitoxondrial membranadagi KoQ to'liq qaytarilgan, va kislorodning to'satdan quyilishi kislorodga tasodifiy elektron o'tkazilishiga olib keladi va superoksid radikalini hosil qiladi. Bu avvalroq shikastlangan yurak mushagining erkin radikallardan shikastlanishini kuchaytiradi. Sitoxrom a mitoxondriyadan chiqarilmaydi. tPA TKK sikli fermentlarining aktivligiga bevosita ta'sir qilmaydi va ajratuvchi emas.",
    },
    {
      q: "23 yoshli erkakka 3 yil oldin OIV musbat deb tashxis qo'yilgan. O'shandan beri u turli xil OIVga qarshi dorilar, shu jumladan AZT, ba'zi didezoksi birikmalar va OIV proteaza ingibitorlari bilan birga davolanib kelgan. Yaqinda unda mushaklar zaifligi yurishda qiynaladigan darajada rivojlandi. Ushbu asorat quyidagilardan qaysi biri tufayli yuzaga kelgan?",
      a: [
        "Yadroviy RNK polimerazaning AZT bilan ingibirlanishi",
        "Yadroviy DNK polimerazaning AZT bilan ingibirlanishi",
        "Mitoxondrial RNK polimerazaning AZT bilan ingibirlanishi",
        "Mitoxondrial DNK polimerazaning AZT bilan ingibirlanishi",
        "AZT bilan oksidativ fosforillanishning ajralishi",
        "AZT induksiyalagan mitoxondriyadan sitoxrom c ajralishi",
      ],
      correct: 3,
      explanation:
        "AZT DNK zanjiri terminatori bo'lib, virus teskari transkriptazasi uchun eng katta yaqinlikka ega. Shu bilan birga, mitoxondrial DNK polimeraza ham AZTni substrat sifatida taniydi va ishlatadi, bu mitoxondrial DNK replikatsiyasi va mitoxondrial bo'linishga xalaqit beradi. Ba'zi bemorlar uchun uzoq muddatli AZT bilan davolashdan so'ng mitoxondrial funksiyaning pasayishi kuzatilgan alomatlarga olib keladi. AZT RNK polimerazaga ta'sir qilmaydi va oksidlovchi fosforillanishning ajratuvchisi emas.",
    },
    {
      q: "4 yoshli bola kasallik tarixida teri infeksiyalari, pnevmoniya, ko'ngil aynishi, qusish va qorin og'rig'i bor edi. U o'tgan yil davomida profilaktika maqsadida antibiotiklar olib keladi, ammo baribir infeksiyalarning turi variantlari, bakterial va zamburug' infeksiyalari bilan kasallangan. Fizikal tekshiruv gepatosplenomegaliyani ko'rsatdi. Bola eng ko'p ehtimol bilan quyidagi reaksiyalarning qaysi birini oldini oladigan mutatsiyani naslidan olgan?",
      a: [
        "Vodorod peroksid gidroksil radikallariga aylanishi",
        "Superoksid vodorod peroksid va kislorodga aylanishi",
        "Oksidlangan glutation qaytarilgan glutationga aylanishi",
        "Xlorid kislotaning hosil bo'lishi",
        "Superoksidning hosil bo'lishi",
      ],
      correct: 4,
      explanation:
        "Bolada surunkali granulyomatoz belgilari bor. Ushbu kasallik NADFH oksidaza komponentidagi nuqson tufayli yuzaga keladigan irsiy holat. NADFH oksidaza neytrofillarda respirator portlash uchun javobgardir hamda kislorod va NADFHdan superoksid hosil qiladi. Hosil bo'lgan superoksid tanaga yuqqan bakteriyalar va zamburug'larni yo'q qilishga yordam beradi. SOD mutatsiyalari ALSga olib kelishi mumkin, ammo surunkali granulyomatozga olib kelmaydi. Glutation reduktazaning yo'qotilishi gemolitik anemiyaga olib kelishi mumkin.",
    },
    {
      q: "42 yoshli erkak muskullar spazmi va rigidligini chap oyog'ida kuchli muskul holsizligi bilan birgalikda boshdan kechirdi. Vaqt o'tishi bilan mushaklarning kuchsizligi yanada kuchaydi, nutq buzildi va u harakatlanish uchun nogironlar aravachasidan foydalanishga majbur bo'ldi. Unda yutishda qiyinchiliklar rivojlandi va tashxis qo'yilgandan so'ng uning 2 yildan kam umri borligi aytildi. Oilaviy tarix shuni ko'rsatdiki, erkakning otasi avtohalokatda vafot etishidan oldin mushaklarning yengil kuchsizligini boshdan kechirgan. Quyidagilardan qaysi biri orqali erkakning simptomlari molekulyar darajada eng yaxshi tushuntirilishi mumkin?",
      a: [
        "NADFH oksidaza faolligining ortishi",
        "Katalaza faolligining ortishi",
        "Vodorod peroksidning miqdorining ko'tarilishi",
        "Superoksid miqdorining ortishi",
        "Glutation peroksidaza faolligining pasayishi",
        "Miyeloperoksidaza faolligining pasayishi",
      ],
      correct: 3,
      explanation:
        "Erkak amiotrofik lateral skleroz (ALS)ning irsiy shaklini boshdan kechirmoqda, bu ko'pincha SOD (superoksid dismutaza)dagi inaktivlovchi mutatsiyadan kelib chiqadi. SOD aktivligining yetishmasligi superoksid miqdorining ortishiga olib keladi, so'ngra bu noma'lum tarzda motor neyron aktivligining yo'qolishiga olib keladi. NADFH oksidaza, katalaza, glutation peroksidaza yoki miyeloperoksidazadagi irsiy mutatsiyalar ALS bilan o'zaro bog'liq emas.",
    },
    {
      q: "Uzoq masofaga yuguruvchi mashg'ulot o'tkazmoqda va mashg'ulotning bir qismi uning chidamliligini oshirish uchun ko'plab 800 metrlik yugurish mashg'ulotlarini talab qiladi. TKK sikli orqali energiya ishlab chiqarilishi ushbu sharoitlarda quyidagilardan qaysi biri tufayli kuchayadi?",
      a: [
        "NADH ortishi bilan izotsitrat degidrogenzazning allosterik aktivlanishi",
        "ADF ortishi bilan fumarazaning allosterik aktivlanishi",
        "4 uglerodli oraliq mahsulotlar konsentratsiyasining tez pasayishi",
        "Sitrat sintazaning sitrat tomonidan ingibirlanishi",
        "Turli fermentlar orqali metabolitlar oqimining pasaygan NADH/NAD+ nisbati tomonidan stimullanishi",
      ],
      correct: 4,
      explanation:
        "Aerobik mashqlar paytida mushak oksidativ fosforillanish orqali ATF hosil qilishi kerak. Bu amalga oshishi uchun NADH miqdori pasayadi (NADH miqdorining ortishi TKK sikli fermentlarini ingibirlaydi), bu NADH/NAD+ nisbatining pasayishiga olib keladi va bu pasaygan nisbat metabolitlar oqimini turli fermentlar orqali stimullaydi. Sitrat sitrat sintazaning inhibitori, izotsitrat degidrogenaza faolligi NADH tomonidan ingibirlanadi (aktivlanmaydi), fumaraza boshqariladigan ferment emas.",
    },
    {
      q: "Bir erkak insektitsidni yutib yuborganidan keyin tez yordam bo'limiga keltirildi. Uning nafas olish tezligi juda past. Zaharni nazorat qilish markazining ma'lumotlari shuni ko'rsatadiki, bu insektitsid sitoxrom c ga bog'lanadi va uni to'liq ingibirlaydi. Shuning uchun, bu odamning mitoxondriyasida quyidagilardan qaysi biri kechadi?",
      a: [
        "KoQ oksidlangan holatda bo'ladi",
        "Sitoxromlar a va a3 qaytarilgan holatda bo'ladi",
        "ATF sintezining tezligi taxminan nolga teng bo'ladi",
        "CO2 ishlab chiqarish tezligi ortadi",
        "Kislorod iste'mol qilish tezligi ortadi",
      ],
      correct: 2,
      explanation:
        "Agar sitoxrom c funksiya bajara olmasa, u bilan O2 orasidagi elektron transport zanjirining barcha tarkibiy qismlari oksidlangan holatda va sitoxrom c dan oldingi zanjirning tarkibiy qismlari esa qaytarilgan holatda qoladi. Elektron transport zanjiri funksiya bajarmaydi; O2 iste'mol qilinmaydi; proton gradiyenti hosil bo'lmaydi; va ATF ishlab chiqarilmaydi (ATF sintezi tezligi taxminan nolga teng bo'ladi). NADH oksidlanmaydi va NADH/NAD+ nisbati ortadi, bu esa TKK siklini sekinlashtiradi va CO2 ishlab chiqarishni kamaytiradi.",
    },
  ],
};
