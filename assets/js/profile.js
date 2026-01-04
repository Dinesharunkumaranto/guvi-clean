$(document).ready(function () {

    $("#saveProfile").click(function () {

        $.ajax({
            url: "assets/php/profile.php",
            type: "POST",
            data: {
                age: $("#age").val(),
                dob: $("#dob").val(),
                contact: $("#contact").val()
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
