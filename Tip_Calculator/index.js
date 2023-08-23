const btnEl = document.getElementById("calculate")
const billInput = document.getElementById("bill")
const tipEL = document.getElementById("tip")
const totalSpan = document.getElementById("total")

function calculateTotal()
{
   const billValue =  billInput.value;
   const tipValue = tipEL.value;
   const totalValue = billValue *(1+tipValue/100);
   totalSpan.innerText = totalValue.toFixed(2) +`₹`;

}

btnEl.addEventListener("click",calculateTotal)

