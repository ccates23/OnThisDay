'use strict';

var cors = 'http://crossorigin.me/';
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var API_URLweather = 'http://api.wunderground.com/api/66d6d8486e5dfda0/forecast10day/q/37201.json';
var API_URLevents = 'http://www.api.hiztory.org/events/' + month + '/' + day + '/1/15/api.xml';
var API_URLbirths = 'http://www.api.hiztory.org/births/' + month + '/' + day + '/1/15/api.xml';
var API_URLdeaths = 'http://www.api.hiztory.org/deaths/' + month + '/' + day + '/1/15/api.xml';
var births = [];
var deaths = [];
var events = [];

$.get(cors + API_URLevents, function (res) {
    var xml = $.parseXML(res);
    $(xml).find('event').each(function () {
        events.push({
            date: $(this).attr('date'),
            content: $(this).attr('content')
        });
        var count = events.length;
        $.each(events, function (key, value) {
            if (! --count) {
                $('.events').append('<p>' + value.date + '<p>');
                $('.events').append('<p>' + value.content + '<p>');
            }
        });
    });
});

$.get(cors + API_URLbirths, function (res) {

    var xml = $.parseXML(res);
    $(xml).find('event').each(function () {
        births.push({
            date: $(this).attr('date'),
            content: $(this).attr('content')
        });
        var count = births.length;
        $.each(births, function (key, value) {
            if (! --count) {
                $('.births').append('<p>' + value.date + '<p>');
                $('.births').append('<p>' + value.content + '<p>');
            }
        });
    });
});

$.get(cors + API_URLdeaths, function (res) {

    var xml = $.parseXML(res);
    $(xml).find('event').each(function () {
        deaths.push({
            date: $(this).attr('date'),
            content: $(this).attr('content')
        });
        var count = deaths.length;
        $.each(deaths, function (key, value) {
            if (! --count) {
                $('.deaths').append('<p>' + value.date + '<p>');
                $('.deaths').append('<p>' + value.content + '<p>');
            }
        });
    });
});

// var button = document.querySelector('button');

// button.onclick = function () {
//   var input = document.querySelector('input');
//   var image = document.querySelector('img');
//   var zipcode = input.value;

