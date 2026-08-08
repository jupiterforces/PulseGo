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
            tests: ["cellb1"],
          },
          {
            id: "cellbio-1-2",
            title: "Uglevod & Oqsil",
            youtubeId: "2aPwclOmEgE",
            tests: ["cellb1"],
          },
          {
            id: "cellbio-1-3",
            title: "Hujayraning murakkab organik birikmalari",
            youtubeId: "rh0ia92ZPSE",
            tests: ["cellb1"],
          },
        ],
      },
      {
        id: "cellbio-2",
        topic: "Hujayra membranasi",
        icon: "bi-2-circle",
        lessons: [],
      },
      {
        id: "cellbio-3",
        topic: "Membranal transport",
        icon: "bi-3-circle",
        lessons: [],
      },
      {
        id: "cellbio-4",
        topic: "Hujayra organoidlari",
        icon: "bi-4-circle",
        lessons: [],
      },
      {
        id: "cellbio-5",
        topic: "Hujayra bo'linishi",
        icon: "bi-5-circle",
        lessons: [],
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
