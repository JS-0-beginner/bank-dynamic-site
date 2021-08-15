
/////////// Home Page \\\\\\\\\\\\\\\\\\\

//Deposite
document.getElementById('deposite-button').addEventListener('click',

function()
{
    // console.log('deposite button clicked');

    const depositeAmount = document.getElementById('deposite-amount');
    const totalDeposite = depositeAmount.value;

    console.log(totalDeposite);

    const currentDeposite = document.getElementById('current-deposite');
    currentDeposite.innerText = totalDeposite;

    //null the input field
    depositeAmount.value = '';

}

)