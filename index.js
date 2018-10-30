const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

dodger.style.left = '280px'

let dodgerPosition = 0

function moveDodger(event) {
  console.log(event.which)
  
}

dodger.addEventListener('keydown', moveDodger)