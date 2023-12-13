

//   const checkBox = document.getElementById('checkBox');
// checkBox.addEventListener("click", function() {
  
// })

// }

//  const proceed = function (){
//    let proceedUrl = "inserire url";
//    window.location.href =  proceedUrl
//  }

// let boxCheck = document.getElementById('checkBox')
// let proceedOk = document.getElementById('proceedOk')

// proceedOk.addEventListener('click', function (event)
// {  if (boxCheck = false) {
//   event.preventDefault();alert('Devi promettere di rispondere da solo senza aiuto!')
// }} 


let boxCheck = document.getElementById('checkBox')
let proceedOk = document.getElementById('proceed')

proceedOk.addEventListener('click', function () {
  if ( boxCheck !== true) { 
  alert('Devi promettere di rispondere da solo senza aiuto!');
} else { alert("Puoi Procedere!") 
}
})
