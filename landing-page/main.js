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

    const inputFirstNameUser = document.getElementById('firstname')
    const inputLastNameUser = document.getElementById('lastname')
    const inputEmailUser = document.getElementById('email')
    const inputCpfUser = document.getElementById('cpf')



    if (!inputFirstNameUser.value){
        haveError = true
        inputFirstNameUser.classList.add('inputError')
        let spanError = inputFirstNameUser.nextSibling.nextSibling 
        spanError.innerText = `Please first name cannot null!`
    }else {
        inputFirstNameUser.classList.remove('inputError')
        let spanError = inputFirstNameUser.nextSibling.nextSibling 
        spanError.innerText = ''
    }
    if (!inputLastNameUser.value) {
        haveError = true
        inputLastNameUser.classList.add('inputError')
        let spanError = inputLastNameUser.nextSibling.nextSibling
        spanError.innerText = `Please last name cannot null!`
    } else {
        inputLastNameUser.classList.remove('inputError')
        let spanError = inputLastNameUser.nextSibling.nextSibling
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
        inputFirstNameUser.value = ''
        inputLastNameUser.value = ''
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
          <p class="price">From <s>$${element.oldPrice}</s></p>
          <p class="price">to $${element.price}</p>
          <p class="price">Or ${element.installments.count}x of $${element.installments.value.toFixed(2)}</p>
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