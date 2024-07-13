window.addEventListener("load", solve);

function solve() {
  const makeRef = document.getElementById('make');
  const modelRef = document.getElementById('model');
  const yearRef = document.getElementById('year');
  const fuelRef = document.getElementById('fuel');
  const originalCostRef = document.getElementById('original-cost');
  const sellinfPriceRef = document.getElementById('selling-price');
  const publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', onPublish);

  const tableRef = document.getElementById('table-body');
  const carsListRef = document.getElementById('cars-list');
  const profitRef = document.getElementById('profit');


  function onPublish(e) {
    e.preventDefault();

    const make = makeRef.value
    const model = modelRef.value
    const year = yearRef.value
    const fuel = fuelRef.value
    const originalCost = originalCostRef.value
    const sellingPrice = sellinfPriceRef.value

    if (!make || !model || !year || !fuel || !originalCost || !sellingPrice || (originalCost > sellingPrice)) {
      return
    }

    const tr = document.createElement('tr');
    tr.classList.add('row');
    tableRef.appendChild(tr);

    const tdMark = document.createElement('td');
    tdMark.textContent = make;
    tr.appendChild(tdMark);
    const tdModel = document.createElement('td');
    tdModel.textContent = model;
    tr.appendChild(tdModel);
    const tdYear = document.createElement('td');
    tdYear.textContent = year;
    tr.appendChild(tdYear);
    const tdFuel = document.createElement('td');
    tdFuel.textContent = fuel;
    tr.appendChild(tdFuel);
    const tdOriginalPrice = document.createElement('td');
    tdOriginalPrice.textContent = originalCost;
    tr.appendChild(tdOriginalPrice);
    const tdSellingPrice = document.createElement('td');
    tdSellingPrice.textContent = sellingPrice;
    tr.appendChild(tdSellingPrice);

    const tdButtons = document.createElement('td');
    tr.appendChild(tdButtons)
    const editBtn = createButtons('action-btn edit', 'Edit', onEdit)
    tdButtons.appendChild(editBtn);

    const sellBtn = createButtons("action-btn sell", 'Sell', onSell);
    tdButtons.appendChild(sellBtn);

    makeRef.value = '';
    modelRef.value = '';
    yearRef.value = '';
    fuelRef.value = '';
    originalCostRef.value = '';
    sellinfPriceRef.value = '';

    function onEdit(e) {
      makeRef.value = make;
      modelRef.value = model;
      yearRef.value = year;
      fuelRef.value = fuel;
      originalCostRef.value = originalCost;
      sellinfPriceRef.value = sellingPrice;

      e.currentTarget.parentElement.parentElement.remove()
    }

    function onSell(e) {
      const liElement = document.createElement('li');
      liElement.classList.add('each-list');

      const spanModel = document.createElement('span');
      spanModel.textContent = `${make} ${model}`;
      liElement.appendChild(spanModel);

      const spanYear = document.createElement('span');
      spanYear.textContent = year;
      liElement.appendChild(spanYear);

      const spanDifference = document.createElement('span');
      let difference = Number(sellingPrice) - Number(originalCost);
      spanDifference.textContent = difference;
      liElement.appendChild(spanDifference);

      carsListRef.appendChild(liElement);

      profitRef.textContent = (Number(profitRef.textContent) + difference).toFixed(2)

      e.currentTarget.parentElement.parentElement.remove()
    }

  }


  function createButtons(classes, text, handler) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.setAttribute('class', classes)
    btn.addEventListener('click', handler);
    return btn
  }

}
