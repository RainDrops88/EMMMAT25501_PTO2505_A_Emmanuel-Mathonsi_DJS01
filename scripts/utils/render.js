import { seasons } from "../data";
// Function to render podcast cards


export const season = {
    getSeasons(seasonIds) {
    return seasonIds.map(id => {
      return seasons.find(season => season.id === id)?.title || 'Unknown';
    });
    }
};

export const seasonCard = {
    createSeasonCard(season) {
        const card = document.getElementById('season-list');
        card.innerHTML = season.map(season => `
            <h4 class="season-title">${season.title}</h4>
            <p class="season-episodes">Episodes: ${season.episodes}</p>

        `).join();

        return card;
    }
};