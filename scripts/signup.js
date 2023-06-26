
//link api 
var apiBaseUrl = 'https://todo-api.ctd.academy/v1'

//seleccionando o input nome
const nameInputRef = document.querySelector("#nameInput")

// seleccionando o input Sobrenome
const lastNameInputRef = document.querySelector("#lastNameInput")

// seleccionando o input
const emailInputRef = document.querySelector("#emailInput")

// seleccionando o input senha
const passwordInputRef = document.querySelector("#passwordInput")

// seleccionando o input repetir senha
const passwordRepitInputRef = document.querySelector("#passwordRepitInput")

//mensagem de erro
const mensagemErro = document.querySelector(".erro_mensagem");


// seleccionando o botao
 const buttonFormRef = document.querySelector("#buttonForm")





//coferir se os input estao com erro 
let formaHasError = {
  name: true,
  lastName: true,
  email: true,
  password: true,
  passwordRepit: true
}


// avaliar os imput
function validarInput(event) {
  const target = event.target
  const isValid = target.checkValidity()



  if (isValid) {
    //adicionar clase de error
    target.classList.remove("error")
    formaHasError[target.name] = false
    mensagemErro.textContent = ""


    // coferir se repetir senha é igual a senha 
    if (target.name === 'passwordRepit') {

      if (passwordInputRef.value !== passwordRepitInputRef.value) {

        mensagemErro.textContent = "senha diferente";
        formaHasError[target.name] = true
        formaHasError.password = true
        passwordRepitInputRef.classList.add("error")
      } else {
        passwordRepitInputRef.classList.remove("error")
        formaHasError[target.name] = false
        formaHasError.password=false
        mensagemErro.textContent = ""
      }
    } else if (target.name === 'password') {

      if (passwordRepitInputRef.value !== passwordInputRef.value) {

        mensagemErro.textContent = "senha diferente";
        formaHasError[target.name] = true
        passwordRepitInputRef.classList.add("error")
      } else {
        target.classList.remove("error")
        formaHasError[target.name] = false
        mensagemErro.textContent = ""
      }

    }


  }



  else {

    //mensagem de erro no small
    mensagemErro.textContent = "Valor inválido";

    // caso seja invalido formaHasError para true a propiedade eque estiver com erro
    formaHasError[target.name] = true
    target.classList.add("error")

  }


  disabledButtonErro()

  console.log(formaHasError)

}



//deshabilitar botao
function disabledButtonErro() {
  if (
    !formaHasError.name &&
    !formaHasError.lastName &&
    !formaHasError.email &&
    !formaHasError.password &&
    !formaHasError.passwordRepit
  ) {
    buttonFormRef.disabled = false;
  } else {
    buttonFormRef.disabled = true;
  }
}



// funçao do botao
const user = {
  firstName: "usuario",
  lastName: "sobrenome",
  email: "@emaiee",
  password: "12345678"
}

function createUser(event){

event.preventDefault()

const requestHeaders = {

  "Accept":'application/json',
  "Content-Type":'application/json'

}

const requestSettings={

  method:'POST',
  body: JSON.stringify(user),
  headers:requestHeaders

}

  fetch(`${apiBaseUrl}/users`,requestSettings).then(

      response =>{

        if(response.ok){
          
          alert("usuario cadastrado com sucesso")
          window.location.href = "../pages/tarefas.html"
    
      }else(alert("usuario ja cadastrado"))
  
        
      }
  
    )
  
}


//evento ao clicar no nome
nameInputRef.addEventListener("keyup", (event) => validarInput(event))

// evento ao clicar n sobrenome
lastNameInputRef.addEventListener("keyup", (event) => validarInput(event))

// evento ao clicar no email
emailInputRef.addEventListener("keyup", (event) => validarInput(event))



//evento ao clicar na senha    
passwordInputRef.addEventListener("keyup", (event) => validarInput(event))

//evento ao clicar na repetir  senha  
passwordRepitInputRef.addEventListener("keyup", (event) => validarInput(event))

// evento ao clicar no botao
buttonFormRef.addEventListener("click", (event) => {
  event.preventDefault()
  createUser(event)
});








