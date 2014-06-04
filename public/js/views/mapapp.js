define([
	'jquery',
	'jqueryui',
	'underscore',
	'backbone',
    'vectormap',
    'worldmap'
	//'module name'  --ex) 'router' for router.js
], function($, jqueryUI, _, Backbone, VectorMap, WorldMap) {

	var MapApp = Backbone.View.extend({
		el : $("#app"),
		initialize : function () {
            this.map = $('#world_map').vectorMap({
                map: WorldMap,
                backgroundColor: '#a5bfdd',
                borderColor: '#818181',
                borderOpacity: 0.25,
                borderWidth: 1,
                color: '#f4f3f0',
                enableZoom: true,
                hoverColor: '#c9dfaf',
                hoverOpacity: null,
                normalizeFunction: 'linear',
                scaleColors: ['#b6d6ff', '#005ace'],
                selectedColor: '#c9dfaf',
                selectedRegion: null,
                showTooltip: true,
                onRegionClick: this.determineCountry
            });
		},
        
        determineCountry : function(element, code, region) {
            console.log("Load map for " + region);
        }      
    });

	var initialize = function () {
		var mapApp = new MapApp;
	};

	return {
		initialize : initialize
	};
});
