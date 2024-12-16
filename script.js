// let products = [
//     { name: 'Laptop', price: 999.99, description: 'Powerful computing on the go' },
//     { name: 'Smartphone', price: 699.99, description: 'Stay connected wherever you are' },
//     { name: 'Headphones', price: 149.99, description: 'Immersive audio experienc4' }
// ];

// console.log(products)

// products.addEventListener('click', () => {
//     console.log("")
// })




// 2. Form Manipulation with JavaScript

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const message = document.querySelector('#message')
    
    if (!email.value.includes('@')) {
        email.style.borderColor = 'red'
        return
    } else {
        email.style.borderColor = 'green'
    }
    
    console.log(`Name: ${name.value}, Email: ${email.value}, Message: ${message.value}`)
})



// 3. Styling with JavaScript

function changeColor () {
    document.getElementById('box').style.backgroundColor='red'
}

function buttonClick() {
    alert("You clicked the button!")
}

function submitButton(event) {
    event.preventDefault();
    console.log("Form submitted!")
}

function hoverOver() {
    document.getElementById('hoverButton').style.backgroundColor='blue'
}

function hoverOut() {
    document.getElementById('hoverButton').style.backgroundColor='white'
}