/*-------------------------------------------------------------------------------*\
  //////////////////////////////// Bank Page \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/

/*-------------------------------*\
  /////////// Diposit \\\\\\\\\\\
\*-------------------------------*/

document.getElementById('deposit-button').addEventListener('click',

function()
{
    // console.log('deposit button clicked');

    const depositAmount = document.getElementById('deposit-amount');
    const totalDeposit = depositAmount.value;

    // console.log(totalDeposite);

    //(1)Putting input value in main statement

    const currentDeposit = document.getElementById('current-deposit');
    
    // currentDeposit.innerText = totalDeposit;

    //(2)Now adding new continuous values
    const previousCurrentDeposit = currentDeposit.innerText;
    //Remember? parseFloat
    const totalCurrentDeposit = parseFloat(previousCurrentDeposit) + parseFloat(totalDeposit);

    currentDeposit.innerText = totalCurrentDeposit; //Result
   
    //(3)null the diposit input field
    depositAmount.value = ''; //Result


  //////// Adding Deposite in Balance \\\\\\\\\\

    const currentBalace = document.getElementById('current-balance');
    const totalCurrentBalance = currentBalace.innerText;

    const newTotalCurrentBalance = parseFloat(totalCurrentBalance) + parseFloat(totalCurrentDeposit);

    currentBalace.innerText = newTotalCurrentBalance;

}

);

/*------------------------------------*\
  /////////// Withdraw \\\\\\\\\\\\\
\*------------------------------------*/

document.getElementById('withdraw-button').addEventListener('click',

function()
{
    // console.log('withdraw button clicked');

    const withdrawAmount = document.getElementById('withdraw-amount');
    const totalWithdraw = withdrawAmount.value;

    // console.log(totalWithdraw);

    //(1)Putting input value in main statement

    const currentWithdraw = document.getElementById('current-withdraw');

    // currentWithdraw.innerText = totalWithdraw;

    //(2)Now adding new continuous values
    const previousCurrentWithdraw = currentWithdraw.innerText;
    //Remember? parseFloat
    const totalCurrentWithdraw = parseFloat(previousCurrentWithdraw) + parseFloat(totalWithdraw);

    currentWithdraw.innerText = totalCurrentWithdraw; //Result

    //(3)null the diposit input field
    withdrawAmount.value = ''; //Result

  //////// Subtracting Withdraw from Balance \\\\\\\\\\

  const currentBalace = document.getElementById('current-balance');
    const totalCurrentBalance = currentBalace.innerText;

    const newTotalCurrentBalance = parseFloat(totalCurrentBalance) - parseFloat(totalCurrentWithdraw);

    currentBalace.innerText = newTotalCurrentBalance;





}

)

