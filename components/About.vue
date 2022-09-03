<template>
    <div class="about-page">
        <div class="text-container">
          	<h1>About me</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque ipsam tenetur nostrum qui! Magnam quia excepturi, enim magni aspernatur fugit facilis quis officia expedita rerum cumque! Dolor, necessitatibus quibusdam.
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas sequi perferendis, error mollitia dolorem ullam veniam eaque corporis tempore non, ipsa voluptatem ab? Repellat nemo rerum id omnis maiores quos?
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
	justify-content: center;
	position: relative;

	&:after {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.4;
		background-image: url('~/static/images/about_bg.webp');
		background-position-x: right;
		background-size: 60%;
		background-repeat: no-repeat;
	}

	.text-container {
        width: 480px;
		z-index: 1;
	}
}
</style>