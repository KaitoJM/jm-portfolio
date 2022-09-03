<template>
    <div class="main-tab-page education-page">
        <div class="top-bg">
            <h1>Education</h1>
            <div class="education-item">
                <div class="education-img"></div>
                <div class="education-details">
                    <h3>NorthWest Samar State University</h3>
                    <span>Bachelor of Science in Information Technology</span>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eveniet, alias maiores unde officia facere tenetur, nihil quibusdam porro repellendus iure illum eos nesciunt error est quae. Natus, error blanditiis!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eveniet, alias maiores unde officia facere tenetur, nihil quibusdam porro repellendus iure illum eos nesciunt error est quae. Natus, error blanditiis!
                    </p>
                </div>
            </div>
            <div class="education-item">
                <div class="education-img"></div>
                <div class="education-details">
                    <h3>Raphael Lentejas Memorial School of Fisheries</h3>
                    <span>First year to forth year</span>
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
.education-page {
    display: flex;

    .education-item {
        display: flex;
        margin-top: 50px;
        gap: 30px;
        align-items: flex-start;

        //mobile
		@media(max-width: 960px) {
            flex-direction: column;
            margin-top: 30px;
		}

        .education-img {
            background-color: #323232;
            width: 100px;
            height: 100px;
            border-radius: 10px;
        }

        .education-details {
            flex: 1;

            h3 {
                font-size: 1.3em;
                margin-top: 0px;
                margin-bottom: 10px;

                //mobile
                @media(max-width: 960px) {
                    font-size: 1em;
                }
            }
        }
    }
}
</style>