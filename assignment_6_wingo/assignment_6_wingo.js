$(document).ready(function() {
//Hint Section*******************************************
    $("#f_name").focus(function() {
        $("#fHint").empty().append("Must contain only letters and spaces between 2 and 20 characters");
    }).blur(function() {
        $("#fHint").empty();
    });
    $("#l_name").focus(function() {
        $("#lHint").empty().append("Must contain only letters and spaces between 2 and 20 characters");
    }).blur(function() {
        $("#lHint").empty();
    });
    $("#addy_1").focus(function() {
        $("#addy1Hint").empty().append("Must contain only letters and spaces between 2 and 20 characters");
    }).blur(function() {
        $("#addy1Hint").empty();
    });
    $("#addy_2").focus(function() {
        $("#addy2Hint").empty().append("Must contain only letters and spaces between 2 and 20 characters");
    }).blur(function() {
        $("#addy2Hint").empty();
    });
    $("#city").focus(function() {
        $("#cityHint").empty().append("Must contain only letters and spaces between 2 and 20 characters");
    }).blur(function() {
        $("#cityHint").empty();
    });
    $("#state").focus(function() {
        $("#stateHint").empty().append(" Use the two-letter abbreviation!");
    }).blur(function() {
        $("#stateHint").empty();
    });
    $("#zipCode").focus(function() {
        $("#zipHint").empty().append(" Use a 5 digit zip code. ");
    }).blur(function() {
        $("#zipHint").empty();
    });

    $("#phone").focus(function() {
        $("#phoneHint").empty().append(" Numbers Only - No Spaces or Dashes ");
    }).blur(function() {
        $("#phoneHint").empty();
    });

    $("#email").focus(function() {
        $("#eHint").empty().append(" Example - john@doe.com ");
    }).blur(function() {
        $("#eHint").empty();
    });

    $("#CCN").focus(function() {
        $("#ccnHint").empty().append(" Numbers Only - no spaces or dashes. ");
    }).blur(function() {
        $("#ccnHint").empty();
    });
	//************************************************************************
	
	//Form Validations********************************************************
    $("#customer").submit(function(event) {
       
    //RegExp******************************************************************
	   var errors = 0;
		var exp = /^[0-9]+$/;
		var pay = /^None$/;
		var cardnumPattern = /^[0-9]{13,16}$/;
        var valuePattern = /^[\D\d]+$/;
        var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
        var infoPattern = /^[\D\s]{2,20}$/i;
		var addyPattern = /^[\d\D\s]{2,20}$/i;
        var statePattern = /^[a-zA-Z]{2}$/;
        var zipPattern = /^[0-9]{5}$/;
        var phonePattern = /^[0-9]{10}$/;
	//*****************************************************************
	
	//Validation & error count*****************************************
        if (!emailPattern.test($("#email").val())) {
            $("#email").css("background-color", "#FDD");
            $("#eHint").empty().append(" Must be a valid e-mail address");
            errors += 1;
        }
        if (!infoPattern.test($("#f_name").val())) {
            $("#f_name").css("background-color", "#FDD");
            $("#fHint").empty().append(" Required: Must contain only letters and spaces between 2 and 20 characters!");
            errors += 1;
        }
        if (!infoPattern.test($("#l_name").val())) {
            $("#l_name").css("background-color", "#FDD");
            $("#lHint").empty().append(" Required: Must contain only letters and spaces between 2 and 20 characters!");
            errors += 1;
        }
        if (!addyPattern.test($("#addy_1").val())) {
            $("#addy_1").css("background-color", "#FDD");
            $("#addy1Hint").empty().append(" Required: Must contain numbers, letters, and spaces between 2 and 20 characters!");
            errors += 1;
        }
		 if (valuePattern.test($("#addy_2").val())) {
			if (!addyPattern.test($("#addy_2").val())) {
            $("#addy_2").css("background-color", "#FDD");
            $("#addy2Hint").empty().append(" Required: Must contain only numbers, letters, and spaces between 2 and 20 characters!");
            errors += 1;
			}
		}
        if (!infoPattern.test($("#city").val())) {
            $("#city").css("background-color", "#FDD");
            $("#cityHint").empty().append(" Required: Must contain only letters and spaces between 2 and 20 characters!");
            errors += 1;
        }

        if (!statePattern.test($("#state").val())) {
            $("#state").css("background-color", "#FDD");
            $("#stateHint").empty().append(" Required: Must contain a two-letter State abbreviation!");
            errors += 1;
        }
        if (valuePattern.test($("#phone").val())) {
            if (!phonePattern.test($("#phone").val())) {
                $("#phone").css("background-color", "#FDD");
                $("#phoneHint").empty().append(" Must contain a 10 digit number with no spaces or dashes!");
                errors += 1;
            }
        }
        if (!zipPattern.test($("#zipCode").val())) {
            $("#zipCode").css("background-color", "#FDD");
            $("#zipHint").empty().append(" Required: Must contain a 5 number Zip Code!");
            errors += 1;
        }
		if(!pay.test($("input:radio[name='payment']:checked").val())){
			if(!cardnumPattern.test($("#CCN").val())){
				 $("#CCN").css("background-color", "#FDD");
				 $("#ccnHint").empty().append(" Must contain a 13-16 digit number with no spaces or dashes!");
				errors += 1;
				}
	
				else{
					$("#ccnHint").empty();
				}
			
			if (!exp.test($("#month").val())){
				$("#month").css("background-color", "#FDD");
				$("#expErr").empty().append(" Must select a Month and Year!");
				errors += 1;
			}
			
			else if (!exp.test($("#year").val())){
				$("#year").css("background-color", "#FDD");
				$("#expErr").empty().append(" Must select a Month and Year!");
				errors +=1;
			}
				else{
					$("#expErr").empty();
				}
		  
		}
		
	//********************************************************************************************************

	//Submit prevent**************************************************************************************        
        if (errors > 0) {
            $("#errors").empty().append("Please edit the marked fields below to fix errors!");
            event.preventDefault();
        }

    });
});