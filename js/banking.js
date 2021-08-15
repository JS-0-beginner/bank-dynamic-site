
/////////// Home Page \\\\\\\\\\\\\\\\\\\

//Deposite
document.getElementById('deposit-button').addEventListener('click',

function()
{
    // console.log('deposit button clicked');

    const depositAmount = document.getElementById('deposit-amount');
    const totalDeposit = depositAmount.value;

    // console.log(totalDeposite);

    const currentDeposit = document.getElementById('current-deposit');

    //(1)Putting input value in main statement
    // currentDeposit.innerText = totalDeposit;

    //(2)Now adding new continuous values
    const previousCurrentDeposit = currentDeposit.innerText;
    //Remember? parseFloat
    const totalCurrentDeposit = parseFloat(previousCurrentDeposit) + parseFloat(totalDeposit);
    currentDeposit.innerText = totalCurrentDeposit; //Result
   
    //(3)null the diposit input field
    depositAmount.value = ''; //Result



}

)