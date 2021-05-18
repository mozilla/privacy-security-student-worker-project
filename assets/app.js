(function() {
	"use strict";
	function show_details() {
		var node = document.getElementsByClassName('card-2')[0];
		var detailStatus = document.getElementsByClassName('show')[0];
		if(!parseInt(detailStatus.id)){
			node.style.display = 'block';
			detailStatus.innerHTML = 'Hide details <i class="fa fa-angle-up down details"></i aria-hidden="true"></i>';
			detailStatus.id = `${1}`;
		}else{
			node.style.display = 'none';
			detailStatus.innerHTML = 'Show details <i class="fa fa-angle-down down details"></i aria-hidden="true"></i>';
			detailStatus.id = `${0}`;
		}
	}
	function show_details_mobi() {
		var node = document.getElementsByClassName('card-3')[0];
		var detailStatus = document.getElementsByClassName('show')[1];
		if(!parseInt(detailStatus.id)){
			node.style.display = 'block';
			detailStatus.innerHTML = 'Hide details <i class="fa fa-angle-up down details"></i aria-hidden="true"></i>';
			detailStatus.id = `${1}`;
		}else{
			node.style.display = 'none';
			detailStatus.innerHTML = 'Show details <i class="fa fa-angle-down down details"></i aria-hidden="true"></i>';
			detailStatus.id = `${0}`;
		}
	}
	var detailclicksEvents = document.getElementsByClassName('details');
	for(var i=0;i<detailclicksEvents.length;i++){
		detailclicksEvents[i].onclick = show_details;
	}
	var detailclicksEvents = document.getElementsByClassName('details_mobi');
	for(var i=0;i<detailclicksEvents.length;i++){
		detailclicksEvents[i].onclick = show_details_mobi;
	}
	var menuMobi = document.getElementsByClassName('menu_mobi')[0];
	var menuOption = document.getElementsByClassName('menu-option')[0]; 
	menuMobi.onclick = function(){
		if(!parseInt(menuMobi.id)){
			menuOption.style.display = 'block';
			menuMobi.innerHTML = 'Menu <i class="fa fa-angle-up down" aria-hidden="true"></i>';
			menuMobi.id = `${1}`;
		}else{
			menuOption.style.display = 'none';
			menuMobi.innerHTML = 'Menu <i class="fa fa-angle-down down" aria-hidden="true"></i>';
			menuMobi.id = `${0}`;
		}
	}
})();