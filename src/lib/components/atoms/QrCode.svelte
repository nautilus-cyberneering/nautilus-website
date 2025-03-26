<script>
	import { onMount } from 'svelte';
	import QRCode from 'qrcode';

	let { url } = $props();
	let qrCodeDataUrl = $state('');

	onMount(async () => {
		qrCodeDataUrl = await QRCode.toDataURL(url);
	});
</script>

{#if qrCodeDataUrl}
	<img src={qrCodeDataUrl} class="qr-code" alt="QR Code" />
{/if}

<style>
	.qr-code {
		width: 250px;
		height: 250px;
		object-fit: contain;
	}
</style>
