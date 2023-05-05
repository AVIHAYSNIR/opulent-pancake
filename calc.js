function numbers(digit){
    let screen = window.document.getElementById("display");
    let currentValue = screen.innerText;
    if (currentValue.length < 8){
         if (currentValue == "0"){
             screen.innerText = digit.toString();
         }
         else {
             screen.innerText = currentValue + digit.toString();
        }
    }
    
    
    //screen.innerText = digit.toString();
    console.log(currentValue)
 }
 function del(){
     let screen = window.document.getElementById("display")
     let currentValue = screen.innerText;
     if (currentValue != "0"){
         if (currentValue.length == 1){
             screen.innerText = "0";
         }
         else{
             currentValue = currentValue.slice(0,currentValue.length - 1);
             screen.innerText = currentValue;
         }
     }
 }
  
  
  
 
  
  