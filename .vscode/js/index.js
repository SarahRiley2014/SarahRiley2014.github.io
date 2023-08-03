console.log("Your index.js file is loaded correctly!");


$( ".btn" ).hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );

  $( ".link" ).hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );

var container = $('div');

function scrollParagraph1() {
	var scrollTo = $("#p1");
    var position = scrollTo.offset().top - container.offset().top + container.scrollTop();
	container.animate({
		scrollTop: position
	});
} 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  });

});

$(document).ready(function() {
  var offset = 220;
  var duration = 500;
  $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(duration);
      } else {
          $('.back-to-top').fadeOut(duration);
      }
  });
  
  $('.back-to-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, duration);
      return false;
  })
});
