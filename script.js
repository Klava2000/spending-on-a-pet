const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

function calculateAmount(e) {
    e.preventDefault();
    const food = document.querySelector("#food").value;
    const filler = document.querySelector("#filler").value;
    const vet = document.querySelector("#vet").value;
    const groom = document.querySelector("#groom").value;
    const yummy = document.querySelector("#yummy").value;
    const toy = document.querySelector("#toy").value;

    let totalSum = +food + +filler + +vet + +groom + +yummy + +toy;

    document.querySelector("#totalSum").textContent = "  " + totalSum;
}
