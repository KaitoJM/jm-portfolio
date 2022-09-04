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
        </div>
    </div>
</template>

<style lang="scss" scoped>
.gallery-grid {
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;

    img {
        width: 23%;
        object-fit: cover;
        border-radius: 10px;

        //mobile
        @media(max-width: 960px) {
            width: 48%;
        }
    }
}
</style>