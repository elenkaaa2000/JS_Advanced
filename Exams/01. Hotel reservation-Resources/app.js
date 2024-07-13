window.addEventListener('load', solve);

function solve() {
    const fNameRef = document.getElementById('first-name');
    const lNameR = document.getElementById('last-name');
    const dateInRef = document.getElementById('date-in');
    const dateOutRef = document.getElementById('date-out');
    const peopleCountR = document.getElementById('people-count');
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onClick);

    const infoListRef = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const h1Ref = document.getElementById('verification');

    function onClick(e) {
        e.preventDefault();
        const firstName = fNameRef.value;
        const lastName = lNameR.value;
        const datein = dateInRef.value;
        const dateOut = dateOutRef.value;
        const peopleCount = peopleCountR.value;

        if (!firstName || !lastName || !datein || !dateOut || !peopleCount || (datein > dateOut)) {
            return
        }

        const liElement = document.createElement('li');
        liElement.classList.add('reservation-content');
        infoListRef.appendChild(liElement);

        const article = document.createElement('article');
        liElement.appendChild(article);

        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`;
        article.appendChild(h3);

        const dateInP = document.createElement('p');
        dateInP.textContent = `From date: ${datein}`;
        article.appendChild(dateInP);

        const dateOutP = document.createElement('p');
        dateOutP.textContent = `To date: ${dateOut}`;
        article.appendChild(dateOutP);

        const peopleCountP = document.createElement('p');
        peopleCountP.textContent = `For ${peopleCount} people`;
        article.appendChild(peopleCountP);

        const editBtn = createBtn('edit-btn', 'Edit', onEdit);
        liElement.appendChild(editBtn);
        const continueBtn = createBtn('continue-btn', 'Continue', onContinue);
        liElement.appendChild(continueBtn);

        fNameRef.value = ''
        lNameR.value = ''
        dateInRef.value = ''
        dateOutRef.value = ''
        peopleCountR.value = '';
        nextBtn.setAttribute('disabled', 'disabled');

        function onEdit(e) {
            fNameRef.value = firstName;
            lNameR.value = lastName;
            dateInRef.value = datein;
            dateOutRef.value = dateOut;
            peopleCountR.value = peopleCount;

            nextBtn.removeAttribute('disabled');
            e.currentTarget.parentElement.remove()
        }

        function onContinue(e) {
            const continueArticle = article;
            const liEl = document.createElement('li');
            liEl.classList.add('reservation-content');
            confirmList.appendChild(liEl);
            liEl.appendChild(continueArticle);
            const confirmBtn = createBtn('confirm-btn', "Confirm", onConfirm);
            liEl.appendChild(confirmBtn);
            const cancelBtn = createBtn('cancel-btn', 'Cancel', onCancel);
            liEl.appendChild(cancelBtn);

            e.currentTarget.parentElement.remove()

        }

        function onConfirm(e) {
            h1Ref.classList.add('reservation-confirmed');
            h1Ref.textContent = 'Confirmed.'

            nextBtn.removeAttribute('disabled');
            e.currentTarget.parentElement.remove()
        }

        function onCancel(e){
            h1Ref.classList.add('reservation-cancelled');
            h1Ref.textContent = 'Cancelled.'

            nextBtn.removeAttribute('disabled');
            e.currentTarget.parentElement.remove()
        }


    }

    function createBtn(classes, text, handler) {
        const btn = document.createElement('button');
        btn.classList.add(classes);
        btn.textContent = text;
        btn.addEventListener('click', handler);
        return btn
    }

}





