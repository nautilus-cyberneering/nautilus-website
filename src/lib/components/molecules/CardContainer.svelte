<script lang="ts">
    import HomeCard from "$lib/components/atoms/HomeCard.svelte";
    
    let {cardInfo} = $props();
</script>
  
<div class="cards">
    {#each cardInfo as card}
        <HomeCard {card} />
    {/each}
</div>

<style lang="scss">
    .cards{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
        padding: 1.5rem;
        margin: 3rem 1.5rem 0 1.5rem;
        background-color: rgba(245, 245, 245, 1);
        border: 1px solid rgba(212, 212, 212, 1);
    }
</style>