function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
const [generateTextArea, buyTextArea] = document.querySelectorAll('textarea');
const tableRef = document.querySelector('.table tbody')

generateBtn.addEventListener('click', generateProducts);
  buyBtn.addEventListener('click', buyProducts);

  function generateProducts(event) {
    if (!generateTextArea) {
      return;
    }
    let inputText = JSON.parse(generateTextArea.value);

    for (let el of inputText) {
      const tableRow = createTableRow(el);
      tableRef.appendChild(tableRow)
    }

    generateTextArea.value = "";
  }

  function createTableRow(data) {
    const tr = document.createElement('tr');
    tr.innerHTML = "<td>"+
    `<img src = ${data.img}>` +
    "</td>" + 
    "<td>" +
    `<p>${data.name}</p>`+
    "</td>"+
    "<td>"+
    `<p>${data.price}</p>` +
    "</td>"+
    "<td>"+
    `<p>${data.decFactor}</p>`+
    "</td>"+
    "<td>" +
    `<input type = "checkbox">`+
 "</td>"
 
 
    return tr;
  }



  function buyProducts(event) {
    
    const checkBoxes = Array.from(document.querySelectorAll('input'));
    const items = checkBoxes.filter(x => x.checked);
    const names = [];
    let totalPrice = 0;
    let sumDecFact = 0;

    for (let item of items) {
      const trData = item.parentElement.parentElement;
      const [imgTd, nameTd, priceTd, decFactTd] = trData.children;
      let price = Number(priceTd.children[0].textContent);
      totalPrice += price;

      let decFac = Number(decFactTd.children[0].textContent);
      sumDecFact += decFac;

      const name = nameTd.children[0].textContent;
      names.push(name);

    }
    let avrDecFac = sumDecFact / items.length;

    let resultBuff = '';

    resultBuff = "Bought furniture: " + names.join(', ') + "\n";
    resultBuff += "Total price: " + totalPrice.toFixed(2) + "\n";
    resultBuff += "Average decoration factor: " + avrDecFac;

    buyTextArea.value = resultBuff
  }
}