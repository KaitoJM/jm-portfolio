<template>
    <div class="portfolio-page">
        <div class="nav-pointer">
			<ul>
				<li>
                    <a href="#" @click.stop="navigate('main')" :class="{active: active_section == 'main'}"><fa :icon="['fas', 'circle-info']" /></a>
                </li>
				<li>
                    <a href="#" @click.stop="navigate('about')" :class="{active: active_section == 'about'}"><fa :icon="['fas', 'address-card']" /></a>
                </li>
				<li>
                    <a href="#" @click.stop="navigate('skill')" :class="{active: active_section == 'skill'}"><fa :icon="['fa', 'lightbulb']" /></a>
                </li>
				<li>
                    <a href="#" @click.stop="navigate('project')" :class="{active: active_section == 'project'}"><fa :icon="['fa', 'briefcase']" /></a>
                </li>
				<li>
                    <a href="#" @click.stop="navigate('education')" :class="{active: active_section == 'education'}"><fa :icon="['fa', 'graduation-cap']" /></a>
                </li>
			</ul>
		</div>
		<div class="page-tab-container" id="tabContainer">
			<Main class="tab-item" id="mainTab" />
			<About class="tab-item" id="aboutTab" />
			<Skill class="tab-item" id="skillTab" />
			<Project class="tab-item" id="projectTab" />
			<Education class="tab-item" id="educationTab" />
		</div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			active_section: 'main'
		}
	},
	methods: {
		setNullBackground() {
			this.$store.dispatch('global/setBackgroundProperties', {
				"background-image": "none",
			})

			this.active_section = 'main'
		},
		setAboutBackground() {
			this.$store.dispatch('global/setBackgroundProperties', {
				"background-image": "url('/images/about_bg.webp')",
				"background-position-x": 'right',
				"background-position-y": 'center',
				"background-size": '70%',
				"background-repeat": 'no-repeat',
			})

			this.active_section = 'about'
		},
		setSkillBackground() {
			this.$store.dispatch('global/setBackgroundProperties', {
				"background-image": "url('/images/skill_bg.webp')",
				"background-position-x": 'right',
				"background-size": '60%',
				"background-repeat": 'no-repeat',
			})

			this.active_section = 'skill'
		},
		setProjectBackground() {
			this.$store.dispatch('global/setBackgroundProperties', {
				"background-image": "url('/images/project_bg.webp')",
				"background-size": 'cover',
				"background-position": 'center',
				"background-repeat": 'no-repeat',
			})

			this.active_section = 'project'
		},
		setEducationBackground() {
			this.$store.dispatch('global/setBackgroundProperties', {
				"background-image": "url('/images/education_bg.webp')",
				"background-size": '50%',
				"background-position": 'right',
				"background-repeat": 'no-repeat',
			})

			this.active_section = 'education'
		},
		scrollNavigation(event) {
			let bodyRect = document.body.getBoundingClientRect()
			let mainTab = document.getElementById('mainTab')
			let aboutTab = document.getElementById('aboutTab')
			let skillTab = document.getElementById('skillTab')
			let projectTab = document.getElementById('projectTab')
			let educationTab = document.getElementById('educationTab')

			let elemRect = mainTab.getBoundingClientRect()
			let Mainoffset   = elemRect.top - bodyRect.top;

			let aboutRect = aboutTab.getBoundingClientRect()
			let Aboutoffset   = aboutRect.top - bodyRect.top;

			let skillRect = skillTab.getBoundingClientRect()
			let skilloffset   = skillRect.top - bodyRect.top;

			let projectRect = projectTab.getBoundingClientRect()
			let projectoffset   = projectRect.top - bodyRect.top;

			let educationRect = educationTab.getBoundingClientRect()
			let educationoffset   = educationRect.top - bodyRect.top;

			let windowHeight = window.innerHeight

			if ((Mainoffset >= 0) && (Mainoffset <= windowHeight / 2)) {
				this.setNullBackground()
			}
			
			if ((Aboutoffset >= 0) && (Aboutoffset <= (windowHeight / 2)))  {
				this.setAboutBackground()
			}

			if ((skilloffset >= 0) && (skilloffset <= (windowHeight / 2)))  {
				this.setSkillBackground()
			}

			if ((projectoffset >= 0) && (projectoffset <= (windowHeight / 2)))  {
				this.setProjectBackground()
			}

			if ((educationoffset >= 0) && (educationoffset <= (windowHeight / 2)))  {
				this.setEducationBackground()
			}
		},
		navigate(section) {
			let sect = document.getElementById(`${section}Tab`)
			document.getElementById('tabContainer').scrollTo(0, sect.offsetTop);
		}
	},
	mounted () {
		if (process.browser) {
			document.getElementById('tabContainer').addEventListener('scroll', this.scrollNavigation);
		}
	},
	destroyed () {
		if (process.browser) {
			document.getElementById('tabContainer').removeEventListener('scroll', this.scrollNavigation);
		}
	},
}
</script>

<style lang="scss" scoped>
.portfolio-page {
	display: flex;
}

.nav-pointer {
	background-color: #4B4B4B;
	padding: 30px 15px;
	width: 50px;
	display: flex;
	justify-content: center;
	border-radius: 50px;
	margin-top: 50vh;
	transform: translateY(-50%);
	margin-left: 100px;
	z-index: 99;

	@media(max-width: 1110px) {
		margin-left: 50px;
	}

	// mobile
	@media(max-width: 960px) {
		position: fixed;
		width: 90%;
		top: 33px;
		left: 0;
		margin: 0;
		padding: 15px;
		box-sizing: border-box;
		align-items: center;
		margin-left: 5%;
		margin-top: 15px;
		box-shadow: 0 5px 36px -8px #232323;
	}

	ul {
		margin: 0px;
		padding: 0px;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 25px;
		justify-content: center;

		// mobile
		@media(max-width: 960px) {
			flex-direction: row;
			align-items: center;
			gap: 30px;
		}

		li {
			a {
				font-size: 1.5em;
				display: block;
				text-align: center;
				color: #000;
				transition: transform 0.5s;

				&.active {
					color: #fff;
					transform: scale(1.3);
				}
			}
		}
	}
}

.page-tab-container {
	flex: 1;
	box-sizing: border-box;
	height: 100vh;
	overflow-y: auto;
	scroll-behavior: smooth;
}

.tab-item {
	padding: 20px 20px;
	box-sizing: border-box;
    width: 100%;
	padding-right: 120px;
	padding-left: 150px;

	@media(max-width: 1210px) {
		padding-right: 70px;
		padding-left: 100px;
	}

	@media(max-width: 1110px) {
		padding-right: 20px;
		padding-left: 50px;
	}

	// mobile
	@media(max-width: 960px) {
		padding-right: 30px;
		padding-left: 30px;
	}
}

#mainTab {
	background-color: #000;
}
</style>