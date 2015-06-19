var cors = 'http://crossorigin.me/';
var date = new Date();
var day = date.getDay();
var month = date.getMonth();
var API_URL = 'http://www.api.hiztory.org/events/' + month + '/' + day + '/1/15/api.xml'

$.get(cors + API_URL, function(data){
	console.log(data);
});

