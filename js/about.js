$(document).ready(function () {
    $('#callButton').click(function () {
      const number = $('.contact-number').text().trim();
      alert('Calling ' + number);
    });
  });
  