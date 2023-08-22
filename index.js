// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var normal = document.getElementById("page-preview");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function( ratedDisplay) {
  modal.style.display = "block";
   normal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
   normal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Active state when a number is selected

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
});


const btns = document.querySelectorAll(".rate");
const ratingContainer = document.getElementById("rating-state");
const appreciationContainer = document.getElementById("appreciation");
const ratePick = document.getElementById("pick");


function ratedDisplay() {
  ratingContainer.style.display = "none";
  appreciationContainer.style.display = "flex";
}

for (let x of btns) {
  x.addEventListener("click", () => {
    ratePick.innerHTML = `You selected ${x.value} out of 5`
  });
}