// ============================================================
//  PULSE GO — TEST GROUPS & CARDS DATA
//  Edit this file to add / remove / update test groups easily.
// ============================================================

const testGroups = [
  {
    id: "anatomy",
    title: "Anatomiya",
    subtitle: "Mavzular bo'yicha testlar",
    totalQuestions: 1100,
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
      {
        id: "anatomy-eng",
        title: "English anatomy tests",
        count: "200+ ta",
        url: "/anatomy/eng/",
      },
    ],
  },
  {
    id: "cellbiology",
    title: "Hujayra biologiyasi",
    subtitle: "Mavzular bo'yicha testlar",
    totalQuestions: 604,
    icon: "bi-virus",
    color: "success",
    tests: [
      {
        id: "cellbio-all",
        title: "Barcha hujayra biologiyasi testlari",
        count: "454 ta",
        url: "/cellbiology",
      },
      {
        id: "cellbio-eng",
        title: "English cell biology tests",
        count: "150+ ta",
        url: "/cellbiology/eng/",
      },
    ],
  },
  {
    id: "embriology",
    title: "Embriologiya",
    subtitle: "Mavzular bo'yicha testlar",
    totalQuestions: 450,
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
      {
        id: "embryo-eng",
        title: "English embryology tests",
        count: "100+ ta",
        url: "/embriology/eng/",
      },
    ],
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
    totalQuestions: 180,
    icon: "bi-journal-text",
    color: "primary",
    tests: [
      {
        id: "cases-all",
        title: "Barcha caselar",
        count: "100+ ta",
        url: "/cases",
      },
      {
        id: "cases-eng",
        title: "English cases",
        count: "80+ ta",
        url: "/cases/eng/",
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
