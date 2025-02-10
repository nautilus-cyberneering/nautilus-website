<script lang="ts">
	import NautilusBig from "$lib/icons/nautilusBig.svelte";
</script>

<footer>
	<div class="footer-wrapper">
		<div class="footer-wrapper-left">
			<div>
				<a href="https://nautilus-cyberneering.de/" target="_blank" class="logo-container">
					<NautilusBig />
				</a>
			</div>
			<div>
				<p>CC-BY-SA 4.0</p>
				<p>Nautilus Cyberneering S.L.U. 2024</p>
			</div>
		</div>
		<div>
			<a href="/data-protection">Data protection</a>
		</div>
	</div>
</footer>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	footer {
		background-color: rgba(250, 250, 250, 1);
		color: rgba(10, 10, 10, 1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-bottom: 16px solid rgba(238, 134, 97, 1);
		padding: 2rem 1.5rem;

		.footer-wrapper-left{
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.5rem;

			@include bp.for-tablet-portrait-up{
				flex-direction: row;
				align-items: center;
			}
		}

		.footer-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			padding: 1rem;
			text-align: center;

			a{
				color: rgba(238, 134, 97, 1);
			}

			@include bp.for-tablet-portrait-up {
				flex-direction: row;
				align-items: center;
				gap: 24px;
				text-align: left;
				max-width: 2500px;
			}

			@include bp.for-desktop-up {
				padding: 0rem;
			}

			div {
				font-size: 16px;
			}
		}

		@include bp.for-desktop-up {
			padding-inline: 9rem;
		}
	}
</style>
