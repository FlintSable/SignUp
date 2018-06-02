console.log('connected');

$('#add-user').on('click', function(event){
	event.preventDefault();

	let name = $("#name-input").val().trim();
	let email = $("#email-input").val().trim();
	let age = $("#age-input").val().trim();
	let comment = $("#comment-input").val().trim();

	console.log(name);
	console.log(email);
	console.log(age);
	console.log(comment);



	$("#name-display").html();
	$("#email-display").html();
	$("#age-display").html();
	$("comment-display").html();

	$("#name-display").html(name);
	$("#email-display").html(email);
	$("#age-display").html(age);
	$("#comment-display").html(comment);

	localStorage.clear();

	localStorage.setItem("name", name);
	localStorage.setItem("email", email);
	localStorage.setItem("age", age);
	localStorage.setItem("commnet", comment);

});

$("#name-display").html(localStorage.getItem("name"));
$("#email-display").html(localStorage.getItem("email"));
$("#age-display").html(localStorage.getItem("age"));
$("#comment-display").html(localStorage.getItem("comment"));