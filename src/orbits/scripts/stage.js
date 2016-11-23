'use strict';

/* global Dot */

var Stage = function (options) {
  var Stage = this;

  this.element = options.element || false;
  this.context = this.element.getContext('2d') || false;
  this.width = this.element.getBoundingClientRect().width;
  this.height = this.element.getBoundingClientRect().height;
  this.startTime = new Date();

  this.element.width = this.width;
  this.element.height = this.height;

  this.actors = [
    // 1/5-size circles all tangent to the center
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5,
        y: this.height * 0.5 + Math.min((this.width * 0.1),(this.height * 0.1)),
        radius: Math.min((this.width * 0.1),(this.height * 0.1)),
        angle: Math.PI * 1.5, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 192 * -1 )
      }
    },
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5 + Math.min((this.width * 0.1),(this.height * 0.1)),
        y: this.height * 0.5,
        radius: Math.min((this.width * 0.1),(this.height * 0.1)),
        angle: Math.PI, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 192 * -1 )
      }
    },
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5,
        y: this.height * 0.5 - Math.min((this.width * 0.1),(this.height * 0.1)),
        radius: Math.min((this.width * 0.1),(this.height * 0.1)),
        angle: Math.PI / 2, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 192 * -1 )
      }
    },
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5 - Math.min((this.width * 0.1),(this.height * 0.1)),
        y: this.height * 0.5,
        radius: Math.min((this.width * 0.1),(this.height * 0.1)),
        angle: 0, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 192 * -1 )
      }
    },

    // 2/5-size circles tangent left and right of center
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5 - Math.min((this.width * 0.2),(this.height * 0.2)),
        y: this.height * 0.5,
        radius: Math.min((this.width * 0.2),(this.height * 0.2)),
        angle: 0, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 384 * -1 )
      }
    },
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5 + Math.min((this.width * 0.2),(this.height * 0.2)),
        y: this.height * 0.5,
        radius: Math.min((this.width * 0.2),(this.height * 0.2)),
        angle: Math.PI, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 384 * -1 )
      }
    },
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5 - Math.min((this.width * 0.3),(this.height * 0.3)),
        y: this.height * 0.5,
        radius: Math.min((this.width * 0.3),(this.height * 0.3)),
        angle: 0, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 576 * -1 )
      }
    },
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5 + Math.min((this.width * 0.3),(this.height * 0.3)),
        y: this.height * 0.5,
        radius: Math.min((this.width * 0.3),(this.height * 0.3)),
        angle: Math.PI, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 576 * -1 )
      }
    },
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5 - Math.min((this.width * 0.4),(this.height * 0.4)),
        y: this.height * 0.5,
        radius: Math.min((this.width * 0.4),(this.height * 0.4)),
        angle: 0, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 768 * -1 )
      }
    },
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5 + Math.min((this.width * 0.4),(this.height * 0.4)),
        y: this.height * 0.5,
        radius: Math.min((this.width * 0.4),(this.height * 0.4)),
        angle: Math.PI, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 768 * -1 )
      }
    },
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5 - Math.min((this.width * 0.5),(this.height * 0.5)),
        y: this.height * 0.5,
        radius: Math.min((this.width * 0.5),(this.height * 0.5)),
        angle: 0, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 960 * -1 )
      }
    },
    {
      type: 'circle',
      position : {
        x: 0,
        y: 0,
      },
      radius: 1,
      fill: {
        r: 0,
        g: 153,
        b: 204,
        a: 1
      },
      orbit: {
        x: this.width * 0.5 + Math.min((this.width * 0.5),(this.height * 0.5)),
        y: this.height * 0.5,
        radius: Math.min((this.width * 0.5),(this.height * 0.5)),
        angle: Math.PI, // Math.random() * 2 * Math.PI,
        speed: ( 2 * Math.PI / 960 * -1 )
      }
    },
  ];

  // this.actors = [];

  // for(var i = 0; i < 20; i++) {
  //   var radius = Math.floor(Math.random() * (1200 - 240 + 1) + 240);
  //   var thisDot = {
  //     type: 'circle',
  //     position : {
  //       x: this.width * 0.1,
  //       y: this.height * 0.5,
  //     },
  //     radius: 1,
  //     fill: {
  //       r: 0,
  //       g: 153,
  //       b: 204,
  //       a: 1
  //     },
  //     orbit: {
  //       x: (Math.random() + 0.5) * this.width * 0.5,
  //       y: (Math.random() + 0.5) * this.height * 0.5,
  //       radius: radius,
  //       angle: Math.random() * 2 * Math.PI,
  //       speed: ( 2 * Math.PI / radius * -1 )
  //     }
  //   };
  //   this.actors.push(thisDot);
  // }

  window.requestAnimationFrame(function () {
    Stage.animate();
  });
};



Stage.prototype.animate = function() {
  var Stage = this;
  var ctx = Stage.context;

  var tempCanvas = document.createElement('canvas');
  tempCanvas.width = this.width;
  tempCanvas.height = this.height;
  var tempContext = tempCanvas.getContext('2d');

  ctx.clearRect(0, 0, Stage.width, Stage.height);
  for(var i = 0; i < Stage.actors.length; i++) {
    var dot = Stage.actors[i];

    ctx.beginPath();
    ctx.arc(dot.orbit.x, dot.orbit.y, dot.orbit.radius, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#333';
    ctx.stroke();
  }

  for(var i = 0; i < Stage.actors.length; i++) {
    var dot = Stage.actors[i];

    // ctx.beginPath();
    // ctx.arc(100,100,8, 0, 2 * Math.PI);
    // var gradient = ctx.createRadialGradient(100,100,4,100,100,8);
    // gradient.addColorStop(0, 'rgba(0, 153, 204, 0.5)');
    // gradient.addColorStop(1, 'rgba(0, 153, 204, 0)');
    // ctx.fillStyle = gradient;
    // ctx.fill();

    var trailAngle = dot.orbit.angle;
    for(var j = 100; j >= 0; j -= 1) {
      trailAngle = trailAngle -= ( dot.orbit.speed / 2);
      var trailPosX = Math.cos(trailAngle) * dot.orbit.radius + dot.orbit.x;
      var trailPosY = Math.sin(trailAngle) * dot.orbit.radius + dot.orbit.y;

      ctx.beginPath();
      ctx.arc(trailPosX, trailPosY, dot.radius, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(' + dot.fill.r + ', ' + dot.fill.g + ', ' + dot.fill.b + ', ' + j / 100 + ')';
      ctx.fill();
    }

    dot.orbit.angle += dot.orbit.speed / 2;
  }
  

  window.requestAnimationFrame(function () {
    Stage.animate();
  });
};