// Lessons Data - Easy to Edit and Maintain
const LESSONS_DATA = {
  subjects: [
    {
      id: "cellbiology",
      name: "Hujayra biologiyasi",
      icon: "🔬",
      description: "Cellbiology",
      color: "#45B7D1",
    },
  ],

  lessons: {
    cellbiology: [
      {
        id: "cellbio-1",
        topic: "HUJAYRA BIOLOGIYASIGA KIRISH",
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
            title: "Hujaraning murakkab organik birikmalari",
            youtubeId: "rh0ia92ZPSE",

            tests: ["cellb1"],
          },
        ],
      },
      {
        id: "cellbio-2",
        topic: "Hujayra membranasi",
        lessons: [],
      },
      {
        id: "cellbio-3",
        topic: "Membranal transport",
        lessons: [],
      },
    ],
  },
};

// Helper function to get subject by ID
function getSubject(subjectId) {
  return LESSONS_DATA.subjects.find((s) => s.id === subjectId);
}

// Helper function to get all topics for a subject
function getSubjectTopics(subjectId) {
  return LESSONS_DATA.lessons[subjectId] || [];
}

// Helper function to find a specific lesson
function getLesson(lessonId) {
  for (const subjectKey in LESSONS_DATA.lessons) {
    const topics = LESSONS_DATA.lessons[subjectKey];
    for (const topic of topics) {
      const lesson = topic.lessons.find((l) => l.id === lessonId);
      if (lesson) return lesson;
    }
  }
  return null;
}

// Helper function to get lesson with topic info
function getLessonWithTopic(lessonId) {
  for (const subjectKey in LESSONS_DATA.lessons) {
    const topics = LESSONS_DATA.lessons[subjectKey];
    for (const topic of topics) {
      const lesson = topic.lessons.find((l) => l.id === lessonId);
      if (lesson) {
        return {
          ...lesson,
          topicName: topic.topic,
          subjectId: subjectKey,
        };
      }
    }
  }
  return null;
}
