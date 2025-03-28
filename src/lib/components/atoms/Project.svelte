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
			<p class="details">
				<span>Project Type:</span><span> {projectType}</span>
			</p>
			<p class="details">
				<span>Open Source:</span><span> {openSource}</span>
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.project {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;

		.image img {
			margin: 0 auto;
			text-align: center;
		}

		div p {
			margin-bottom: 2rem;
			color: var(--color--text);
		}

		.details {
			margin-top: 0;
			text-align: left;
			color: var(--color--text);
			margin-bottom: 0rem;
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
