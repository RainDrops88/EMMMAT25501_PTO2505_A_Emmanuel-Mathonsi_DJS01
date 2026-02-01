// @ts-check

import { podcasts } from "./data.js";
import { createPodcastCard } from "./components/podcastCard.js";


const podcastCardsContainer = document.getElementById('podcast-cards');

/**
 * Renders all podcast cards into the podcast cards container and modal.
 * 
 */
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