function validate() {
  const inputField = document.getElementById('email');
  inputField.addEventListener('change', onChange);
  const emailPattern = /\w+@\w+\.\w+/gm

  function onChange(e){
    const target = e.target
    const operation = emailPattern.test(target.value) ? 'remove' : 'add';
    target.classList[operation]('error')
  }
}