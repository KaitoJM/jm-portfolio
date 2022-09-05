<template>
    <div class="about-page">
        <div class="text-container">
          	<h1>About me</h1>
			<p>
				I'm a software engineer specializing in both front-end and back-end development based in the Philippines.<br />
				I build web application usually with Laravel and VueJS.<br />
				My experties is in the area of responsive design but I can also do API stuffs.<br />
				I also make digital arts sometimes but my design is merly for my own hobbies.
			</p>
        </div>
		<div class="space" style="width: 300px"></div>
    </div>
</template>

<style lang="scss" scoped>
.about-page {
	height: 100vh;
	display: flex;
	align-items: flex-end;
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
		margin-bottom: 70px;

		//mobile
		@media(max-width: 960px) {
			width: 100%;
			margin-bottom: 30px;
		}
	}
}
</style>