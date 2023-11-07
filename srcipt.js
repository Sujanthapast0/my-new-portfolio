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
