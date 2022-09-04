<template>
    <div class="main-tab-page skill-page">
        <div class="top-bg">
            <h1>My Skills</h1>
            <p>
                When I started the world of web development back on 2015, I stumbled upon this widely known framework called CodeIgniter. <br />
                I made a lot of project using it along side with JQuery. It was pretty cool back then but as time flies by, a lot of php and javascript framework emerged.
                Changes need to happen in order to adapt to the newest technologies on this evolving world of web development.
            </p>
            <div class="feature-skill">
                <div class="skill-img">
                    <img src="~/static/images/assets/laravel+vue.webp" alt="">
                </div>
                <div class="skill-details">
                    <h3>Laravel + Vue</h3>
                    <p>
                        Above all the php and javascript frameworks out there, this combination is my favorite.<br />
                        While Laravel has its own built-in Vue js feature that is ready to be used, I like using Vue as a separate stand-alone platform.<br />
                        A framework called Nuxt JS is the primary tool I use when working with VueJS as it also offer Server-Side Rendering method.<br />
                        Laravel is a great tool for me for creating API's for my Vue projects as it also offer a huge variety of functions and processes built-in.
                        Plus they have this Eloquent class which make database queries look like a child's play.
                    </p>
                </div>
            </div>

            <div class="other-skills">
                <div class="skill-item">
                    <div class="skill-img">
                        <img src="~/static/images/assets/laravel.webp" alt="">
                        <span class="percentage">70%</span>
                        <div class="scale">
                            <div class="scale-value-container">
                                <span class="scale-value" style="width:70%"></span>
                            </div>
                        </div>
                    </div>
                    <strong>Laravel</strong>
                </div>
                <div class="skill-item">
                    <div class="skill-img">
                        <img src="~/static/images/assets/vue.webp" alt="">
                        <span class="percentage">80%</span>
                         <div class="scale">
                            <div class="scale-value-container">
                                <span class="scale-value" style="width:80%"></span>
                            </div>
                        </div>
                    </div>
                    <strong>Vue JS</strong>
                </div>
                <div class="skill-item">
                    <div class="skill-img">
                        <img src="~/static/images/assets/nuxt.webp" alt="">
                        <span class="percentage">75%</span>
                        <div class="scale">
                            <div class="scale-value-container">
                                <span class="scale-value" style="width:75%"></span>
                            </div>
                        </div>
                    </div>
                    <strong>Nuxt JS</strong>
                </div>
                <div class="skill-item">
                    <div class="skill-img">
                        <img src="~/static/images/assets/codeigniter.webp" alt="">
                        <span class="percentage">60%</span>
                        <div class="scale">
                            <div class="scale-value-container">
                                <span class="scale-value" style="width:60%"></span>
                            </div>
                        </div>
                    </div>
                    <strong>CodeIgniter</strong>
                </div>
                <div class="skill-item">
                    <div class="skill-img">
                        <img src="~/static/images/assets/javascript.webp" alt="">
                        <span class="percentage">65%</span>
                        <div class="scale">
                            <div class="scale-value-container">
                                <span class="scale-value" style="width:65%"></span>
                            </div>
                        </div>
                    </div>
                    <strong>Javascript</strong>
                </div>
                <div class="skill-item">
                    <div class="skill-img">
                        <img src="~/static/images/assets/php.webp" alt="">
                        <span class="percentage">65%</span>
                        <div class="scale">
                            <div class="scale-value-container">
                                <span class="scale-value" style="width:65%"></span>
                            </div>
                        </div>
                    </div>
                    <strong>PHP</strong>
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
        gap: 20px;
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
            overflow: hidden;
            transition: transform 0.5s;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &:hover {
                transform: scale(1.1);
            }

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

            p {
                font-size: 0.9em;
            }
        }
    }

    .other-skills {
        display: flex;
        margin-top: 50px;
        gap: 20px;
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
                position: relative;
                background-color: #323232;
                height: 230px;
                border-radius: 10px;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                //mobile
                @media(max-width: 608px) {
                    height: 180px
                }

                .percentage {
                    position: absolute;
                    font-size: 1.2em;
                    bottom: 35px;
                    right: 5%;
                    font-weight: bold;

                    //mobile
                    @media(max-width: 608px) {
                        font-size: 1em;
                    }
                }

                .scale {
                    position: absolute;
                    width: 90%;
                    height: 10px;
                    border-radius: 10px;
                    border: 2px solid #fff;
                    bottom: 20px;
                    left: 5%;
                    box-sizing: border-box;
                    overflow: hidden;

                    .scale-value-container {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;

                        .scale-value {
                            position: absolute;
                            height: 100%;
                            background-color: #fff;
                            left: 0px;
                            top: 0px;
                        }
                    }
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