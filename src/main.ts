import "./style.css";

const btn = document.getElementById("btn") as HTMLButtonElement;
const slider = document.getElementById("slider") as HTMLInputElement;
const numbersCheckbox = document.getElementById("numbers-checkbox") as HTMLInputElement;
const symbolsCheckbox = document.getElementById("symbols-checkbox") as HTMLInputElement;
const passwordLength = document.getElementById("password-length") as HTMLSpanElement;
const result = document.getElementById("result") as HTMLParagraphElement;

// NOTE: 視認性考慮
const SAFE_UPPERCASE = "ABCDEFGHJKLMNPQRSTUVWXYZ"; // I, O 除外
const SAFE_LOWERCASE = "abcdefghjkmnpqrstuvwxyz"; // i, l, o 除外
const SAFE_DIGITS = "23456789"; // 0, 1 除外
const SAFE_SYMBOLS = "!@#$%^&*()_+-=";
let seed = SAFE_UPPERCASE + SAFE_LOWERCASE;

function showPassword() {
  seed = SAFE_UPPERCASE + SAFE_LOWERCASE;
  if (numbersCheckbox.checked) {
    seed += SAFE_DIGITS;
  }
  if (symbolsCheckbox.checked) {
    seed += SAFE_SYMBOLS;
  }
  let password = "";
  for (let i = 0; i < Number(slider.value); i++) {
    password += seed[Math.floor(Math.random() * seed.length)];
  }
  result.textContent = password;
}

slider.addEventListener("input", () => {
  passwordLength.textContent = slider.value;
});

btn.addEventListener("click", () => {
  showPassword();
});

showPassword();
