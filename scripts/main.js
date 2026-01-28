// @ts-check
import { Modal} from "./ui/modal.js";
import { podcasts } from "./data.js";
import { PodcastCard } from "./ui/podcastCard.js";
const podcastCardsContainer = document.getElementById('podcast-cards');

// Function to render podcast cards
export function renderPodcastCards() {
    if (!podcastCardsContainer) return;
    podcastCardsContainer.innerHTML = '';
    podcasts.forEach(podcast => {
        const card = PodcastCard.createCard(podcast);
        podcastCardsContainer.appendChild(card);
    });

}


// Initial rendering of podcast cards
renderPodcastCards();
