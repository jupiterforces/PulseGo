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
};
