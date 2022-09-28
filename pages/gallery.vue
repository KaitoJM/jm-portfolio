<template>
    <div class="normal-page">
        <h1>Arts & Gallery</h1>
        <div class="gallery-grid">
            <div class="item" v-for="(image, indx) in arts" :key="'art-' + indx">
                <img :src="image.img" alt="">
                <div class="img-detail">
                    <strong>{{ image.name }}</strong>
                    <p v-if="image.summary">{{ image.summary }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arts: [
                {
                    img: "/images/gallery/batch2011.webp",
                    name: "RLMSF Batch 2011",
                },
                {
                    img: "/images/gallery/compass.webp",
                    name: "Traveler",
                },
                {
                    img: "/images/gallery/carpe-diem.webp",
                    name: "Carpe Diem",
                },
                {
                    img: "/images/gallery/engine.webp",
                    name: "Engine T-shirt Print",
                },
                {
                    img: "/images/gallery/halaba-atop.webp",
                    name: "Halaba-Atop",
                },
                {
                    img: "/images/gallery/talkischeap.webp",
                    name: "Talk is Cheap",
                },
                {
                    img: "/images/gallery/onepiececap.webp",
                    name: "Back at it Again",
                },
            ]
        }
    }
}
</script>

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

    .item {
        img {
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
        
        .img-detail {
            background-color: #ffffff69;
            border-radius: 10px;
            overflow: hidden;
            margin-top: 5px;
            box-sizing: border-box;
            padding: 10px;
            text-align: center;
            font-size: 0.8em;

            strong {

            }

            p {
                margin: 0px;
            }
        }
    }
}
</style>