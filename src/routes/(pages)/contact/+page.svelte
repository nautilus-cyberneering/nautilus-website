<script lang="ts">
	import HeroWrapper from '$lib/components/atoms/HeroWrapper.svelte';
    import Wrapper from '$lib/components/atoms/Wrapper.svelte';
    import PostBox from '$lib/icons/postBox.svelte';
    import Email from '$lib/icons/email.svelte';
    import ProjectPreview from '$lib/components/atoms/ProjectPreview.svelte';
</script>

<Wrapper>
	<HeroWrapper title={'Contact'} />
    <div class="contact-section">
        <div>
            <PostBox />
            <h2>Snag mail</h2>
            <address>
                Nautilus Cyberneering SLU<br>
                Calle Fernando Guanarteme 12<br>
                35310 Monte Lentiscal<br>
                Santa Brígida, Spain
              </address>          
        </div>
        <div>
            <Email />
            <h2>Email</h2>
            <address>
                info@nautilus-cyberneering.de
            </address>
        </div>
    </div>
    <div class="contact-section">
        <div>
            <h2>Telegram</h2>
            <ProjectPreview title={'Page title'} url={'url'} />
        </div>
        <div>
            <h2>GitHub</h2>
            <ProjectPreview title={'Page title'} url={'url'} />
        </div>
    </div>
</Wrapper>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss' as bp;

    .contact-section{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding-inline: 1.5rem;
        color: rgba(82, 82, 82, 1);
        padding-top: 3rem;

        address{
            font-style: normal;
        }

        @include bp.for-tablet-portrait-up{
            flex-direction: row;
            justify-content: space-between;
            max-width: 768px;
            margin: 0 auto;
        }
    }
</style>