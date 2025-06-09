<script lang="ts">
	import HeroWrapper from '$lib/components/atoms/HeroWrapper.svelte';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';
	import PostBox from '$lib/icons/postBox.svelte';
	import Email from '$lib/icons/email.svelte';
	import QRCodeConnect from '$lib/components/atoms/QRCodeConnect.svelte';
	import Telegram from '$lib/icons/telegram.svelte';
	import Github from '$lib/icons/github.svelte';
</script>

<Wrapper>
	<HeroWrapper title={'Contact'} />
	<div class="contact-section">
		<div>
			<PostBox />
			<h2>Snail mail</h2>
			<address>
				Nautilus Cyberneering SLU<br />
				Calle Fernando Guanarteme 12<br />
				35310 Monte Lentiscal<br />
				Santa Brígida, Spain
			</address>
		</div>
		<div>
			<Email />
			<h2>Email</h2>
			<address>info@nautilus-cyberneering.dev</address>
		</div>
	</div>
	<div class="contact-section">
		<div class="link">
			<Telegram />
			<a href="https://t.me/nautilus_cyberneering_en" target="_blank"> Telegram </a>
			<QRCodeConnect url={'https://t.me/nautilus_cyberneering_en'} />
		</div>
		<div class="link">
			<Github />
			<a href="https://github.com/nautilus-cyberneering" target="_blank"> GitHub </a>
			<QRCodeConnect url={'https://github.com/nautilus-cyberneering'} />
		</div>
	</div>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.contact-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		padding-inline: 1.5rem;
		color: var(--color--text-secondary);
		padding-top: 3rem;

		div {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			width: 300px;
			min-height: 200px;
		}

		h2,
		a {
			color: var(--color--text);
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding-top: 1rem;
			font-size: 2rem;
		}

		a {
			color: #fff;

			&:hover {
				color: #ee8661;
			}
		}

		address {
			font-style: normal;
		}

		@include bp.for-tablet-portrait-up {
			justify-content: space-between;
			max-width: 768px;
			margin: 0 auto;
		}
	}

	.contact-section {
		@include bp.for-tablet-portrait-up {
			flex-direction: row;
		}
	}
</style>
