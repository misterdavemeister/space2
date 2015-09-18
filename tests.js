function test(assert, message) {
	if (assert) {
		$("ul#test-list").append("<li class='test-item pass'>"+message+"</li>");
	}
	else {
			$("ul#test-list").append("<li class='test-item fail'>"+message+"</li>");
	}
}