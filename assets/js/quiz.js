// ===============================
// QUIZ DATA
// ===============================
const quizData = [
  {
    question: "What does LAN stand for?",
    options: [
      "Large Area Network",
      "Local Area Network",
      "Long Area Network",
      "Logical Area Network"
    ],
    answer: 1
  },
  {
    question: "Which device connects multiple computers in a LAN?",
    options: [
      "Router",
      "Modem",
      "Switch",
      "Firewall"
    ],
    answer: 2
  },
  {
    question: "Which protocol assigns IP addresses automatically?",
    options: [
      "DNS",
      "HTTP",
      "DHCP",
      "FTP"
    ],
    answer: 2
  }
];

// ===============================
// LOAD QUIZ
// ===============================
const quizContainer = document.getElementById("quizContainer");

function loadQuiz() {
  quizContainer.innerHTML = "";

  quizData.forEach((q, index) => {
    const card = document.createElement("section");
    card.className = "info-card";
    card.style.marginBottom = "2rem";

    let optionsHTML = "";
    q.options.forEach((opt, i) => {
      optionsHTML += `
        <label style="display:block; margin:.4rem 0;">
          <input type="radio" name="q${index}" value="${i}">
          ${opt}
        </label>
      `;
    });

    card.innerHTML = `
      <h3>Q${index + 1}. ${q.question}</h3>

      <div class="options">
        ${optionsHTML}
      </div>

      <div style="margin-top:1rem; display:flex; gap:1rem;">
        <button class="btn-primary" onclick="submitQuestion(${index})">
          Submit
        </button>
        <button class="btn-secondary" onclick="resetQuestion(${index})">
          Reset
        </button>
      </div>

      <p id="result${index}" style="margin-top:.8rem; font-weight:600;"></p>
    `;

    quizContainer.appendChild(card);
  });
}

// ===============================
// SUBMIT SINGLE QUESTION
// ===============================
function submitQuestion(index) {
  const q = quizData[index];
  const options = document.getElementsByName(`q${index}`);
  const result = document.getElementById(`result${index}`);

  let selectedValue = null;

  options.forEach((opt) => {
    opt.parentElement.style.color = "";
    opt.parentElement.style.fontWeight = "normal";

    if (opt.checked) {
      selectedValue = parseInt(opt.value);
    }
  });

  if (selectedValue === null) {
    result.innerHTML = "⚠️ Please select an option.";
    result.style.color = "#facc15";
    return;
  }

  if (selectedValue === q.answer) {
    options[selectedValue].parentElement.style.color = "#22c55e";
    options[selectedValue].parentElement.style.fontWeight = "600";
    result.innerHTML = "✅ Correct Answer";
    result.style.color = "#22c55e";
  } else {
    options[selectedValue].parentElement.style.color = "#ef4444";
    options[q.answer].parentElement.style.color = "#22c55e";
    options[q.answer].parentElement.style.fontWeight = "600";
    result.innerHTML = "❌ Wrong Answer";
    result.style.color = "#ef4444";
  }
}

// ===============================
// RESET SINGLE QUESTION
// ===============================
function resetQuestion(index) {
  const options = document.getElementsByName(`q${index}`);
  const result = document.getElementById(`result${index}`);

  options.forEach((opt) => {
    opt.checked = false;
    opt.parentElement.style.color = "";
    opt.parentElement.style.fontWeight = "normal";
  });

  result.innerHTML = "";
}

// ===============================
// INIT
// ===============================
loadQuiz();
