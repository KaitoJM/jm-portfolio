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
		<div class="page-tab-container">
			<Main />
		</div>
    </div>
</template>

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

	ul {
		margin: 0px;
		padding: 0px;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 25px;

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
	padding: 0 20px;
}
</style>