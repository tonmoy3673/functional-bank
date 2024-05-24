

// =============== getElementByText===============//
const textElement=(elementID)=>{
    const elementValue=document.getElementById(elementID);
    const valueParse=elementValue.innerText;
    const value=parseFloat(valueParse);
    console.log(value);
};

textElement('balance');

// ================= getInputElementValue===============//