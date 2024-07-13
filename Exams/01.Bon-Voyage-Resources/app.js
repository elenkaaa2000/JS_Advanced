window.addEventListener('load', solve);

function solve() {
    const firstNameRef = document.getElementById('first-name');
    const lastNameRef = document.getElementById('last-name');
    const fromDateRef = document.getElementById('from-date');
    const toDateRef = document.getElementById('to-date');
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNext);

    const infoListRef = document.querySelector('.info-list');
    const confirmListRef = document.querySelector('.confirm-list');
    const statusRef = document.getElementById('status');

    function onNext(e) {
        e.preventDefault();
        const firstName = firstNameRef.value
        const lastName = lastNameRef.value
        const fromDate = fromDateRef.value
        const toDate = toDateRef.value

        if (!firstName || !lastName || !fromDate || !toDate || (toDate < fromDate)) {
            return
        }

        const liElement = document.createElement('li');
        liElement.classList.add('vacation-content');
        infoListRef.appendChild(liElement);

        const article = document.createElement('article');
        liElement.appendChild(article);

        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`;
        article.appendChild(h3);

        const pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${fromDate}`;
        article.appendChild(pFromDate);

        const pToDate = document.createElement('p');
        pToDate.textContent = `To date: ${toDate}`;
        article.appendChild(pToDate);

        const editBtn = createButton('edit-btn', 'Edit', onEdit);
        liElement.appendChild(editBtn);

        const continueBtn = createButton('continue-btn', 'Continue', onContinue);
        liElement.appendChild(continueBtn);

        firstNameRef.value = '';
        lastNameRef.value = '';
        fromDateRef.value = '';
        toDateRef.value = '';

        e.currentTarget.setAttribute('disabled', 'disabled');


        function onEdit(e) {
            firstNameRef.value = firstName;
            lastNameRef.value = lastName;
            fromDateRef.value = fromDate;
            toDateRef.value = toDate;
            nextBtn.removeAttribute('disabled');

            e.currentTarget.parentElement.remove()
        }

        function onContinue(e) {
            const continueArticle = article;
            const liEl = document.createElement('li');
            liEl.classList.add('vacation-content');
            confirmListRef.appendChild(liEl);
            liEl.appendChild(continueArticle);

            const confirmBtn = createButton('confirm-btn', 'Confirm', onConfirm);
            liEl.appendChild(confirmBtn);

            const cancelBtn = createButton('cancel-btn', 'Cancel', onCancel);
            liEl.appendChild(cancelBtn);

            e.currentTarget.parentElement.remove()

        }

        function onConfirm(e) {
            nextBtn.removeAttribute('disabled');
            statusRef.classList.add('vacation-confirmed');
            statusRef.textContent = "Vacation Requested";
            e.currentTarget.parentElement.remove()

        }

        function onCancel(e) {
            nextBtn.removeAttribute('disabled');
            statusRef.classList.add('vacation-cancelled');
            statusRef.textContent = "Cancelled Vacation";
            e.currentTarget.parentElement.remove()
        }

        statusRef.addEventListener('click', (e)=>{
            location.reload()
        })

    }

    function createButton(classes, text, handler) {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.classList.add(classes);
        btn.addEventListener('click', handler);
        return btn
    }
}




