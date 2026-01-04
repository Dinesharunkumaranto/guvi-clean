$(document).ready(function () {

  $("#registerBtn").click(function () {

    $.ajax({
      url: "assets/php/register.php",
      type: "POST",
      data: {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val()
      },
      success: function (res) {
        $("#msg").text(res);
      },
      error: function () {
        $("#msg").text("Server error");
      }
    });

  });

});

