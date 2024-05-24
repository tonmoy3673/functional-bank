

// =============== getElementByText===============//
const textElement=(elementID)=>{
    const elementValue=document.getElementById(elementID);
    const valueParse=elementValue.innerText;
    const value=parseFloat(valueParse);
    elementValue.innerText='';
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


document.getElementById('deposit-btn').addEventListener('click',function(){
   const newDepositAmount= getInputValue('deposit-input');
   console.log(newDepositAmount);
});

document.getElementById('withdraw-btn').addEventListener('click',function(){
  const withdrawAmount=  getInputValue('withdraw-input');
  console.log(withdrawAmount);
});