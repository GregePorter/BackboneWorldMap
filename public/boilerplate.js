define([
    'jquery',
    'jqueryui',
    'underscore',
    'backbone',
    'handlebars',
    '/models/person'
], function($, jqueryUI, _, Backbone, Handlebars, Person){
    
    var Team = Backbone.Collection.extend({
        model: Person,
        initialize: function(){

        }
    });

    return Team;
});
