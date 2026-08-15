function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getRandomTest(questions, n = "all") {
  const shuffledQuestions =
    n === "all" ? shuffle(questions) : shuffle(questions).slice(0, n);

  return shuffledQuestions.map((q) => {
    const shuffledAnswers = shuffle(q.a);

    return {
      q: q.q,
      photo: q.photo || null,
      a: shuffledAnswers,
      correct: shuffledAnswers.indexOf(q.a[q.correct]),
    };
  });
}

window.getRandomTest = getRandomTest;

function renderTestCards(containerSelector, tests) {
  const container = document.querySelector(containerSelector);

  if (!container) {
    console.error("❌ Test cards container topilmadi:", containerSelector);
    return;
  }

  container.innerHTML = "";

  tests.forEach(({ testName, title }) => {
    const card = document.createElement("div");

    card.className = "col-6 col-md-3";

    card.innerHTML = `
            <div class="test-card" onclick="startTest('${testName}')">
                <div class="test-icon bg-success-subtle text-success">
                    <i class="bi bi-journal-medical fs-3"></i>
                </div>

                <div class="test-title fw-semibold">
                    ${title}
                </div>

                <div class="question-footer">
                    ${window.tests?.[testName]?.length || 0} ta savol
                </div>
            </div>
        `;

    container.appendChild(card);
  });
}
