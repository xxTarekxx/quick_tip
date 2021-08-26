function currency(value){
   value = value.toFixed(2);
   return "$ " + value;
}

function update(){
   let bill = Number(document.getElementById("yourBill").value);
   let tipPercent = document.getElementById("tipInput").value;
   let split = document.getElementById("splitInput").value;
   
   let tipValue = bill * (tipPercent / 100);
   let tipEach = tipValue / split;
   let newBillEach = (bill + tipValue) / split;
   let billEach = bill / split;
   
   document.getElementById('tipPercent').innerHTML = "%" + tipPercent;
   document.getElementById('tipValue').innerHTML = currency(tipValue);
   document.getElementById('totalWithTip').innerHTML = currency(bill + tipValue);
   document.getElementById('splitValue').innerHTML = splitInput.value + " Person(s)";
   document.getElementById('billEach').innerHTML = currency(billEach);
   document.getElementById('tipEach').innerHTML = currency(tipEach);
}

let container = document.getElementById('container');
container.addEventListener('input', update);