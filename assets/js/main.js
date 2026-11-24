/*
	Spectral by HTML5 UP - Vanilla JS Navigation & Smooth Scroll
*/
(function () {
	const body = document.body;
	const header = document.getElementById('header');
	const banner = document.getElementById('banner');
	const menu = document.getElementById('menu');
	const toggles = document.querySelectorAll('.menuToggle');

	// Add close button and backdrop to menu
	if (menu) {
		const closeBtn = document.createElement('a');
		closeBtn.href = '#menu';
		closeBtn.className = 'close';
		closeBtn.setAttribute('aria-label', 'Close menu');
		closeBtn.innerHTML = '&times;';
		menu.appendChild(closeBtn);

		const backdrop = document.createElement('div');
		backdrop.id = 'menu-backdrop';
		body.appendChild(backdrop);

		function openMenu(e) {
			if (e) e.preventDefault();
			body.classList.add('is-menu-visible');
		}

		function closeMenu(e) {
			if (e) e.preventDefault();
			body.classList.remove('is-menu-visible');
		}

		toggles.forEach(btn => btn.addEventListener('click', openMenu));
		closeBtn.addEventListener('click', closeMenu);
		backdrop.addEventListener('click', closeMenu);

		menu.querySelectorAll('a[href^="#"]').forEach(link => {
			if (!link.classList.contains('close')) {
				link.addEventListener('click', () => {
					body.classList.remove('is-menu-visible');
				});
			}
		});

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') closeMenu();
		});
	}

	// Transparent header over banner, solid when scrolled past
	function updateHeader() {
		if (!header || !banner) return;
		if (window.scrollY > banner.offsetHeight - header.offsetHeight - 20) {
			header.classList.remove('alt');
		} else {
			header.classList.add('alt');
		}
	}

	window.addEventListener('scroll', updateHeader, { passive: true });
	updateHeader();

	// Keep copyright year current
	const yearEl = document.getElementById('y');
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}
})();
