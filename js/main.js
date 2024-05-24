// Select all <a> elements that are direct children of <li> elements within the menu
let link = document.querySelectorAll("div.wrapper > div.menu > ul > li > a");

// Select all submenu divs within the menu
let submenu = document.querySelectorAll(
	"div.wrapper > div.menu > ul > li > div.submenu"
);

// Select all elements with the class "fa-chevron-down" (the dropdown icons)
let svg = document.querySelectorAll(".fa-chevron-down");

// Initialize a flag to control toggle behavior
let flag = true;

// Iterate over each link
link.forEach((elem, index) => {
	// Add event listeners only to the first three links (index 0, 1, 2)
	if ((index === 0) | (index === 1) | (index === 2)) {
		// Add mouseenter event listener to show the submenu
		elem.addEventListener("mouseenter", (e) => {
			// Change the padding and rotation animation of the chevron icon
			elem.children[0].classList.replace("pl-5", "pr-5");
			elem.children[0].classList.replace(
				"animate-rotate-down",
				"animate-rotate-up"
			);
			elem.children[0].style.transform = "rotate(180deg)";

			// Show the submenu if it exists
			if (e.target.nextElementSibling) {
				e.target.nextElementSibling.classList.replace("hidden", "flex");
			} else {
				// Display an error message using SweetAlert2 if there is no submenu
				const Toast = Swal.mixin({
					toast: true,
					position: "bottom-end",
					showConfirmButton: false,
					timer: 2000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.onmouseenter = Swal.stopTimer;
						toast.onmouseleave = Swal.resumeTimer;
					},
				});
				Toast.fire({
					icon: "error",
					title: "This item does not have a Submenu",
				});
			}
		});

		// Add mouseleave event listener to hide the submenu
		elem.addEventListener("mouseleave", (e) => {
			// Change the padding and rotation animation of the chevron icon
			elem.children[0].classList.replace("pr-5", "pl-5");
			elem.children[0].classList.replace(
				"animate-rotate-up",
				"animate-rotate-down"
			);
			elem.children[0].style.transform = "rotate(0deg)";

			// Hide the submenu if it exists
			if (e.target.nextElementSibling) {
				e.target.nextElementSibling.classList.replace("flex", "hidden");
			}
		});
	} else {
		// For other links, add a click event listener to toggle the submenu
		elem.addEventListener("click", (e) => {
			if (flag) {
				// Show the submenu
				elem.children[0].classList.replace("pl-5", "pr-5");
				elem.children[0].classList.replace(
					"animate-rotate-down",
					"animate-rotate-up"
				);
				elem.children[0].style.transform = "rotate(180deg)";

				// Display the submenu if it exists
				if (e.target.nextElementSibling) {
					e.target.nextElementSibling.classList.replace("hidden", "flex");
				} else {
					// Display an error message using SweetAlert2 if there is no submenu
					const Toast = Swal.mixin({
						toast: true,
						position: "bottom-end",
						showConfirmButton: false,
						timer: 2000,
						timerProgressBar: true,
						didOpen: (toast) => {
							toast.onmouseenter = Swal.stopTimer;
							toast.onmouseleave = Swal.resumeTimer;
						},
					});
					Toast.fire({
						icon: "error",
						title: "This item does not have a submenu",
					});
				}
				// Set flag to false to indicate that the submenu is now visible
				flag = false;
			} else {
				// Hide the submenu
				elem.children[0].classList.replace("pr-5", "pl-5");
				elem.children[0].classList.replace(
					"animate-rotate-up",
					"animate-rotate-down"
				);
				elem.children[0].style.transform = "rotate(0deg)";

				// Hide the submenu if it exists
				if (e.target.nextElementSibling) {
					e.target.nextElementSibling.classList.replace("flex", "hidden");
				}
				// Set flag to true to indicate that the submenu is now hidden
				flag = true;
			}
		});
	}
});
