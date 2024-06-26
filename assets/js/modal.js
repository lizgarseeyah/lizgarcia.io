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
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;

  // Initialize the carousel when the image is clicked
  var mySwiper = new Swiper('.carousel-container', {
      // Optional parameters
      loop: true,
      // If you have more images, adjust the slidesPerView accordingly
      slidesPerView: 1,
      // Navigation arrows
      navigation: {
          nextEl: '.carousel-swiper-button-next',
          prevEl: '.carousel-swiper-button-prev',
      },
  });
}

// Event listener for the second image
img2.onclick = function(){
  modal2.style.display = "block"; // Use the second modal for the second image
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
  // Initialize the carousel when the second image is clicked
  var mySwiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    // If you have more images, adjust the slidesPerView accordingly
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.carousel-swiper-button-next2',
        prevEl: '.carousel-swiper-button-prev2',
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
