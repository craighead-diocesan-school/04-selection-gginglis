// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  let balance = prompt('how much money do you have?')

  let fullPrice = prompt('how much is the item normally?')

  let discount = prompt('what is the discount percentage?')

  decimal = discount / 100

  let endPrice = fullPrice - (fullPrice * decimal)


  if (endPrice <= balance) {
    alert('you have enough money')
  } else if (endPrice > balance) {
    alert('you dont have enough')
  }

}
