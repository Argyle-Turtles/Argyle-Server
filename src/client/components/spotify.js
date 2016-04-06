import m from 'mithril';
/*
Almost all api requests need an authorization token
Get the token by directing the page to this link -> https://accounts.spotify.com:/authorize?client_id=b5dc615d0bcc47109e0ea1c5725f1cb8&response_type=token&
                                                       redirect_uri=http://localhost:3000/?/tablet/&scope=playlist-modify-private playlist-modify-public&show_
                                                       dialog=false
*/
 export const spotify = {
    getPlaylist: function(){
       const accessToken = this.getAuthorization();
       const headerData = function(xhr) {
        xhr.setRequestHeader("Authorization","Bearer "+ accessToken);
        xhr.setRequestHeader("Content-type","application/json");
      };
      m.request({url:"https://api.spotify.com/v1/users/argyleturtles/playlists/1LMIR46zW0b982mupRtH5W/tracks",
          config: headerData,
          method: "GET"
      }).then(function(resp){
        console.log(resp);
      });
    },
    makePlaylist: function(name){
      const accessToken = this.getAuthorization();
      const data = {
          "name":name,
          "public":true
        };
      const headerData = function(xhr) {
        xhr.setRequestHeader("Authorization","Bearer "+ accessToken);
        xhr.setRequestHeader("Content-type","application/json");
      };
      console.log(accessToken);
      m.request({url:"https://api.spotify.com/v1/users/nimrinoth/playlists",
        config: headerData,
        method:"POST",
        data:data,
        dataType:'json',
      }).then(function(resp){
        console.log(resp['id']);
      }); 
    },

    //playlistId example 1LMIR46zW0b982mupRtH5W
    //songId example spotify:track:6FVYwnVrnAEIRnY3bHJb46
    addSong: function(songId,playlistId){
      const accessToken = this.getAuthorization();
      const data = {
        "uris":[songId]
      };
      const headerData = function(xhr){
        xhr.setRequestHeader("Authorization","Bearer "+ accessToken);
        xhr.setRequestHeader("Content-type","application/json");
      };
      m.request({url:"https://api.spotify.com/v1/users/argyleturtles/playlists/"+ playlistId +"/tracks",
        config: headerData,
        method: "POST",
        data:data,
        dataType:'json'
      }).then(function(resp){
        console.log("song added")
      });

    },
    //grabs the authorization token from the hash in the url 
    getAuthorization: function(){
      let urlParams = "";
      let match = "",
      pl     = /\+/g,
      search = /([^&=]+)=?([^&]*)/g,
      decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
      query  = window.location.hash.substring(1);

      urlParams = {};
      while (match = search.exec(query))
      urlParams[decode(match[1])] = decode(match[2]);

      return urlParams["access_token"];
    }

};
