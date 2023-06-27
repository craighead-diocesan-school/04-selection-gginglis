// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my conversation program.')

  alert('Do you like football? Answer yes or no.')
  let answer = prompt()

  if (answer == 'yes') {
    alert("YEAHHHHHHH")
    alert('What team do you support')
    let team = prompt()

    if (team == 'man city') {
      alert('YEAHHHHHHH')
    } else {
      alert('IMAGINE LOSING')
    }
  } else {
    alert('YOU SUCKKK BOOOOOOO')
  }
  alert('cya')
}

function age() {

  let age = prompt('how old are you')
  age = Number(age)

  if (age < 18) {
    alert('bro cant vote 😎')
  } else if (age >= 18) {
    alert('bro can vote 🤓')
  }
}
