<script lang="ts">
    import Nautilus from '$lib/icons/nautilus.svelte';
	import { page } from '$app/stores';
	import AnimatedHamburger from '$lib/components/molecules/AnimatedHamburger.svelte';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	let currentPath = $derived($page.url.pathname);
</script>

<header>
	<div class="header-wrapper">
        <div class="logo-wrapper">
            <a class="logo" href="/" aria-label="Site logo">
                <Nautilus />
            </a>
            <p>Open Source, AI, and more</p>
        </div>
		<AnimatedHamburger {isMenuOpen} {toggleMenu}>
			<div class="links-wrapper">
				<ul class="links">
					<!-- Menu items -->
					<li>
						<a href="/" class={currentPath === '/' ? 'active' : ''} onclick={toggleMenu}>Home</a>
					</li>
					<li>
						<a
							href="/about"
							class={currentPath === '/about' ? 'active' : ''}
							onclick={toggleMenu}>About</a
						>
					</li>
					<li>
						<a
							href="/projects"
							class={currentPath === '/projects' ? 'active' : ''}
							onclick={toggleMenu}>Projects</a
						>
					</li>
					<li>
						<a
							href="/blog"
							class={currentPath === '/blog' ? 'active' : ''}
							onclick={toggleMenu}>Blog</a
						>
					</li>
					<li>
						<a
							href="/contact"
							class={currentPath === '/contact' ? 'active' : ''}
							onclick={toggleMenu}>Contact</a
						>
					</li>
				</ul>
			</div>
		</AnimatedHamburger>
	</div>
</header>

<style lang="scss">
	@use '$lib/scss/breakpoints' as bp;

	header {
		position: relative;
		z-index: 1000;
		background-color: rgba(250, 250, 250, 0.8);
		width: 100%;
		padding: 1.5rem;
        border-top: 8px solid rgba(238, 134, 97, 1);

		.header-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			margin: 0 auto;
			padding-top: 0.25rem;

			@include bp.for-phone-only {
				height: 64px;
			}
		}

        .logo-wrapper{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            font-size: 1rem;
            color: rgba(10, 10, 10, 1);
        }

		ul {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: end;
			gap: 16px;
			margin-bottom: 1vh;
			list-style: none;
			font-size: 1.1rem;
		}

		li > a {
			display: inline-block;
			transition: all 200ms ease-in-out;
			color: rgba(245, 245, 245, 0.8);
			font-size: 1rem;
		}

		li > a:hover {
			color: rgba(238, 134, 97, 1);
		}

		.active {
			color: rgba(238, 134, 97, 1) !important;
		}


		@include bp.for-phone-only {
			.links-wrapper {
				padding: 3rem;
				margin: 3.5rem 0rem;
				opacity: 1;
			}

			ul {
				flex-direction: column;
				gap: 2vw;
			}

			.active::after {
				bottom: -2px;
				height: 1px;
			}
		}

		.links-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: justify;
			gap: 30px;
			background-color: rgba(250, 250, 250, 0.8);

			a {
				text-decoration: none;
				text-align: center;
                color: rgba(10, 10, 10, 1);

				&:hover {
					filter: drop-shadow(0px 0px 3px var(--color--primary));
				}
			}
		}
	}
</style>
