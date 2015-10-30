var scenes = 
{
  index : 0,
  elements: 
  [
    {
      selector : $('#s0')
    },
    {
      selector : $('#s1'),
      z : 0
    },
    {
      selector : $('#s2'),
      z : 400
    },  
    {
      selector : $('#s4'),
      z : 1200
    },
    {
      selector : $('#s5'),
      z : 1600
    }
  ],
  next : function(){
    if(typeof this.elements[this.index + 1] != "undefined")
    {
      this.elements[this.index].selector.addClass('z-near');
      this.elements[this.index + 1].selector.removeClass('z-far');
      this.index = this.index + 1;
    }
  },
  prev : function(){
    if(typeof this.elements[this.index - 1] != "undefined")
    {
      this.elements[this.index].selector.addClass('z-far');
      this.elements[this.index - 1].selector.removeClass('z-near');
      this.index = this.index - 1;
    }
  }
}

$(document).keyup(function(e){
  switch(e.which){
    case 37:
      e.preventDefault();
      scenes.prev();
    break;
    case 39:
      e.preventDefault();
      scenes.next();
    break;
  }
});

$(document).ready(function(){
  var ux_strings = {
    noTouch : "Use your keyboard&rsquo;s left and right arrow keys",
    touch   : "Pinch or Zoom with your fingers"
  };

  if(detect_touch())
  {
    $('#ux-instructions1').html(ux_strings.touch);
  }
  else
  {
    $('#ux-instructions1').html(ux_strings.noTouch);
  }
});


var hammertime = document.getElementById('stage');
Hammer(hammertime).on('touch',function(ev){
  ev.gesture.preventDefault();
});

Hammer(hammertime).on('pinchin',function(ev){
  if(ev.gesture.scale < 0.5)
  {
    ev.gesture.stopDetect();
    scenes.prev();
  }
});

Hammer(hammertime).on('pinchout',function(ev){
  if(ev.gesture.scale > 1.5)
  {
    ev.gesture.stopDetect();
    scenes.next();
  }
});

function detect_touch()
{
  var bool;
  if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    bool = true;
  } else {
    bool = false;
  }

  return bool;
}