function menuShow() {
	window.addEventListener('click', function (event) {
		const target = event?.target as HTMLElement;
		const menuTrigger = document.querySelector('#header__burger') as HTMLInputElement;
		(target.closest('.burger') == null) ? menuTrigger.checked = false : menuTrigger.checked = true
	})
}

menuShow()