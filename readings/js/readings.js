$(document).ready(function () {
  $.get('/readings/api', function (data) {

    $('#date').html(data.date);
    $('#mass-description').html(data.description);

    var readingTemplate = document.getElementById('readingTemplate').innerHTML;
    var readingsContent = _.template(readingTemplate);
    
    $('#readings').html(readingsContent(data));

    $('#day-night').on('touchstart click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $('body').toggleClass('night');
    });
  });
});