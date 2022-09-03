<template>
    <div class="main-tab-page skill-page">
        <div class="top-bg">
            <h1>My Skills</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sequi perferendis, error mollitia dolorem ullam veniam eaque corporis tempore non, ipsa voluptatem ab? Repellat nemo rerum id omnis maiores quos?
            </p>
            <div class="feature-skill">
                <div class="skill-img"></div>
                <div class="skill-details">
                    <h3>Laravel + Vue</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eveniet, alias maiores unde officia facere tenetur, nihil quibusdam porro repellendus iure illum eos nesciunt error est quae. Natus, error blanditiis!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eveniet, alias maiores unde officia facere tenetur, nihil quibusdam porro repellendus iure illum eos nesciunt error est quae. Natus, error blanditiis!
                    </p>
                </div>
            </div>

            <div class="other-skills">
                <div class="skill-item">
                    <div class="skill-img"></div>
                    <strong>Laravel</strong>
                </div>
                <div class="skill-item">
                    <div class="skill-img"></div>
                    <strong>Vue JS</strong>
                </div>
                <div class="skill-item">
                    <div class="skill-img"></div>
                    <strong>Nuxt JS</strong>
                </div>
                <div class="skill-item">
                    <div class="skill-img"></div>
                    <strong>CodeIgniter</strong>
                </div>
                <div class="skill-item">
                    <div class="skill-img"></div>
                    <strong>Nuxt JS</strong>
                </div>
                <div class="skill-item">
                    <div class="skill-img"></div>
                    <strong>CodeIgniter</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.skill-page {
	position: relative;
    display: flex;

    .feature-skill {
        display: flex;
        margin-top: 50px;
        gap: 30px;
        align-items: center;

        //mobile
		@media(max-width: 960px) {
            flex-direction: column;
            margin-top: 30px;
		}

        .skill-img {
            background-color: #323232;
            width: 350px;
            height: 230px;
            border-radius: 10px;

            //mobile
            @media(max-width: 608px) {
                width: 100%;
            }
        }

        .skill-details {
            flex: 1;

            h3 {
                font-size: 1.3em;

                //mobile
                @media(max-width: 960px) {
                    font-size: 1em;
                }
            }
        }
    }

    .other-skills {
        display: flex;
        margin-top: 50px;
        gap: 30px;
        align-items: center;
        flex-wrap: wrap;

        //mobile
		@media(max-width: 960px) {
            gap: 15px;
            margin-top: 30px;
            justify-content: center;
		}

        .skill-item {
            display: flex;
            flex-direction: column;
            width: 23%;

            //mobile
            @media(max-width: 960px) {
                width: 45%;
            }

            .skill-img {
                background-color: #323232;
                height: 230px;
                border-radius: 10px;

                //mobile
                @media(max-width: 608px) {
                    height: 180px
                }
            }
    
            strong {
                font-size: 1.3em;
                text-align: center;
                margin-top: 10px;
                display: block;

                //mobile
                @media(max-width: 960px) {
                    font-size: 1em;
                }
            }
        }

    }
}
</style>