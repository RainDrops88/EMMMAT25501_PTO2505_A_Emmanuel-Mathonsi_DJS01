import { genres } from '../data.js';


export const genre = {
  getGenreNames(genreIds) {
    return genreIds.map(id => {
      return genres.find(genre => genre.id === id)?.title|| 'Unknown';
    });
  }
};

