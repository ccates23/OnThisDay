// The xml2json method is from https://github.com/henrikingo/xml2json
// https://rawgit.com/henrikingo/xml2json/master/xml2json.js

var cors = 'http://crossorigin.me/';
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var API_URLevents = 'http://www.api.hiztory.org/events/' + month + '/' + day + '/1/15/api.xml';
var API_URLbirths = 'http://www.api.hiztory.org/births/' + month + '/' + day + '/1/15/api.xml';
var API_URLdeaths = 'http://www.api.hiztory.org/deaths/' + month + '/' + day + '/1/15/api.xml';
var births = [];
var deaths = [];
var events = [];

$.get(cors + API_URLevents, function(res){
	var xml = $.parseXML(res);
    $(xml).find('event').each(function () {
    	events.push({
    		date: $(this).attr('date'),
    		content: $(this).attr('content')

    		});
    			var count = events.length;
    				$.each(events, function(key,value) {
    					if (!--count) {
    						$('.events').append('<p>' + value.date + '<p>')
    						$('.events').append('<p>' + value.content + '<p>')

    						// console.log(value.content);
    						// console.log(value.date);
    					}

    				});
    			});

});

$.get(cors + API_URLbirths, function(res){
	
	var xml = $.parseXML(res);
    $(xml).find('event').each(function () {
    	births.push({
    		date: $(this).attr('date'),
    		content: $(this).attr('content')
        });
        var count = births.length;
    				$.each(births, function(key,value) {
    					if (!--count) {
    						$('.births').append('<p>' + value.date + '<p>')
    						$('.births').append('<p>' + value.content + '<p>')
    					}
    });
    			});


});

$.get(cors + API_URLdeaths, function(res){
	
	var xml = $.parseXML(res);
    $(xml).find('event').each(function () {
    	deaths.push({
    		date: $(this).attr('date'),
    		content: $(this).attr('content')
        });
        var count = deaths.length;
    				$.each(deaths, function(key,value) {
    					if (!--count) {
    						$('.deaths').append('<p>' + value.date + '<p>')
    						$('.deaths').append('<p>' + value.content + '<p>')
    					}
    				});

    });

});













