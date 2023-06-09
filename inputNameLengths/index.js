const form = document.querySelector('form');
form.addEventListener("submit", nameLength);

function nameLength(event){ 
    event.preventDefault();
    const firstName = String(event.target.firstName.value)
    const lastName = String(event.target.lastName.value)   
    const nameLength = firstName.length + lastName.length 
    document.querySelector('h2').innerText = "Your name is " + nameLength + " letters long";
}


