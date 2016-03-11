$(document).ready(function()
{
	$("#area1").offset({top: 150 , left: 250});
	
	$("#area2").offset({top: 155 , left: 400});
	
	$("#area3").offset({top: 250 , left: 350});
	
	$("#area4").offset({top: 250 , left: 750});
	
	$("#area5").offset({top: 280 , left: 750});
	
	$("#area6").offset({top: 400 , left: 750});
	
	$("button").css({"background-color":"blue","color":"white","font-size":"16px"});
	
	$("#moveUp").click(function()
	{
		var scrollPos = $("#area3").scrollTop();
		$("#area3").scrollTop(scrollPos - 50);
	});
	
	$("#moveDown").click(function()
	{
		var scrollPos = $("#area3").scrollTop();
		$("#area3").scrollTop(scrollPos + 50);
	});

	$("#changeText").click(function()
	{
		$("#area3").toggleClass("newFont");
	});
	
	$("#changeText").click(function(){
       var ct = $(this).text();
        if (ct == "Small Text")
		{
               // do something

               $(this).text("Large Text");

        } 
	    else
			{
                // do something
               $(this).text("Small Text");

            };

		});

});