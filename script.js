"use strict";

// ! Setting Variables for Element Selectors
const inputRevenue = document.querySelector("#revenue");
const inputExpenses = document.querySelector("#expenses");
const inputOHRate = document.querySelector("#oh-rate");
const calcButton = document.querySelector(".calculate");
const gpResult = document.querySelector(".gp-result");
const gmResult = document.querySelector(".gm-result");
const ohExpResult = document.querySelector(".oh-exp-result");
const netProfitResult = document.querySelector(".net-prof-result");
const netMarginResult = document.querySelector(".net-marg-result");
const salesCommResult = document.querySelector(".sc-result");
const pmFeeResult = document.querySelector(".pm-fee-result");
const resetButton = document.querySelector(".reset");

calcButton.addEventListener("click", function (event) {
  event.preventDefault();
  const projectRevenue = inputRevenue.value;
  const totalExpense = inputExpenses.value;
  const ohRate = inputOHRate.value;
  const grossProfit = projectRevenue - totalExpense;
  const grossMargin = grossProfit / projectRevenue;
  const ohExpense = projectRevenue * (ohRate / 100);
  const netProfit = projectRevenue - totalExpense - ohExpense;
  const netMargin = netProfit / projectRevenue;
  const salesCommission = projectRevenue * grossMargin * 0.2;
  const pmFee = netProfit * netMargin;

  gpResult.textContent = `$${grossProfit.toFixed(2)}`;
  gmResult.textContent = `${(grossMargin * 100).toFixed(2)}%`;
  ohExpResult.textContent = `$${ohExpense.toFixed(2)}`;
  netProfitResult.textContent = `$${netProfit.toFixed(2)}`;
  netMarginResult.textContent = `${(netMargin * 100).toFixed(2)}`;
  salesCommResult.textContent = `$${salesCommission.toFixed(2)}`;
  pmFeeResult.textContent = `$${pmFee.toFixed(2)}`;
});