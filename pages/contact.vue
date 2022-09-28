<template>
    <div class="normal-page">
        <h1>Contact Me</h1>
        <div class="div" style="display:flex;align-items:center;height:77vh">
            <center style="width: 100%;">
                <h3>Reach me out!</h3>
                <div class="social-media">
                    <a href="mailto: johnmarkmancol@gmail.com" target="_blank">
                        <fa :icon="['fa', 'envelope']" />
                    </a>
                    <a href="https://www.linkedin.com/in/john-mark-mancol-441b30b3/" target="_blank">
                        <fa :icon="['fa-brands', 'linkedin']" />
                    </a>
                    <a href="https://github.com/KaitoJM" target="_blank">
                        <fa :icon="['fa-brands', 'github']" />
                    </a>
                    <a href="https://www.pinterest.ph/jlocnam" target="_blank">
                        <fa :icon="['fa-brands', 'square-pinterest']" />
                    </a>
                </div>
                <br />
                <h3>Follow me</h3>
                <div class="social-media">
                    <a href="https://www.facebook.com/Kaito.JM" target="_blank">
                        <fa :icon="['fa-brands', 'square-facebook']" />
                    </a>
                    <a href="https://twitter.com/Jan_Locnam" target="_blank">
                        <fa :icon="['fa-brands', 'square-twitter']" />
                    </a>
                    <a href="https://www.instagram.com/kidjm04" target="_blank">
                        <fa :icon="['fa-brands', 'square-instagram']" />
                    </a>
                </div>
            </center>
        </div>
    </div>
</template>

<script>
export default {
    head() {
		return {
			title: "Contact Me - Juan Marcus",
		}
	},
}
</script>

<style lang="scss" scoped>
//mobile
@media(max-width: 960px) {
    h3 {
        margin: 0px;
        margin-bottom: 10px;
    }
}

.social-media {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    //mobile
    @media(max-width: 960px) {
        gap: 15px;
    }

    a {
        font-size: 6em;
        display: block;
        transition: transform 0.5s;

        &:hover {
            transform: scale(1.1);
        }

        //mobile
        @media(max-width: 960px) {
            font-size: 3em;
        }
    }
}
</style>