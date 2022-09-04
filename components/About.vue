<template>
    <div class="about-page">
        <div class="text-container">
          	<h1>About me</h1>
			<p>
				Night gathers, and now my watch begins. <br /><br />
				It shall not end until my death. <br />
				I shall take no wife, hold no lands, father no children. <br />
				I shall wear no crowns and win no glory. <br />
				I shall live and die at my post. <br />
				I am the sword in the darkness. I am the watcher on the walls.<br />
				I am the fire that burns against the cold, the light that brings the dawn, <br />
				the horn that wakes the sleepers, the shield that guards the realms of men. <br />
				I pledge my life and honor to the Night’s Watch, <br />
				for this night and all the nights to come.
			</p>
        </div>
		<div class="space" style="width: 300px"></div>
    </div>
</template>

<style lang="scss" scoped>
.about-page {
	height: 100vh;
	display: flex;
	align-items: center;
	position: relative;

	//mobile
	@media(max-width: 960px) {
		.space {
			display: none;
		}
	}

	.text-container {
        width: 50%;
		z-index: 1;

		//mobile
		@media(max-width: 960px) {
			margin-top: 100px;
			width: 100%;
		}
	}
}
</style>