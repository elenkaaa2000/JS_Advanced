function getArticleGenerator(articles) {
  
   const content = document.getElementById('content');
   outCopy = articles.slice();

   return function showNext(){
    if(outCopy[0]!==undefined){
       

        const article = document.createElement('article');
        nextArticle = outCopy.shift();
        article.textContent = nextArticle
        content.appendChild(article)
    }
    return showNext
   }
}

