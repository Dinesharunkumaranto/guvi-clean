$(document).ready(function () {

  $("#loginBtn").click(function () {

    $.ajax({
      url: "assets/php/login.php",
      type: "POST",
      data: {
        email: $("#email").val(),
        password: $("#password").val()
      },
        success: function (res) {
    if (res.startsWith("USERID:")) {
        let userId = res.replace("USERID:", "").trim();
        localStorage.setItem("userId", userId);
        window.location.href = "profile.html";
    } else {
        $("#msg").text(res);
    }
}

    });

  });

});
