document.addEventListener("DOMContentLoaded", function() {
  let navbar = document.getElementById("navbar");
  let navlinks = document.getElementsByClassName("hover");
  let btnModal = document.getElementById("modal-btn");
  let modal = document.getElementsByClassName("terms-modal")[0];

  btnModal.addEventListener("click", function() {
    modal.classList.remove("visible");
  });
  modal.addEventListener("click", function() {
    modal.classList.add("visible");
  });

  ScrollReveal().reveal(".about-info", {
    delay: 600,
    distance: "400px",
    origin: "left"
  });
  ScrollReveal().reveal(".web-info", {
    delay: 600,
    distance: "400px",
    origin: "right"
  });

  ScrollReveal().reveal(".consulting-info", {
    delay: 500,
    distance: "600px",
    origin: "bottom"
  });

  /*contact info */
    let submitBtn = document.getElementById("submit-btn");

  submitBtn.addEventListener("click", e => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let text = document.getElementById("textarea").value;
      
    let data = {
      name: name,
      email: email,
      tel: tel,
      text: text
    };

    $.ajax({
      type: "POST",
      url: "https://hooks.zapier.com/hooks/catch/3956551/045rv5/",
      data: data,
      success: function() {
        alert("submitted!");
      }
    });
  });
});