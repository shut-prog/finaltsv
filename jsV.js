/* jsV.js */

var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addPopupButton = document.getElementById("add-popup-button");
var cancelPopup = document.getElementById("cancel-popup");
var container = document.querySelector(".container");
var addBook = document.getElementById("add-book");
var bookTitleInput = document.getElementById("book-title");
var bookAuthorInput = document.getElementById("book-author-input");
var bookDescriptionInput = document.getElementById("book-description-input");

addPopupButton.addEventListener("click", function() {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

cancelPopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

addBook.addEventListener("click", function(event) {
    event.preventDefault();
    if (bookTitleInput.value.trim() === "" || bookAuthorInput.value.trim() === "" || bookDescriptionInput.value.trim() === "") {
        alert("Please fill in all fields");
        return;
    }
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${bookTitleInput.value}</h2>
        <h5>${bookAuthorInput.value}</h5>
        <p>${bookDescriptionInput.value}</p>
        <button onclick="deleteBook(event)">Delete</button>`;
    container.appendChild(div);
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookDescriptionInput.value = "";
});

function deleteBook(event) {
    event.target.parentElement.remove();
}