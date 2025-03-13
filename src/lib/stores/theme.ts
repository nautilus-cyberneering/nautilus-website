import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const getInitialTheme = () => {
	if (!browser) return 'light';
	const storedTheme = localStorage.getItem('theme');
	if (storedTheme) return storedTheme;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const theme = writable(getInitialTheme());

// Apply theme on change
if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	});
}
