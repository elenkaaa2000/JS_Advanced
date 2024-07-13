window.addEventListener('load', solve);

function solve() {
    const nameR = document.getElementById('name');
    const emailR = document.getElementById('email');
    const contactR = document.getElementById('contact-number');
    const classTypeR = document.getElementById('class-type');
    const classTimeR = document.getElementById('class-time');
    const nextBtnR = document.getElementById('next-btn');
    nextBtnR.addEventListener('click', onClick);
    const classInfo = document.querySelector('.class-info');
    const dataCollector = {
        name: undefined,
        email: undefined,
        contact: undefined,
        classType: undefined,
        classTime: undefined
    }

    const confirmClassR = document.querySelector('.confirm-class');
    const mainElementR = document.getElementById('main')
    const bodyRef = document.getElementById('body')

    function onClick(e) {
        e.preventDefault();

        const name = nameR.value
        const email = emailR.value
        const contact = contactR.value
        const classType = classTypeR.value
        const classTime = classTimeR.value

        dataCollector.name = name;
        dataCollector.email = email;
        dataCollector.contact = contact;
        dataCollector.classType = classType;
        dataCollector.classTime = classTime


        if (!name || !email || !contact || !classTime || !classType) {
            return
        }

        const liElement = document.createElement('li');
        liElement.classList.add('info-item');
        classInfo.appendChild(liElement);

        const article = createArticle(name, email, contact, classType, classTime);
        liElement.appendChild(article);

        const editBtn = createBtn('edit-btn', 'Edit', onEdit);
        const continueBtn = createBtn('continue-btn', 'Continue', onCont);

        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        nameR.value = '';
        emailR.value = '';
        contactR.value = '';
        classTypeR.value = '';
        classTimeR.value = '';
        nextBtnR.setAttribute('disabled', 'disabled');

    }

    function createArticle(name, email, contact, classType, classTime) {
        const article = document.createElement('article');
        article.classList.add('personal-info');

        const nameP = document.createElement('p');
        nameP.textContent = name;
        article.appendChild(nameP);

        const emailP = document.createElement('p');
        emailP.textContent = email;
        article.appendChild(emailP);

        const contactP = document.createElement('p');
        contactP.textContent = contact;
        article.appendChild(contactP);

        const classTypeP = document.createElement('p');
        classTypeP.textContent = classType;
        article.appendChild(classTypeP);

        const classTimeP = document.createElement('p');
        classTimeP.textContent = classTime;
        article.appendChild(classTimeP);

        return article
    }

    function createBtn(classes, text, handler) {
        const btn = document.createElement('btn');
        btn.classList.add(classes);
        btn.textContent = text;
        btn.addEventListener('click', handler);
        return btn

    }

    function onEdit(e) {
        nameR.value = dataCollector.name
        emailR.value = dataCollector.email
        contactR.value = dataCollector.contact
        classTypeR.value = dataCollector.classType
        classTimeR.value = dataCollector.classTime
        nextBtnR.removeAttribute('disabled');
        const lieElement = e.currentTarget.parentElement;
        lieElement.remove()
    }

    function onCont(e) {
        const article = e.currentTarget.parentElement.children[0];
        const lieElement = e.currentTarget.parentElement;
        lieElement.remove();


        const li = document.createElement('li');
        li.classList.add('continue-info');
        confirmClassR.appendChild(li);
        li.appendChild(article);


        const cancelBtn = createBtn('cancel-btn', 'Cancel', onCancel);
        const confirmBtn = createBtn('confirm-btn', 'Confirm', onConfirm);
        li.appendChild(cancelBtn);
        li.appendChild(confirmBtn);

    }

    function onCancel(e) {
        e.currentTarget.parentElement.remove();
        nextBtnR.removeAttribute('disabled')
    }

    function onConfirm(e) {
        mainElementR.remove();
        const h1 = document.createElement('h1');
        h1.setAttribute('id', 'thank-you')
        h1.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!"
        bodyRef.appendChild(h1);
        const doneBtn = document.createElement('button');
        doneBtn.setAttribute('id', 'done-btn');
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', onDone)
        bodyRef.appendChild(doneBtn)
    }

    function onDone(){
        location.reload();
    }


}
