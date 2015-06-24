// The xml2json method is from https://github.com/henrikingo/xml2json
// https://rawgit.com/henrikingo/xml2json/master/xml2json.js

'use strict';

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
// console.log(value.content);
// console.log(value.date);
//# sourceMappingURL=data:application/json;base64,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c3JjL2pzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgeG1sMmpzb24gbWV0aG9kIGlzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2hlbnJpa2luZ28veG1sMmpzb25cbi8vIGh0dHBzOi8vcmF3Z2l0LmNvbS9oZW5yaWtpbmdvL3htbDJqc29uL21hc3Rlci94bWwyanNvbi5qc1xuXG52YXIgY29ycyA9ICdodHRwOi8vY3Jvc3NvcmlnaW4ubWUvJztcbnZhciBkYXRlID0gbmV3IERhdGUoKTtcbnZhciBkYXkgPSBkYXRlLmdldERhdGUoKTtcbnZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG52YXIgQVBJX1VSTGV2ZW50cyA9ICdodHRwOi8vd3d3LmFwaS5oaXp0b3J5Lm9yZy9ldmVudHMvJyArIG1vbnRoICsgJy8nICsgZGF5ICsgJy8xLzE1L2FwaS54bWwnO1xudmFyIEFQSV9VUkxiaXJ0aHMgPSAnaHR0cDovL3d3dy5hcGkuaGl6dG9yeS5vcmcvYmlydGhzLycgKyBtb250aCArICcvJyArIGRheSArICcvMS8xNS9hcGkueG1sJztcbnZhciBBUElfVVJMZGVhdGhzID0gJ2h0dHA6Ly93d3cuYXBpLmhpenRvcnkub3JnL2RlYXRocy8nICsgbW9udGggKyAnLycgKyBkYXkgKyAnLzEvMTUvYXBpLnhtbCc7XG52YXIgYmlydGhzID0gW107XG52YXIgZGVhdGhzID0gW107XG52YXIgZXZlbnRzID0gW107XG5cbiQuZ2V0KGNvcnMgKyBBUElfVVJMZXZlbnRzLCBmdW5jdGlvbihyZXMpe1xuXHR2YXIgeG1sID0gJC5wYXJzZVhNTChyZXMpO1xuICAgICQoeG1sKS5maW5kKCdldmVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIFx0ZXZlbnRzLnB1c2goe1xuICAgIFx0XHRkYXRlOiAkKHRoaXMpLmF0dHIoJ2RhdGUnKSxcbiAgICBcdFx0Y29udGVudDogJCh0aGlzKS5hdHRyKCdjb250ZW50JylcblxuICAgIFx0XHR9KTtcbiAgICBcdFx0XHR2YXIgY291bnQgPSBldmVudHMubGVuZ3RoO1xuICAgIFx0XHRcdFx0JC5lYWNoKGV2ZW50cywgZnVuY3Rpb24oa2V5LHZhbHVlKSB7XG4gICAgXHRcdFx0XHRcdGlmICghLS1jb3VudCkge1xuICAgIFx0XHRcdFx0XHRcdCQoJy5ldmVudHMnKS5hcHBlbmQoJzxwPicgKyB2YWx1ZS5kYXRlICsgJzxwPicpXG4gICAgXHRcdFx0XHRcdFx0JCgnLmV2ZW50cycpLmFwcGVuZCgnPHA+JyArIHZhbHVlLmNvbnRlbnQgKyAnPHA+JylcblxuICAgIFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHZhbHVlLmNvbnRlbnQpO1xuICAgIFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHZhbHVlLmRhdGUpO1xuICAgIFx0XHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdH0pO1xuICAgIFx0XHRcdH0pO1xuXG59KTtcblxuJC5nZXQoY29ycyArIEFQSV9VUkxiaXJ0aHMsIGZ1bmN0aW9uKHJlcyl7XG5cdFxuXHR2YXIgeG1sID0gJC5wYXJzZVhNTChyZXMpO1xuICAgICQoeG1sKS5maW5kKCdldmVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIFx0YmlydGhzLnB1c2goe1xuICAgIFx0XHRkYXRlOiAkKHRoaXMpLmF0dHIoJ2RhdGUnKSxcbiAgICBcdFx0Y29udGVudDogJCh0aGlzKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjb3VudCA9IGJpcnRocy5sZW5ndGg7XG4gICAgXHRcdFx0XHQkLmVhY2goYmlydGhzLCBmdW5jdGlvbihrZXksdmFsdWUpIHtcbiAgICBcdFx0XHRcdFx0aWYgKCEtLWNvdW50KSB7XG4gICAgXHRcdFx0XHRcdFx0JCgnLmJpcnRocycpLmFwcGVuZCgnPHA+JyArIHZhbHVlLmRhdGUgKyAnPHA+JylcbiAgICBcdFx0XHRcdFx0XHQkKCcuYmlydGhzJykuYXBwZW5kKCc8cD4nICsgdmFsdWUuY29udGVudCArICc8cD4nKVxuICAgIFx0XHRcdFx0XHR9XG4gICAgfSk7XG4gICAgXHRcdFx0fSk7XG5cblxufSk7XG5cbiQuZ2V0KGNvcnMgKyBBUElfVVJMZGVhdGhzLCBmdW5jdGlvbihyZXMpe1xuXHRcblx0dmFyIHhtbCA9ICQucGFyc2VYTUwocmVzKTtcbiAgICAkKHhtbCkuZmluZCgnZXZlbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBcdGRlYXRocy5wdXNoKHtcbiAgICBcdFx0ZGF0ZTogJCh0aGlzKS5hdHRyKCdkYXRlJyksXG4gICAgXHRcdGNvbnRlbnQ6ICQodGhpcykuYXR0cignY29udGVudCcpXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY291bnQgPSBkZWF0aHMubGVuZ3RoO1xuICAgIFx0XHRcdFx0JC5lYWNoKGRlYXRocywgZnVuY3Rpb24oa2V5LHZhbHVlKSB7XG4gICAgXHRcdFx0XHRcdGlmICghLS1jb3VudCkge1xuICAgIFx0XHRcdFx0XHRcdCQoJy5kZWF0aHMnKS5hcHBlbmQoJzxwPicgKyB2YWx1ZS5kYXRlICsgJzxwPicpXG4gICAgXHRcdFx0XHRcdFx0JCgnLmRlYXRocycpLmFwcGVuZCgnPHA+JyArIHZhbHVlLmNvbnRlbnQgKyAnPHA+JylcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSk7XG5cbiAgICB9KTtcblxufSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==
