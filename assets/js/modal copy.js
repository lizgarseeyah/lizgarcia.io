// Get the modals
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal02"); // New variable for the second modal

// Get the images and insert them inside the modals - use their "alt" text as captions
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg02");
var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("caption02");

// Event listener for the first image
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;

  // Initialize Swiper for the first modal
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// Event listener for the second image
img2.onclick = function() {
  modal2.style.display = "block"; // Use the second modal for the second image
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;

  // Initialize Swiper for the second modal
  var swiper2 = new Swiper(".mySwiper02", { // Use a different class for the second Swiper instance
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// Get the <span> elements that close the modals
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1]; // New variable for the second close button

// When the user clicks on <span> (x), close the modals
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
