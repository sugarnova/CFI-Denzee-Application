const jokeApiUrl = 'https://official-joke-api.appspot.com/random_joke';
const quoteApiUrl = 'https://api.quotable.io/random';

async function fetchJoke() {
    const response = await fetch(jokeApiUrl);
    const data = await response.json();
    return data.setup + ' ' + data.punchline;
}

async function fetchQuote() {
    const response = await fetch(quoteApiUrl);
    const data = await response.json();
    return data.content;
}

function playAudio() {
    var x = document.getElementById("alert-sound");
    x.play();
}

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        const cardInner = card.querySelector('.card-inner');
        const contentElement = card.querySelector('.content');

        let clickCount = 0;

        card.isFront = true;

        cardInner.addEventListener('click', async () => {
            if (clickCount === 0) {
                contentElement.textContent = "Click to flip for a joke or quote.";
                cardInner.classList.toggle('flipped');
            } else if (clickCount === 1) {
                const content = await fetchQuote();
                contentElement.textContent = content;
            } else {
                const content = await fetchJoke();
                contentElement.textContent = content;
                cardInner.classList.toggle('flipped');
            }

            clickCount++;
            if (clickCount === 3) {
                clickCount = 0;
            }
        });
    });
});


function openFavoritesPage() {
    // Redirect to the favorites page (favorites.html)
    window.location.href = "favorites.html";
}

// Function to save a card to favorites
function saveToFavorites(cardContent) {
    // Check if local storage is available
    if (typeof(Storage) !== "undefined") {
        // Get the existing favorite cards or initialize an empty array
        let favoriteCards = JSON.parse(localStorage.getItem("favoriteCards")) || [];

        // Add the card content to the favoriteCards array
        favoriteCards.push(cardContent);

        // Save the updated favoriteCards array to local storage
        localStorage.setItem("favoriteCards", JSON.stringify(favoriteCards));
    } else {
        alert("Local storage is not available. Unable to save to favorites.");
    }
}