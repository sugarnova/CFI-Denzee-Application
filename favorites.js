// Function to go back to the main page
function goBackToMainPage() {
    // Redirect to the main page (index.html)
    window.location.href = "index.html";
}

// Function to display favorite cards
function displayFavoriteCards() {
    // Check if local storage is available
    if (typeof(Storage) !== "undefined") {
        // Get the favorite cards from local storage
        const favoriteCards = JSON.parse(localStorage.getItem("favoriteCards"));

        // Check if there are favorite cards
        if (favoriteCards && favoriteCards.length > 0) {
            const favoritesContainer = document.querySelector(".favorites");

            // Loop through the favorite cards and display them
            favoriteCards.forEach((cardContent, index) => {
                const cardDiv = document.createElement("div");
                cardDiv.className = "favorite-card";
                cardDiv.textContent = cardContent;
                favoritesContainer.appendChild(cardDiv);
            });
        } else {
            const favoritesContainer = document.querySelector(".favorites");
            favoritesContainer.textContent = "No favorite cards saved.";
        }
    } else {
        alert("Local storage is not available. Unable to display favorite cards.");
    }
}

// Call the function to display favorite cards when the page loads
displayFavoriteCards();
