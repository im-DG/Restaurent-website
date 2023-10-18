$(document).ready(function () {
  //  eye
  $(".fa").mouseenter(function () {
    $(".pswd").prop("type", "text");
    $(".fa").removeClass("fa-eye").addClass("fa-eye-slash");
  });

  $(".fa").mouseleave(function () {
    $(".pswd").attr("type", "password");
    $(".fa").removeClass("fa-eye-slash").addClass("fa-eye");
  });
  //------------------------------------------------------------------------------------
  //  validations
  $(".txtEmailLog").blur(function () {
    var exp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var email = $(".txtEmailLog").val();

    if (exp.test(email) == true) {
      $(this).css("border", "2px solid green");
      // $(".txtUserSign").prop("disabled", false);
    } else {
      $(this).css("border", "2px solid red");
    }
  });

  $(".txtPswdLog").blur(function () {
    var pass = $(".txtPswdLog").val();
    var r = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (r.test(pass) == true) {
      $(this).css("border", "2px solid green");
    } else {
      $(this).css("border", "2px solid red");
    }
  });

  $(".txtEmailSign").blur(function () {
    var exp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var email = $(".txtEmailSign").val();

    if (exp.test(email) == true) {
      $(this).css("border", "2px solid green");
      $(".txtUserSign").prop("disabled", false);
    } else {
      $(this).css("border", "2px solid red");
    }
  });

  $(".txtPswdSign").blur(function () {
    var pass = $(".txtPswdSign").val();
    var r = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (r.test(pass) == true) {
      $(this).css("border", "2px solid green");
      $("#btnSignup").prop("disabled", false);
    } else {
      $(this).css("border", "2px solid red");
    }
  });

  //--------------------------------------------------------------------------------------------
  // ajax
  $("#txtEmail").blur(function () {
    var myEmail = $("#txtEmail").val();
    var obj = {
      type: "get",
      url: "/ajax-chk-user",
      data: {
        emaill: myEmail,
      },
    };
    $.ajax(obj)
      .done(function (myResponse) {
        $("#inputRes").html(myResponse);
      })
      .fail(function (err) {
        alert(err.toString());
      });
  });



  //-----------------Register --------------------------------------------
  //signup
  $("#btnSignup").click(function () {
    var email = $("#txtEmail").val();
    var username = $("#txtUsername").val();
    var pswd = $("#txtPswd").val();
    var obj = {
      type: "get",
      url: "/db-Signup",
      data: {
        emaill: email,
        usernamee: username,
        pswdd: pswd,
      },
    };
    $.ajax(obj)
      .done(function (msg) {
        $("#submitRes").html(msg);
      })
      .fail(function (msgerr) {
        $("#submitRes").html(msgerr);
      });
  });





  //--------------------------Sign in ----------------------------------------------------------
  $("#btnLogin").click(function () {
    // alert("Welcome")
    var myLoginEmail = $("#inputEmail").val();
    var myLoginPass = $("#inputPassword").val();

    // // Check user name or email
    // if (myLoginEmailame === "") {
    //   $("#inputEmail").next(".validation-message").text("Enter Valid User Name or email");
    //   return;
    // }

    // // Check Password
    // if (myLoginPass === "") {
    //   $("#inputPassword").next(".validation-message").text("Enter Valid Password");
    //   return;
    // }

    var obj = {
      type: "get",
      url: "/ajax-chk-login",
      data: {
        loginEmail: myLoginEmail,
        loginPass: myLoginPass,
      },
    };
    $.ajax(obj)
      .done(function (myResponse) {
        // localStorage.setItem("activeUser", myLoginEmail); //*************** */

        // if (myResponse.trim() == "Shark")
        window.location.href = "dashbord.html";
        // else if (myResponse.trim() == "Pitcher")
        // window.location.href = "dash-pitcher.html";
        // else $("#loginResult").html(myResponse);
      })
      .fail(function (msg) {
        alert("");
        $("#loginResult").html(msg);
      });
  });


  // ..........................RESERVATION SECTION..........................
  $("#btnReserv").click(function () {
    // alert('Table Reserved')
    var name = $("#txtResName").val();
    var email = $("#txtResEmail").val();
    var phone = $("#txtResPhone").val();
    var date = $("#book_date").val();
    var time = $("#book_time").val();
    var person = $("#txtResPerson").val();

    // Check if name is empty
    if (name === "") {
      $("#txtResName").next(".validation-message").text("Name can't be null");
      return;
    }

    // Check if email is empty
    if (email === "") {
      $("#txtResEmail").next(".validation-message").text("Email can't be null");
      return;
    }

    // Check if Phone is empty
    if (phone === "") {
      $("#txtResPhone").next(".validation-message").text("Phone no can't be null");
      return;
    }

    // Check if Date is empty
    if (date === "") {
      $("#book_date").next(".validation-message").text("Date can't be null");
      return;
    }

    // Check if Time is empty
    if (time === "") {
      $("#book_time").next(".validation-message").text("Time can't be null");
      return;
    }

    // // Check if person is empty
    if (person === "") {
      $("#txtResPerson").next(".validation-message").text("Person can't be null");
      return;
    }


    var obj = {
      type: "get",
      url: "/db-reservation",
      data: {
        namee: name,
        emaill: email,
        phonee: phone,
        datee: date,
        timee: time,
        personn: person,
      },
    };
    $.ajax(obj)
      .done(function (msg) {
        $("#resResult").html(msg);
      })
      .fail(function (msgerr) {
        $("#resResult").html(msgerr);
      });
  });
});


// ...........................contact section............................................................


$("#btnContact").click(function () {
  // alert('hello')
  var name = $("#txtConName").val();
  var email = $("#txtConEmail").val();
  var phone = $("#txtConPhone").val();
  var message = $("#txtConMessage").val();

  // Check if name is empty
  if (name === "") {
    $("#txtConName").next(".validation-message").text("Name can't be null");
    return;
  }

  // Check if email is empty
  if (email === "") {
    $("#txtConEmail").next(".validation-message").text("Email can't be null");
    return;
  }


  // Check if Phone no is empty
  if (phone === "") {
    $("#txtConPhone").next(".validation-message").text("Phone no can't be null");
    return;
  }


  var obj = {
    type: "get",
    url: "/db-contact",
    data: {
      namee: name,
      emaill: email,
      phonee: phone,
      messagee: message
    },
  };
  $.ajax(obj)
    .done(function (contact) {
      $("#conResult").html(contact);
    })
    .fail(function (msgerr) {
      $("#conResult").html(msgerr);
    });
});
