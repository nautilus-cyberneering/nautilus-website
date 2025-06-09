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
		width: 150px;
		height: 150px;
		object-fit: contain;
	}
</style>
