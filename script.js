const password = document.getElementById("password");
const strength = document.getElementById("strength");
const progressBar = document.getElementById("progress-bar");

password.addEventListener("input", checkStrength);

function checkStrength() {
  const value = password.value;
  let score = 0;

  if (value.length >= 8) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[a-z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;

  const percent = (score / 5) * 100;
  progressBar.style.width = percent + "%";

  if (score <= 2) {
    strength.textContent = "Weak Password";
    strength.style.color = "red";
    progressBar.style.backgroundColor = "red";
  } else if (score <= 4) {
    strength.textContent = "Medium Password";
    strength.style.color = "orange";
    progressBar.style.backgroundColor = "orange";
  } else {
    strength.textContent = "Strong Password";
    strength.style.color = "green";
    progressBar.style.backgroundColor = "green";
  }

  if (value.length === 0) {
    strength.textContent = "";
    progressBar.style.width = "0%";
  }
}
