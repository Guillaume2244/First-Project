$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Only 5$</span>');
    $('.childrens').append(message);
    $('button').remove();
  });
});

$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Thank you the message was sent with success</span>');
    $('.button1').append(message);
    $('button').remove();
  });
});
