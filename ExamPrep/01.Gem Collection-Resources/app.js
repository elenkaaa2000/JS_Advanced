window.addEventListener("load", solve);

function solve() {
    const gemNameRef = document.getElementById('gem-name');
    const colorRef = document.getElementById('color');
    const priceRef = document.getElementById('price');
    const caratsRef = document.getElementById('carats');
    const typeRef = document.getElementById('type');

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', onClick);
    const previewListRef = document.getElementById('preview-list');
    const collectionRef = document.getElementById('collection')

    const dataCollector = []
    function onClick(e) {
        const name = gemNameRef.value
        const color = caratsRef.value
        const price = Number(priceRef.value);
        const carats = Number(priceRef.value);
        const type = typeRef.value;
        dataCollector.push(name);
        dataCollector.push(color);
        dataCollector.push(price);
        dataCollector.push(carats);
        dataCollector.push(type)


        if (!name || !color || !price || !carats || !type) {
            return
        }

        const liElement = document.createElement('li');
        liElement.classList.add('gem-info')
        previewListRef.appendChild(liElement);

        const article = createArticle(name, color, price, carats, type);
        liElement.appendChild(article);

        const saveBtn = createBtn('save-btn', 'Save to Collection', onSave);
        liElement.appendChild(saveBtn)

        const editBtn = createBtn('edit-btn', 'Edit Information', onEdit);
        liElement.appendChild(editBtn);

        const cancelBtn = createBtn('cancel-btn', 'Cancel', onCancel);
        liElement.appendChild(cancelBtn);

        e.currentTarget.setAttribute('disabled', 'disabled');

        gemNameRef.value = '';
        colorRef.value = '';
        caratsRef.value = '';
        priceRef.value = '';
        typeRef.value = ''


    }

    function createArticle(name, color, price, carats, type) {
        const article = document.createElement('article')
        const h4 = document.createElement('h4');
        h4.textContent = name;

        const pColor = document.createElement('p');
        pColor.textContent = `Color: ${color}`;

        const pCarats = document.createElement('p');
        pCarats.textContent = `Carats: ${carats}`;

        const pPrice = document.createElement('p');
        pPrice.textContent = `Price: ${price}`

        const pType = document.createElement('p');
        pType.textContent = `Type: ${type}`;

        article.appendChild(h4);
        article.appendChild(pColor);
        article.appendChild(pCarats);
        article.appendChild(pPrice);
        article.appendChild(pType);

        return article
    }

    function createBtn(classes, text, handler) {
        const btn = document.createElement('button');
        btn.classList.add(classes);
        btn.textContent = text;
        btn.addEventListener('click', handler);

        return btn
    }

    function onSave(e) {
        const liElement = document.createElement('li');
        const pInfo = document.createElement('p');
        pInfo.classList.add('collection-item');
        pInfo.textContent = `${dataCollector[0]} - Color: ${dataCollector[1]}/ Carats: ${dataCollector[3]}/ Price: ${dataCollector[2]}/ Type: ${dataCollector[4]}`;
        collectionRef.appendChild(liElement);
        liElement.appendChild(pInfo)

        e.currentTarget.parentElement.remove()

    }

    function onEdit(e) {
        gemNameRef.value = dataCollector[0]
        colorRef.value = dataCollector[1]
        caratsRef.value = dataCollector[3]
        priceRef.value = dataCollector[2]
        typeRef.value = dataCollector[4]

        addBtn.removeAttribute('disabled')
        e.currentTarget.parentElement.remove()
    }

    function onCancel(e) {
        e.currentTarget.parentElement.remove();
        addBtn.removeAttribute('disabled')
    }

}
