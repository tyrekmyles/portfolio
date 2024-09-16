// Get the modal element
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.querySelector(".close");

// Function to open the modal with project details
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', function() {
    modalTitle.textContent = this.querySelector('h2').textContent;
    modalDescription.textContent = this.dataset.description;
    modal.style.display = "flex";
  });
});

// Function to close the modal
closeModal.addEventListener('click', function() {
  modal.style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
