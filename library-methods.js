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
  
    }
  
    // ...
  
  };
