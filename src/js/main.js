var cors = 'http://crossorigin.me/';
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var API_URL = 'http://www.api.hiztory.org/events/' + month + '/' + day + '/1/15/api.xml';

$.get(cors + API_URL, function(data){
	console.log(data);

	var xml = $.parseXML(data)
	console.log(xml);
   });











