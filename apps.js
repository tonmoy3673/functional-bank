

// =============== getElementByText===============//
const textElement=(elementID)=>{
    const elementValue=document.getElementById(elementID);
    const valueParse=elementValue.innerText;
    const value=parseFloat(valueParse);
    
    return value
};

textElement('balance');

// ================= getInputElementValue===============//

const getInputValue=(inputID)=>{
    const inputValue=document.getElementById(inputID);
    const inputParse=inputValue.value;
    const input=parseFloat(inputParse);
    inputValue.value='';
    return input;

};


// =============== Set Deposit =============//
document.getElementById('deposit-btn').addEventListener('click',function(){
   const newDepositAmount= getInputValue('deposit-input');
   const previousDepositAmount=textElement('deposit');
   const totalDeposit=(previousDepositAmount+newDepositAmount);
   const getDepositValue=document.getElementById('deposit');
   getDepositValue.innerText=totalDeposit;
   const balanceValue=textElement('balance');
   const balanceTotal=(balanceValue + newDepositAmount);
   const balanceText=document.getElementById('balance')
   balanceText.innerText=balanceTotal;
   
});

// ================ Set Withdraw ===============//
document.getElementById('withdraw-btn').addEventListener('click',function(){
  const newWithdrawAmount=  getInputValue('withdraw-input');
  console.log(newWithdrawAmount);
  const previousWithdrawAmount=textElement('withdraw');
  console.log(previousWithdrawAmount);
  const totalWithdraw=newWithdrawAmount+previousWithdrawAmount
  const withdrawText=document.getElementById('withdraw');
  withdrawText.innerText=totalWithdraw;
  const balanceValue=textElement('balance');
  const balanceText=document.getElementById('balance');
 balanceText.innerText=balanceValue-newWithdrawAmount;
});



