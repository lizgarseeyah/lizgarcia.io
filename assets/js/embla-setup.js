function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex"; // Use flex to center the modal
    initializeEmblaCarousel();
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

function initializeEmblaCarousel() {
    const emblaNode = document.querySelector('.embla');
    EmblaCarousel(emblaNode, { loop: true });
}

// Initialize Embla Carousel on page load if needed
document.addEventListener('DOMContentLoaded', (event) => {
    initializeEmblaCarousel();
});