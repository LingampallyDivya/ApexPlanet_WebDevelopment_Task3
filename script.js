// =========================
// QUIZ GAME
// =========================
const questions = [
  { q: "What is 2 + 2?", options: [3, 4, 5], answer: 4 },
  { q: "Which language runs in a web browser?", options: ["Python", "JavaScript", "C++"], answer: "JavaScript" },
  { q: "What does CSS stand for?", options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style System"], answer: "Cascading Style Sheets" }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";
  
  if (current < questions.length) {
    let q = questions[current];
    let questionEl = document.createElement("p");
    questionEl.textContent = q.q;
    quizContainer.appendChild(questionEl);

    q.options.forEach(opt => {
      let btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(opt);
      quizContainer.appendChild(btn);
    });
  } else {
    document.getElementById("quiz-result").textContent = `Quiz Finished! ✅ Score: ${score}/${questions.length}`;
  }
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) {
    score++;
  }
  current++;
  loadQuestion();
}
loadQuestion();

// =========================
// JOKE GENERATOR
// =========================
async function getJoke() {
  try {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await response.json();
    document.getElementById("joke").textContent = data.setup + " - " + data.punchline;
  } catch (error) {
    document.getElementById("joke").textContent = "❌ Failed to load joke.";
  }
}

document.getElementById("joke-btn").addEventListener("click", getJoke);
