//Filename: app.js

define([
	'jquery',
	'underscore',
	'backbone',
	'views/mapapp'
], function($, _, Backbone, MapApp){

	var initialize = function(){
		MapApp.initialize();
	};

	return {
		initialize : initialize
	};
});
