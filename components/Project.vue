<template>
    <div class="main-tab-page project-page">
        <div class="top-bg">
            <h1>My Projects</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sequi perferendis, error mollitia dolorem ullam veniam eaque corporis tempore non, ipsa voluptatem ab? Repellat nemo rerum id omnis maiores quos?
            </p>
            <div class="project-item">
                <div class="project-img"></div>
                <div class="project-details">
                    <h3>Project 1</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eveniet, alias maiores unde officia facere tenetur, nihil quibusdam porro repellendus iure illum eos nesciunt error est quae. Natus, error blanditiis!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eveniet, alias maiores unde officia facere tenetur, nihil quibusdam porro repellendus iure illum eos nesciunt error est quae. Natus, error blanditiis!
                    </p>
                </div>
            </div>
            <div class="project-item">
                <div class="project-img"></div>
                <div class="project-details">
                    <h3>Project 2</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eveniet, alias maiores unde officia facere tenetur, nihil quibusdam porro repellendus iure illum eos nesciunt error est quae. Natus, error blanditiis!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eveniet, alias maiores unde officia facere tenetur, nihil quibusdam porro repellendus iure illum eos nesciunt error est quae. Natus, error blanditiis!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.project-page {
    display: flex;

    .project-item {
        display: flex;
        margin-top: 50px;
        gap: 30px;
        align-items: center;

        //mobile
		@media(max-width: 960px) {
            flex-direction: column;
            margin-top: 30px;
		}

        .project-img {
            background-color: #323232;
            width: 350px;
            height: 230px;
            border-radius: 10px;

            //mobile
            @media(max-width: 608px) {
                width: 100%;
            }
        }

        .project-details {
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
}
</style>