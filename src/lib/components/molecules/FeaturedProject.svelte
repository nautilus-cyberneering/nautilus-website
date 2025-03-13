<script lang="ts">
	import DownArrow from '$lib/icons/downArrow.svelte';
	import UpArrow from '$lib/icons/upArrow.svelte';

	let isOpen = true;
</script>

<div class="wrapper">
	<div class="header">
		<h3>Project title</h3>
		<button on:click={() => (isOpen = !isOpen)}>
			{#if isOpen}
				<DownArrow />
			{:else}
				<UpArrow />
			{/if}
		</button>
	</div>
	<div class="text-content {isOpen ? 'open' : 'closed'}">
		<ul>
			<li>
				Create a basic simple AI-Assistant for end-users to run on their own local computer that can
				be expanded and customized.
			</li>
			<li>
				Put in place the necessary infrastructure platform to train and verify new AI modules to be
				developed by the community.
			</li>
			<li>Develop a marketplace platform for additional modules.</li>
			<li>Share the knowledge and establish a community around our technology</li>
		</ul>
		<div class="project-details">
			<p><strong>Project type:</strong> Vision</p>
			<p><strong>Stage:</strong> Proof of concept</p>
			<p><strong>Collaborator:</strong> Company name</p>
		</div>
	</div>
</div>

<style>
	.wrapper {
		margin-top: 3rem;
		border: 1px solid var(--color--border);
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: rgba(238, 134, 97, 1);
		padding: 1.5rem 3rem;

		h3 {
			color: rgba(250, 250, 250, 1);
		}

		button {
			cursor: pointer;
		}
	}

	.text-content {
		background-color: var(--color--page-background);
		padding: 0 3rem;
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition:
			max-height 0.5s ease-in-out,
			opacity 0.5s ease-in-out,
			padding 0.5s ease-in-out;
	}

	.text-content.open {
		max-height: 500px;
		opacity: 1;
		padding: 3rem;
	}

	.text-content.closed {
		max-height: 0;
		opacity: 0;
		padding: 0 3rem;
	}

	.project-details {
		margin-top: 1.5rem;

		p {
			color: var(--color--text-secondary);
		}
	}

	ul {
		margin-left: 0;
	}

	ul li {
		color: var(--color--text-secondary);
		word-break: keep-all;
		position: relative;
		padding-left: 1.5rem;
		text-indent: -1.5rem;
	}
</style>
