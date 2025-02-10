<script lang="ts">
    import TextBlock from '$lib/components/atoms/TextBlock.svelte';
    import HomeCard from '$lib/components/atoms/HomeCard.svelte';
    import HomeWrapper from '$lib/components/molecules/HomeWrapper.svelte';

    let {cardInfo} = $props();
</script>

<HomeWrapper>
    <div class="container">
        <div class="text-container">
            <TextBlock
                heading={'Tech and projects'}
                content={'With our work and time we want to achieve the greatest possible value. With this in mind we choose to pioneer with our approach in new technology areas and grow projects where we can make an impact with.'}
            />
        </div>
        <div class="cards">
            {#if cardInfo.length > 0}    
                {#each cardInfo as card}
                    <HomeCard {card} />
                {/each}
            {/if}
        </div>
        <a href="/">Learn more about our in-house projects</a>
    </div>
</HomeWrapper>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss' as bp;

    .container {
        background-color: rgba(245, 245, 245, 1);
        margin: 6rem auto 0;
        padding-bottom: 6rem;
        max-width: 100%;
    }

    .text-container{
        color: rgba(245, 245, 245, 0.96);
        background-color: rgba(245, 245, 245, 1);
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 100vw;
    }

    .cards{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin: 3rem 1.5rem 0 1.5rem;
    }

    a{
        color: rgba(238, 134, 97, 1);
        display: block;
        text-align: center;
        margin-top: 3rem;
    }

    @include bp.for-tablet-portrait-up{
        .cards{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(1, 1fr);
            grid-column-gap: 1.5rem;
            grid-row-gap: 1.5rem;
            padding: 0rem;
            background-color: rgba(245, 245, 245, 1);
        }
    }
</style>