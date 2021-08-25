function update(){
   let bill = document.getElementById("yourBill").value;
   let tipPercent = document.getElementById("tipInput").value;
   let split = document.getElementById("splitInput").value;
   console.log({bill, tipPercent, split});
}

let container = document.getElementById('container');
container.addEventListener('input', update);