(function($, window, document, undefined) {

  'use strict';

  $(function() {

    // Contact form
    var $contactForm = $('#entry-form'),
      $submitButton = $('#entry-form input[type=submit]');
    $contactForm.submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: '//formspree.io/vanwijk.mc@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
          $submitButton.prop('disabled', true);
          $submitButton.before('<div class="alert sending">Submitting...</div>');
          $contactForm.find('input.once').remove();
        },
        success: function() {
          $contactForm.find('.alert.sending').remove();
          $submitButton.before('<div class="alert sent">You have been entered!</div>');
          $submitButton.prop('disabled', false);
          setTimeout(function() {
            // $contactForm.find('.alert.sent').remove();
          }, 5000);
        },
        error: function() {
          $contactForm.find('.alert.sending').remove();
          $submitButton.before('<div class="alert error">Oops, there was an error. Please try again, a bit later.</div>');
          $submitButton.prop('disabled', false);
        }
      });
    });



  });

})(jQuery, window, document);
