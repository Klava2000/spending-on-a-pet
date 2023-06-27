const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

function calculateAmount(e) {
    e.preventDefault();
    const income = +document.querySelector('#income').value; 

    let totalExpenses = 0;
    const expenses = document.querySelectorAll('.expenses');

    for (let i = 0; i < expenses.length; i++) {
        if(expenses[i].value === '') {
            Swal.fire({
                icon: 'error',
                title: 'Пожалуйста, заполните все поля!',
                text: 'Если значение отсутствует, укажите 0'     
            })
            return false;
        } else {
            totalExpenses += +expenses[i].value; 
        }
    }

    const remainder = income - totalExpenses;

    if(income === 0 || income === ''){
        Swal.fire({
            icon: 'error',
            title: 'Сожалеем, но...',
            text: 'у Вас нет доходов'     
            })
        }

    document.querySelector("#remainder").textContent = remainder;
    document.querySelector("#totalSum").textContent = totalExpenses;
}
