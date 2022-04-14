const display = document.querySelector('.claculyatr-input');
 const keys = document.querySelector('.calculyatr-keys');
 var displayvalue='0'
 displayupdate();
 var operator=null
 var firstvalue=null;
 var waitingforvalue=false;
 

 function displayupdate(){
     display.value=displayvalue;
 }

 keys.addEventListener('click',function(e){
     var element=e.target;
     if(!element.matches('button')){
         return
     }
     if(element.classList.contains('operator')){
         handeloperator(element.value)
         displayupdate();
         return
     }
     if(element.classList.contains('decimal')){
         inputdecimal();
         displayupdate();
         return
     }
     if(element.classList.contains('clear')){
         clear();
         displayupdate();
         return;
     }
     
     inputdisplay(element.value);
     displayupdate();

 })

 function inputdisplay(num){
     if(waitingforvalue){
         displayvalue=num;
         waitingforvalue=false
     }else{
         displayvalue=displayvalue==='0'?num:displayvalue+num;
     }

 }

 function  inputdecimal(){
    if(!displayvalue.includes('.')){
        displayvalue+='.'
    }
}

 function clear(){
     displayvalue='0'
 }

 
 function  handeloperator(nextoperator){

    if(operator && waitingforvalue){
        operator=nextoperator;
        
    }
     let value = parseFloat(displayvalue);
     if(firstvalue===null){
        firstvalue=value;
        
     }else if(operator){
         let result=calc(firstvalue,value,operator);
         displayvalue=String(result);
         firstvalue=result;

     }
     operator=nextoperator;
     waitingforvalue=true;


 }

 function calc(first, second, operator) {
    

    if (operator === '+') {
        return first + second;
    } else if (operator === '-') {
        return first - second;
    } else if (operator === '*') {
        return first * second;
    } else if (operator === '/') {
        return first / second;
    } else{
        return second;
    }
 




}