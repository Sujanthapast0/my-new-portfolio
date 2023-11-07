// Function to open the modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.body.classList.add("blur"); // Add blur class to the body
}

// Function to close the modal
function closeModalFunc() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    modal.classList.add("popOut");
    document.body.classList.remove("blur"); // Remove blur class from the body
}

// Close the modal if the user clicks outside of it
window.addEventListener("click", function (e) {
    var modal = document.getElementById("myModal");
    if (e.target === modal) {
        closeModalFunc();
    }
});


// Select the SVG buttons and navbar
const menuSvgButton = document.querySelector(".menu-svg-button");
const closeSvgButton = document.querySelector(".close-svg-button");
const navbar = document.querySelector('.navbar');

// Function to add the "active" class to the navbar
const AddNavbarActiveClass = () => {
    navbar.classList.add("active");
};

// Function to remove the "active" class from the navbar
const RemoveNavbarActiveClass = () => {
    navbar.classList.remove("active");
};

// Add a click event listener to the menu-svg-button to add the "active" class
menuSvgButton.addEventListener('click', () => {
    AddNavbarActiveClass();
});

// Add a click event listener to the close-svg-button to remove the "active" class
closeSvgButton.addEventListener('click', () => {
    RemoveNavbarActiveClass();
});
