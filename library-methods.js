const library = {
    tracks: { // ...
            },
  
    playlists: { // ...
               },
  
    // it's now a method!
    printPlaylists: function () {
        for (const playlistId in this.playlists) {
            const playlist = this.playlists[playlistId];
            console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} track${playlist.tracks.length !== 1 ? 's' : ''}`);
          }
    },
  
    // it's now a method!
    printTracks: function () {
        for (const trackId in this.tracks) {
            const track = this.tracks[trackId];
            console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
          }
    },
  
    // ...
  
  };
