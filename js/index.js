var emailRegExp = /[\w\d-_]+@[\w\d]+(\.+[\w\d]+)+/;
var phoneRegExp = /[\d]{11}/;
var name = false, email = false, phone = false;

// Following is shorthand for $(document).ready(function(){});
$(function(){

  if (!name || !email || !phone) $('input:submit').attr('disabled', 'disabled');
  else $('input:submit').removeAttr('disabled');

  // Prevent default form submission.
  $("#sign-up").submit(function(e){

    e.preventDefault();
    alert('Form submitted.');

  });

  $("#name").blur(function(e) {
    // Check length of 'target' input field.
    if ($(e.target).val().length === 0) {

      $("[name='name-lbl']").removeClass().addClass("input-error");
      $("[name='name-lbl'] > span").removeClass().addClass("glyphicon glyphicon-remove-sign");
      name = false;

    } else {

      $("[name='name-lbl']").removeClass().addClass("input-success");
      $("[name='name-lbl'] > span").removeClass().addClass("glyphicon glyphicon-ok-sign");
      name = true;

    }

    if (!name || !email || !phone) $('input:submit').attr('disabled', 'disabled');
    else $('input:submit').removeAttr('disabled');

  });

  $("#email").blur(function(e) {
    // Check length of 'target' input field.
    if ($(e.target).val().length === 0) {

      $("[name='email-lbl']").removeClass().addClass("input-error");
      $("[name='email-lbl'] > span").removeClass().addClass("glyphicon glyphicon-remove-sign");
      email = false;

    } else {
      // Check if email address is valid.
      if (emailRegExp.test($(e.target).val())) {

        $("[name='email-lbl']").removeClass().addClass("input-success");
        $("[name='email-lbl'] > span").removeClass().addClass("glyphicon glyphicon-ok-sign");
        email = true;

      } else {

        $("[name='email-lbl']").removeClass().addClass("input-error");
        $("[name='email-lbl'] > span").removeClass().addClass("glyphicon glyphicon-remove-sign");
        email = false;

      }

    }

    if (!name || !email || !phone) $('input:submit').attr('disabled', 'disabled');
    else $('input:submit').removeAttr('disabled');

  });

  $("#phone").blur(function(e) {
    // Check length of 'target' input field.
    if ($(e.target).val().length === 0) {

      $("[name='phone-lbl']").removeClass().addClass("input-error");
      $("[name='phone-lbl'] > span").removeClass().addClass("glyphicon glyphicon-remove-sign");
      phone = false;

    } else {
      // Check if phone number is valid.
      if (phoneRegExp.test($(e.target).val())) {

        $("[name='phone-lbl']").removeClass().addClass("input-success");
        $("[name='phone-lbl'] > span").removeClass().addClass("glyphicon glyphicon-ok-sign");
        phone = true;

      } else {

        $("[name='phone-lbl']").removeClass().addClass("input-error");
        $("[name='phone-lbl'] > span").removeClass().addClass("glyphicon glyphicon-remove-sign");
        phone = false;

      }

    }

    if (!name || !email || !phone) $('input:submit').attr('disabled', 'disabled');
    else $('input:submit').removeAttr('disabled');

  });

});
