window.addEventListener('load', solve);

function solve() {
    const firstNameRef = document.getElementById('first-name');
    const lastNameRef = document.getElementById('last-name');
    const peopleCountRef = document.getElementById('people-count');
    const dateRef = document.getElementById('from-date');
    const daysRef = document.getElementById('days-count');
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onClick);
    const ticketInfoList = document.querySelector('.ticket-info-list');
    const confirmTicket = document.querySelector('.confirm-ticket');
    const mainElRef = document.getElementById('main')
    const bodyRef = document.getElementById('body')


    function onClick(e) {
        e.preventDefault();
        const firstName = firstNameRef.value
        const lastName = lastNameRef.value
        const peopleCount = peopleCountRef.value
        const date = dateRef.value
        const days = daysRef.value

        if (!firstName || !lastName || !peopleCount || !date || !days) {
            return
        }

        const liElement = document.createElement('li');
        liElement.classList.add('ticket');
        ticketInfoList.appendChild(liElement);

        const article = document.createElement('article');
        liElement.appendChild(article);

        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`;
        article.appendChild(h3);

        const pDate = document.createElement('p');
        pDate.textContent = `From date: ${date}`;
        article.appendChild(pDate);

        const pDaysCount = document.createElement('p');
        pDaysCount.textContent = `For ${days} days`;
        article.appendChild(pDaysCount);

        const pPeopleCount = document.createElement('p');
        pPeopleCount.textContent = `For ${peopleCount} people`
        article.appendChild(pPeopleCount);

        e.currentTarget.setAttribute('disabled', 'disabled');
        firstNameRef.value = ''
        lastNameRef.value = ''
        peopleCountRef.value = ''
        dateRef.value = ''
        daysRef.value = ''

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', onEdit);
        liElement.appendChild(editBtn);

        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', onCont);
        liElement.appendChild(continueBtn);

        function onEdit(e) {
            firstNameRef.value = firstName
            lastNameRef.value = lastName
            peopleCountRef.value = peopleCount
            dateRef.value = date
            daysRef.value = days

            nextBtn.removeAttribute('disabled');

            e.currentTarget.parentElement.remove();
        }

        function onCont(e) {
            const continueArticle = article;
            const liEl = document.createElement('li');
            liEl.classList.add('ticket-content')
            confirmTicket.appendChild(liEl);
            liEl.appendChild(continueArticle);
            const confirmBtn = document.createElement('button');
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.textContent = 'Confirm';
            liEl.appendChild(confirmBtn)
            confirmBtn.addEventListener('click', onConfirm);

            const cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';
            liEl.appendChild(cancelBtn)
            cancelBtn.addEventListener('click', onCancel);


            e.currentTarget.parentElement.remove()

        }

        function onConfirm(e) {
            mainElRef.remove()

            const h1 = document.createElement('h1');
            h1.setAttribute('id', 'thank-you');
            h1.textContent = "Thank you, have a nice day!"

            const backBtn = document.createElement('button');
            backBtn.setAttribute('id', 'back-btn');
            backBtn.textContent = 'Back';
            backBtn.addEventListener('click', onBack)

            bodyRef.appendChild(h1);
            bodyRef.appendChild(backBtn)
           
        }

        function onCancel(e) {
            nextBtn.removeAttribute('disabled')
            e.currentTarget.parentElement.remove()

        }

        function onBack(){
            location.reload()
        }
    }
}




