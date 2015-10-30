$(document).ready(function(){
  $('#logo').css('-webkit-transform','translateY(300px)');
  generate();
  update();
  var spin = window.setInterval(update,5000);
});

/*
    objects is an array of cloud bases
    layers is an array of cloud layers
*/
var objects = [],
    layers = [],
    world = document.getElementById( 'world' ),
    viewport = document.getElementById( 'viewport' ),
    worldXAngle = 0,
    worldYAngle = 0,
    d = 0;

/*
    Event listener to transform mouse position into angles 
    from -180 to 180 degress, both vertically and horizontally
*/
window.addEventListener( 'mousemove', function( e ) {
    worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 10;
    worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 10;
    updateView();
} );
 
/*
    Changes the transform property of world to be
    translated in the Z axis by d pixels,
    rotated in the X axis by worldXAngle degrees and
    rotated in the Y axis by worldYAngle degrees.
*/
function updateView() {
   world.style.webkitTransform = 'translateZ( ' + d + 'px ) \
        rotateX( ' + worldXAngle + 'deg) \
        rotateY( ' + worldYAngle + 'deg)';

        /*
        for(var i = 0; i< objects.length; i++)
        {
          var div = objects[i];
          div.data.rX = -worldXAngle;
          div.data.rY = -worldYAngle;

          var t = 'translateX( ' + div.data.x + 'px ) \
          translateY( ' + div.data.y + 'px ) \
          translateZ( ' + div.data.z + 'px ) \
          rotateX( ' + div.data.rX + 'deg ) \
          rotateY( ' + div.data.rY + 'deg )\
          scale(' + div.data.s + ') ';

          div.style.transform = t;
          div.style.webkitTransform = t;
        }
        */
}
 
/*
    Clears the DOM of previous clouds bases 
    and generates a new set of cloud bases
*/
function generate() {
    objects = [];
    layers = [];
   /* if ( world.hasChildNodes() ) {
        while ( world.childNodes.length >= 1 ) {
            world.removeChild( world.firstChild );       
        } 
    }*/

    for( var i = 0; i < 300; i++ )
    {
      objects.push(createCloud('floor') );
    }

    for( var j = 0; j < 24; j++ ) 
    {
      objects.push( createCloud('puff') );
    }
}
 
/*
    Creates a single cloud base: a div in world
    that is translated randomly into world space.
    Each axis goes from -256 to 256 pixels.
*/
function createCloud(type) {
    type = (typeof type == 'undefined') ? 'puff' : type;

    switch(type)
    {
      case 'floor':
        var xLimit = [-800, $(window).width()+800],
        yLimit = [$(window).height() - 100, $(window).height()],
        zLimit = [-400,400],
        specialClass = 'floor';
      break;
      case 'puff':
        var xLimit = [0, $(window).width()],
        yLimit = [0, $(window).height()],
        zLimit = [-400,100],
        classModifier = randomBetween(1,3);
        specialClass = 'puff-' + classModifier;
      break;
    }

    var div = document.createElement( 'div'  );
    div.className = 'cloudBase ' + specialClass;

    div.data = {
      x:  randomBetween(xLimit[0],xLimit[1]),
      y:  randomBetween(yLimit[0],yLimit[1]),
      z:  randomBetween(zLimit[0],zLimit[1]),
      rX: 0,
      rY: 0,
      rZ: randomBetween(-90,90),
      s: Math.random() * 2 + 0.5
    }

    var t = 'translateX( ' + div.data.x + 'px ) \
        translateY( ' + div.data.y + 'px ) \
        translateZ( ' + div.data.z + 'px ) \
        scale( ' + div.data.s + ' )';
    div.style.transform = t;
    div.style.msTransform = t;
    div.style.mozTransform = t;
    div.style.webkitTransform = t;
    world.appendChild( div );

    var cloud = document.createElement('div');
    cloud.className = 'cloudLayer';
    var t = 'rotateZ( ' + div.data.rZ + 'deg )';
    cloud.style.transform = t;
    cloud.style.msTransform = t;
    cloud.style.mozTransform = t;
    cloud.style.webkitTransform = t;
    div.appendChild(cloud);

    return div;

}

/*
    Iterate layers[], update the rotation and apply the
    inverse transformation currently applied to the world.
    Notice the order in which rotations are applied.
*/
function update(){
    for( var j = 0; j < objects.length; j++ ) {
        var object = objects[ j ];
        var cloud = object.childNodes[0];
        object.data.rZ += 4;
        var t = 'rotateZ(' + object.data.rZ + 'deg )';
        cloud.style.transform = t;
        cloud.style.mozTransform = t;
        cloud.style.webkitTransform = t;
    }
}

function randomBetween(from,to)
{
    return Math.floor(Math.random()*(to-from+1)+from);
}

