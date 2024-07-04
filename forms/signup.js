document.getElementById("signupForm").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var messageinput = document.getElementById("messageinput");

    if (!nameInput.checkValidity()) {
      alert("Please enter your name.");
      event.preventDefault();
      return;
    }

    if (!emailInput.checkValidity()) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }

    if (!messageinput.checkValidity()) {
      alert("Please enter a message.");
      event.preventDefault();
      return;
    }

    // Additional validation logic can be added here

    alert("Message sent successfully!");
  });
