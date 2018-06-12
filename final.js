$(document).ready(function(){

  $('#play-img').click(function(){
    $(this).hide(1600, function(){
      $body = $('body');
      $body.css('background-color', 'unset');
      $body.css('background-image', 'url(img/background/i-love-you.jpg)');
      $('h1').animate({opacity: 1}, 2500, function(){
        $('#msg-1').animate({opacity: 1}, 2500, function(){
          $('#msg-2').animate({opacity: 1}, 2500, function(){
            $('video').show(3000, function(){
              this.play();
            });
          });
        });
      });
    });
  });

});
