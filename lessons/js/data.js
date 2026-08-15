// ============================================================
//  PULSE GO — LESSONS DATA
//  Edit this file to add/remove subjects and topics easily.
// ============================================================

const LESSONS_DATA = {
  subjects: [
    // {
    //   id: "anatomy",
    //   name: "Anatomiya",
    //   icon: "bi-heart-pulse",
    //   color: "danger",
    //   description: "Inson tanasi anatomiyasi",
    // },
    {
      id: "cellbiology",
      name: "Hujayra biologiyasi",
      icon: "bi-virus",
      color: "success",
      description: "Hujayra va molekulyar biologiya",

      testSource: "/cellbiology/bytopics.js",
    },
    // {
    //   id: "chemistry",
    //   name: "Kimyo",
    //   icon: "bi-droplet-half",
    //   color: "warning",
    //   description: "Tibbiy kimyo asoslari",
    // },
    // {
    //   id: "embriology",
    //   name: "Embriologiya",
    //   icon: "bi-egg",
    //   color: "info",
    //   description: "Embrion rivojlanishi",
    // },
  ],

  // Each subject key maps to an array of topics.
  // Each topic: { id, topic, icon (bi- class), lessons[] }
  // Each lesson: { id, title, youtubeId, tests[] }
  lessons: {
    anatomy: [
      {
        id: "anatomy-1",
        topic: "Kirish. Harakat tizimi",
        icon: "bi-1-circle",
        lessons: [
          {
            id: "anatomy-1-1",
            title: "Anatomiyaga kirish",
            youtubeId: "",
            tests: [],
          },
          {
            id: "anatomy-1-2",
            title: "Suyak to'qimasi",
            youtubeId: "",
            tests: [],
          },
          {
            id: "anatomy-1-3",
            title: "Umurtqa pog'onasi",
            youtubeId: "",
            tests: [],
          },
        ],
      },
      {
        id: "anatomy-2",
        topic: "Qon-tomir tizimi",
        icon: "bi-2-circle",
        lessons: [
          {
            id: "anatomy-2-1",
            title: "Yurak anatomiyasi",
            youtubeId: "",
            tests: [],
          },
          { id: "anatomy-2-2", title: "Arteriyalar", youtubeId: "", tests: [] },
          { id: "anatomy-2-3", title: "Venalar", youtubeId: "", tests: [] },
        ],
      },
      {
        id: "anatomy-3",
        topic: "Nafas tizimi",
        icon: "bi-3-circle",
        lessons: [
          {
            id: "anatomy-3-1",
            title: "O'pkaning tuzilishi",
            youtubeId: "",
            tests: [],
          },
        ],
      },
      {
        id: "anatomy-4",
        topic: "Hazm tizimi",
        icon: "bi-4-circle",
        lessons: [
          { id: "anatomy-4-1", title: "Oshqozon", youtubeId: "", tests: [] },
        ],
      },
      {
        id: "anatomy-5",
        topic: "Nerv tizimi",
        icon: "bi-5-circle",
        lessons: [
          {
            id: "anatomy-5-1",
            title: "Markaziy nerv tizimi",
            youtubeId: "",
            tests: [],
          },
        ],
      },
    ],

    cellbiology: [
      {
        id: "cellbio-1",
        topic: "Hujayra biologiyasiga kirish",
        icon: "bi-1-circle",
        lessons: [
          {
            id: "cellbio-1-1",
            title: "Hujayra biologiyasiga kirish",
            youtubeId: "YPZz7c1cA0o",
            tests: ["m1"],
          },
          {
            id: "cellbio-1-2",
            title: "Uglevod & Oqsil",
            youtubeId: "2aPwclOmEgE",
            tests: ["m1"],
          },
          {
            id: "cellbio-1-3",
            title: "Hujayraning murakkab organik birikmalari",
            youtubeId: "rh0ia92ZPSE",
            tests: ["m1"],
          },
        ],
      },
      {
        id: "cellbio-2",
        topic: "Hujayra membranasi",
        icon: "bi-2-circle",
        lessons: [
          {
            id: "cellbio-2-1",
            title: "Hujayra membranasi",
            youtubeId: "ELPdJRoQdNY",
            tests: ["m2"],
          },
          {
            id: "cellbio-2-2",
            title: "Cell membrane (NinjaNerds)",
            youtubeId: "iYG_GH1EdEc",
            tests: ["m2"],
          },
        ],
      },
      {
        id: "cellbio-3",
        topic: "Membranal transport",
        icon: "bi-3-circle",
        lessons: [
          {
            id: "cellbio-3-1",
            title: "Membranal transport",
            youtubeId: "i6gDhdwgE3A",
            tests: ["m3"],
          },
          {
            id: "cellbio-3-2",
            title: "Membrane Transport (NinjaNerds)",
            youtubeId: "xHIzfkbj82U",
            tests: ["m3"],
          },
        ],
      },
      {
        id: "cellbio-4",
        topic: "Hujayra organoidlari",
        icon: "bi-4-circle",
        lessons: [
          {
            id: "cellbio-4-1",
            title: "Hujayra organoidlari",
            youtubeId: "GEJ6OgYlvKw",
            tests: ["m5", "m6", "7", "m8"],
          },
          {
            id: "cellbio-4-2",
            title: "Peroksisoma, Proteasoma, Sitoskelet",
            youtubeId: "l9mRiDb7gQw",
            tests: ["m5", "m6", "7", "m8"],
          },
          {
            id: "cellbio-4-3",
            title: "Yadro va Ribosoma",
            youtubeId: "pkOCu-Bzi3M",
            tests: ["m5", "m6", "7", "m8"],
          },
          {
            id: "cellbio-4-4",
            title: "Peroxisomes (NinjaNerds)",
            youtubeId: "ntM9tyaZJsc",
            tests: ["m5", "m6", "7", "m8"],
          },
          {
            id: "cellbio-4-5",
            title: "Lysosomes (NinjaNerds)",
            youtubeId: "QtGMAgxv72Y",
            tests: ["m5", "m6", "7", "m8"],
          },
          {
            id: "cellbio-4-6",
            title: "Mitochondria (NinjaNerds)",
            youtubeId: "FXDkK-eZeuk",
            tests: ["m5", "m6", "7", "m8"],
          },
          {
            id: "cellbio-4-7",
            title: "Golgi Apparatus (NinjaNerds)",
            youtubeId: "TPgyv2411Xo",
            tests: ["m5", "m6", "7", "m8"],
          },
          {
            id: "cellbio-4-8",
            title: "Endoplasmic Reticulum (NinjaNerds)",
            youtubeId: "X1n2ggpzBbc",
            tests: ["m5", "m6", "7", "m8"],
          },
          {
            id: "cellbio-4-9",
            title: "Peroxisome disease (NinjaNerds)",
            youtubeId: "sQDrhn_I1-8",
            tests: ["m5", "m6", "7", "m8"],
          },
          {
            id: "cellbio-4-10",
            title: "Lysosome disease (NinjaNerds)",
            youtubeId: "yXLBuy38jQM",
            tests: ["m5", "m6", "7", "m8"],
          },
          {
            id: "cellbio-4-11",
            title: "Cytoskeleton (NinjaNerds)",
            youtubeId: "Msn9eOa2i8I",
            tests: ["m5", "m6", "7", "m8"],
          },
        ],
      },
      {
        id: "cellbio-5",
        topic: "Yadro",
        icon: "bi-5-circle",
        lessons: [
          {
            id: "cellbio-5-1",
            title: "Yadro va Ribosoma",
            youtubeId: "pkOCu-Bzi3M",
            tests: [""],
          },
          {
            id: "cellbio-5-2",
            title: "Cell Nucleus (NinjaNerds)",
            youtubeId: "u5MozvAH32c",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-6",
        topic: "Signal Transduksiyasi",
        icon: "bi-6-circle",
        lessons: [
          {
            id: "cellbio-6-1",
            title: "Signal Transduksiyasiga kirish",
            youtubeId: "eAxi8zXXUKM",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-7",
        topic: "Retseptorlar",
        icon: "bi-7-circle",
        lessons: [
          {
            id: "cellbio-7-1",
            title: "Intrasellulyar retseptorlar va Ikkilamchi retseptorlar",
            youtubeId: "hsepzDYjvSQ",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-8",
        topic: "Hujayra sikli",
        icon: "bi-8-circle",
        lessons: [
          {
            id: "cellbio-8-1",
            title: "Hujayra sikli va regulyatsiyasi",
            youtubeId: "mYmB1lFY4Fk",
            tests: [""],
          },
          {
            id: "cellbio-8-2",
            title: "Cell Cycle (NinjaNerds)",
            youtubeId: "LUDws4JrIiI",
            tests: [""],
          },
          {
            id: "cellbio-8-3",
            title: "Cell Cycle regulation (NinjaNerds)",
            youtubeId: "9ZoZx2FK9DE",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-9",
        topic: "Hujayra membrana potensiali",
        icon: "bi-9-circle",
        lessons: [
          {
            id: "cellbio-9-1",
            title: "Hujayra membrana potensiali",
            youtubeId: "",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-10",
        topic: "Kollagen va Elastin",
        icon: "bi-10-circle",
        lessons: [
          {
            id: "cellbio-10-1",
            title: "Kollagen tiplari va sintezi",
            youtubeId: "LjnkPmSwKMs",
            tests: [""],
          },
          {
            id: "cellbio-10-2",
            title: "Kollagen kasalliklari",
            youtubeId: "Pw2Iz7YWmsM",
            tests: [""],
          },
          {
            id: "cellbio-10-3",
            title: "Elastin sintezi va kasalliklari",
            youtubeId: "3A48ROvNhL0",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-11",
        topic: "DNK strukturasi va replikatsiyasi",
        icon: "bi-11-circle",
        lessons: [
          {
            id: "cellbio-11-1",
            title: "DNK strukturasi",
            youtubeId: "qLJH4VvOC2Y",
            tests: [""],
          },
          {
            id: "cellbio-11-2",
            title: "DNK replikatsiyasi",
            youtubeId: "f9OofAexVcs",
            tests: [""],
          },
          {
            id: "cellbio-11-3",
            title: "DNA Replication (NinjaNerds)",
            youtubeId: "xvWdIi6_fGg",
            tests: [""],
          },
          {
            id: "cellbio-11-4",
            title: "DNA structure (NinjaNerds)",
            youtubeId: "S6LXyzZn5Ls",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-12",
        topic: "DNK mutatsiyasi va reparatsiyasi",
        icon: "bi-12-circle",
        lessons: [
          {
            id: "cellbio-12-1",
            title: "DNK mutatsiyasi",
            youtubeId: "DDxzDS0tSa4",
            tests: [""],
          },
          {
            id: "cellbio-12-2",
            title: "DNK reparatsiyasi",
            youtubeId: "DQ9WC4ZiHUg",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-13",
        topic: "Gen ekspressiyasi va Genetik kod",
        icon: "bi-13-circle",
        lessons: [
          {
            id: "cellbio-13-1",
            title: "Gen ekspressiyasi",
            youtubeId: "",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-14",
        topic: "RNK",
        icon: "bi-14-circle",
        lessons: [
          {
            id: "cellbio-14-1",
            title: "RNK tiplari va funktsiyalari",
            youtubeId: "6Kg1Z_n7_cw",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-15",
        topic: "Transkripsiya , Modifikatsiya",
        icon: "bi-15-circle",
        lessons: [
          {
            id: "cellbio-15-1",
            title: "Transkripsiya",
            youtubeId: "",
            tests: [""],
          },
          {
            id: "cellbio-15-2",
            title: "Post-transkripsion modifikatsiya",
            youtubeId: "8LYma8zUQ0U",
            tests: [""],
          },
          {
            id: "cellbio-15-3",
            title: "Transcription (NinjaNerds)",
            youtubeId: "ZrCx98CtJ_4",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-16",
        topic: "Translyatsiya , Modifikatsiya",
        icon: "bi-16-circle",
        lessons: [
          {
            id: "cellbio-16-1",
            title: "Translyatsiya va post-translyatsiya",
            youtubeId: "8LYma8zUQ0U",
            tests: [""],
          },
          {
            id: "cellbio-16-2",
            title: "Translation (NinjaNerds)",
            youtubeId: "80kxa1zApUM",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-17",
        topic: "Genetik terminologiya",
        icon: "bi-17-circle",
        lessons: [
          {
            id: "cellbio-17-1",
            title: "Genetika faniga kirish. Terminologiya. Mendel qonunlari",
            youtubeId: "HRFV6MY4FmY",
            tests: [""],
          },
          {
            id: "cellbio-17-2",
            title: "Genetik kasalliklar",
            youtubeId: "ueA4KqLBElg",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-18",
        topic: "Mitoz va Meyoz",
        icon: "bi-18-circle",
        lessons: [
          {
            id: "cellbio-18-1",
            title: "Mitoz va meyoz",
            youtubeId: "CLK2X5yI17w",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-19",
        topic: "Populyatsion genetika",
        icon: "bi-19-circle",
        lessons: [
          {
            id: "cellbio-19-1",
            title:
              "Populyatsion genetika Xardi-Vaynberg qonuni populyatsion genetikasi",
            youtubeId: "l6DDvYNSUGM",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-20",
        topic: "Genetik kasalliklar",
        icon: "bi-20-circle",
        lessons: [
          {
            id: "cellbio-20-1",
            title: "Genetik kasalliklar, imprinting buzilishlari",
            youtubeId: "XQ4H8YBKbqI",
            tests: [""],
          },
          {
            id: "cellbio-20-2",
            title: "Xromosoma kasalliklari",
            youtubeId: "RkIh1Veqj-Y",
            tests: [""],
          },
          {
            id: "cellbio-20-3",
            title: "Mitoxondriya kasalliklari",
            youtubeId: "kKMZeoP3M3M",
            tests: [""],
          },
          {
            id: "cellbio-20-4",
            title: "Irsiylanish mezonlari",
            youtubeId: "fEf9SJB0aoU",
            tests: [""],
          },
          {
            id: "cellbio-20-5",
            title: "Mitoxondrial irsiylanish",
            youtubeId: "28yIgMNySkw",
            tests: [""],
          },
          {
            id: "cellbio-20-6",
            title: "Trinukleotid takrorlanish kasalliklari",
            youtubeId: "wfyq7KdzXxA",
            tests: [""],
          },
        ],
      },
      {
        id: "cellbio-21",
        topic: "Xromosoma kasalliklari",
        icon: "bi-21-circle",
        lessons: [
          {
            id: "cellbio-21-1",
            title: "Xromosoma kasalliklari",
            youtubeId: "RkIh1Veqj-Y",
            tests: [""],
          },
          {
            id: "cellbio-21-2",
            title: "Autosomal trisomiyalar",
            youtubeId: "b9aR7DNbBf0",
            tests: [""],
          },
          {
            id: "cellbio-21-3",
            title: "Turner sindromi va Klinefelter sindromi",
            youtubeId: "GabROgElrhE",
            tests: [""],
          },
        ],
      },
    ],

    chemistry: [
      {
        id: "chem-1",
        topic: "Kimyoga kirish",
        icon: "bi-1-circle",
        lessons: [
          {
            id: "chem-1-1",
            title: "Kimyoning asosiy tushunchalari",
            youtubeId: "",
            tests: [],
          },
        ],
      },
      {
        id: "chem-2",
        topic: "Organik kimyo",
        icon: "bi-2-circle",
        lessons: [],
      },
      {
        id: "chem-3",
        topic: "Anorganik kimyo",
        icon: "bi-3-circle",
        lessons: [],
      },
    ],

    embriology: [
      {
        id: "embr-1",
        topic: "Embriologiyaga kirish",
        icon: "bi-1-circle",
        lessons: [
          {
            id: "embr-1-1",
            title: "Embrion rivojlanishining bosqichlari",
            youtubeId: "",
            tests: [],
          },
        ],
      },
      {
        id: "embr-2",
        topic: "Gastrulatsiya",
        icon: "bi-2-circle",
        lessons: [],
      },
    ],
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getSubject(subjectId) {
  return LESSONS_DATA.subjects.find((s) => s.id === subjectId);
}

function getSubjectTopics(subjectId) {
  return LESSONS_DATA.lessons[subjectId] || [];
}

function getLesson(lessonId) {
  for (const subjectKey in LESSONS_DATA.lessons) {
    for (const topic of LESSONS_DATA.lessons[subjectKey]) {
      const lesson = topic.lessons.find((l) => l.id === lessonId);
      if (lesson) return lesson;
    }
  }
  return null;
}

function getLessonWithTopic(lessonId) {
  for (const subjectKey in LESSONS_DATA.lessons) {
    const subject = getSubject(subjectKey);
    for (const topic of LESSONS_DATA.lessons[subjectKey]) {
      const lesson = topic.lessons.find((l) => l.id === lessonId);
      if (lesson) {
        return { lesson, topic, subject, subjectId: subjectKey };
      }
    }
  }
  return null;
}
