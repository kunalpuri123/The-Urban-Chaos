$(document).ready(function() {
    // Function to add or remove formgroup-active class on focus and blur
    $('input[type="text"], input[type="email"], textarea').focus(function() {
      var background = $(this).attr('id');
      $('#' + background + '-form').addClass('formgroup-active');
      $('#' + background + '-form').removeClass('formgroup-error');
    });
  
    $('input[type="text"], input[type="email"], textarea').blur(function() {
      var background = $(this).attr('id');
      $('#' + background + '-form').removeClass('formgroup-active');
    });
  
    // Function to add formgroup-error class for validation
    function errorfield(field) {
      $(field).addClass('formgroup-error');
    }
  
    // Form submission validation
    $("#waterform").submit(function() {
      var stopsubmit = false;
  
      if ($('#name').val() == "") {
        errorfield('#name-form');
        stopsubmit = true;
      }
      if ($('#email').val() == "") {
        errorfield('#email-form');
        stopsubmit = true;
      }
      if (stopsubmit) return false;
    });
  });
  