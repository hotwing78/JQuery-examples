$(document).ready(function()
{
		$("#abe").offset({top:8,left:8});
		$("#george").offset({top:158,left:8});
		$("#teddy").offset({top:308,left:8});
		$("#bios").offset({top: 142 , left: 250});
		$("#menuReturn").offset({top:8 , left : 250});
		
		$("#bios").hover(function() 
		{
		$(this).stop(true, false).animate({"font-size": "20px","height":"300px"}, 1000);
		}, function() {
		$(this).stop(true, false).animate({"font-size":"15px","height": "200px"}, 1000);
		});
		
		$("#george").on("click",function()
		{
			 var div = $("#george")
			 div.animate({top:'292px',left:'700px'}, "3000");
			 
			$("#abe ,#teddy").fadeToggle("slow",function()
			{
				
				
			    $("#bios").empty().removeClass().addClass('white').append("<p> On April 30, 1789, George Washington, standing on the balcony of Federal Hall \
								  on Wall Street in New York, took his oath of office as the first President of \
								  the United States. As the first of every thing, in our situation will serve to \
								  establish a Precedent, he wrote James Madison, it is devoutly wished on my \
								  part, that these precedents may be fixed on true principles.</p>");
								 
			});
			 
		});
		
		$("#abe").on("click",function()
		{
			 var div = $("#abe")
			 div.animate({top:'192px',left:'700px'}, "3000");
			$("#george ,#teddy").fadeToggle("slow",function()
			{
				
			
			$("#bios").empty().removeClass().addClass('blue').append("<p> Lincoln warned the South in his Inaugural Address: In your hands, my \
								dissatisfied fellow countrymen, and not in mine, is the momentous issue of civil \
								war. The government will not assail you.... You have no oath registered in  \
								Heaven to destroy the government, while I shall have the most solemn one to \
								preserve, protect and defend it.</p>");
			});
		});
		
		$("#teddy").on("click",function()
		{
			 var div = $("#teddy")
			 div.animate({top:'392px',left:'700px'}, "3000");
			$("#george ,#abe").fadeToggle("slow",function()
			{
			
			$("#bios").empty().removeClass().addClass('red').append("<p> With the assassination of President McKinley, Theodore Roosevelt, not quite \
								 43, became the youngest President in the Nation's history. He brought new \
									excitement and power to the Presidency, as he vigorously led Congress and the \
								  American public toward progressive reforms and a strong foreign policy.</p>");
			});
		});
		
});