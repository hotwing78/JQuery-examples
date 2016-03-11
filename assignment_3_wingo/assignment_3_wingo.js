

$(document).ready(function()
{
	$("#format").on("click",function()
	{
		$("th").addClass("header");
		$("table.courses tr:nth-child(even)").addClass("altrow");
	});
	
	$("#border").on("click",function()
	{
	$("div").addClass("enclose");
	});
	
	$("#image").on("click",function()
	{
		$("#myImage").append("<img id = 'jcover' src = jquery_cover.jpg />")
	});
	
});