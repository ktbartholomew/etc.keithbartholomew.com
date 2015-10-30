$(document).ready(function(){
    windowSize = {width : $(window).width() , height : $(window).height()};
    
    $('#i-filler').css('height',windowSize.height * 0.25 + 'px');
    
  $(window).scroll(function(){
    pos = $(window).scrollTop();


    var i1 = {start: 0, end: 700};
    var hl2 = {start:0, end: 375};
    bgPos = pos / -2;
    console.log(bgPos);
    $('html').css('background-position','0px ' + bgPos + 'px'
    );
  
    if (0 <= pos && pos <= 700)
    {
      divSize = $('#i1-left').width();
      var n = (50 - (pos/i1.end * 100));
      var m = (50 + (pos/i1.end * 100));
      var o = pos/hl2.end;
      var p = pos/hl2.end * 15;
  
      $('#i1-left').css('left', n + '%').css('-webkit-transform','rotate(-' + p + 'deg)');
      $('#i1-right').css('left',m + '%').css('-webkit-transform','rotate(' + p + 'deg)');
      $('#hl2').css('transform','scale(' + o + ')');
    }
    /*
    if(pos + windowSize.height >= 1650 && pos <= 2200)
    {
      originalPos = 1550;
      pPos = originalPos + (pos / 2200 * 100) * 2;
      
      $('#i4').css('top',pPos + 'px');
    }
    if(pos + windowSize.height >= 2150 && pos <= 2600)
    {
      originalPos = 2150;
      pPos = originalPos + (pos / 2600 * 100) * 2;
      
      $('#i5').css('top',pPos + 'px');
    } */
    
    if(pos + (windowSize.height / 2) >= 2900 && pos + (windowSize.height / 2) <= 3550)
    {
      var listHeight = $('#hl7').height();
      var midPoint = pos + (windowSize.height / 2);
      
      $('#hl6').css('top', midPoint + 'px');
      $('#hl7').children().each(function(){
        var diff = Math.abs($(this).offset().top - $(window).scrollTop() - windowSize.height / 2);
        $(this).css('opacity', 1 - (diff / (windowSize.height / 2)));
      });
    }
    else if(pos + (windowSize.height / 2) >= 3550 && $('#hl6').position().top != 3550)
    {
      $('#hl6').css('top','3550px');
    }
    else if(pos + (windowSize.height / 2) <= 2900 && $('#hl6').position().top != 2900)
    {
      $('#hl6').css('top','2900px');
    }
    
  });
});