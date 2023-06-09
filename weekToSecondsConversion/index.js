const form = document.querySelector('form');
form.addEventListener("submit",Converter );

function Converter (event){ 
    event.preventDefault();
    const weekAmount = Number(event.target.weekAmount.value)
    const secondsAmount = weekAmount * 604800;
    document.querySelector('h2').innerText = weekAmount + "weeks is " + secondsAmount.toLocaleString() +" seconds" 
}


