function setTextElement(elementId,value){
    const element = document.getElementById(elementId);
     element.innerText = value;
}
function inputValueField(elementId){
    return document.getElementById(elementId);
}
function inputValue(elementId){
    const elementInput = document.getElementById(elementId);
    const elementInputString = elementInput.value;
    const element = parseFloat(elementInputString);
    return element;
}
function getTextelementByID(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseInt(elementString);
    return elementValue;
}