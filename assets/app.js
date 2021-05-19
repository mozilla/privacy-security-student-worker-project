(function() {
	"use strict";

	//declare js elements
	const navBarMobile = document.querySelector("#nav-bar-mobile")
	const navBarMenuButton = document.querySelector(".menu-button")
	const dropDownMenu = document.querySelector(".drop-down-menu")
	const showMenuIcon = document.querySelector(".show-menu-icon")
	const showDetailsLabel = document.querySelector(".show-details")
	const showDetailsIcon = document.querySelector(".show-details-icon")
	const shownDetails = document.querySelector(".shown-details")
	const hiddenDetails = document.querySelector(".hidden-details")
	const title = document.querySelector(".title")
	const aliasesLabel = document.querySelector(".remaining-aliases")
	const generateButton = document.querySelector(".generate-button")
	const blocked = document.querySelector(".blocked")
	const forwarded = document.querySelector(".forwarded")
	//boolean variable to check if details menu is opened or not
	let detailsOpened = false
	let menuOpened = false
	//add click event listener to details icon
	showDetailsIcon.addEventListener("click", function(){showDetails()})
	navBarMenuButton.addEventListener("click", function(){openMenu()})

	//handles detail menu event listener
	function showDetails(){
		if(!detailsOpened){
			//rotate animation
			showDetailsIcon.style.transform = "rotate(180deg)"
			//add class to transition animation
			hiddenDetails.classList.add("hidden-details-opened")
			//set label text
			showDetailsLabel.textContent = "Hide Details"

			//set boolean value to true
			detailsOpened = true
		}
		else{
			//rotate animation
			showDetailsIcon.style.transform = "rotate(0deg)"
			//add class to transition animation
			hiddenDetails.classList.remove("hidden-details-opened")
			//set label text
			showDetailsLabel.textContent = "Show Details"
			//set boolean value to true
			detailsOpened = false
		}
	}
	//handles dropdown menu button event listener
	function openMenu(){
		if(!menuOpened){
			//rotate animation
			showMenuIcon.style.transform = "rotate(180deg)"
			//add class to transition animation
			dropDownMenu.classList.add("drop-down-menu-opened")
			//set boolean value to true
			menuOpened = true
		}
		else{
			//rotate animation
			showMenuIcon.style.transform = "rotate(0deg)"
			//add class
			dropDownMenu.classList.remove("drop-down-menu-opened")
			//set boolean value to true
			menuOpened = false
		}
	}
	//Set elements at mobile break point
	function handleScreenSize(x){
		if(x.matches){
			generateButton.parentNode.insertBefore(aliasesLabel, generateButton.nextSibling)
			hiddenDetails.prepend(forwarded)
			hiddenDetails.prepend(blocked)
			navBarMobile.classList.add("nav-bar-mobile")
		}
		else{
			title.parentNode.insertBefore(aliasesLabel, title.nextSibling)
			shownDetails.append(blocked)
			shownDetails.append(forwarded)
			let a = header.lastChild
			a.lastChild.classList.remove("nav-bar-mobile")
		}
	}
	//add event listener on window for resize

	//window.addEventListener("resize", function(){handleScreenSize()})
	var x = window.matchMedia("(max-width: 600px)")
	handleScreenSize(x) // Call listener function at run time
	x.addEventListener("change", function(){ handleScreenSize(x) }) // Attach listener function on state changes

})();