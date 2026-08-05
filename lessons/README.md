# Lessons System - Documentation

## 📁 Folder Structure

```
lessons/
├── index.html           # Main page - Subject Selection
├── js/
│   └── data.js         # Central data storage (EDIT THIS FILE)
├── anatomy/
│   └── index.html      # Anatomy topics page
├── chemistry/
│   └── index.html      # Chemistry topics page
├── cellbiology/
│   └── index.html      # Cell Biology topics page
├── topic-detail/
│   └── index.html      # Specific topic with lessons
└── lesson/
    └── index.html      # Single lesson page with YouTube video
```

## 🎯 How It Works

1. **User opens** `lessons/index.html` → Shows all subjects (Anatomy, Chemistry, Cell Biology)
2. **User clicks a subject** → Opens `lessons/[subject]/index.html` → Shows 12 topics as cards
3. **User clicks a topic** → Opens `lessons/topic-detail/index.html` → Shows all lessons in that topic
4. **User clicks a lesson** → Opens `lessons/lesson/index.html` → Shows YouTube video + lesson controls

## 📝 How to Edit Lessons Data

All lesson data is stored in **`lessons/js/data.js`** - This is the ONLY file you need to edit!

### Structure Overview

```javascript
const LESSONS_DATA = {
  subjects: [
    {
      id: "anatomy",
      name: "Anatomy",
      icon: "🫀",
      description: "Learn human anatomy",
      color: "#FF6B6B",
    },
    // ... more subjects
  ],

  lessons: {
    anatomy: [
      {
        id: "anatomy-1",
        topic: "Skeletal System",
        lessons: [
          {
            id: "anat-1-1",
            title: "Bone Structure and Types",
            youtubeId: "dQw4w9WgXcQ",
          },
          // ... more lessons
        ],
      },
      // ... more topics
    ],
  },
};
```

### 📌 Adding a New Subject

In `data.js`, add to the `subjects` array:

```javascript
{
    id: 'newsubject',        // Must be lowercase, no spaces
    name: 'New Subject',     // Display name
    icon: '🔥',              // Any emoji
    description: 'Description here',
    color: '#FF0000'         // Hex color code
}
```

Then add a corresponding entry in the `lessons` object:

```javascript
newsubject: [
  {
    id: "newsubject-1",
    topic: "First Topic",
    lessons: [
      { id: "new-1-1", title: "Lesson Title", youtubeId: "VIDEO_ID_HERE" },
      { id: "new-1-2", title: "Another Lesson", youtubeId: "VIDEO_ID_HERE" },
    ],
  },
  // ... add up to 12 topics
];
```

### 📌 Adding a New Topic

Find your subject in the `lessons` object and add to its array:

```javascript
{
    id: 'anatomy-13',        // Unique ID
    topic: 'New Topic Name',
    lessons: [
        { id: 'anat-13-1', title: 'Lesson 1', youtubeId: 'dQw4w9WgXcQ' },
        { id: 'anat-13-2', title: 'Lesson 2', youtubeId: 'dQw4w9WgXcQ' },
        { id: 'anat-13-3', title: 'Lesson 3', youtubeId: 'dQw4w9WgXcQ' }
    ]
}
```

### 📌 Adding a New Lesson

Find the topic and add to its lessons array:

```javascript
{ id: 'unique-lesson-id', title: 'Lesson Title', youtubeId: 'VIDEO_ID' }
```

### 🎥 How to Get YouTube Video ID

For a YouTube URL like: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

The video ID is: `dQw4w9WgXcQ` (the part after `v=`)

## 🎨 Customizing Colors

Each subject has a `color` property in hex format:

- `#FF6B6B` - Red
- `#4ECDC4` - Teal
- `#45B7D1` - Blue
- etc.

This color is used for cards, buttons, and highlights throughout that subject's pages.

## ✅ Helper Functions in data.js

The data.js file includes these useful functions:

```javascript
getSubject(subjectId); // Get subject by ID
getSubjectTopics(subjectId); // Get all topics for a subject
getLesson(lessonId); // Find a lesson by ID
getLessonWithTopic(lessonId); // Get lesson with topic info
```

These are used internally by the HTML pages.

## 🔗 URL Navigation Flow

```
lessons/index.html
    ↓
lessons/[subject]/index.html
    ↓ (sessionStorage: currentTopic)
lessons/topic-detail/index.html
    ↓ (sessionStorage: currentLesson)
lessons/lesson/index.html
```

## 💡 Tips

1. **Keep IDs unique** - Each lesson, topic, and subject should have a unique ID
2. **ID naming convention** - Use lowercase with hyphens (e.g., `anat-1-1`)
3. **Always have descriptions** - Add meaningful descriptions for subjects
4. **Test after editing** - After changing data.js, refresh the browser to see changes
5. **Use sessionStorage** - Pages communicate via sessionStorage, which clears when browser closes

## 🚀 Quick Start Example

To add a new lesson to Anatomy > Skeletal System:

1. Open `lessons/js/data.js`
2. Find the `anatomy` → `anatomy-1` (Skeletal System) → `lessons` array
3. Add a new lesson object:
   ```javascript
   {
       id: 'anat-1-4',
       title: 'Bone Healing Process',
       youtubeId: 'YOUR_VIDEO_ID_HERE'
   }
   ```
4. Save the file
5. Refresh your browser and navigate to that lesson

That's it! The lesson will appear in the list automatically.

## 🆘 Troubleshooting

- **Lesson not showing?** Check that the subject/topic/lesson IDs are consistently used
- **Video not playing?** Verify the YouTube video ID is correct
- **Styling issues?** All styling uses colors from the subject, check the color hex code
- **Navigation not working?** Check browser console for errors (F12)
