document.addEventListener("DOMContentLoaded", function() {
    var contentElement = document.getElementById("content");
    var changeButton = document.getElementById("changeButton");

    // Function to change the content
    function changeContent() {
        contentElement.textContent = "New content after button click.";
    }

    // Add a click event listener to the button
    changeButton.addEventListener("click", changeContent);
});




