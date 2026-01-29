
// @ts-check
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
                        ${podcast.genres.map(genre => `<span class="genre">${genre}</span>`).join('')}
                    </div>
                    <p>Last Updated: ${podcast.updated}</p>
                </div>
            </div>
            <div class="seasons-info">
                <p>📁 ${podcast.seasons} seasons</p>
                
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    const closeModalButton = modal.querySelector('.close-modal');
    closeModalButton.addEventListener('click', () => {
        modal.close();
        document.body.removeChild(modal);
    });
    modal.showModal();
}