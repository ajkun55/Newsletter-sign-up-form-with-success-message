
const signUpForm =document.getElementById("signUpForm");
const successMessage =document.getElementById("successMessage");



const email = document.getElementById("email");
const error = document.getElementById("error");

email.addEventListener("focus",()=>{
    email.value="email@company.com"
    email.style.setProperty("color", "var(--clr-Dark-Slate-Grey)");
});

function validation(submittedemail){
    let re = /\S+@\S+\.\S+/;
    return re.test(submittedemail);
}

function showSuccessMessage(){
    if(validation(email.value)){
        signUpForm.classList.toggle("hidden");
        successMessage.classList.toggle("hidden");
    }else{
        email.style.setProperty("border", "solid 1px var(--clr-Tomato)");
        email.style.setProperty("color", "red");
        email.style.setProperty("background-color", "hsla(4, 100%, 67%, 20%)");
        email.value="ash#lorecompany.com";
        error.classList.toggle("hidden");
    }
    
}