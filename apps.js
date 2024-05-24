

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
  if (!isNaN(input)) {
    inputValue.value='';
   return input;
  } else {
    window.alert('Please Input Valid Amount!!');
    return 0;
  }
  
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
  const balanceValue=textElement('balance');
  
  if (balanceValue>newWithdrawAmount) {
    const balanceText=document.getElementById('balance');
    const withdrawText=document.getElementById('withdraw');
    const previousWithdrawAmount=textElement('withdraw');
    const totalWithdraw=newWithdrawAmount+previousWithdrawAmount
    withdrawText.innerText=totalWithdraw;
    balanceText.innerText=balanceValue-newWithdrawAmount;
  }
 else{
  window.alert('Insufficient Balance!!')
 }

 
});



