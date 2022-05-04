const formSendinformationsUser = document.getElementById('formSendinformationsUser')
const formSendFriendData = document.getElementById('formSendFriendData')
const cardProducts = document.getElementById('products')
function toastSnackBar() {
    let snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

formSendinformationsUser.onsubmit = function (event){
    event.preventDefault()

    let haveError = false

    const inputNameUser = document.getElementById('name')
    const inputEmailUser = document.getElementById('email')
    const inputCpfUser = document.getElementById('cpf')
    // const inputMale = document.getElementById('male')
    // const inputFemale = document.getElementById('female')


    if (!inputNameUser.value){
        haveError = true
        inputNameUser.classList.add('inputError')
        let spanError = inputNameUser.nextSibling.nextSibling 
        spanError.innerText = `Please name cannot null!`
    }else {
        inputNameUser.classList.remove('inputError')
        let spanError = inputNameUser.nextSibling.nextSibling 
        spanError.innerText = ''
    }
    if(!inputEmailUser.value){
        haveError = true
        inputEmailUser.classList.add('inputError')
        let spanError = inputEmailUser.nextSibling.nextSibling
        spanError.innerText = `Please e-mail cannot null!`
    }else{
        inputEmailUser.classList.remove('inputError')
        let spanError = inputEmailUser.nextSibling.nextSibling
        spanError.innerText = ''
    }
    if (!inputCpfUser.value) {
        haveError = true
        inputCpfUser.classList.add('inputError')
        let spanError = inputCpfUser.nextSibling.nextSibling
        spanError.innerText = `Please CPF cannot null!`
        
    }else {
        inputCpfUser.classList.remove('inputError')
        let spanError = inputCpfUser.nextSibling.nextSibling
        spanError.innerText = ''
    }

    if(!haveError){
        toastSnackBar()
        inputNameUser.value = ''
        inputEmailUser.value = ''
        inputCpfUser. value = ''
    }

}

formSendFriendData.onsubmit = function(event){
    event.preventDefault()

    let haveError = false

    const inputNameFriend = document.getElementById('inputNameFriend')
    const inputEmailFriend = document.getElementById('inputEmailFriend')
    
    if(!inputNameFriend.value){
        haveError = true
        inputNameFriend.classList.add('inputError')
        let spanError = inputNameFriend.nextSibling.nextSibling
        spanError.innerText = 'Please name of your friend cannot null!'
    } else {
        inputNameFriend.classList.remove('inputError')
        let spanError = inputNameFriend.nextSibling.nextSibling
        spanError.innerText = ''
    }
    if (!inputEmailFriend.value){
        haveError = true
        inputEmailFriend.classList.add('inputError')
        let spanError = inputEmailFriend.nextSibling.nextSibling
        spanError.innerText = 'Please e-mail of your friend cannot null!'
    }else {
        inputEmailFriend.classList.remove('inputError')
        let spanError = inputEmailFriend.nextSibling.nextSibling
        spanError.innerText = ''
    }
    if(!haveError){
        toastSnackBar()
        inputNameFriend.value = ''
        inputEmailFriend.value = ''
    }
}


function responseJSON(response){
    return response.json()
}

function listProducts(data){
    const products = data.products

    products.forEach(element => {
        cardProducts.innerHTML += `
        <div class="card">
          <img src="${element.image}" style="width:100%">
          <h3>${element.name}</h3>
          <br>
          <p>${element.description}</p>
          <br>
          <p class="price">From $${element.oldPrice}</p>
          <p class="price">to $${element.price}</p>
          <p class="price">Or ${element.installments.count}x of $${element.installments.value}</p>
          <p><button>Buy</button></p>
        </div>
        `
    })

}

function error(){
    console.log('Oh no! Erro sorry.')
}

let page = 0
async function callAPI_Products(){
    page++
    const data = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
                     .then(responseJSON)
                     .then(listProducts)
                     .catch(error)
}
callAPI_Products()