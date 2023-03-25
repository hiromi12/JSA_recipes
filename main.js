const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const mailtoLink = `mailto:jsa201897@gmail.com?subject=${subject}&body=${message}`;

  window.location.href = mailtoLink;
});
