<script lang="ts">
	let { card } = $props();
</script>

<div class="container">
	<div class="text-container">
		<h3>{card.title}</h3>
		<ul>
			{#each card.listItems as item}
				<li>
					{item}
				</li>
			{/each}
		</ul>
	</div>
	<div class="cta-wrapper">
		<h4>{card.cta}</h4>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-width: 0;
		text-align: left;
		border: 1px solid var(--color--border);
		height: 100%;
		background-color: var(--color--page-background);

		.text-container {
			padding: 3rem;
			flex-grow: 1;
		}

		h3 {
			color: var(--color--text);
			font-size: 32px;
		}

		ul {
			margin: 1rem 0 0 0;
			padding-left: 0.5rem;
			list-style-position: outside;
		}

		li {
			color: rgba(82, 82, 82, 1);
			word-break: keep-all;
			font-size: 18px;
			text-indent: 0rem;
			padding-left: 0.5rem;
			color: var(--color--text-secondary);
		}

		.cta-wrapper {
			background-color: rgba(238, 134, 97, 1);
			padding: 1.5rem 3rem;
		}

		h4 {
			color: var(--color--text-reverse);
			font-size: 28px;
			text-indent: -1.5rem;
			padding-left: 1.5rem;
		}
	}
</style>
