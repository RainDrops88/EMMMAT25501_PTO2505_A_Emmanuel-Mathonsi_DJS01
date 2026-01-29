// @ts-check
import { createModal} from "./components/modal.js";
import { podcasts } from "./data.js";
import { createPodcastCard } from "./components/podcastCard.js";


const podcastCardsContainer = document.getElementById('podcast-cards');

// Function to render podcast cards
export function renderPodcastCards() {
    if (!podcastCardsContainer) return;
    podcastCardsContainer.innerHTML = '';
    podcasts.forEach(podcast => {
        const card = createPodcastCard(podcast);
        podcastCardsContainer.appendChild(card);
    });
    

}




// Initial rendering of podcast cards

function init() {
    renderPodcastCards();
}
init();