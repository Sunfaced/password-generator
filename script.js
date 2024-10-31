const password = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "#$%&()*+,-./:;<=>?@[]^_{|}~",
};

//Рандомное число
const randomInteger = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

//Перемешиваем строку
const shuffleString = (str) =>
  str
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");

const passLength = document.querySelector(".pass-length"); //Инпут с бегунком
const passValue = document.querySelector(".pass-value"); //Спан, содержащий длину пароля
const passInput = document.querySelector(".pass-input"); //Инпут для вывода пароля
const genPassBtn = document.querySelector(".generate-pass__btn"); //Кнопка для генерации пароля
const copyPass = document.querySelector("#copyPass");

genPassBtn.addEventListener("click", generatePass);
passLength.addEventListener("input", redrawSpanValue);
copyPass.addEventListener("click", copyPassword);
function redrawSpanValue() {
  passValue.textContent = +passLength.value;
}

function generatePass() {
  const value = +passLength.value;
  passValue.textContent = value;

  let passString = shuffleString(password.lowercase);

  if (uppercase.checked)
    passString = shuffleString(passString + password.uppercase);
  if (symbols.checked)
    passString = shuffleString(passString + password.symbols);
  if (numbers.checked)
    passString = shuffleString(passString + password.numbers);

  let randomPass = "";
  for (let i = 0; i < value; i++) {
    let random = randomInteger(0, passString.length - 1);
    randomPass += passString[random];
  }
  passInput.value = randomPass;
}
if ((passInput.value = "")) generatePass();

function copyPassword() {
  navigator.clipboard.writeText(passInput.value);
  if (passInput.value === "") {
    // copyPass.textContent = "save";
  } else {
    copyPass.textContent = "check_box";
    setTimeout(() => {
      copyPass.textContent = "save";
    }, 1000);
  }
}
