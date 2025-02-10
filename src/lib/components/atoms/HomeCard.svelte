<script lang="ts">
	import TagList from "$lib/components/molecules/TagList.svelte";
    let {card} = $props()
</script>

<div class="card">
    <span>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html card.icon}
	</span>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<h3>{@html card.title}</h3>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<p>{@html card.content}</p>
    {#if card.tags}
        <TagList tags={card.tags} />
    {/if}
</div>

<style lang="scss">
    .card{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        background-color: rgba(250, 250, 250, 1);
        padding: 3rem;
        border: 1px solid rgba(212, 212, 212, 1);

        h3{
            font-size: 30px;
            margin-block: 1.5rem 1rem;
        }

        p{
            font-size: 18px;
        }
    }
</style>