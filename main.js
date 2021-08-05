// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
const likes = document.querySelectorAll('.like-glyph')
  for (const like of likes) {
    like.addEventListener("click", function(e) {
      // console.log(e)
      addLike(e)
    })
  }



function addLike(event) {
  targetHeart = event.target;
  console.log(targetHeart)

  mimicServerCall()
    .then(function (response) {
      targetHeart.classList.add('activated-heart')
      targetHeart.innerHTML = FULL_HEART;
    })
    .catch(function (error) {
      document.querySelector('#modal').classList.remove('hidden')
      setTimeout(function () {
        document.querySelector('#modal').classList.add('hidden')
      }, 3000)
    });
}



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
