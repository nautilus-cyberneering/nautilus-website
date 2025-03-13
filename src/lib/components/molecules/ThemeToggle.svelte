<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import LightMode from '$lib/icons/lightMode.svelte';
	import DarkMode from '$lib/icons/darkMode.svelte';

	const toggleTheme = () => {
		theme.update((current) => (current === 'light' ? 'dark' : 'light'));
	};
</script>

<button on:click={toggleTheme} class="theme-toggle" aria-label="Toggle dark mode">
	{#if $theme === 'dark'}
		<LightMode />
	{:else}
		<DarkMode />
	{/if}
</button>

<style>
	.theme-toggle {
		cursor: pointer;
		padding: 8px 12px;
		background-color: transparent;
		color: rgba(238, 134, 97, 1);
		border: none;
		border-radius: 5px;
		transition: all 0.3s ease;
	}

	.theme-toggle:hover {
		opacity: 0.8;
	}
</style>
