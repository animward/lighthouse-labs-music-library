const library = {
    tracks: {

    t01: { id: "t01",
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
  
    playlists: { 
        
    p01: { id: "p01",
        name: "Coding Music",
        tracks: ["t01", "t02"]
        },

    p02: { id: "p02",
        name: "Other Playlist",
        tracks: ["t03"]
        }
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
  
    addTrack: function (name, artist, album) {
        const newTrackId = this.generateUid();
        const newTrack = {
        id: newTrackId,
        name: name,
        artist: artist,
        album: album
    }

    this.tracks[newTrackId] = newTrack;
    console.log(`Track with ID ${newTrackId} added to the library.`);

},


    addPlaylist: function (name) {
        const newPlaylistId = this.generateUid();
        const newPlaylist = {
        id: newPlaylistId,
        name: name,
        tracks: []
        }

        this.playlists[newPlaylistId] = newPlaylist;
        console.log(`Playlist with ID ${newPlaylistId} added to the library.`);
  },

    generateUid: function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
};

library.printPlaylists();
library.printTracks();
library.addTrack("New Track", "New Artist", "New Album");
library.addPlaylist("New Playlist");