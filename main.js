// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errModal = document.getElementById("modal");
errModal.className = "hidden";

document.addEventListener("DOMContentLoaded", () =>{

  const likeButtons = document.querySelectorAll(".like-glyph");

    function likeEvent (event) {
      const heart = event.target;
      mimicServerCall()
      .then(() => {
        if(heart.innerHTML === EMPTY_HEART){
          heart.innerHTML === FULL_HEART;
          heart.classList.add("activated-heart");
        }
        else{
          heart.innerHTML === EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
        
      })
      .catch((err)=>{
        errModal.classList.remove("hidden");
        modalErrMessage = document.getElementById("modal-message");
        modalErrMessage.textContent = err.message;
        setTimeout(() => {
          errModal.classList.add("hidden");

        }, 3000)

      })
  };
 
  likeButtons.forEach((heart)=>{
    heart.addEventListener("click", likeEvent)
  })


})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
