<script lang="ts">
	let { title, url } = $props();
</script>

<div class="wrapper">
	<div>
		<img
			src="https://s3-alpha-sig.figma.com/img/eae3/13a4/8883a46e7a2a60ee806e73a8052191be?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r6PYYEAZ4niV455l7hw~cwXKPJ9wLHjiL7nC~Vsa5bFvoDwXcXjpuEyA3M5MypiSjSjvJD6XvD6U9rMtYjX5j26il1CferbiOiXtjjcVu8HvRNEwBZJaXBI2b7wEFlO9uPn7L7H1DAsl~K6XBEGVzZDB6t-PPait1DJg~jjEn6X4ptkUsoPgPUnJSJf02c3SiEklOUF-L9BlC4g69vk9LU5MOmBpmnWpGjTIQL0gDi6O~1ngD6eoDsn~~NHIRcUudk1ljFoga7UoipXRAdCY2etfdgA7R8gAxXUyjgV~omQqPwf-QaJitec~qDeriUdeyRyRtwvCnB6w1yKUBbZ07w__"
			alt=""
		/>
	</div>
	<div class="text">
		<h3>{title}</h3>
		<h4>{url}</h4>
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.wrapper {
		display: flex;
		flex-direction: column;
		background-color: rgba(245, 245, 245, 1);
		border: 1px solid rgba(212, 212, 212, 1);

		@include bp.for-desktop-up {
			flex-direction: row;
		}
	}

	img {
		object-fit: cover;
		height: 176px;
		width: 100%;
	}

	.text {
		padding: 1.5rem;

		@include bp.for-desktop-up {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
