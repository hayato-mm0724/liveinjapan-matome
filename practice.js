'use strict'
{
  $(function(){
    $('.schedule-list').click(function(){
      const $details = $(this).find('.details');
      if($details.hasClass('open')){
        $details.removeClass('open');
        $details.slideUp();
        $(this).find('span').text('>');
      } else {
        $details.addClass('open');
        $details.slideDown();
        $(this).find('span').text('v');
      }
    });
  });

  const pics_srcs = ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg"];
  let num = -1;

  function slideshow_timer(){
    if(num === 2){
      num = 0;
    } else {
      num ++;
    }
    document.getElementById("pic").src = pics_srcs[num];
  }
  setInterval(slideshow_timer, 4000);
}
