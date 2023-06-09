const form = document.querySelector('form');
form.addEventListener("submit", baseAndPower);

function baseAndPower (event){
    event.preventDefault();
    const base = Number(event.target.base.value);
    const power = Number(event.target.power.value);
const result = Math.pow(base,power);
document.querySelector('h2').innerHTML = `${base}<sup>${power} </sup>  =   ${result}`;

}




//Work in progress
// document.querySelector("#first").innerText = "Hello " + base
// document.querySelector("#power").innerText = power
// document.querySelector("#last").innerText = "All done "