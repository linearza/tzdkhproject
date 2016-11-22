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
          $submitButton.before('<div class="alert sending">Sending message…</div>');
        },
        success: function() {
          $contactForm.find('.alert.sending').remove();
          $submitButton.before('<div class="alert sent">Message sent!</div>');
          $submitButton.prop('disabled', false);
          setTimeout(function() {
            $contactForm.find('.alert.sent').remove();
          }, 5000);
        },
        error: function() {
          $contactForm.find('.alert.sending').remove();
          $submitButton.before('<div class="alert error">Oops, there was an error. Please contact me directly at daniella@mylittleswimschool.co.za</div>');
          $submitButton.prop('disabled', false);
          setTimeout(function() {
            $contactForm.find('.alert.error').remove();
          }, 10000);
        }
      });
    });



  });

})(jQuery, window, document);
