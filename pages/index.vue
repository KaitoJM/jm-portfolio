<template>
    <div class="portfolio-page">
        <div class="nav-pointer">
			<ul>
				<li>
                    <nuxt-link to="/" class="active"><fa :icon="['fas', 'circle-info']" /></nuxt-link>
                </li>
				<li>
                    <nuxt-link to="/"><fa :icon="['fas', 'address-card']" /></nuxt-link>
                </li>
				<li>
                    <nuxt-link to="/"><fa :icon="['fa', 'lightbulb']" /></nuxt-link>
                </li>
				<li>
                    <nuxt-link to="/"><fa :icon="['fa', 'briefcase']" /></nuxt-link>
                </li>
				<li>
                    <nuxt-link to="/"><fa :icon="['fa', 'graduation-cap']" /></nuxt-link>
                </li>
			</ul>
		</div>
		<div class="page-tab-container" id="tabContainer">
			<Main class="tab-item" id="mainTab" />
			<About class="tab-item" id="aboutTab" />
			<Skill class="tab-item" id="skillTab" />
		</div>
    </div>
</template>

<script>
export default {
	methods: {
		setNullBackground() {
			this.$store.dispatch('global/setBackgroundProperties', {
				"background-image": "none",
			})
		},
		setAboutBackground() {
			this.$store.dispatch('global/setBackgroundProperties', {
				"background-image": "url('/images/about_bg.webp')",
				"background-position-x": 'right',
				"background-position-y": 'center',
				"background-size": '70%',
				"background-repeat": 'no-repeat',
			})
		},
		setSkillBackground() {
			this.$store.dispatch('global/setBackgroundProperties', {
				"background-image": "url('/images/skill_bg.webp')",
				"background-position-x": 'right',
				"background-size": '60%',
				"background-repeat": 'no-repeat',
			})
		},
		scrollNavigation(event) {
			let bodyRect = document.body.getBoundingClientRect()
			let mainTab = document.getElementById('mainTab')
			let aboutTab = document.getElementById('aboutTab')
			let skillTab = document.getElementById('skillTab')

			let elemRect = mainTab.getBoundingClientRect()
			let Mainoffset   = elemRect.top - bodyRect.top;

			let aboutRect = aboutTab.getBoundingClientRect()
			let Aboutoffset   = aboutRect.top - bodyRect.top;

			let skillRect = skillTab.getBoundingClientRect()
			let skilloffset   = skillRect.top - bodyRect.top;

			let windowHeight = window.innerHeight

			console.log(Mainoffset, Aboutoffset, skilloffset)
			if ((Mainoffset >= 0) && (Mainoffset <= windowHeight / 2)) {
				this.setNullBackground()
			}
			
			if ((Aboutoffset >= 0) && (Aboutoffset <= (windowHeight / 2)))  {
				this.setAboutBackground()
			}

			if ((skilloffset >= 0) && (skilloffset <= (windowHeight / 2)))  {
				this.setSkillBackground()
			}
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

	ul {
		margin: 0px;
		padding: 0px;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 25px;
		justify-content: center;

		li {
			a {
				font-size: 1.5em;
				display: block;
				text-align: center;
				color: #000;

				&.active {
					color: #fff;
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
}

.tab-item {
	padding: 20px 20px;
	box-sizing: border-box;
    width: 100%;
	padding-right: 120px;
	padding-left: 150px;
}

#mainTab {
	background-color: #000;
}
</style>