
$(document).ready(function() {

	// Hover effect on question with input focus
	$(".question input, .question select, .question textarea").focus(function() {
		$(this).parents(".question").addClass("hover");
	}).blur(function() {
		$(this).parents(".question").removeClass("hover");
	});

	// Datefield focus effecto on all three fields
	$(".datefield input").focus(function() {
		$(this).parent(".datefield").addClass("focus");
	}).blur(function() {
		$(this).parent(".datefield").removeClass("focus");
	});


	// Check + Radio toggle buttons
	$("label.toggle-btn input").addClass("visuallyhidden");
	$("input.wholecheck, input[type=radio]").change(function() {
		if( $(this).attr("name") ) {
			$(this).parent().addClass("success").siblings().removeClass("success")
		} else {
			$(this).parent().toggleClass("success");
		}
	});


	// Bike model
	$("#bikeyear select, #bikemake select").change(function() {
		if ( $("#bikeyear select").val() && $("#bikemake select").val() && !$("#bikemodel select:not(:hidden)").length ) {
			$("#bikemodel .preptext, #bikemodel select").toggleClass("hidden")
		}
	});

	// Exact model
	$("#bikemodel select").change(function() {
		if ( $("#bikemodel select").val() && !$("#exactbike #exactbikeoptions:not(:hidden)").length ) {
			$("#exactbike .preptext, #exactbike #exactbikeoptions").toggleClass("hidden")
		}
	});
	// Change bike value event
	$("#exactbike input").change(function() {
		$("#exactbike #exactbikeoptions small").html('<span class="important">Your bike’s current market value is: <strong>$'+ Math.round(Math.random()*10000) +'</strong></span><br/>(Valuation via Glass Guide)');
	});


	// Live premium change
	$("#price-page select").change(function() {
		$("#premium").text( "$" + Math.round(Math.random()*1000).toFixed(2) );
		if( $(this).is("#option-excess") ) {
			$("#excess").text( "$" + $(this).val() );
		}
		if( $(this).is("#option-payment") ) {
			if( $(this).val() == "y" ) {
				$("#frequency-discount").text("(5% Discount)").addClass("important");
			} else {
				$("#frequency-discount").text("(No Discount)").removeClass("important");
			}
			
		}
	});

	
	// Date input auto-tab (+ validation??)
	$('.datefield input[name="startdate"]').autotab_magic().autotab_filter('numeric');
	$('.datefield input[name="mainrider-dob"]').autotab_magic().autotab_filter('numeric');
	$('.datefield input[name="rider1-dob"]').autotab_magic().autotab_filter('numeric');
	$('.datefield input[name="rider2-dob"]').autotab_magic().autotab_filter('numeric');
	$('.datefield input[name="rider3-dob"]').autotab_magic().autotab_filter('numeric');


});





