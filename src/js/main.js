// The xml2json method is from https://github.com/henrikingo/xml2json
// https://rawgit.com/henrikingo/xml2json/master/xml2json.js

var cors = 'http://crossorigin.me/';
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var API_URL = 'http://www.api.hiztory.org/events/' + month + '/' + day + '/1/15/api.xml';

$.get(cors + API_URL, function(data){
	console.log(data);

	var xml = $.parseXML(data);
    var json = xml2json(xml);
	console.log(json);
});










