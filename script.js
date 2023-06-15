//Get the current date
const data = new Date();
  let ano = data.getFullYear();
  let mes = data.getMonth() + 1;
  let dia = data.getDate();
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//output elements
const yy = document.querySelector("#yyyy");
const mm = document.querySelector("#mm");
const dd = document.querySelector("#dd");
const submit = document.querySelector(".submit-btn");

//input Values
let isValid = false;
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

//Get error elements
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

//submit function
submit.addEventListener("click", calculateDate);

inputDay.addEventListener("input", (e) => {
  if (+inputDay.value > 31) {
    errorDay.textContent = "Must be a Valid date";
    inputDay.style.borderColor = "red";
    isValid = false;
    return;
  } else {
    isValid = true;
  }
  if (+inputDay.value === 0) {
    isValid = false;
    errorDay.textContent = "This field is required";
    inputDay.style.borderColor = "red";
    isValid = false;
    return;
  } else {
    errorDay.textContent = "";
    inputDay.style.borderColor = "";
  }
});

inputMonth.addEventListener("input", (e) => {
  if (+inputMonth.value > 12) {
    errorMonth.textContent = "Must be a Valid date";
    inputMonth.style.borderColor = "red";
    isValid = false;
    return;
  } else {
    isValid = true;
  }
  if (+inputMonth.value === 0) {
    isValid = false;
    errorMonth.textContent = "This field is required";
    inputMonth.style.borderColor = "red";
    isValid = false;
    return;
  } else {
    errorMonth.textContent = "";
    inputMonth.style.borderColor = "";
  }
});

inputYear.addEventListener("input", (e) => {
  if (+inputYear.value > ano) {
    errorYear.textContent = "Must be a Valid date";
    inputYear.style.borderColor = "red";
    isValid = false;
    return;
  } else {
    isValid = true;
  }
  if (+inputYear.value === 0) {
    isValid = false;
    errorYear.textContent = "This field is required";
    inputYear.style.borderColor = "red";
    isValid = false;
    return;
  } else {
    errorYear.textContent = "";
    inputYear.style.borderColor = "";
  }
});

function calculateDate() {
  
  if (isValid) {
    if (inputDay.value > dia) {
      dia = dia + months[mes - 1];
      mes = mes - 1;
    }
    if (inputMonth.value > mes) {
      mes = mes + 12;
      ano = ano - 1;
    }

    const d = dia - inputDay.value;
    const m = mes - inputMonth.value;
    const y = ano - inputYear.value;

    dd.textContent = d;
    mm.textContent = m;
    yy.textContent = y;
  }
}
