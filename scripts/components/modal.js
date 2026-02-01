
// @ts-check

import { dates } from '../utils/dateConverter.js';
import { genre } from '../utils/genre.js';
import { seasons } from '../utils/season.js';

/**
 * Opens the podcast detail modal with the provided podcast data.
 * @param {Object} podcast - The podcast data object.
 * @param {string} podcast.title - The title of the podcast.
 * @param {string} podcast.image - The URL of the podcast image.
 * @param {string} podcast.description - The description of the podcast.
 * @param {Array<number>} podcast.genres - The array of genre IDs.
 * @param {string} podcast.updated - The last updated date of the podcast.
 * @param {number} podcast.id - The unique identifier of the podcast.
 * @param {Array<Object>} podcast.seasons - The array of seasons for the podcast.
 * @param {string} podcast.seasons[].title - The title of the season.
 * @param {number} podcast.seasons[].episodes - The number of episodes in the season.
 * @returns {HTMLElement} The created modal element.
 */

export function createModal(podcast) {
    const modal = document.createElement('dialog');
    modal.id = 'podcast-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-section">
            <div class="modal-header">
                <h2 class="modal-title">${podcast.title}</h2>
                <button class="close-modal" aria-label="Close Modal">&times;</button>
            </div>
            <div class="modal-content">
                <img src="${podcast.image}" alt="Podcast Image" class="modal-podcast-image">
                <div class="modal-details">
                    <h3>Description</h3>
                    <p class="title-description">${podcast.description}</p>
                    <div class="modal-genres">
                        <h3>Genres</h3>
                        ${genre.getGenreNames(podcast.genres).map(g => `
                            <span class="genre">${g}</span>
                            `).join('')}
                    </div>
                    <p>Last Updated: ${dates.formatDate(podcast.updated)}</p>
                </div>
            </div>
            <div class="seasons-info">
                <h3>Seasons</h3>
            
                <div class="seasons-list">
                    ${seasons.getSeasonsList(podcast.id).map(seasonTitle => `
                        <div class="season-item"><p>${seasonTitle.title}</p>
                        <p> ${seasonTitle.episodes} Episodes </p>
                        </div>
                    `).join('')}
                    
                </div>

            </div>
            
        </div>
    `;

    document.body.appendChild(modal);
    const closeModalButton = modal.querySelector('.close-modal');
    closeModalButton.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent page reload 
        // if button is inside a form or has default behavior
        modal.close();
        document.body.removeChild(modal);
    });
    modal.showModal();
}