window.addEventListener('load', solve);

function solve() {
    const modelRef = document.getElementById('model');
    const yearRef = document.getElementById('year');
    const descriptionRef = document.getElementById('description');
    const priceRef = document.getElementById('price');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onAdd);

    const furnitureListRef = document.getElementById('furniture-list');
    const totalPriceRef = document.querySelector('.total-price')

    function onAdd(e) {
        e.preventDefault();

        const model = modelRef.value
        const year = yearRef.value
        const description = descriptionRef.value
        const price = priceRef.value

        if (!model || !year || !description || !price || price <= 0 || year <= 0) {
            return
        }

        const tableRow1 = document.createElement('tr');
        tableRow1.classList.add('info');
        const tdModel = document.createElement('td');
        tdModel.textContent = model;
        tableRow1.appendChild(tdModel);

        const tdPrice = document.createElement('td');
        tdPrice.textContent = Number(price).toFixed(2);
        tableRow1.appendChild(tdPrice);

        const tdButtons = document.createElement('td');
        const moreBtn = document.createElement('button');
        moreBtn.classList.add('moreBtn');
        moreBtn.textContent = 'More Info';
        moreBtn.addEventListener('click', onMore);
        tdButtons.appendChild(moreBtn);

        const buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';
        buyBtn.addEventListener('click', onBuy);
        tdButtons.appendChild(buyBtn);

        tableRow1.appendChild(tdButtons);

        furnitureListRef.appendChild(tableRow1);

        const tableRow2 = document.createElement('tr');
        tableRow2.classList.add('hide');

        const tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year}`;
        tableRow2.appendChild(tdYear);

        const tdDesc = document.createElement('td');
        tdDesc.setAttribute('colspan', '3');
        tdDesc.textContent = `Description: ${description}`;
        tableRow2.appendChild(tdDesc);

        furnitureListRef.appendChild(tableRow2);

        modelRef.value = '';
        yearRef.value = '';
        descriptionRef.value = '';
        priceRef.value = '';

        function onMore(e) {
            if (e.currentTarget.textContent === 'More Info') {
                e.currentTarget.textContent = 'Less Info';
                tableRow2.setAttribute('style', 'display');
                tableRow2.style.display = 'contents'
            } else if (e.currentTarget.textContent === 'Less Info') {
                e.currentTarget.textContent = 'More Info';
                tableRow2.setAttribute('style', 'display');
                tableRow2.style.display = 'none'
            }
        }

        function onBuy(e) {
            totalPriceRef.textContent = (Number(totalPriceRef.textContent) + Number(price)).toFixed(2)
            e.currentTarget.parentElement.parentElement.parentElement.remove();

        }
    }
}
