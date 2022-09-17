const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
    if(sum % luckyNumber===0) {
        outputBox.innerText = "Yay! your birthday is lucky 🥳";
    }
    else {
        outputBox.innerText = "Sorry your birthday is Not lucky 🤒";
    }
}

function checkBirthDateIsLucky () {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob)
    compareValues(sum, luckyNumber.value);
    else
    outputBox.innerText = "*Please enter Both The Fields";
}

function calculateSum(dob) {
   dob = dob.replaceAll("-","");
   let sum = 0;
   for(let i=0; i < dob.length;  i++) {
    sum = sum + Number(dob.charAt(i));
   }
   return sum;
}





checkNumberButton.addEventListener("click", checkBirthDateIsLucky);