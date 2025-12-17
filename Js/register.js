//   !Html Elemets
  const nameInput=document.getElementById("fullName");
  const emailInput=document.getElementById("regEmail");
    const passwordInput=document.getElementById("regPassword");
    const confirmPassword=document.getElementById("confirmPassword");
     const btnResgiter=document.querySelector(".btn-register");
    const msgSucees=document.getElementById("success");
const error=document.getElementById("mesgRepeat");
    // App Variables
 const users=JSON.parse(localStorage.getItem("user"))||[];
//  ?functions
 function register(){      
    const user={
        email:emailInput.value,
        password:passwordInput.value
    }
    if(repeatEmail()){
   users.push(user)
localStorage.setItem("user",JSON.stringify(users));
        msgSucees.classList.remove("d-none");

    } 
    else{
msgSucees.classList.add("d-none")
    }
 }
function validationName(){
    const text=nameInput.value;
    const term=/^[A-za-z]{3,8}$/;
    const msgError=document.getElementById("validName");
    if(!term.test(text)){
        msgError.classList.remove("d-none");
        return false;
    }
    else{
        msgError.classList.add("d-none");
        return true;  
    }
}
function validationEmail(){
      const term=/^\S+@\S+\.\S+$/;
    const text=emailInput.value;
        const msgError=document.getElementById("invalidFormat");
    if(!term.test(text)){
  msgError.classList.remove("d-none");
        return false;
    }
      else{
        msgError.classList.add("d-none");
        return true;  
    }
}
function validationPassword(){
    const text=passwordInput.value;
    const term=/[A-z]{1,}[0-9]{1,}/
    const msgError=document.getElementById("validPassword");
      if(!term.test(text)){
        msgError.classList.remove("d-none");
        return false;
    }
    else{
        msgError.classList.add("d-none");
        return true;  
    }

}
function validatCofirmPassword(){
const text=confirmPassword.value;
const msgError=document.getElementById("validConfirm")
if(passwordInput.value!=text){
msgError.classList.remove("d-none");
return false;
}
else{
    msgError.classList.add("d-none");
    return true;
}
}
function repeatEmail(){
const existEmail=  users.some(user=>
 user.email===emailInput.value
   )
   if(existEmail){
    error.classList.remove("d-none");    
return false;
   }
   else{
        error.classList.add("d-none");
return true;
   }
 
}
// todo Events
nameInput.addEventListener("blur",()=>{
validationName();
})
emailInput.addEventListener("blur",()=>{
    validationEmail();
})
passwordInput.addEventListener("blur",()=>{
    validationPassword();
})
confirmPassword.addEventListener("blur",()=>{
    validatCofirmPassword();
})
btnResgiter.addEventListener("click",()=>{
if(validationName()&&validationPassword()&&validationEmail()&&validatCofirmPassword()&&repeatEmail()){
    register();
}
})