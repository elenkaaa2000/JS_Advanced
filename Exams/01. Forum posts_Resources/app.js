window.addEventListener("load", solve);

function solve() {
  const titleRef = document.getElementById('post-title');
  const categoryRef = document.getElementById('post-category');
  const contentRef = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', onPublish);
  const reviewListRef = document.getElementById('review-list');
  const publishedListRef = document.getElementById('published-list');
  const clearBtn = document.getElementById('clear-btn')


  function onPublish(e) {
    e.preventDefault();

    const title = titleRef.value
    const category = categoryRef.value
    const content = contentRef.value

    if (!title || !category || !content) {
      return
    }

    const liElement = document.createElement('li');
    liElement.classList.add('rpost');
    reviewListRef.appendChild(liElement);

    const article = document.createElement("article");
    liElement.appendChild(article);

    const h4 = document.createElement('h4');
    h4.textContent = title;
    article.appendChild(h4);

    const categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${category}`;
    article.appendChild(categoryP);

    const contentP = document.createElement('p');
    contentP.textContent = `Content: ${content}`;
    article.appendChild(contentP);

    const editBtn = createBtn('action-btn edit', 'Edit', onEdit);
    liElement.appendChild(editBtn);

    const approveBtn = createBtn('action-btn approve', 'Approve', onApprove);
    liElement.appendChild(approveBtn);
   

    titleRef.value = '';
    contentRef.value = '';
    categoryRef.value = '';

    function onEdit(e) {
      titleRef.value = title
      contentRef.value = content
      categoryRef.value = category

      e.currentTarget.parentElement.remove()
    }

    function onApprove(e) {
      const approveArticle = article;
      const li = document.createElement('li');
      li.classList.add('rpost');
      li.appendChild(approveArticle);
      publishedListRef.appendChild(li);

      e.currentTarget.parentElement.remove()
    }

    clearBtn.addEventListener('click', (e) => {
      publishedListRef.textContent = ''

    })

  }

  function createBtn(classes, text, handler) {
    const btn = document.createElement('button');
    btn.setAttribute('class', classes)
    btn.textContent = text;
    btn.addEventListener('click', handler);
    return btn
  }



}
