$(document).ready(function () {
  // Animate title on load
  $('.animate-text').hide().fadeIn(1000);

  // Tooltip on sport box hover
  $('.sport-box').hover(function () {
      const sport = $(this).data('sport');
      $(this).attr('title', `Click to contact ${sport.charAt(0).toUpperCase() + sport.slice(1)} Department`);
  });
});
$(document).ready(function () {
  // Animate title on load
  $('.animate-text').hide().fadeIn(1000);

  // Tooltip on sport box hover
  $('.sport-box').hover(function () {
      const sport = $(this).data('sport');
      $(this).attr('title', `Click to contact ${sport.charAt(0).toUpperCase() + sport.slice(1)} Department`);
  });
});

