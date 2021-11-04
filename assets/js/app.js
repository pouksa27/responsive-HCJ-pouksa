const menu = document.querySelector('#mobile-menu');

const menuLink = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle("is-active");
    menuLink.classList.toggle("active");
})

// modal items

const modal = document.getElementById('email-modal');

const openBtn = document.querySelector('.main-btn');

const closeBtn = document.querySelector('.close-btn');

//click events
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
})


// form validation

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

//show error message

function showError(input,message){
    const formValidation = input.parentElement;
    formValidation.className ='form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;

}

//show valid message
function showValid(input){
    const formValidation = input.parentElement;
    formValidation.className ='form-validation valid';
}

// get field name
function getFieldName(input){
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// check required fields

function checkRequired(inputArr){
    inputArr.map((input)=>{
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showValid(input);
        }
    })
}

//check input length
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showValid(input);
    }
}
// check password match
function passwordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Password do not match');
    }
}

//Event listeners
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkRequired([name,email,password,passwordConfirm]);
    checkLength(name,4,30);
    checkLength(password,8,25);
    checkLength(passwordConfirm,8,25);
    passwordMatch(password,passwordConfirm);


})
