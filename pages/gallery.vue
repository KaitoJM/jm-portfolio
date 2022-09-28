<template>
    <div class="normal-page">
        <h1>Arts & Gallery</h1>
        <div class="gallery-grid">
            <img src="~/static/images/gallery/batch2011.webp" alt="">
            <img src="~/static/images/gallery/compass.webp" alt="">
            <img src="~/static/images/gallery/carpe-diem.webp" alt="">
            <img src="~/static/images/gallery/engine.webp" alt="">
            <img src="~/static/images/gallery/halaba-atop.webp" alt="">
            <img src="~/static/images/gallery/talkischeap.webp" alt="">
            <img src="~/static/images/gallery/onepiececap.webp" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.gallery-grid {
    width: 100%;
    gap: 15px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: masonry;

    //mobile
    @media(max-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 435px) {
        grid-template-columns: repeat(2, 1fr);
    }

    img {
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
}
</style>