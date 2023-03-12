let outputBtn = document.querySelector('#outputBtn');

outputBtn.addEventListener('click' , () =>{
  let inputValue = document.querySelector('#inputValue').value;
  let showValue = document.querySelector('#showValue');
  let firstLetter = inputValue.charAt(0);
  if(firstLetter == firstLetter.toUpperCase()){
    showValue.innerText = inputValue;
    showValue.style.color = "green";
  }else{
    showValue.innerText = "First Letter Capitalize Write";
    showValue.style.color = "red";
  }
});