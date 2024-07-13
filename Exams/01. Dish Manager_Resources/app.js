window.addEventListener("load", solve);

function solve() {
  const fNameRef = document.getElementById('first-name');
  const lastNameRef = document.getElementById('last-name');
  const ageRef = document.getElementById('age');
  const genderRef = document.getElementById('genderSelect');
  const descriptionRef = document.getElementById('task');
  const submitBtn = document.getElementById('form-btn');
  submitBtn.addEventListener('click', onSubmit);

  const inProgressElRef = document.getElementById('in-progress');
  const progressCountRef = document.getElementById('progress-count');
  const finishedElRef = document.getElementById('finished');
  const clearBtn = document.getElementById('clear-btn');
  

  function onSubmit(e) {
    const first = fNameRef.value
    const last = lastNameRef.value
    const age = ageRef.value
    const gender = genderRef.value
    const description = descriptionRef.value

    if (!first || !last || !age || !gender || !description) {
      return
    }
    const liElement = document.createElement('li');
    liElement.classList.add('each-line');

    inProgressElRef.appendChild(liElement);

    const article = document.createElement('article');
    liElement.appendChild(article);

    const h4 = document.createElement('h4');
    h4.textContent = `${first} ${last}`;
    article.appendChild(h4);

    const p1 = document.createElement('p');
    p1.textContent = `${gender}, ${age}`;
    article.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = `Dish description: ${description}`;
    article.appendChild(p2);

    const editBtn = createBtn('edit-btn', 'Edit', onEdit);
    liElement.appendChild(editBtn);

    const completeBtn = createBtn('complete-btn', 'Mark as complete', onComplete);
    liElement.appendChild(completeBtn)

    progressCountRef.textContent = Number(progressCountRef.textContent) + 1;

    fNameRef.value = '';
    lastNameRef.value = '';
    ageRef.value = '';
    genderRef.value = '';
    descriptionRef.value = '';

    function onEdit(e) {
      fNameRef.value = first;
      lastNameRef.value = last
      ageRef.value = age
      genderRef.value = gender
      descriptionRef.value = description;
      progressCountRef.textContent = Number(progressCountRef.textContent) - 1;
      
      e.currentTarget.parentElement.remove();
      
    }

    function onComplete(e) {
      const liElement = document.createElement('li');
      liElement.classList.add('each-line');
  
      finishedElRef.appendChild(liElement);

      const completeArticle = article;
      liElement.appendChild(completeArticle);
      progressCountRef.textContent = Number(progressCountRef.textContent) - 1;

      e.currentTarget.parentElement.remove();

    }
    clearBtn.addEventListener('click', (e)=>{
      finishedElRef.textContent = ''
    })

  }

  function createBtn(classes, text, handler) {
    const btn = document.createElement('button');
    btn.classList.add(classes);
    btn.textContent = text;
    btn.addEventListener('click', handler);
    return btn
  }
}
