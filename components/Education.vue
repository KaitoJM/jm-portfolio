<template>
    <div class="main-tab-page education-page">
        <div class="top-bg">
            <h1>Education</h1>
            <div class="education-item">
                <div class="education-img">
                    <img src="~/static/images/assets/nwssu_logo.webp" alt="">
                </div>
                <div class="education-details">
                    <h3>NorthWest Samar State University</h3>
                    <span>Bachelor of Science in Information Technology</span>
                    <p>
                        I completed my Bachelor of Science in Information Technology degree at Northwest Samar State University, a renowned institution known for its commitment to excellence in education. This program provided me with a strong foundation in Information Technology, equipping me with the knowledge and skills necessary to excel in the dynamic field of technology.
                    </p>
                    <p>
                        Throughout my academic journey at Northwest Samar State University, I engaged in a comprehensive curriculum that covered a broad spectrum of IT topics, including software development, database management, network administration, and cybersecurity. These courses fostered my problem-solving abilities and honed my technical proficiencies.
                    </p>
                    <p>
                        My education at Northwest Samar State University not only equipped me with the technical expertise required for the Information Technology field but also instilled in me the importance of continuous learning and adaptation in the rapidly evolving technology landscape.
                    </p>
                </div>
            </div>
            <div class="education-item">
                <div class="education-img">
                    <img src="~/static/images/assets/rlmsf_logo.webp" alt="">
                </div>
                <div class="education-details">
                    <h3>Raphael Lentejas Memorial School of Fisheries</h3>
                    <span>High School: First year to forth year</span>
                    <p>
                        I completed my high school education at Rafael Lentejas Memorial School of Fisheries, a distinguished technical vocational school with a specialized focus on fisheries. My major was Culture, which provided me with a unique and comprehensive education in this field.
                    </p>
                    <p>
                        During my time at Rafael Lentejas Memorial School of Fisheries, I engaged in a specialized curriculum that centered on the study of fishponds and related aspects of fisheries culture. This program not only equipped me with a strong theoretical understanding but also provided hands-on experience in the practical aspects of managing and maintaining fishponds.
                    </p>
                    <p>
                        I gained in-depth knowledge about various fish species, aquaculture practices, water quality management, and sustainable fisheries management. This educational foundation has not only honed my technical skills but has also instilled in me a deep appreciation for environmental sustainability and the importance of responsible resource management.
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

            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
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