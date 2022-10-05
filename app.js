var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocksQuantity");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-btn");
var outputArea = document.querySelector("#output-area");


submitButton.addEventListener('click', submitHandler); 

function submitHandler(){
  var ip = initialPrice.value;
  var qty = stocksQuantity.value;
  var cp = currentPrice.value;
  calculate(ip,qty,cp);
}

function calculate(initial, quantity, curr){

  if(initial && quantity && curr){
    if(initial< 0 || quantity < 0 || curr < 0){
        outputArea.innerHTML = "Invalid input. Make sure all the inputs are filled and are non zero positive numbers"}
      else{

        if(initial>curr){
          // loss
          var loss = (initial - curr) * quantity;
          var lossPercent = (loss / initial) *100;
         outputArea.innerHTML = `OOPS you are in ${loss} loss, and the percent is ${lossPercent}%` ;
         
        }
        else if(curr > initial){
          // profit
          var profit = (curr - initial) * quantity;
          var profitPercent = (profit / initial) *100;
          outputArea.innerHTML = `YAYYYY you are in ${profit} profit, and the percent is ${profitPercent}%`;
        }
      else{
          outputArea.innerHTML = "No pain No gain and No gain No pain";
      }

      }

    
    
  }else{
    outputArea.innerHTML = "Enter all the values";
  }
  
}

