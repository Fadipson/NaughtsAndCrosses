// find the first square

var firstBox = document.getElementById('0');

//when this first square is clicked, show an x

firstBox.addEventListener("click", displayX);

// define what happens when first square is clicked

function displayX() {
  console.log("The box is being clicked");
}
