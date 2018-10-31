const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

let dodgerPosition = 0

function moveDodger(event) {
  const keycode = event.which
  if (keycode === 37) { 
    let oldLeft = dodger.style.left
      if (oldLeft === '0px') {
      return
    }
    console.log(oldLeft)
    oldLeft = parseInt(oldLeft, 10)
    dodger.style.left = (oldLeft - 10) + 'px'
    
  } else if (keycode === 39) { 
    moveDodgerRight(event)
    
    } else if (keycode === 38) {
      //up arrow
      
 } else if (keycode === 40) {
   //down arrow
}
}

function moveDodgerRight(event) {
  if (event.which === 39) {
    let oldLocation = dodger.style.left
    if (oldLocation === 0) {
      return
    }
    oldLocation = parseInt(oldLocation, 10)
    dodger.style.left = (oldLocation + 10) +'px'
  }
}

document.addEventListener('keydown', moveDodger)