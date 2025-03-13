<script lang="ts">
	import NautilusBig from '$lib/icons/nautilusBig.svelte';
	import NautilusBigDarkMode from '$lib/icons/nautilusBigDarkMode.svelte';
	import { theme } from '$lib/stores/theme';
</script>

<footer class="footer-wrapper">
	<div class="footer-wrapper-left">
		<div class="logo-container">
			<a href="https://nautilus-cyberneering.de/" target="_blank">
				{#if $theme === 'dark'}
					<NautilusBigDarkMode />
				{:else}
					<NautilusBig />
				{/if}
			</a>
		</div>
		<div class="footer-details">
			<p>CC-BY-SA 4.0</p>
			<p>Nautilus Cyberneering S.L.U. 2024</p>
		</div>
	</div>
	<div class="data-protection-link">
		<a href="/data-protection">Data protection</a>
	</div>
</footer>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.footer-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: var(--color--page-background);
		border-bottom: 16px solid rgba(238, 134, 97, 1);
		padding: 3rem 1.5rem;

		.logo-container {
			display: flex;
			justify-content: center;
		}

		.footer-details {
			margin-top: 1.5rem;

			p {
				color: var(--color--text);
			}
		}

		.data-protection-link {
			color: rgba(10, 10, 10, 1);
			margin-top: 3rem;

			a {
				color: var(--color--text);
			}

			:hover {
				color: rgba(238, 134, 97, 1);
			}
		}

		@include bp.for-tablet-portrait-up {
			flex-direction: row;
			justify-content: space-between;

			.footer-wrapper-left {
				display: flex;
				align-items: center;
				gap: 1.5rem;
			}

			.footer-details {
				margin-top: 0;
				text-align: left;
			}

			.data-protection-link {
				margin-top: 0;
			}
		}

		@include bp.for-desktop-up {
			padding: 4rem 1.5rem;
		}
	}
</style>
