$(function() {
    
var test = 'snippets/test-scientists.html';

var loadinghtml = '<div id="loading-center">';
loadinghtml += '<img src="img/ajax-loader.gif">';
loadinghtml += '</div>';

$('#main-content').html(loadinghtml);


$.ajax({
    async: false,
    // The URL for the request
    url: test,

    // Whether this is a POST or GET request
    type: "GET",
 
    // The type of data we expect back
    dataType : "html"
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function( response ) {
    $( "#main-content" ).html(response);
  });
  
    var used = new Array();
    for(var i = 0; i < 49; i++){
        used[i] = 0;
    }


    for(i = 0; i < 48; i++) {
        var x = Math.floor((Math.random() * 48) + 1);
        while(used[x] === 1) {
            x = Math.floor((Math.random() * 48) + 1);
        }
        used[x] = 1;
        var idn = '#' + (i + 1);
        var imgid = $( idn ).find( "div.img img" ).attr( "src" );
        var fi = imgid.lastIndexOf("/");
        var se = imgid.indexOf(".");
        imgid = imgid.slice(0, fi) + '/' + x + imgid.slice(se, imgid.length);
        $(idn).find( "div.img img" ).attr( "src",  imgid);
    }
  
});

