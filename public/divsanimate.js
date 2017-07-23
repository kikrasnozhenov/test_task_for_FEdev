var fade = document.getElementById('fade');
$(document).ready(function(){
  if ($("div").css('display') == 'none')
    {
      $(fade).animate({height: 'show'}, 1500);
    }
  else
    {
      $(fade).animate({height: 'hide'}, 2500);
    }
});
