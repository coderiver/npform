$(document).ready(function() {

	//plus minus for input
	function number() {
		var number = $(".js-number");
		number.each(function() {
			var input = $(this).find("input");
			var max_number = input.attr("max");
			var plus = $(this).find(".js-number-plus");
			var minus = $(this).find(".js-number-minus");
			plus.on("click", function() {
				var val = +(input.val());
				if (val >= max_number) {
					return false
				} else {
					val += 1;
					input.val(val);
				}
			});
			minus.on("click", function() {
				var val = +(input.val());
				if (val > 1) {
					val -= 1;
					input.val(val);
				}
				return false;
			});
			input.on("change", function() {
				var val = +$(this).val();
				if (val > max_number) {
					val = max_number;
					$(this).val(val);
				}
				if (val == '') {
					val = 1;
					$(this).val(val);
				}
			});
		});
	}
	number();
	$('.js-tooltip').popup();
	$('.ui.checkbox').checkbox();
	$('.ui.radio.checkbox').checkbox();

});
