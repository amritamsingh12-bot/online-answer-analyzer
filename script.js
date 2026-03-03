function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === "student" && p === "123") {
    window.location.href = "question.html";
  } else {
    alert("Wrong credentials");
  }
}

function nextPage(page) {
  window.location.href = page;
}

function analyze() {
  let ans = document.getElementById("answer").value;
  if (ans.length < 30) {
    alert("Answer too short");
    return;
  }
  window.location.href = "analyze.html";
}
function saveQuestion() {
  let q = document.getElementById("questionSelect").value;
  if (q === "") {
    alert("Please select a question");
    return;
  }
  localStorage.setItem("selectedQuestion", q);
  window.location.href = "answer.html";
}
