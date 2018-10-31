const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

let dodgerPosition = 0

function moveDodger(event) {
  const keycode = event.which
  if (keycode === 37) { 
    let oldLeft = dodger.style.left
    console.log(oldLeft)
    oldLeft = parseInt(oldLeft, 10)
    dodger.style.left = (oldLeft - 10) + 'px'
    if (oldLeft === '0px') {
      return
    }
    
  } else if (keycode === 39) { 
    //right arrow
    
    } else if (keycode === 38) {
      //up arrow
      
 } else if (keycode === 40) {
   //down arrow
}
}

document.addEventListener('keydown', moveDodger)