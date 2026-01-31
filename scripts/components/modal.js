
// @ts-check

import { dates } from '../utils/dateConverter.js';
import { genre } from '../utils/genre.js';
import { seasons } from '../utils/season.js';

/**
 * Opens the podcast detail modal with the provided podcast data.
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