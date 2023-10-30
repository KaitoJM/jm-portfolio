<template>
    <div class="normal-page">
        <h1 class="main-h1">My Résumé</h1>
        <button class="print-btn" @click="print">
            <fa :icon="['fa', 'print']" /> 
            <span>Print</span>
        </button>
        <div class="resume-container">
            <div class="left-panel">
                <img src="~/static/images/resume/resume-photo.webp" alt="my-photo" class="resume-photo">
                <div class="left-section">
                    <h4>CONTACT ME</h4>
                    <ul>
                        <li>
                            <div class="icon"><fa :icon="['fa', 'envelope']" /></div>
                            <div class="content">
                                <span class="title">Email</span>
                                <p>johnmarkmancol@gmail.com</p>
                            </div>
                        </li>
                        <li>
                            <div class="icon"><fa :icon="['fa', 'phone']" /></div>
                            <div class="content">
                                <span class="title">Phone</span>
                                <p>09171820455</p>
                            </div>
                        </li>
                        <li>
                            <div class="icon"><fa :icon="['fa-brands', 'linkedin']" /></div>
                            <div class="content">
                                <span class="title">LinkedIn</span>
                                <p>https://www.linkedin.com/in/john-mark-mancol-441b30b3/</p>
                            </div>
                        </li>
                        <li>
                            <div class="icon"><fa :icon="['fa', 'globe']" /></div>
                            <div class="content">
                                <span class="title">My Porfolio</span>
                                <p>https://juanmarcus.com/</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="left-section">
                    <h4>PRO SKILLS</h4>
                    <ul>
                        <li>
                            <div class="content">
                                <span class="title">PHP Frameworks</span>
                                <p> - Laravel <br/>
                                    - Codeigniter</p>
                            </div>
                        </li>
                        <li>
                            <div class="content">
                                <span class="title">Javascript Frameworks</span>
                                <p> - Vue JS <br />
                                    - Nuxt JS <br />
                                    - jQuery</p>
                            </div>
                        </li>
                        <li>
                            <div class="content">
                                <span class="title">CMS</span>
                                <p> - Prestashop</p>
                            </div>
                        </li>
                        <li>
                            <div class="content">
                                <span class="title">Database</span>
                                <p> - MySQL</p>
                            </div>
                        </li>
                        <li>
                            <div class="content">
                                <span class="title">Basic WebDevelopment Tools</span>
                                <p> - CSS <br />
                                    - Javascript <br />
                                    - HTML <br />
                                    - PHP</p>
                            </div>
                        </li>
                    </ul>
                    <br />
                </div>
            </div>
            <div class="main-panel">
                <div class="header">
                    <h1>JOHN MARK M. MANCOL</h1>
                    <big>SOFTWARE ENGINEER</big>
                </div>

                <div class="main-section">
                    <div class="section-title">
                        <div class="icon"><fa :icon="['fa', 'briefcase']" /></div>
                        <h3 class="title">EXPERIENCE</h3>
                    </div>
                    <div class="section-content">
                        <ul>
                            <li>
                                <div class="left-value">
                                    <div class="year">2021 - 2023</div>
                                    <div class="company">Human Incubator Inc.</div>
                                </div>
                                <div class="right-value">
                                    <div class="job-title">TEAM LEADER SOFTWEARE ENGINEER</div>
                                    <p>Handling a team and helping my members grow. I learned
                                    this side of my skill in this company. I had also made a much
                                    wider view of the right process of handling projects.</p>
                                </div>
                            </li>
                            <li>
                                <div class="left-value">
                                    <div class="year">2019 - 2021</div>
                                    <div class="company">Qonvex Technology</div>
                                </div>
                                <div class="right-value">
                                    <div class="job-title">LEAD WEB DEVELOPER</div>
                                    <p>From here, I handled bug projects and learned new tools that
                                        I am using up until now.</p>
                                </div>
                            </li>
                            <li>
                                <div class="left-value">
                                    <div class="year">2015 - 2019</div>
                                    <div class="company">Rootplus Inc.</div>
                                </div>
                                <div class="right-value">
                                    <div class="job-title">WEB DEVELOPER</div>
                                    <p>It was great start up experience during this time. I learned a
                                        lot of basic tools and techniques for being an excelent web
                                        developer</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="main-section">
                    <div class="section-title">
                        <div class="icon"><fa :icon="['fa', 'code']" /></div>
                        <h3 class="title">PROJECTS INVOLVED</h3>
                    </div>
                    <div class="section-content">
                        <ul>
                            <li>
                                <div class="left-value">
                                    <div class="project">NIPT</div>
                                    <div class="url">https://www.hiro-clinic.or.jp/app/login</div>
                                    <div class="framework">LARAVEL / VUE JS / NUXT JS</div>
                                </div>
                                <div class="right-value">
                                    <p>An online reservation for pregnant woman to be checked up
                                    on their nearest clinic based on Japan. This project has 4
                                    portals and 1 api.</p>
                                </div>
                            </li>
                            <li>
                                <div class="left-value">
                                    <div class="project">THENINTH</div>
                                    <div class="url">https://theninth.art</div>
                                    <div class="framework">LARAVEL / VUE JS / NUXT JS</div>
                                </div>
                                <div class="right-value">
                                    <p>An online comics and manga reader that not only allow users
                                    to read stories but also upload their own.</p>
                                </div>
                            </li>
                            <li>
                                <div class="left-value">
                                    <div class="project">CAPFRANCE</div>
                                    <div class="url">https://capfrance-vacances.com</div>
                                    <div class="framework">LARAVEL / VUE JS</div>
                                </div>
                                <div class="right-value">
                                    <p>A Booking website. Cap France has represented the leading
                                    network of independent holiday villages and hotel clubs in
                                    France.</p>
                                </div>
                            </li>
                            <li>
                                <div class="left-value">
                                    <div class="project">ARPAQ</div>
                                    <div class="framework">CODEIGNITER / JQUERY</div>
                                </div>
                                <div class="right-value">
                                    <p>A backoffice Invoiving system for the company in France</p>
                                </div>
                            </li>
                            <li>
                                <div class="left-value">
                                    <div class="project">CALBAYOG JOURNAL</div>
                                    <div class="url">https://www.calbayogjournal.com</div>
                                    <div class="framework">CODEIGNITER / JQUERY</div>
                                </div>
                                <div class="right-value">
                                    <p>Calbayog Journal is an on-line news service covering Eastern
                                    Visayas area. One of my early projects on Rootplus.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="main-section">
                    <div class="section-title">
                        <div class="icon"><fa :icon="['fa', 'graduation-cap']" /></div>
                        <h3 class="title">EDUCATION</h3>
                    </div>
                    <div class="section-content">
                        <ul>
                            <li>
                                <div class="left-value">
                                    <div class="year">2011 - 2015</div>
                                    <div class="school">North West Samar State University</div>
                                </div>
                                <div class="right-value">
                                    <div class="job-title">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="main-section">
                    <div class="section-title">
                        <div class="icon"><fa :icon="['fa', 'asterisk']" /></div>
                        <h3 class="title">REFERENCES</h3>
                    </div>
                    <div class="section-content">
                        <div class="ref-grid">
                            <div class="ref-grid-item">
                                <div class="name">Mary Hope Lacsi</div>
                                <div class="job-title">Project Management Officer</div>
                                <div class="job-title">Human Incubator Inc.</div>
                                <div class="phone">Phone: 09176243420</div>
                            </div>
                            <div class="ref-grid-item">
                                <div class="name">Alexandra Bernaldo</div>
                                <div class="job-title">Web Developer</div>
                                <div class="job-title">Qonvex Technology</div>
                                <div class="phone">Phone: 09357716291</div>
                            </div>
                            <div class="ref-grid-item">
                                <div class="name">Marlex Ladag</div>
                                <div class="job-title">Prestashop Developer</div>
                                <div class="job-title">Qonvex Technology</div>
                                <div class="phone">Phone: 09973370079</div>
                            </div>
                            <div class="ref-grid-item">
                                <div class="name">Ressil Zafra</div>
                                <div class="job-title">Web Development &</div>
                                <div class="job-title">Social Media Specialist</div>
                                <div class="job-title">Avana</div>
                                <div class="phone">09178906046</div>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br /><br />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
		return {
			title: "Resume - Juan Marcus",
		}
	},
    methods: {
        print() {
            window.print();
        }
    },
    mounted() {
        this.$store.dispatch('global/setBackgroundProperties', {
            "background-image": "url('/images/project_bg.webp')",
            "background-size": 'cover',
            "background-position-y": '-80vh',
            "background-repeat": 'no-repeat',
        })
    }
}
</script>

