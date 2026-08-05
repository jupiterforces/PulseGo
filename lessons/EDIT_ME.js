// 📚 LESSONS DATA - QUICK EDIT GUIDE
// Edit this file to manage all lessons, topics, and subjects
// All changes are reflected immediately across the entire lessons system

// ============================================
// IMPORTANT: Edit lessons/js/data.js NOT this file!
// This is just a reference/backup template
// ============================================

/**
 * HOW TO ADD A NEW SUBJECT:
 *
 * 1. Add to subjects array:
 *    {
 *        id: 'embriology',
 *        name: 'Embryology',
 *        icon: '🫘',
 *        description: 'Study of embryo development',
 *        color: '#9B59B6'
 *    }
 *
 * 2. Add corresponding entry to lessons object:
 *    embriology: [
 *        {
 *            id: 'emb-1',
 *            topic: 'Early Development',
 *            lessons: [
 *                { id: 'emb-1-1', title: 'Fertilization', youtubeId: 'abcd1234' },
 *                // ...
 *            ]
 *        }
 *    ]
 */

/**
 * HOW TO ADD A NEW TOPIC TO EXISTING SUBJECT:
 *
 * Find the subject (e.g., anatomy) and add to its array:
 * anatomy: [
 *     // ... existing topics ...
 *     {
 *         id: 'anatomy-13',
 *         topic: 'Fascia and Connective Tissue',
 *         lessons: [
 *             { id: 'anat-13-1', title: 'Types of Fascia', youtubeId: 'xyz789' },
 *             { id: 'anat-13-2', title: 'Deep Fascia Layers', youtubeId: 'xyz790' },
 *             { id: 'anat-13-3', title: 'Fascia Functions', youtubeId: 'xyz791' }
 *         ]
 *     }
 * ]
 */

/**
 * HOW TO ADD A NEW LESSON:
 *
 * Find the topic in the subject and add to lessons array:
 * lessons: [
 *     // ... existing lessons ...
 *     {
 *         id: 'anat-1-4',
 *         title: 'Types of Bone Fractures',
 *         youtubeId: 'newVideoId'
 *     }
 * ]
 */

/**
 * YOUTUBE VIDEO ID - Where to find it:
 *
 * Full URL:  https://www.youtube.com/watch?v=dQw4w9WgXcQ
 * Video ID:  dQw4w9WgXcQ  (everything after v=)
 *
 * Short URL: https://youtu.be/dQw4w9WgXcQ?t=87
 * Video ID:  dQw4w9WgXcQ  (everything after youtu.be/ and before ?)
 */

/**
 * COLOR CODES - Hex color format:
 *
 * Common colors:
 * Red:       #FF6B6B
 * Orange:    #FF9500
 * Yellow:    #FFD93D
 * Green:     #6BCB77
 * Teal:      #4ECDC4
 * Blue:      #45B7D1
 * Purple:    #9B59B6
 * Pink:      #E91E63
 *
 * Each subject uses one color for all its cards/buttons
 */

/**
 * EXAMPLE: Complete Subject with 2 Topics (3 lessons each)
 *
 * subjects: [
 *     {
 *         id: 'microbiology',
 *         name: 'Microbiology',
 *         icon: '🦠',
 *         description: 'Study of microorganisms',
 *         color: '#00BFA5'
 *     }
 * ],
 *
 * lessons: {
 *     microbiology: [
 *         {
 *             id: 'micro-1',
 *             topic: 'Bacterial Structure',
 *             lessons: [
 *                 { id: 'micro-1-1', title: 'Cell Wall Composition', youtubeId: 'abc123' },
 *                 { id: 'micro-1-2', title: 'Gram Staining', youtubeId: 'abc124' },
 *                 { id: 'micro-1-3', title: 'Flagella and Movement', youtubeId: 'abc125' }
 *             ]
 *         },
 *         {
 *             id: 'micro-2',
 *             topic: 'Viral Replication',
 *             lessons: [
 *                 { id: 'micro-2-1', title: 'Viral Lifecycle', youtubeId: 'def456' },
 *                 { id: 'micro-2-2', title: 'Host Cell Entry', youtubeId: 'def457' },
 *                 { id: 'micro-2-3', title: 'Viral Assembly', youtubeId: 'def458' }
 *             ]
 *         }
 *     ]
 * }
 */

/**
 * RULES & GUIDELINES:
 *
 * 1. Keep all IDs unique (no duplicates)
 * 2. Use lowercase letters and hyphens for IDs (e.g., 'anat-1-1')
 * 3. Each subject can have up to 12 topics (displays as grid)
 * 4. Each topic can have any number of lessons
 * 5. YouTube video ID is required for each lesson
 * 6. Subject icons should be relevant emojis
 * 7. Colors must be valid hex codes (#RRGGBB format)
 * 8. Descriptions should be brief (2-3 words or one phrase)
 */

/**
 * NAVIGATION FLOW (How users navigate):
 *
 * 1. Open lessons/index.html
 *    ↓ See subject cards (Subject Selection)
 *
 * 2. Click a subject (e.g., Anatomy)
 *    ↓ Navigate to lessons/anatomy/index.html
 *    ↓ See 12 topic cards
 *
 * 3. Click a topic (e.g., Skeletal System)
 *    ↓ Navigate to lessons/topic-detail/index.html
 *    ↓ See all lessons in that topic as cards
 *
 * 4. Click a lesson
 *    ↓ Navigate to lessons/lesson/index.html
 *    ↓ See YouTube video player + lesson info
 *    ↓ Can navigate to previous/next lesson
 */

/**
 * FILE LOCATIONS IN LESSONS FOLDER:
 *
 * ✓ lessons/js/data.js              ← MAIN FILE TO EDIT
 * ✓ lessons/index.html              ← Subject selection page
 * ✓ lessons/anatomy/index.html       ← Shows topics for Anatomy
 * ✓ lessons/chemistry/index.html     ← Shows topics for Chemistry
 * ✓ lessons/cellbiology/index.html   ← Shows topics for Cell Biology
 * ✓ lessons/topic-detail/index.html  ← Shows lessons in a topic
 * ✓ lessons/lesson/index.html        ← Shows single lesson with video
 * ✓ lessons/README.md                ← Full documentation
 * ✓ lessons/EDIT_ME.js               ← This file (reference only)
 */

console.log(
  "📚 This is a reference file. Edit lessons/js/data.js to make changes!",
);
