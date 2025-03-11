<script lang="ts">
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';
	import HeroWrapper from '$lib/components/atoms/HeroWrapper.svelte';
</script>

<Wrapper>
	<HeroWrapper title={'Data protection'} />
    <div>

        <h2>Your secure data</h2>
        <p>Information in compliance with personal data protection regulations.</p>
        <p>In Europe and Spain there are data protection regulations designed to protect your personal information that are mandatory for our company. Therefore, it is very important for us that you fully understand what we are going to do with the personal data we ask you for. In this way, we will be transparent and give you control of your data, with simple language and clear choices that will allow you to decide what we will do with your personal information.</p>
        <p>Please do not hesitate to ask us if you have any questions after reading this information.</p>
        <p>Thank you for your cooperation.</p>
    
        <h3>Who are we?</h3>
        <ul>
            <li>Our name: NAUTILUS CYBERNEERING, S.L.</li>
            <li>Our main activity: Software development and consulting.</li>
            <li>Our address: C/ FERNANDO GUANARTEME, N.º 12, CP 35310, SANTA BRÍGIDA (Las Palmas)</li>
            <li>Our contact telephone number: +34 637.20.03.79</li>
            <li>Our contact e-mail address: <a href="mailto:info@nautilus-cyberneering.de">info@nautilus-cyberneering.de</a></li>
            <li>Our website: <a href="https://www.nautilus-cyberneering.de" target="_blank">www.nautilus-cyberneering.de</a></li>
            <li>We are at your disposal, do not hesitate to contact us.</li>
        </ul>
        
    
        <h3>What will we use your data for?</h3>
        <p>In general, your personal data will be used to be able to relate with you and to be able to provide you with our software development and consulting services.</p>
        <p>It may also be used for other activities, such as sending you advertising or promoting our activities.</p>
    
        <h3>Why do we need to use your data?</h3>
        <p>Your personal data is necessary for us to be able to relate to you and provide you with our services, which allows us to use your information within the law.</p>
        <p>However, there are certain situations in which we will need your prior permission in order to carry out certain activities, such as sending you advertising or publishing your image on the Internet. For this purpose, we will provide you with a series of check boxes that will allow you to make a clear and simple decision about the use of your personal information.</p>
    
        <h3>Who will know the information we ask you for?</h3>
        <p>In general, only duly authorized personnel of our company will be able to know the information we ask you for.</p>
        <p>Similarly, those entities that need to have access to your personal information in order for us to provide you with our services may have access to your personal information. Thus, for example, our bank will know your information if the payment of our services is made by credit card or bank transfer.</p>
        <p>Likewise, those public or private entities to which we are obliged to provide your personal data in order to comply with any law will have knowledge of your information. To give you an example, the Tax Law requires us to provide the Tax Agency with certain information on economic operations that exceed a certain amount.</p>
        <p>In the event that, apart from the aforementioned cases, we need to disclose your personal information to other entities, we will request your prior permission through clear options that will allow you to decide in this regard.</p>
    
        <h3>Will we send your data to other countries?</h3>
        <p>In the world there are countries that are safe for your data and others that are not so safe. For example, the European Union is a safe environment for your data. Our policy is not to send your personal information to any country that is not safe from the point of view of data protection.</p>
        <p>In the event that, in order to provide you with the service, it is necessary to send your data to a country that is not as secure as Spain, we will always request your prior permission and we will implement effective security measures to reduce the risks of sending your personal information to another country.</p>
    
        <h3>How long will we keep your information?</h3>
        <p>We will retain your data for the duration of our relationship and as long as we are required to do so by law. At the end of the applicable legal periods, we will dispose of it in a secure and environmentally friendly manner.</p>
    
        <h3>What are your data protection rights?</h3>
        <p>You can contact us at any time to find out what information we hold about you, rectify it if it is incorrect and delete it after the end of our relationship, if this is legally possible.</p>
        <p>You also have the right to request the transfer of your information to another entity. This right is called “portability” and may be useful in certain situations.</p>
        <p>To request any of these rights, you must make a written request to our address, along with a photocopy of your ID card, so that we can identify you.</p>
        <p>To request any of these rights, you must make a written request to our address, along with a photocopy of your ID card, so that we can identify you.</p>
        <p>To learn more about your data protection rights, you can consult the website of the Spanish Data Protection Agency (www.aepd.es).</p>
    </div>
</Wrapper>

<style lang="scss">
    @use '$lib/scss/breakpoints.scss' as bp;

    div{
        margin-inline: 1.5rem;

        h2{
            margin-top: 6rem;
        }

        h3{
            margin-top: 3rem;
        }

        p{
            margin-top: 1.5rem;
        }

        ul{
            margin-left: 0;
        }

        ul li {
            color: rgba(82, 82, 82, 1);
            list-style-type: none;
            margin-left: 0;
            word-break: keep-all;
        }

        @include bp.for-tablet-portrait-up {
            margin-inline: 3rem;
        }

        @include bp.for-desktop-up{
            max-width: 776px;
            margin: 0 auto;
        }
    }
</style>