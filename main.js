var currency = document.querySelector("select");
var exchangeForm = document.querySelector(".registerForm");
exchangeForm.onsubmit = function (e) {
  e.preventDefault();
  var ammount = e.target.elements;
  switch (currency.value) {
    case "dollar":
      ammount["amount"].value /= 3.5;
      break;
    case "dinar":
      ammount["amount"].value /= 5;
      break;
  }
};
