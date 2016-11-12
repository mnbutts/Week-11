// JavaScript Document
$(function() {
	"use strict";
	$("#header li").prepend('<img src="icon.png" alt="icon">');
	$("#header div").click(function() {
		$(this).css("background-color", "red");
	});
	$("#sidebar_content_1 li a").first().css("color", "red");
	$("#sidebar_content_1 li a:even").css("padding-left", "5px");
	$("#content h2").click(function() {
		var targetValue = $("div .entry");
		$(targetValue).html("<p>Ive changed</p>");
		});
	$("#sidebar-content h2").click(function() {
		$("ul li ul").toggle("slow");
	});
	
});

