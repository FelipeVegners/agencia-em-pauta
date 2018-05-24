//Thumb from Playlist Portfolio de Serviços
var maxVideos = 5;
$.get(
  "https://www.googleapis.com/youtube/v3/playlistItems",{
    part: 'contentDetails,snippet',
    playlistId:'PL4kAssCawr9SOzlhuPWR6lKa3crpkdu7V',
    kind: 'youtube#videoListResponse',
    maxResults: maxVideos,
    regionCode: 'IN',
    key: 'AIzaSyAJoM15s0gVHw7pPUTbH3bL6TEgabc4JVA'},
    function(data){
      var output;
      $.each(data.items, function(i, item){
        console.log(item);
              thumb = item.snippet.thumbnails.high.url;
        output = '<div id="img"><img src="' + thumb + '"></div>';
        $('#thumbnail').append(output);
      })
    }
  );
