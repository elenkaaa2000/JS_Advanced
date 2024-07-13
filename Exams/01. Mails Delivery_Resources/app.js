function solve() {
    const recipientRef = document.getElementById('recipientName');
    const titleRef = document.getElementById('title');
    const messageRef = document.getElementById('message');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onAdd);
    const resetBtn = document.getElementById('reset');


    const listRef = document.getElementById('list');
    const sentListRef = document.querySelector('.sent-list');
    const deleteListRef = document.querySelector('.delete-list')



    function onAdd(e) {
        e.preventDefault();
        const recipient = recipientRef.value
        const title = titleRef.value
        const message = messageRef.value

        if (!recipient || !title || !message) {
            return
        }

        const liElement = document.createElement('li');
        listRef.appendChild(liElement);

        const h4T = document.createElement('h4');
        h4T.textContent = `Title: ${title}`;
        liElement.appendChild(h4T);

        const h4R = document.createElement('h4');
        h4R.textContent = `Recipient Name: ${recipient}`;
        liElement.appendChild(h4R);

        const span = document.createElement('span');
        span.textContent = message;
        liElement.appendChild(span);

        const divEl = document.createElement('div');
        divEl.setAttribute('id', 'list-action');
        liElement.appendChild(divEl);

        const sendBtn = createButtons('submit', 'send', 'Send', onSend);
        divEl.appendChild(sendBtn);

        const deleteBtn = createButtons('submit', 'delete', 'Delete', onDelete);
        divEl.appendChild(deleteBtn);

        recipientRef.value = '';
        titleRef.value = '';
        messageRef.value = ''


        function onSend(e) {
            const liEl = document.createElement('li');
            sentListRef.appendChild(liEl);

            const spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipient}`
            liEl.appendChild(spanTo);
            const spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`
            liEl.appendChild(spanTitle);

            const div = document.createElement('div');
            div.setAttribute('class', 'btn');
            liEl.appendChild(div);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.setAttribute('type', 'submit');
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', onFinalDelete);
            div.appendChild(deleteButton)

            e.currentTarget.parentElement.parentElement.remove()
        }

        function onDelete(e) {
            const deleteLiElement = document.createElement('li');
            deleteListRef.appendChild(deleteLiElement);
            const spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipient}`
            deleteLiElement.appendChild(spanTo);
            const spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`
            deleteLiElement.appendChild(spanTitle);

            e.currentTarget.parentElement.parentElement.remove()
        }

        function onFinalDelete(e) {
            const deleteLiElement = document.createElement('li');
            deleteListRef.appendChild(deleteLiElement);
            const spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipient}`
            deleteLiElement.appendChild(spanTo);
            const spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`
            deleteLiElement.appendChild(spanTitle);
            e.currentTarget.parentElement.parentElement.remove()
        }

    }
    resetBtn.addEventListener('click', (e) => {
        recipientRef.value = '';
        titleRef.value = '';
        messageRef.value = ''
    })

    function createButtons(typeText, idText, text, handler) {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.setAttribute('type', typeText);
        btn.setAttribute('id', idText);
        btn.addEventListener('click', handler);
        return btn
    }

}
solve()