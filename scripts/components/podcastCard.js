// @ts-check
import { createModal} from "./modal.js";
import { genre } from "../utils/genre.js";
import { dates } from "../utils/dateConverter.js";

    /**
     * Creates a podcast card element.
     * @param {Object} podcast - The podcast data.
     * @param {string} podcast.id - The unique identifier of the podcast.
     * @param {string} podcast.image - The URL of the podcast image.
     * @param {string} podcast.title - The title of the podcast.
     * @param {number[]} podcast.seasons - The number of seasons on the podcast.
     * @param {number[]} podcast.genres - The genres of the podcast.
     * @param {string} podcast.updated - The last updated date of the podcast.
     * @returns {HTMLElement} The podcast card element.
     */


export function createPodcastCard(podcast) {
    const podcastList = document.getElementById('podcast-cards');
    const card = document.createElement('div');
    card.className = 'podcast-card';
    card.innerHTML = `
        <img src="${podcast.image}" alt="Podcast Image" class="podcast-image">
        <div class="podcast-info">
            <h3 class="podcast-title">${podcast.title}</h3>
            <p class="podcast-seasons">📁 ${podcast.seasons} seasons</p>
            ${genre.getGenreNames(podcast.genres).map(g => `
                            <span class="genre">${g}</span>
                            `).join('')}
            <p class="podcast-updated">Last Updated: ${dates.formatDate(podcast.updated)}</p>
        </div>
    `;
    card.addEventListener('click', () => {
        createModal(podcast);
    });
    return card;
}