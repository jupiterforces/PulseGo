// ============================================================
//  PULSE GO — TEST GROUPS & CARDS DATA
//  Edit this file to add / remove / update test groups easily.
// ============================================================

const testGroups = [
  {
    id: "cellbiology",
    title: "Hujayra biologiyasi",
    subtitle: "Mavzular bo'yicha testlar",
    totalQuestions: 559,
    icon: "bi-virus",
    color: "success",
    tests: [
      {
        id: "cellbio-all",
        title: "Cellbio Grant uchun",
        count: "290 ta",
        url: "/cellbiology",
      },
      {
        id: "cellbio-bytopics",
        title: "Mavzular bo'yicha testlar",
        count: "269 ta",
        url: "/cellbiology/bytopics.html",
      },
    ],
  },
  {
    id: "anatomy1",
    title: "Anatomiya",
    subtitle: "Mavzular bo'yicha testlar",
    totalQuestions: "Tez orada",
    icon: "bi-heart-pulse",
    color: "danger",
    tests: [],
  },
  {
    id: "anatomy2",
    title: "Anatomiya 2-semester",
    subtitle: "Mavzular bo'yicha testlar",
    totalQuestions: 1000,
    icon: "bi-heart-pulse",
    color: "danger",
    tests: [
      {
        id: "anatomy-all",
        title: "Barcha anatomiya testlari",
        count: "454 ta",
        url: "/anatomy",
      },
      {
        id: "anatomy-yn",
        title: "Yakuniy rasmli testlar",
        count: "500+ ta",
        url: "/anatomy/yn/",
      },
    ],
  },
  {
    id: "anatomy3",
    title: "Anatomiya 3-semester",
    subtitle: "Mavzular bo'yicha testlar",
    totalQuestions: "Tez orada",
    icon: "bi-heart-pulse",
    color: "danger",
    tests: [],
  },
  {
    id: "embriology2",
    title: "Embriologiya 2-semester",
    subtitle: "Mavzular bo'yicha testlar",
    totalQuestions: 350,
    icon: "bi-baby",
    color: "warning",
    tests: [
      {
        id: "embryo-all",
        title: "Barcha embriologiya testlari",
        count: "300+ ta",
        url: "/embriology",
      },
      {
        id: "embryo-cases",
        title: "Embriologiya caselari",
        count: "50+ ta",
        url: "/embriology/cases.html",
      },
    ],
  },
  {
    id: "embriology3",
    title: "Embriologiya 3-semester",
    subtitle: "Mavzular bo'yicha testlar",
    totalQuestions: "Tez orada",
    icon: "bi-baby",
    color: "warning",
    tests: [],
  },
  {
    id: "chemistry",
    title: "Biokimyo",
    subtitle: "Mavzular bo'yicha testlar",
    totalQuestions: 250,
    icon: "bi-flask",
    color: "info",
    tests: [
      {
        id: "chem-all",
        title: "Barcha biokimyo testlari",
        count: "250+ ta",
        url: "/chemistry",
      },
    ],
  },
  {
    id: "cases",
    title: "Caselar",
    subtitle: "Klinik vaziyatlar bo'yicha testlar",
    totalQuestions: 100,
    icon: "bi-journal-text",
    color: "primary",
    tests: [
      {
        id: "cases-all",
        title: "Barcha caselar",
        count: "100+ ta",
        url: "/cases",
      },
    ],
  },
  {
    id: "random",
    title: "Random testlar",
    subtitle: "Aralash savollar",
    totalQuestions: 3030,
    icon: "bi-lightning-charge",
    color: "dark",
    tests: [
      {
        id: "random-yn",
        title: "YN test baza",
        count: "30 ta random",
        url: "#",
      },
      {
        id: "random-all",
        title: "Umumiy test baza",
        count: "3000+ ta",
        url: "#",
      },
    ],
  },
];
