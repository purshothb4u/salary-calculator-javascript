document.getElementById("ppfForm").addEventListener("submit", function (event) {
  event.preventDefault(); 
});

function calculate() {
  let ctcElement = Number(document.getElementById("ctc").value);
  let bonusElement = Number(document.getElementById("bonus").value);
  let taxElement = Number(document.getElementById("tax").value);
  let epfElement1 = Number(document.getElementById("epf1").value);
  let epfElement2 = Number(document.getElementById("epf2").value);
  let insuranceElement = Number(document.getElementById("insurance").value);
  let deductElement = Number(document.getElementById("deduct").value);

  let grossElement = document.getElementById("gross");
  let pBonusElement = document.getElementById("pBonus");
  let mDeductElement = document.getElementById("mDeduct");
  let aDeductElement = document.getElementById("aDeduct");
  let mthElement = document.getElementById("mth");
  let athElement = document.getElementById("ath");

  let bonus = (ctcElement * bonusElement)/100;
  let gross = ctcElement - bonus;
  let monthDeduct = taxElement + epfElement1 + epfElement2 + insuranceElement + deductElement + (bonus/12);
  let annualDeduct = monthDeduct * 12;
  let monthTakeHome = (ctcElement / 12) - monthDeduct;
  let annualTakeHome = monthTakeHome * 12;

  grossElement.innerHTML = gross.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  });
  pBonusElement.innerHTML = bonus.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  });
  mDeductElement.innerHTML = monthDeduct.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  });
  aDeductElement.innerHTML = annualDeduct.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  });
  mthElement.innerHTML = monthTakeHome.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  });
  athElement.innerHTML = annualTakeHome.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  });
  }

function clearValues() {
  document.getElementById("gross").innerHTML = "";
  document.getElementById("pBonus").innerHTML = "";
  document.getElementById("mDeduct").innerHTML = "";
  document.getElementById("aDeduct").innerHTML = "";
  document.getElementById("mth").innerHTML = "";
  document.getElementById("ath").innerHTML = ""; 
}
