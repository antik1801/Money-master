// console.log('connected');
function getIncome(){
    const incomeInput = inputValueField('income-inp');
    const incomeString = incomeInput.value;
    const income = parseFloat(incomeString);
    return income;
}

document.getElementById('btn-calculate').addEventListener('click',function(){
    const income = getIncome();
    const foods = inputValue('food-inp');
    const rent = inputValue('rent-inp');
    const cloths = inputValue('cloth-inp');
    const totalCost = foods + rent + cloths;
    setTextElement('total-expence', totalCost);
    const remainBalance = income - totalCost;
    console.log(foods,rent,cloths,totalCost,income);
    if(isNaN(income) || isNaN(foods)|| isNaN(rent)  || isNaN(cloths)){
        alert("Input numbers can't be empty or negative!");
        setTextElement('balance', 0);
        setTextElement('total-expence', 0);
    }
    else{
    if(totalCost > income){
        alert('Not sufficient ammount');
        setTextElement('balance', 0);
        setTextElement('total-expence', 0);
    }
    else{
        console.log(typeof remainBalance, remainBalance);
        setTextElement('balance', remainBalance);
    }
}
})
document.getElementById('btn-save').addEventListener('click',function(){
  const saveMoney = document.getElementById('save-input');
  const saveMoneyString = saveMoney.value;
  const saveMoneyValue = parseFloat(saveMoneyString);
  const multiply = saveMoneyValue / 100 ;
  const incomeCal = getIncome();
  const totalSavings = incomeCal * multiply ;
  if(isNaN(totalSavings)){
    alert('Please enter the value correctly');
    setTextElement('saving-amount', 0);
  }
  else{
      setTextElement('saving-amount',totalSavings);
      const balance = getTextelementByID('balance');
      const remainBalance = balance - totalSavings;
      if(remainBalance < 0){
        alert('Insufficient Balance!');
      }
      else{
          setTextElement('remaining-amount', remainBalance);
      }
  }
})