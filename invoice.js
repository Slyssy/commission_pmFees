const invoiceDate = document.querySelector(".invoice-date");

const options = { month: "long", day: "numeric", year: "numeric" };
const date = new Date();
const today = date.toLocaleDateString("en-US", options);
console.log(today);

// # Adding a the date to the date field on the invoice.
invoiceDate.textContent = `${today}`;
