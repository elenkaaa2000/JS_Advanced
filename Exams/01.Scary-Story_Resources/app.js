window.addEventListener("load", solve);

function solve() {
  const firstNameRef = document.getElementById('first-name');
  const lastNameRef = document.getElementById('last-name');
  const ageRef = document.getElementById('age');
  const storyTitleRef = document.getElementById('story-title');
  const genreRef = document.getElementById('genre');
  const storyRef = document.getElementById('story');
  const publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', OnPublish);
  const previewListRef = document.getElementById('preview-list');
  const mainRef = document.getElementById('main');
  const bodyref = document.querySelector('.body')

  function OnPublish(e) {
    e.preventDefault();

    const firstName = firstNameRef.value
    const lastName = lastNameRef.value
    const age = ageRef.value
    const storyTitle = storyTitleRef.value
    const genre = genreRef.value
    const story = storyRef.value

    if (!firstName || !lastName || !age || !storyTitle || !genre || !story) {
      return
    }

    const liElement = document.createElement('li');
    liElement.classList.add('story-info');
    previewListRef.appendChild(liElement);

    const article = document.createElement('article');
    liElement.appendChild(article);

    const h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName} ${lastName}`;
    article.appendChild(h4);

    const pAge = document.createElement('p');
    pAge.textContent = `Age: ${age}`;
    article.appendChild(pAge);

    const pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitle}`;
    article.appendChild(pTitle);

    const pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genre}`;
    article.appendChild(pGenre);

    const pStory = document.createElement('p');
    pStory.textContent = `${story}`;
    article.appendChild(pStory);

    const saveBtn = createBtn('save-btn', 'Save Story', onSave);
    liElement.appendChild(saveBtn);

    const editBtn = createBtn('edit-btn', 'Edit Story', onEdit);
    liElement.appendChild(editBtn);

    const deleteBtn = createBtn('delete-btn', 'Delete Story', onDelete);
    liElement.appendChild(deleteBtn);

    publishBtn.setAttribute('disabled', 'disabled');

    firstNameRef.value = '';
    lastNameRef.value = '';
    ageRef.value = '';
    storyTitleRef.value = '';
    genreRef.value = '';
    storyRef.value = '';

    function onEdit(e) {
      firstNameRef.value = firstName;
      lastNameRef.value = lastName;
      ageRef.value = age;
      storyTitleRef.value = storyTitle;
      genreRef.value = genre;
      storyRef.value = story;
      publishBtn.removeAttribute('disabled')

      e.currentTarget.parentElement.remove()
    }

    function onSave(e) {
      mainRef.remove();
      const newMainElement = document.createElement('div');
      newMainElement.setAttribute('id', 'main');
      bodyref.appendChild(newMainElement)
      const h1 = document.createElement('h1');
      h1.textContent = "Your scary story is saved!"
      newMainElement.appendChild(h1)
    }

    function onDelete(e) {
      publishBtn.removeAttribute('disabled')
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
