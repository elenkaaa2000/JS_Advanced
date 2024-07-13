function lockedProfile() {
   const showMoreButtonsRef = document.querySelectorAll('div button');
   
   for(let button of showMoreButtonsRef){
    button.addEventListener('click', onClick)
    
   }

   function onClick(event){   
    const divChildren = Array.from(event.target.parentElement.children)
    const isLocked = divChildren[2].checked
    if(isLocked){
        return
    }

const hiddenElements = event.target.previousElementSibling;
if(event.target.textContent === 'Show more'){
    hiddenElements.style.display = 'inline'
    event.target.textContent = 'Hide it'
    return
} 
    hiddenElements.style.display = 'none';
    event.target.textContent = 'Show more'
    

   }
}