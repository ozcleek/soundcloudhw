SC.initialize({
  client_id: 'e77f3d57d9ff8885aa25c5df57461d30'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'ambient' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});

$(".btn-spin-em").click(function(){
	$(".jumbo2").first().show("fast", function(){
		$( this ).next(".jumbo2").show("fast");
	});
});

$(".btn-hush-up").click(function(){
	$(".jumbo2").first().hide("fast", function(){
		$( this ).next(".jumbo2").hide("fast");
	});
});