$.get(API_URLweather, function (data) {
    for (var i = 0; i < 7; i++) {
        var imageUrl = data.forecast.simpleforecast.forecastday[i].icon_url;
        var high = data.forecast.simpleforecast.forecastday[i].high.fahrenheit;
        var low = data.forecast.simpleforecast.forecastday[i].low.fahrenheit;
        var weekday = data.forecast.simpleforecast.forecastday[i].date.weekday;
        var imgtag = document.createElement('img');

        imgtag.id = 'weathericon';
        imgtag.src = imageUrl;
        console.log(imgtag);
        $('.weather').append('<td>' + high + '/' + low + ' ' + weekday + '</td>');
    }
});
//# sourceMappingURL=data:application/json;base64,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cmlnaW4ubWUvJztcbnZhciBkYXRlID0gbmV3IERhdGUoKTtcbnZhciBkYXkgPSBkYXRlLmdldERhdGUoKTtcbnZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG52YXIgQVBJX1VSTHdlYXRoZXIgPSAnaHR0cDovL2FwaS53dW5kZXJncm91bmQuY29tL2FwaS82NmQ2ZDg0ODZlNWRmZGEwL2ZvcmVjYXN0MTBkYXkvcS8zNzIwMS5qc29uJztcbnZhciBBUElfVVJMZXZlbnRzID0gJ2h0dHA6Ly93d3cuYXBpLmhpenRvcnkub3JnL2V2ZW50cy8nICsgbW9udGggKyAnLycgKyBkYXkgKyAnLzEvMTUvYXBpLnhtbCc7XG52YXIgQVBJX1VSTGJpcnRocyA9ICdodHRwOi8vd3d3LmFwaS5oaXp0b3J5Lm9yZy9iaXJ0aHMvJyArIG1vbnRoICsgJy8nICsgZGF5ICsgJy8xLzE1L2FwaS54bWwnO1xudmFyIEFQSV9VUkxkZWF0aHMgPSAnaHR0cDovL3d3dy5hcGkuaGl6dG9yeS5vcmcvZGVhdGhzLycgKyBtb250aCArICcvJyArIGRheSArICcvMS8xNS9hcGkueG1sJztcbnZhciBiaXJ0aHMgPSBbXTtcbnZhciBkZWF0aHMgPSBbXTtcbnZhciBldmVudHMgPSBbXTtcblxuJC5nZXQoY29ycyArIEFQSV9VUkxldmVudHMsIGZ1bmN0aW9uKHJlcyl7XG5cdHZhciB4bWwgPSAkLnBhcnNlWE1MKHJlcyk7XG4gICAgJCh4bWwpLmZpbmQoJ2V2ZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgXHRldmVudHMucHVzaCh7XG4gICAgXHRcdGRhdGU6ICQodGhpcykuYXR0cignZGF0ZScpLFxuICAgIFx0XHRjb250ZW50OiAkKHRoaXMpLmF0dHIoJ2NvbnRlbnQnKVxuICAgICAgICAgICAgfSk7XG4gICAgXHRcdFx0dmFyIGNvdW50ID0gZXZlbnRzLmxlbmd0aDtcbiAgICBcdFx0XHRcdCQuZWFjaChldmVudHMsIGZ1bmN0aW9uKGtleSx2YWx1ZSkge1xuICAgIFx0XHRcdFx0XHRpZiAoIS0tY291bnQpIHtcbiAgICBcdFx0XHRcdFx0XHQkKCcuZXZlbnRzJykuYXBwZW5kKCc8cD4nICsgdmFsdWUuZGF0ZSArICc8cD4nKVxuICAgIFx0XHRcdFx0XHRcdCQoJy5ldmVudHMnKS5hcHBlbmQoJzxwPicgKyB2YWx1ZS5jb250ZW50ICsgJzxwPicpXG4gICAgXHRcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0fSk7XG4gICAgXHRcdFx0fSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4kLmdldChjb3JzICsgQVBJX1VSTGJpcnRocywgZnVuY3Rpb24ocmVzKXtcblx0XG5cdHZhciB4bWwgPSAkLnBhcnNlWE1MKHJlcyk7XG4gICAgJCh4bWwpLmZpbmQoJ2V2ZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgXHRiaXJ0aHMucHVzaCh7XG4gICAgXHRcdGRhdGU6ICQodGhpcykuYXR0cignZGF0ZScpLFxuICAgIFx0XHRjb250ZW50OiAkKHRoaXMpLmF0dHIoJ2NvbnRlbnQnKVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNvdW50ID0gYmlydGhzLmxlbmd0aDtcbiAgICBcdFx0XHRcdCQuZWFjaChiaXJ0aHMsIGZ1bmN0aW9uKGtleSx2YWx1ZSkge1xuICAgIFx0XHRcdFx0XHRpZiAoIS0tY291bnQpIHtcbiAgICBcdFx0XHRcdFx0XHQkKCcuYmlydGhzJykuYXBwZW5kKCc8cD4nICsgdmFsdWUuZGF0ZSArICc8cD4nKVxuICAgIFx0XHRcdFx0XHRcdCQoJy5iaXJ0aHMnKS5hcHBlbmQoJzxwPicgKyB2YWx1ZS5jb250ZW50ICsgJzxwPicpXG4gICAgXHRcdFx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFx0XHRcdH0pO1xuICAgICAgICAgICAgfSk7XG5cbiQuZ2V0KGNvcnMgKyBBUElfVVJMZGVhdGhzLCBmdW5jdGlvbihyZXMpe1xuXHRcblx0dmFyIHhtbCA9ICQucGFyc2VYTUwocmVzKTtcbiAgICAkKHhtbCkuZmluZCgnZXZlbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBcdGRlYXRocy5wdXNoKHtcbiAgICBcdFx0ZGF0ZTogJCh0aGlzKS5hdHRyKCdkYXRlJyksXG4gICAgXHRcdGNvbnRlbnQ6ICQodGhpcykuYXR0cignY29udGVudCcpXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY291bnQgPSBkZWF0aHMubGVuZ3RoO1xuICAgIFx0XHRcdFx0JC5lYWNoKGRlYXRocywgZnVuY3Rpb24oa2V5LHZhbHVlKSB7XG4gICAgXHRcdFx0XHRcdGlmICghLS1jb3VudCkge1xuICAgIFx0XHRcdFx0XHRcdCQoJy5kZWF0aHMnKS5hcHBlbmQoJzxwPicgKyB2YWx1ZS5kYXRlICsgJzxwPicpXG4gICAgXHRcdFx0XHRcdFx0JCgnLmRlYXRocycpLmFwcGVuZCgnPHA+JyArIHZhbHVlLmNvbnRlbnQgKyAnPHA+JylcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4vLyB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cbi8vIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuLy8gICB2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuLy8gICB2YXIgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbi8vICAgdmFyIHppcGNvZGUgPSBpbnB1dC52YWx1ZTtcblxuXG5cbiAgICQuZ2V0KEFQSV9VUkx3ZWF0aGVyLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBmb3IoIHZhciBpID0gMCA7IGkgPCA3OyBpKyspe1xuICAgICAgXHR2YXIgaW1hZ2VVcmwgPSBkYXRhLmZvcmVjYXN0LnNpbXBsZWZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmljb25fdXJsO1xuICAgICAgICB2YXIgaGlnaCA9IGRhdGEuZm9yZWNhc3Quc2ltcGxlZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uaGlnaC5mYWhyZW5oZWl0O1xuICAgICAgICB2YXIgbG93ID0gZGF0YS5mb3JlY2FzdC5zaW1wbGVmb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5sb3cuZmFocmVuaGVpdDtcbiAgICAgICAgdmFyIHdlZWtkYXkgPSBkYXRhLmZvcmVjYXN0LnNpbXBsZWZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGUud2Vla2RheTtcbiAgICAgICAgdmFyIGltZ3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIGltZ3RhZy5pZCA9ICd3ZWF0aGVyaWNvbic7XG4gICAgICAgIGltZ3RhZy5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgY29uc29sZS5sb2coaW1ndGFnKTtcbiAgICAgICAgJCgnLndlYXRoZXInKS5hcHBlbmQoJzx0ZD4nKyBoaWdoICsgJy8nICsgbG93ICsgJyAnICsgd2Vla2RheSArICc8L3RkPicpO1xuICAgICAgXG4gICAgfVxuICAgfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==
