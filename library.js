const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       for (const playlistId in library.playlists) {
              const playlist = library.playlists[playlistId];
              console.log(`${playlist.id}:  ${playlist.name}: - ${playlist.tracks.length} track${playlist.tracks.length !== 1 ? 's' : ''}`)
       }

}

printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       for (const trackId in library.tracks) {
              const track = library.tracks[trackId];
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }

}

printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       const playlist = library.playlists[playlistId];

  if (!playlist) {
    console.log(`Playlist with ID ${playlistId} not found.`);
    return;
  }

  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} track${playlist.tracks.length !== 1 ? 's' : ''}`);

  for (const trackId of playlist.tracks) {
    const track = library.tracks[trackId];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

printPlaylist('p01');


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       const track = library.tracks[trackId];
  const playlist = library.playlists[playlistId];

  if (!track) {
    console.log(`Track with ID ${trackId} not found.`);
    return;
  }

  if (!playlist) {
    console.log(`Playlist with ID ${playlistId} not found.`);
    return;
  }

  // Check if the track is already in the playlist
  if (playlist.tracks.includes(trackId)) {
    console.log(`Track with ID ${trackId} is already in the playlist.`);
    return;
  }

  // Add the track to the playlist
  playlist.tracks.push(trackId);
  console.log(`Track with ID ${trackId} added to playlist with ID ${playlistId}.`);
};

addTrackToPlaylist('t03', 'p01');


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
       const newTrackId = generateUid();
       const newTrack = {
       id: newTrackId,
       name: name,
       artist: artist,
       album: album
       }

       library.tracks[newTrackId] = newTrack;

       console.log(`Track with ID ${newTrackId} added to the library.`);

}

// adds a playlist to the library
const addPlaylist = function(name) {
       const newPlaylistId = generateUid();
       const newPlaylist = {
       id: newPlaylistId,
       name: name,
       tracks: []
       }

       library.playlists[newPlaylistId] = newPlaylist;

       console.log(`Playlist with ID ${newPlaylistId} added to the library.`);
}

addTrack("New Track", "New Artist", "New Album");
addPlaylist("New Playlist");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}