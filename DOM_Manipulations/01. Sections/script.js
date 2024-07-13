function create(words) {
   const contentRef = document.getElementById('content');
   createAndAppendDivEl(contentRef);

   function createAndAppendDivEl(root) {

      for (let i = 0; i < words.length; i++) {
         const divEl = document.createElement('div');

         const pEl = document.createElement('p');
         pEl.textContent = words[i];
         pEl.style.display = 'none';

         divEl.appendChild(pEl);

         divEl.addEventListener('click', onClick);
         root.appendChild(divEl)
      }
   }

   function onClick(event) {
      const target = event.currentTarget;
      const children = target.children;
      const p = children[0];
      p.style.display = 'block'
   }
}