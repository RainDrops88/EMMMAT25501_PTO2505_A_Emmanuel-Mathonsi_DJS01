import { seasons as seasonsData } from '../data.js';

export const seasons = {
  getSeasonsList(showId) {
    const matched = seasonsData.find(s => s.id === showId);
    if (!matched || !Array.isArray(matched.seasonDetails)) return [];
    return matched.seasonDetails.map(sd => sd.title || 'Unknown');
  }
}