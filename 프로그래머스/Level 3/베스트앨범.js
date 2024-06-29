function solution(genres, plays) {
  const genrePlayCount = new Map();
  const genreSongs = new Map();

  genres.forEach((genre, idx) => {
    const playCount = plays[idx];

    genrePlayCount.set(genre, (genrePlayCount.get(genre) || 0) + playCount);

    if (!genreSongs.has(genre)) {
      genreSongs.set(genre, []);
    }
    genreSongs.get(genre).push({ idx: idx, play: playCount });
  });

  const sortedGenres = [...genrePlayCount].sort((a, b) => b[1] - a[1]);

  const answer = [];

  sortedGenres.forEach(([genre]) => {
    const songs = genreSongs.get(genre);

    songs.sort((a, b) => {
      if (b.play === a.play) {
        return a.idx - b.idx;
      }
      return b.play - a.play;
    });

    answer.push(songs[0].idx);
    if (songs.length > 1) {
      answer.push(songs[1].idx);
    }
  });

  return answer;
}
