function validate() {
    const usernameRef = document.getElementById('username');
    const emailRef = document.getElementById('email');
    const passRef = document.getElementById('password');
    const confirmPassRef = document.getElementById('confirm-password');
    const companyRef = document.getElementById('company');
const companyInfo = document.getElementById('companyInfo')
    if(companyRef.value === true){
companyInfo.style.display = 'block'
    }

}
