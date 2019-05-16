$(function() {

var counter = 0;

var selected = new Array();

for(var i = 0; i < 50; i++){
    selected[i] = 0;
}

$( ".element" ).click(function( event ) {
 
    event.preventDefault();
    var imgid = $( this ).find( "div.img img" ).attr( "src" );
    var fi = imgid.lastIndexOf("/");
    var se = imgid.indexOf(".");
    imgid = imgid.slice(fi + 1, se);

    
 	if(selected[imgid] === 0){
 	    if(counter === 10){
 	        return;
 	    }
 	    selected[imgid] = 1;
 		counter++;	
 		$(this).find("div.img").addClass("selected");
 		$(this).find("div.img img").addClass("selected");
 		if(counter === 10){
 		    
 		}
 	}
 	else{
 	    selected[imgid] = 0;
 		counter--;
 		$( this ).find( "div.img" ).removeClass( "selected" );
 		$( this ).find( "div.img img" ).removeClass( "selected" );
 	}
 	
 	var x = counter + " / 10";
 	
 	$( "#show_cnt" ).html(x);
 	
 	console.log('thats counter ' + counter);

});

});



$(function ( ) {
    
    $("#navbar-toggle").blur(function (event) {
        var scsz = window.innerWidth;
        if(scsz < 768) {
            $("#navbar").collapse('hide');    
        }
    });
});








