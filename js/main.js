let link = document.querySelectorAll("div.wrapper > div.menu > ul > li > a");

let submenu = document.querySelectorAll(
	"div.wrapper > div.menu > ul > li > div.submenu"
);

let svg = document.querySelectorAll(".fa-chevron-down");

let flag = true;

link.forEach((elem, index) => {
	if ((index === 0) | (index === 1) | (index === 2)) {
		elem.addEventListener("mouseenter", (e) => {
			elem.children[0].classList.replace("pl-5", "pr-5");
			elem.children[0].classList.replace(
				"animate-rotate-down",
				"animate-rotate-up"
			);
			elem.children[0].style.transform = "rotate(180deg)";
			if (e.target.nextElementSibling) {
				e.target.nextElementSibling.classList.replace("hidden", "flex");
			} else {
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
		elem.addEventListener("mouseleave", (e) => {
			elem.children[0].classList.replace("pr-5", "pl-5");
			elem.children[0].classList.replace(
				"animate-rotate-up",
				"animate-rotate-down"
			);
			elem.children[0].style.transform = "rotate(0deg)";
			if (e.target.nextElementSibling) {
				e.target.nextElementSibling.classList.replace("flex", "hidden");
			}
		});
	} else {
		elem.addEventListener("click", (e) => {
			if (flag) {
				elem.children[0].classList.replace("pl-5", "pr-5");
				elem.children[0].classList.replace(
					"animate-rotate-down",
					"animate-rotate-up"
				);
				elem.children[0].style.transform = "rotate(180deg)";
				if (e.target.nextElementSibling) {
					e.target.nextElementSibling.classList.replace("hidden", "flex");
				} else {
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
				flag = false;
			} else {
				elem.children[0].classList.replace("pr-5", "pl-5");
				elem.children[0].classList.replace(
					"animate-rotate-up",
					"animate-rotate-down"
				);
				elem.children[0].style.transform = "rotate(0deg)";
				if (e.target.nextElementSibling) {
					e.target.nextElementSibling.classList.replace("flex", "hidden");
				}
				flag = true;
			}
		});
	}
});
