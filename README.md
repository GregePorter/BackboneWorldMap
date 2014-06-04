BackboneWorldMap
================

Project using Backbone and jqvmap

This is a basic project that uses Backbone to manipulate a jqvmap. The idea is that a group of people will do research about a particular country, format their research in some standard way and enter it into a database. This will connect to that database and display information about a particular country.

Technologies used:
Backbone
Jasmine
JQVMap (JQuery Vector Map extension for JQuery)
RequireJS

To run:
Download the repo and open the index.html in your favorite browser. 

Currently, a basic map of the world is displayed and you can click on a country. When you click on a country, the console will print 
"You clicked on " + <the name of the clicked country>

Soon, I will work on a way to organize the World map into it's own little view and then have a larger MapApp program control the creation of maps in place of the WorldMap when clicked.

The hope is that when you click on a country, the world map will disappear and you will be met with a map of the country you clicked (if such a map if available)

Each country will have a Country Model and a View though, perhaps, not a unique view or model. Because everything in this project will be relatively static, I wonder if Backbone is really even the right technology for this...

Then again, Backbone does allow me to scale to accomodate more countries and organize viewing those countries from a centralized window.
