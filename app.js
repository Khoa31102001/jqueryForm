$(document).ready(function () {
  $("#demoForm").validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
      "email": {
        required: true,
        email: true
      },
      "re-email": {
        required: true,
        equalTo: "#email",
        // email: true,
      },
      "name": {
        required: true,
      }
    },messages: {
			"email": {
				required: "Bắt buộc nhập email",
        email: "Bắt buộc phải đúng format email"
			},
			"re-email": {
				required: "Bắt buộc nhập password",
        equalTo: "Hai email phải giống nhau",
        email: "Bắt buộc phải đúng format email"
			},
			"name": {
        required: "Bắt buộc nhập name",
			}
		}
  });
});