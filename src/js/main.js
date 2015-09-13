var cors = 'http://crossorigin.me/';
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var API_URLlocation = 'http://api.wunderground.com/api/66d6d8486e5dfda0/geolookup/q/';
var API_URLweather = 'http://api.wunderground.com/api/66d6d8486e5dfda0/forecast10day/q/';
var API_URLevents = 'http://www.api.hiztory.org/events/' + month + '/' + day + '/1/15/api.xml';
var API_URLbirths = 'http://www.api.hiztory.org/births/' + month + '/' + day + '/1/15/api.xml';
var API_URLdeaths = 'http://www.api.hiztory.org/deaths/' + month + '/' + day + '/1/15/api.xml';
var births = [];
var deaths = [];
var events = [];
var zip;

$.get(cors + API_URLevents, function(res){
	var xml = $.parseXML(res);
    $(res).find('event').each(function () {
    	events.push({
    		date: $(this).attr('date'),
    		content: $(this).attr('content')
            });
    			var count = events.length;
    				$.each(events, function(key,value) {
    					if (!--count) {
    						$('.events').append('<p>' + value.date + '<p>')
    						$('.events').append('<p>' + value.content + '<p>')
    					}

    				});
    			});

            });

$.get(cors + API_URLbirths, function(res){
	var xml = $.parseXML(res);
    $(res).find('event').each(function () {
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
    $(res).find('event').each(function () {
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


navigator.geolocation.getCurrentPosition(function(geoposition) {
	var lat = geoposition.coords.latitude;
	var long = geoposition.coords.longitude;
	$.get(API_URLlocation + lat + ',' + long + '.json', function(location) {
	  zip = location.location.zip;
getWeather(zip);
   })

});

function getWeather(zip) {
$.get(API_URLweather + zip + '.json', function (data) {
    for( var i = 0 ; i < 7; i++){
  	var imageUrl = data.forecast.simpleforecast.forecastday[i].icon_url;
    var high = data.forecast.simpleforecast.forecastday[i].high.fahrenheit;
    var low = data.forecast.simpleforecast.forecastday[i].low.fahrenheit;
    var weekday = data.forecast.simpleforecast.forecastday[i].date.weekday;
    var imgtag = document.createElement('img');
    imgtag.id = 'weathericon';
    imgtag.src = imageUrl;
    $('.weather').append('<td>'+  weekday + ' ' + high + '/' + low  + '</td>');
    $('.weather').append( imgtag );
 }

});
};














