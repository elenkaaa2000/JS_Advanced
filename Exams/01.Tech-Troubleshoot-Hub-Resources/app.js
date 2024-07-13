window.addEventListener('load', solution);

function solution() {

  const employeeRef = document.getElementById('employee');
  const categoryRef = document.getElementById('category');
  const urgencyRef = document.getElementById('urgency');
  const teamRef = document.getElementById('team');
  const descriptionRef = document.getElementById('description');

  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', onClick);

  const previewListRef = document.querySelector('.preview-list')
  const pendingListRef = document.querySelector(".pending-list")
  const resolvedList = document.querySelector('.resolved-list')

  let dataArray = []

  function onClick(event) {

    event.preventDefault()
    const employee = employeeRef.value;
    const category = categoryRef.value;
    const urgency = urgencyRef.value;
    const team = teamRef.value;
    const description = descriptionRef.value;
    dataArray.push(employee);
    dataArray.push(category);
    dataArray.push(urgency);
    dataArray.push(team);
    dataArray.push(description);

    if (!employee || !category || !urgency || !team || !description) {
      return
    }

    const liElement = document.createElement('li');
    liElement.classList.add('problem-content');
    previewListRef.appendChild(liElement);

    const article = createArticle(employee, category, urgency, team, description);
    liElement.appendChild(article);

    const editBtn = createBtn('edit-btn', 'Edit', onEdit);
    liElement.appendChild(editBtn);

    const continueBtn = createBtn('continue-btn', 'Continue', onContinue);
    liElement.appendChild(continueBtn);

    event.currentTarget.setAttribute('disabled', 'disabled');

    employeeRef.value = ''
    categoryRef.value = ''
    urgencyRef.value = ''
    teamRef.value = ''
    descriptionRef.value = ''

  }

  function createArticle(employee, category, urgency, team, description) {
    const article = document.createElement('article')
    const p1 = document.createElement('p');
    p1.textContent = `From: ${employee}`;

    const p2 = document.createElement('p');
    p2.textContent = `Category: ${category}`;

    const p3 = document.createElement('p')
    p3.textContent = `Urgency: ${urgency}`;

    const p4 = document.createElement('p')
    p4.textContent = `Assigned to: ${team}`
    const p5 = document.createElement('p');
    p5.textContent = `Description: ${description}`;

    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    article.appendChild(p5);

    return article
  }

  function createBtn(classes, text, handler) {
    const button = document.createElement('button');
    button.classList.add(classes);
    button.textContent = text;
    button.addEventListener('click', handler);

    return button
  }

  function onEdit(e) {
    employeeRef.value = dataArray[0]
    categoryRef.value = dataArray[1]
    urgencyRef.value = dataArray[2]
    teamRef.value = dataArray[3]
    descriptionRef.value = dataArray[4];

    addBtn.removeAttribute('disabled');
    e.currentTarget.parentElement.remove()
  }

  function onContinue(e) {
const article = e.currentTarget.parentElement.children[0];
e.currentTarget.parentElement.parentElement.remove()
const liElement = document.createElement('li');
liElement.classList.add('problem-content');
pendingListRef.appendChild(liElement);
liElement.appendChild(article);

const resolveBtn = createBtn('resolve-btn', 'Resolved', onResolved);
liElement.appendChild(resolveBtn)
  }


  function onResolved(e){
    const article = e.currentTarget.parentElement.children[0];
    e.currentTarget.parentElement.parentElement.remove()
    const liElement = document.createElement('li');
    liElement.classList.add('problem-content');
    resolvedList.appendChild(liElement);
    liElement.appendChild(article);
    
    const clearBtn = createBtn('clear-btn', 'Clear', onClear);
    liElement.appendChild(clearBtn)
  }

  function onClear(e){
    e.currentTarget.parentElement.remove()
  }
}