<style lang="scss" scoped>
.print-btn {
    position: fixed;
    top: 50px;
    right: 50px;
    z-index: 999;
    padding: 8px 25px;
    text-transform: uppercase;
    background-color: black;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;

    @media(max-width: 960px) {
        top: 35px;
        right: 15px;
        padding: 8px 10px;

        span {
            display: none;
        }
    }
}

@media print {
    .main-h1, .print-btn {
        display: none;
    }
}
.resume-container {
    display: flex;
    margin-top: 30px;

    @media(max-width: 960px) {
        font-size: 0.8em;
    }

    @media print {
        font-size: 1em;
    }

    .left-panel {
        width: 300px;
        background-color: #000;

        @media(max-width: 960px) {
            width: 25vw;
        }

        @media print {
            width: 180px;
            color: #333;
            background-color: #fff;
        }

        .resume-photo {
            width: 250px;
            height: 250px;
            overflow: hidden;
            border-radius: 50%;
            object-fit: cover;
            margin: auto;
            display: block;

            @media(max-width: 960px) {
                width: 50px;
                height: 50px;
            }

            @media print {
                width: 140px;
                height: 140px;
            }
        }

        .left-section {
            margin-top: 30px;

            h4 {
                border-bottom: 1px solid #fff;
                padding-bottom: 10px;

                @media(max-width: 960px) {
                    padding-bottom: 6px;
                }

                @media print {
                    margin-top: 20px;
                }
            }

            ul {
                margin: 0;
                padding: 0;

                li {
                    list-style-type: none;
                    display: flex;
                    margin-bottom: 20px;

                    @media(max-width: 960px) {
                        margin-bottom: 10px;
                        display: block;
                    }

                    @media print {
                        margin-bottom: 15px;
                        display: flex;
                    }

                    .icon {
                        width: 50px;
                        font-size: 30px;

                        @media(max-width: 960px) {
                            width: 30px;
                            font-size: 15px;
                        }
                    }

                    .content {
                        flex: 1;

                        .title {
                            @media(max-width: 960px) {
                                font-size: 0.9em;
                            }
                        }

                        p {
                            margin: 0px;
                            font-size: 0.9em;
                            margin-top: 8px;

                            @media(max-width: 960px) {
                                font-size: 0.7em;
                                white-space: nowrap;
                                width: 100%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }

                            @media print {
                                white-space: inherit;
                                width: auto;
                                overflow: visible;
                                text-overflow: none;
                            }
                        }
                    }
                }
            }
        }
    }

    .main-panel {
        background-color: #d6d6d6;
        margin-left: 30px;
        padding: 15px 50px;
        border-radius: 5px;
        color: #4d4d4d;
        box-sizing: border-box;
        flex: 1;

        @media(max-width: 960px) {
            padding: 10px 15px;
        }

        @media print {
            padding: 0px 20px;
        }

        .header {
            margin-bottom: 50px;

            h1 {
                font-size: 3em;
                margin-bottom: 0px;
            }

            big {
                font-size: 1.5em;
            }

            @media(max-width: 960px) {
                margin-bottom: 10px;

                h1 {
                    font-size: 1.2em;
                    margin-bottom: 0px;
                }

                big {
                    font-size: 1em;
                }
            }

            @media print {
                margin-bottom: 10px;

                h1 {
                    font-size: 2em;
                    margin-bottom: 5px;
                    margin-top: 0px
                }

                big {
                    font-size: 1.4em;
                }
            }
        }

        .main-section {
            .section-title {
                display: flex;
                align-items: center;

                .icon {
                    width: 50px;
                    height: 50px;
                    font-size: 25px;
                    background-color: #4d4d4d;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 50px;
                    color: #d6d6d6;

                    @media(max-width: 960px) {
                        width: 30px;
                        height: 30px;
                        font-size: 15px;
                        line-height: 30px;
                    }

                    @media print {
                        color: #4d4d4d;
                        border: 2px solid #4d4d4d;
                    }
                }

                .title {
                    text-transform: uppercase;
                    flex: 1;
                    margin-left: 20px;
                    border-bottom: 2px solid #4d4d4d;
                    padding-bottom: 5px;

                    @media(max-width: 960px) {
                        margin-left: 8px;
                    }

                    @media print {
                        margin-left: 15px;
                    }
                }
            }
        }

        .section-content {
            margin-top: 15px;

            @media print {
                margin-top: 5px;
            }

            ul {
                margin: 0px;
                padding: 0px;

                li {
                    list-style: none;
                    display: flex;
                    margin-bottom: 20px;

                    @media(max-width: 960px) {
                        margin-bottom: 15px;
                        display: block;
                    }

                    @media print {
                        display: flex;
                        margin-bottom: 3px;
                    }

                    .left-value {
                        width: 250px;

                        @media(max-width: 960px) {
                            width: 100%;
                            margin-bottom: 10px;
                        }

                        @media print {
                            width: 150px;
                        }

                        .year {
                            margin-bottom: 8px;
                        }

                        .company {
                            font-weight: bold;
                            color: #979797;
                        }

                        .project {
                            font-weight: bold;
                            margin-bottom: 8px;
                        }

                        .url, .school {
                            font-size: 0.7em;
                            color: #979797;
                        }

                        .framework {
                            font-size: 0.7em;
                        }
                    }

                    .right-value {
                        flex: 1;
                        margin-left: 20px;

                        @media(max-width: 960px) {
                            margin-left: 0px;
                        }

                        .job-title {
                            font-weight: bold;
                            margin-bottom: 8px;
                        }

                        p {
                            margin: 0px;
                            font-size: 0.8em;
                            color: #979797;
                        }
                    }
                }
            }

            .ref-grid {
                display: flex;
                gap: 30px;

                .ref-grid-item {
                    .name {
                        font-weight: bold;
                        margin-bottom: 8px;
                    }

                    .job-title {
                        font-size: 0.7em;
                        color: #979797;
                    }

                    .phone {
                        font-size: 0.7em;
                    }
                }
            }
        }
    }
}
</style>