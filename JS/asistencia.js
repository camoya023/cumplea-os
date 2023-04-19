window.onload = function () {
  var icon_add_inv = document.getElementById("icon-add__inv");
  var icon_add_acom1 = document.getElementById("icon-add__acom1");
  var icon_rem_acom1 = document.getElementById("icon-rem__acom1");
  var icon_add_acom2 = document.getElementById("icon-add__acom2");
  var icon_rem_acom2 = document.getElementById("icon-rem__acom2");
  var acompa1 = document.getElementById("acompa1");
  var acompa2 = document.getElementById("acompa2");
  //   var elementoOculto = document.getElementById("elemento-oculto");

  icon_add_inv.addEventListener("click", function () {
    if (acompa1.style.display === "none") {
      acompa1.style.display = "block";
      icon_add_inv.style.display = "none";
    } else {
      acompa1.style.display = "none";
      icon_rem_acom1.style.display = "none";
    }
  });

  icon_add_acom1.addEventListener("click", function () {
    if (acompa2.style.display === "none") {
      acompa2.style.display = "block";
      icon_rem_acom1.style.display = "inline-block";
      // icon_rem_acom1.style.display = "inline-block";
      icon_add_acom1.style.display = "none";
      icon_add_acom2.style.display = "none";
    } else {
      acompa2.style.display = "none";
      icon_rem_acom1.style.display = "none";
    }
  });

  icon_rem_acom2.addEventListener("click", function () {
    if (acompa2.style.display === "block") {
      acompa2.style.display = "none";
      icon_add_acom1.style.display = "inline-block";
      // icon_add_acom1.style.display = "inline-block";
      icon_rem_acom1.style.display = "none";
    } else {
      acompa2.style.display = "none";
      icon_rem_acom1.style.display = "none";
    }
  });

  icon_rem_acom1.addEventListener("click", function () {
    if (acompa1.style.display === "block") {
      acompa1.style.display = "none";
      icon_rem_acom2.style.display = "none";
      icon_add_acom2.style.display = "inline-block";
      // icon_add_acom1.style.display = "inline-block";
      // icon_rem_acom2.style.display = "none";
    } else {
      acompa1.style.display = "none";
      icon_rem_acom1.style.display = "none";
    }
  });

  icon_add_acom2.addEventListener("click", function () {
    if (acompa1.style.display === "none") {
      acompa1.style.display = "block";
      icon_add_acom2.style.display = "none";
      icon_rem_acom2.style.display = "inline-block";
    } else {
      acompa1.style.display = "none";
      icon_rem_acom1.style.display = "none";
    }
  });
};
