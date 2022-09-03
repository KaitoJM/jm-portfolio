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