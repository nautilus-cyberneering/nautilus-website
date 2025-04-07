<script lang="ts">
	let { title, para, linkUrl, linkName, image, alt, projectType, openSource } = $props();
</script>

<div class="projects">
	<h4>{title}</h4>
	<div class="project">
		<div class="image">
			<img src={image} {alt} />
			<a href={linkUrl}>{linkName}</a>
		</div>
		<div>
			<p>
				{para}
			</p>
			<hr />
			<p class="details details-top">
				<span class="chip">Project Type:</span><span class="info"> {projectType}</span>
			</p>
			<p class="details">
				<span class="chip">Open Source:</span><span class="info"> {openSource}</span>
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.projects h4 {
		color: var(--color--text);
		text-align: center;
		margin: 1rem;
	}

	.project {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
		gap: 2rem;

		.image img {
			margin: 0 auto;
			text-align: center;
		}

		div p {
			margin-bottom: 2rem;
			color: var(--color--text);
		}

		.details {
			margin-top: 0rem;
			text-align: left;
			color: var(--color--text);
			margin-bottom: 0rem;

			.chip,
			.info {
				padding: 2px 4px;
				color: var(--color--text-reverse);
				font-size: 16px;
			}

			.chip {
				border-radius: 4px 0 0 4px;
				background-color: gray;
			}

			.info {
				border-radius: 0 4px 4px 0;
				background-color: purple;
			}
		}

		.details-top {
			margin-top: 1rem;
		}
	}

	.project > div {
		width: 50%;
		margin: 0 auto;
	}

	.project .image {
		text-align: center;
	}

	.project img {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}
</style>
