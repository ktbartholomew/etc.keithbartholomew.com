'use strict';

var Dot = function (options) {
	this.context = options.ctx;
	this.position = {
		x: options.x || 0,
		y: options.y || 0
	};
	this.radius = options.radius || 0;
	this.fill = options.fill || '#000000';
	this.center = {
		x: options.center.x || 0,
		y: options.y || 0
	};


};