function solve() {
    const [add, open, inProgress, complete] = Array.from(document.querySelectorAll('section'));

    const taskRef = document.getElementById('task');
    const descriptionRef = document.getElementById('description');
    const dateRef = document.getElementById('date');

    const addBtnRef = document.getElementById('add');
    addBtnRef.addEventListener('click', onClick)

    function onClick(event) {
        event.preventDefault();
        const taskValue = taskRef.value;
        const descriptionValue = descriptionRef.value;
        const dateValue = dateRef.value;

        if (taskValue === '' || descriptionValue == '' || dateValue == '') {
            return
        }

        const article = createArticle(taskValue, descriptionValue, dateValue);
        open.children[1].appendChild(article)

        taskRef.value = '';
        descriptionRef.value = '';
        dateRef.value = '';
    }

    function createArticle(taskValue, descriptionValue, dateValue) {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = taskValue

        const descriptionP = document.createElement("p");
        descriptionP.textContent = `Description: ${descriptionValue}`;

        const dateP = document.createElement("p");
        dateP.textContent = `Due Date: ${dateValue}`;

        const container = document.createElement("div");
        container.classList.add("flex");

        const startButton = createButtons('green', 'Start', onStart);
        container.appendChild(startButton);

        const deleteButton = createButtons('red', 'Delete', onDelete);
        container.appendChild(deleteButton)


        article.appendChild(h3);
        article.appendChild(descriptionP);
        article.appendChild(dateP);
        article.appendChild(container);

        return article
    }

    function createButtons(classes, name, handler) {
        const btn = document.createElement('button');
        btn.classList.add(classes);
        btn.textContent = name;
        btn.addEventListener('click', handler);

        return btn
    }

    function onStart(event) {
        const article = event.currentTarget.parentElement.parentElement;
        const container = event.currentTarget.parentElement;
        container.innerHTML = "";
        let delBtn = createButtons('red', "Delete", onDelete);
        let finishBtn = createButtons('orange', "Finish", onFinish);
        container.appendChild(delBtn);
        container.appendChild(finishBtn)
        inProgress.children[1].appendChild(article);
    }
    function onDelete(event) {
        const article = event.currentTarget.parentElement.parentElement.remove();
    }
    function onFinish(event) {
        const article = event.currentTarget.parentElement.parentElement;
        const container = event.currentTarget.parentElement.remove()
        complete.children[1].appendChild(article)
    }
}